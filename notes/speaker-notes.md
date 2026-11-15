# KubeCon NA 2026: Speaker Notes (Complete Deck: 32 Slides)

<!--
HOW TO EDIT THIS FILE:
1. Edit the text under any `## Slide N` (or `## Beat N`) heading in VS Code, Vim, or any editor and press Save.
2. To change who speaks on a slide, edit `Speaker: TIM`, `Speaker: DIMA`, or `Speaker: TIM & DIMA` in the heading.
3. When deployed via `./kind-deploy/deploy.sh` or `./scripts/serve.sh`, saving `notes/speaker-notes.md` updates your Presenter Console live with ZERO rebuilds!
-->

## Slide 1 | 1. Title | Speaker: TIM
* Late last year / early this year, Dima and I both started looking at the same set of problems
* from slightly different angles
* Interestingly, we came to the same basic conclusions.
* Let's look at why agents are a challenge for standard Kubernetes
* and how Agent Substrate fits in.

## Slide 2 | 2. K8s Baseline | Speaker: TIM
* Who here has a kubernetes cluster already?  Or 2?  Or 10?
* I am biased, but I do believe that one of Kubernetes' main strengths is that it is everywhere
* And, so far, it can run pretty much everything
  * including AI inference, training, and reinforcement learning
* So it is natural that teams building AI agents want to run them on the same infrastructure
* But over the course of this year what we saw was that people are struggling
* Three distict characteristics immediately stand out.
* Dima, what did you see?

## Slide 3 | 3. Bursty & Idle | Speaker: DIMA
Thanks, Tim. First, agentic apps tend to be very bursty. 
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
So: bursty, untrusted, and a human waiting on every turn. Tim, what happens when you run that on Kubernetes?

## Slide 6 | 6. K8s Fractures | Speaker: TIM
* Taken together, these properties make it problematic to run agents on Kubernetes
* at least in the normal way
* Before jumping into solutions, let's talk about the state of the art.
* We have seen this pattern many times with users.

## Slide 7 | 7. New Chat | Speaker: TIM
* Some event causes the need for a new instance of an agent or sandbox environment
* for example, a user starts a new chat.

## Slide 8 | 8. Cold Start | Speaker: TIM
* That requires instantiating an agent in its own sandbox
* so we spin up a Pod
* Depending on what the agent does at startup, it could be a few seconds or much longer
* So we wait.

## Slide 9 | 9. First Turn | Speaker: TIM
* Eventually the pod is ready, and the user can chat with it
* The message is sent to the pod, a response comes back
* and one turn is done.

## Slide 10 | 10. Chat Loop | Speaker: TIM
This loop might happen many times — think about a typical chat session with many round-trips.

## Slide 11 | 11. Idle Hold | Speaker: TIM
* Because pod startup is not free, the pod usually waits for another event
* Just In Case
* This could be tens of seconds to tens of minutes
* While it waits, the resources that pod consumes are wated

## Slide 12 | 12. Kill & Lose | Speaker: TIM
* Eventually the user stops sending input
* the timeout expires, conversation history is saved somewhere
* and the pod is terminated. Later, when the user comes back, we have to start this all over again.

## Slide 13 | 13. Cluster Scale | Speaker: TIM
* This happens for every instance
* poor utilization and long-tail UX latency
* The teams who hit these walls first went a different way. Dima?

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
So today you choose between a bad experience and building your own orchestrator. Tim?

## Slide 16 | 16. Agent Substrate | Speaker: TIM
* We need to do better
* We do not think people who just want to run agents should have to choose between a decent UX or an affordable bill, or between hitting hard limits or maintaining a proprietary orchestrator. That is why we built and open-sourced Agent Substrate.

## Slide 17 | 17. Goals | Speaker: TIM
Agent Substrate is designed around three core goals: Security (gVisor/microVM sandbox, SPIFFE ID, zero ambient credentials, locked egress), Density (checkpoint idle agents so they consume ~0 compute), and Speed (wake a suspended agent in hundreds of milliseconds via gRPC).

## Slide 18 | 18. Targets | Speaker: TIM
Everyone loves numbers, so we set audacious aspirational targets: up to 1 billion sessions under management, 10,000 activations per second, and 100ms wakeups. These are our destination, not current state — and they explain why our architecture looks the way it does.

## Slide 19 | 19. Foundations | Speaker: TIM
This whole system is built ON and WITH Kubernetes — Workers are Pods, our control plane and PEP run on Kubernetes, and when a K8s node drains, workers cleanly evict agents. At the same time, everything is pluggable and we never put Kubernetes on the hot path.

## Slide 20 | 20. 2-Layer CRDs | Speaker: TIM
Agent Substrate is a two-layer system: Platform Admins use Kubernetes CRDs (WorkerPool, SandboxConfig) and ate-controller to provision warm Worker Pods. App Developers use Substrate's gRPC API backed by Postgres to run Actors inside those warm workers with zero etcd bottlenecks.
To make the rest of this easier to follow, Dima will give us five quick terms.

## Slide 21 | 21. Term: Actor | Speaker: DIMA
Thanks, Tim. First, Actor:
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
And that's the first of the goals Tim showed us: security
Now, let’s look at the other two goals: density and speed

