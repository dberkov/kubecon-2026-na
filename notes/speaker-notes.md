# KubeCon NA 2026 — Speaker Notes (Complete Deck: 31 Slides)

<!--
HOW TO EDIT THIS FILE:
1. Edit the text under any `## Slide N` (or `## Beat N`) heading in VS Code, Vim, or any editor and press Save.
2. To change who speaks on a beat, edit `Speaker: TIM`, `Speaker: DIMA`, or `Speaker: TIM & DIMA` in the heading (the Presenter Console badge & handoff alerts update automatically!).
3. Multi-line paragraphs and bullet points are preserved as-is in the Presenter Console.
4. When deployed via `./kind-deploy/deploy.sh`, `notes/speaker-notes.md` is directory-mounted into `kind` — saving in VS Code/Vim updates your Presenter Console live (~2s auto-poll) with ZERO Docker rebuilds!
-->

## Slide 1 | 1. Title | Speaker: TIM & DIMA
Late last year and early this year, we both started looking at the same set of problems from slightly different angles — and came to the same conclusions. In the next 30 minutes, we'll look at why agents challenge standard Kubernetes and how Agent Substrate fits in.

## Slide 2 | 2. K8s Baseline | Speaker: TIM
Kubernetes is the undisputed standard for deploying container workloads — including AI inference servers and training jobs. Naturally, teams building AI agents want to run them on the same infrastructure. But over the course of this year we saw people struggling: three characteristics immediately stand out.

## Slide 3 | 3. Bursty & Idle | Speaker: DIMA
First, agentic apps tend to be very bursty. 
They wake up, run for a bit, and then go idle. 
They can be idle for minutes or hours or even days at a time.

## Slide 4 | 4. Untrusted | Speaker: DIMA
Second: agentic workloads are generally untrusted. 
One of the most significant aspects of agents is that they invent code and then run it
Code that no human has ever seen. 
Because of that, they have to run in secure single-tenant sandboxes
which means we miss out on opportunities for amortization.

## Slide 5 | 5. Human Oriented | Speaker: DIMA
Third, they tend to have humans in the loop, which makes them very sensitive to perceived latency.

## Slide 6 | 6. K8s Fractures | Speaker: TIM
Taken together, these properties can make it problematic to run agents on Kubernetes — at least in the normal way. Before jumping into solutions, let's talk about the state of the art. We have seen this pattern countless times with users.

## Slide 7 | 7. New Chat | Speaker: TIM / DIMA
Some event causes the need for a new instance of an agent or sandbox environment — for example, a user starts a new chat.

## Slide 8 | 8. Cold Start | Speaker: TIM / DIMA
That requires instantiating an agent in its own sandbox, so we spin up a Pod. Depending on what the agent does at startup, it could be a few seconds or much longer. So we wait.

## Slide 9 | 9. First Turn | Speaker: TIM / DIMA
Eventually the pod is ready, and the user can chat with it. The message is sent to the pod, a response comes back, and one turn is done.

## Slide 10 | 10. Chat Loop | Speaker: TIM / DIMA
This loop might happen many times — think about a typical chat session with many round-trips.

## Slide 11 | 11. Idle Hold | Speaker: TIM / DIMA
Because pod startup is not free, the pod usually waits for another event Just In Case — from tens of seconds to tens of minutes. While it waits, the resources that pod consumes are blocked.

## Slide 12 | 12. Kill & Lose | Speaker: TIM / DIMA
Eventually the user stops sending input, the timeout expires, conversation history is saved somewhere else, and the pod is terminated. Later, when the user comes back, we have to start this all over again.

## Slide 13 | 13. Cluster Scale | Speaker: TIM / DIMA
This happens for every agent instance: poor utilization, long-tail UX latency, K8s scheduling throughput struggles on bursts, and a single Kubernetes cluster can only host a few hundred thousand pods.

## Slide 14 | 14. DIY Giant Pod | Speaker: DIMA
A second approach we saw, was mostly from very sophisticated users
They build a DIY system on top of Kubernetes
Typically this looks like one giant workload per machine
which consumes most of the resources
Inside that workload is a “manager” app

## Slide 15 | 15. Black-Box Tax | Speaker: DIMA
A bespoke control plane is responsible for scheduling agents into sandboxes
The manager manages the lifecycle of the sandboxes
Everything is basically opaque
You end up reinventing large parts of kubernetes
This is pretty complex to build and manage
Especially for smaller companies
Like startups

## Slide 16 | 16. Agent Substrate | Speaker: DIMA & TIM
And so this is the point where we decided we need to do better. We do not think people who just want to run agents should have to choose between a decent UX or an affordable bill, or between hitting hard limits or maintaining a proprietary orchestrator. That is why we built and open-sourced Agent Substrate.

## Slide 17 | 17. Goals | Speaker: TIM / DIMA
Agent Substrate is designed around three core goals: Security (gVisor/microVM sandbox, SPIFFE ID, zero ambient credentials, locked egress), Density (checkpoint idle agents so they consume ~0 compute), and Speed (wake a suspended agent in hundreds of milliseconds via gRPC).

## Slide 18 | 18. Targets | Speaker: TIM
Everyone loves numbers, so we set audacious aspirational targets: up to 1 billion sessions under management, 10,000 activations per second, and 100ms wakeups. These are our destination, not current state — and they explain why our architecture looks the way it does.

## Slide 19 | 19. Foundations | Speaker: TIM
This whole system is built ON and WITH Kubernetes — Workers are Pods, our control plane and PEP run on Kubernetes, and when a K8s node drains, workers cleanly evict agents. At the same time, everything is pluggable and we never put Kubernetes on the hot path.

## Slide 20 | 20. 2-Layer CRDs | Speaker: TIM / DIMA
Agent Substrate is a two-layer system: Platform Admins use Kubernetes CRDs (WorkerPool, SandboxConfig) and ate-controller to provision warm Worker Pods. App Developers use Substrate's gRPC API backed by Postgres to run Actors inside those warm workers with zero etcd bottlenecks.

## Slide 21 | 21. Term: Actor | Speaker: DIMA
Let's introduce five quick terms.
First, Actor:
This is a sort of stand-in term to cover all the things that can run on Substrate
Think agents, sandboxed environments, tools, etc.
This is the MAIN abstraction in Substrate
You can think of an Actor as a single agent session

## Slide 22 | 22. Term: ActorTemplate | Speaker: DIMA
Second, ActorTemplate:
If an actor is a cookie, this is the cookie cutter
It includes details like which sandbox tech, which OCI image to run, arguments, etc.
Notably, there can be many different templates
and they can use different sandbox technologies
such as gVisor or microVMs

## Slide 23 | 23. Term: Worker | Speaker: DIMA
Third, Worker:
A worker is a Pod running in Kubernetes, which runs actors
This is the thing that actually consumes resources from Kubernetes
It sits around waiting to be told when to start or stop running an actor
A given worker can run many actors
A cluster can have many workers

## Slide 24 | 24. Term: Atelet | Speaker: DIMA
Fourth, Atelet:
It's a per-node manager (daemon) for all the workers on that node
We need this because the control plane can't talk directly to workers
When an actor resumes, atelet pulls the OCI image and downloads the snapshot
When an actor suspends, it takes the actor's snapshot and uploads it to object storage
Workers can't do this themselves, because they don't have permission

## Slide 25 | 25. Term: Atenet | Speaker: DIMA
Fifth, Atenet:
This is the networking layer of Substrate
It has two parts
atenet-router sits in front of the actors
When a request comes in for a sleeping actor, it wakes the actor up and routes the traffic to the right worker
atenet-egress sits on the way out
Every outbound call goes through it: it checks the actor's egress policy and can inject credentials
So secrets never live inside the sandbox
Now, let’s look at how those pieces fit together (Handoff to Tim)

## Slide 26 | 26. Off-CPU Suspend | Speaker: DIMA
First, Density. We cannot store millions of actors in Kubernetes etcd — so ateapi uses Postgres to store billions of actor records with zero etcd overhead. When an actor goes idle, SuspendActor takes a snapshot, immediately removes the actor from CPU and memory, and returns the Worker slot to the idle pool so the actor costs zero compute while idle.

## Slide 27 | 27. Cluster Multiplex | Speaker: DIMA
Stepping back to the cluster view: this lets you register millions or billions of stateful actors off-CPU in Postgres and durable storage at zero compute cost, while running a much smaller pool of warm Worker Pods across your Kubernetes nodes. As actors wake up and go idle, they dynamically hydrate onto warm workers and swap back out to storage.

## Slide 28 | 28. Speed: Resume | Speaker: DIMA
That brings us to Speed: if idle actors are removed from CPU, how do we put them back on CPU fast enough that nobody notices? A resume can be triggered automatically when traffic hits the Envoy ingress gateway — which holds the request while calling Resume on ateapi — or explicitly via gRPC. The Worker restores state from the snapshot and forwards the held traffic immediately.

## Slide 29 | 29. Snapshots v2 | Speaker: DIMA
Under the hood, Actor Lifecycle makes wakeups fast and resilient in two ways. First, snapshots are split into three layers: Memory State, Rootfs Delta, and Attached Volumes — if CPUID or runtime upgraded, upper layers degrade cleanly as a cache miss. Second, snapshots land locally first for ~100ms resumes, then upload asynchronously to durable cloud storage and release local disk so the actor can resume on any node.

## Slide 30 | 30. Security: PEP | Speaker: DIMA
Finally, Security. Actors run untrusted code inside a gVisor or microVM sandbox with no direct network access — all ingress goes through the Envoy gateway over a tunnel. Most importantly, we store zero credentials inside the actor itself, so prompt injection cannot steal keys and snapshots never leak secrets. Outbound traffic tunnels to the Egress Gateway (PEP), which injects credentials from the Secret Store before forwarding to External APIs.

## Slide 31 | 31. Thank You! | Speaker: TIM & DIMA
Thank you! Agent Substrate is 100% Apache 2.0 open source at http://ate.dev — we would love for you to try it, break it, and build with us. Happy to take your questions!