## Slide 26 | 26. Agent Governance | Speaker: DIMA
Let's go deeper on that first goal: Security and Governance.
When an agent reads untrusted repos, web pages, or MCP tool outputs, a single prompt injection can hijack the turn.
So our starting rule is simple: assume the agent inside the sandbox is already compromised.
On the left, the sandbox holds zero raw credentials, contains syscalls and filesystem access inside gVisor or a microVM, and forces every outbound call out of process.
On the right, four deterministic controls sit outside the agent loop so the model cannot talk its way past them:
First, cryptographic Identity per actor via SPIFFE and scoped user OAuth.
Second, a Registry of verified agents, MCP tools, and skills.
Third, deterministic Policy guardrails using CEL RBAC, semantic rules, and Model Armor DLP.
Fourth, an Agent Gateway that governs LLM, MCP, and A2A traffic and swaps real tokens on the wire.
Best of all, Substrate is open: you can mix first-party Gemini Agent Platform controls with open-source CNCF agentgateway for traffic, LLM, and MCP/A2A routing, and OpenShell for sandbox syscall intercept, out-of-process supervisor, and cluster gateway.

## Slide 27 | 27. Millions Asleep, Few Awake | Speaker: DIMA
Let's go back to our first goal: Density
On the previous slides we followed one actor on one node: resume, run, suspend
Now let's zoom out to the whole cluster
Most agents are idle most of the time, so most actors are suspended
A suspended actor is just a snapshot in object storage. It uses no CPU and no memory
Only the active actors take a slot on a worker
When an actor wakes up, it resumes into a free slot. When it goes idle, it's suspended back to storage
So a small pool of workers can serve millions of actors

## Slide 28 | 28. Wake Up Fast, Anywhere | Speaker: DIMA
Let's zoom in on a snapshot. This is where Speed comes from
An actor's truth is small: its image and its volumes. Memory and the container layer are just accelerators
On resume, we reuse every layer that still matches
New CPU? Memory is skipped. New image? Only the volumes come back. Either way, the actor wakes up.

## Slide 29 | 29. Managed Agents | Speaker: DIMA
Let's look at a common use-case.
This year we have seen a number of managed agent products hit the market
For example, Managed Agents for Gemini - it's awesome but there's a big problem
But if you are an enterprise - you almost certainly have rules around who can access your data and how
Agent Substrate lets you separate the agentic loop (the brains) from the actual untrusted workloads (the hands)
So, for example, you can get the Gemini managed agents to run its tasks in your own agent substrate
You run the substrate in your own environment, VPC network, security perimeter
We showed off Claude Managed Agents using this mode this morning.
Of course, it's not the ONLY way to run substrate, but it is resonating for a lot of people already

## Slide 30 | 30. RL Sandboxes | Speaker: DIMA
Now let's look at one of the most demanding workloads we run on Agent Substrate: Reinforcement Learning.
In agentic RL, every training step spawns batch times group isolated sandboxes in parallel to compile code, run tests, and execute shell commands.
And your expensive GPU or TPU training cluster blocks on the slowest P99 rollout in every single step.
Across teams scaling RL, three challenges show up immediately:
First, framework UX: ML researchers work in Python frameworks like verl, Tunix, SkyRL, NeMo Gym, and Harbor, not Kubernetes CRDs. Our open-source sandboxenv-rl SDK gives them a 10-line SandboxFleet interface that plugs into 40+ eval benchmarks like SWE-bench with zero trainer rewrites.
Second, massive OCI image sprawl: RL datasets pull tens of thousands to over a million distinct task repo images, where 109-second cold pulls stall training. Substrate mounts the guest agent onto unmodified sha256 images with Golden Snapshots, local SSD caching, and GKE Image Streaming for 0.53-second median startup across 36.8K images.
Third, rapid scale-out from 0 to 1M+ sandboxes: synchronized burst waves saturate kube-apiserver and etcd around 50K pods. Substrate keeps etcd off the hot path, forking gVisor and microVM actors from warm pools at 4,700 sandboxes per second and 190ms fork latency.

## Slide 31 | 31. Serving LLMs (llm-d) | Speaker: TIM
Sandboxes are only half of running agents in production: those agents also hammer your LLM serving tier on every turn.
At the PyTorch Conference keynote, we ran a live production demo pairing Agent Substrate with llm-d 1.0: 1,000 concurrent Hermes coding agents inside Substrate sandboxes across 25 GKE nodes, all driving a single llm-d endpoint across vLLM and SGLang on Cloud TPUs with TorchTPU and GPUs.
Walking through the three stages on the right:
First, naive Kubernetes round-robin load balancing lands multi-turn agent requests on cold pods, dropping KV-cache hits to around 30 percent and wasting accelerators recomputing long shared repo prefixes.
Second, llm-d cache-aware routing plus disaggregated prefill and decode and tiered HBM to CPU RAM to Lustre offload sends turns to warm KV replicas, doubling token throughput and cutting time-to-first-token in half.
Third, llm-d flow control separates Free, Standard, and Pro priority queues at the gateway so bursty background agent loops never starve interactive users, delivering roughly 7x faster Pro latency.

## Slide 32 | 32. Thank You! | Speaker: TIM
Thank you! Agent Substrate is 100% Apache 2.0 open source at http://ate.dev, and we would love for you to try it, break it, and build with us. Happy to take your questions!
