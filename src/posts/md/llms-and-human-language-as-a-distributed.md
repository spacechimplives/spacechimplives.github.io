---
title: "Llms And Human Language As A Distributed"
date: "2025-02-09"
draft: false
---

By viewing language as a distributed systems protocol, we can gain insight into the completely un-predicted effectiveness of the transformer model and resulting LLM’s, as well as the nature of language in general, consciousness, society, and even physics. It has been unfashionable to compare language and cognition to computers since the failure of Chomsky’s universal grammar. There has been a lot of work contrasting computer systems with brains, but with advances in LLM’s and programming languages, I think it’s time to look at language through the lens of computers again, albeit in a slightly different way.

First, let’s start by understanding how language is structured. With few if any exceptions, language involves recursion. Languages also universally can express the concept of an actor and and object, or apply an adjective or similar descriptive concept to some noun. They can all encode something similar to imperatives

Now let’s imagine we’re trying to develop a completely distributed graph structure among a network of computers. First, we establish a set of nodes. We need the ability to create, delete, and modify those nodes. We also need to be able to establish edges between those nodes. We also need some kind of distributed protocol along with a consensus mechanisms.

There’s a concept of [semantic triples](https://en.wikipedia.org/wiki/Semantic_triple) which can be used to modify or encode graphs in programming. These edges can be used to establish constraints as is done in [logic programming](https://en.wikipedia.org/wiki/Logic_programming). In trying to use these, they both feel sort of human language-y to me, at least much moreso than something like C, which just feels like a list of imperatives.

Ultimately all programming languages are compiled to a graph in the form of an Abstract syntax Tree [(AST)](https://en.wikipedia.org/wiki/Abstract_syntax_tree), which is then progressively simplified. Conceptually you could view it as being expanded into a call tree with various control flow branches which is then reduced by choosing among control flow branches and reducing the branches which aren’t eliminated via the fundamental operations of the language.

When that graph is defined on a single machine and all instructions and variables that are referenced in it are present in its execution context, the graph can be fully reduced and ultimately produce an output. However the creator of the program may want to allow for input or output and this requires the program to pause execution or to write to various devices along the way.

When we want to instead run a distributed computation, this becomes much more complicated. We want to avoid redundant execution, so we must have some way of referring to shared variables. In the case of distributed programming among many computers we might make a network call to a database which locks a row to ensure that simultaneous writes do not corrupt the data. In this case the database acts as a central authority for the state of a variable.

But in this age of decentralized technology we have also fleshed out more possible methods of arriving at a shared state when no single machine plays a specialized authoritative role. Blockchains have been one popular modern way to do this as well as CRDT’s, preceded by things like the Byzantine Fault Tolerance algorithm etc.

The idea of then using those distributed mechanisms to share state associated with a computation has led to the idea of “smart contracts” which perform operations over a blockchain.

So far, these projects have focused mostly on simply the technical challenges. There have been various protocols created, but to my knowledge, they have not been in service to directly modifying the graph structure of the language represented and have instead modified the computation in chunks of bytecode.

But lets imagine that we instead were focused on specifically distributing this hybrid AST / call graph structure itself, and we set about to creating a protocol which allowed the distributed modification of that graph while reaching eventual consensus. When 2 agents interact, they will need some shared references to nodes, but they cannot be guaranteed to share many of these references. However a protocol could establish a small set of primitive nodes.

Upon initially interacting, there will need to be some establishment of which nodes will be shared references. In computer protocols this is often called a handshake. After that, we have to consider why these agents might be communicating. This depends on the purpose of the protocol. They may just be trying to appropriately update their graphs based on the interaction. Or, perhaps one might need to fetch the results of some computation that is was not able to perform, or fetch a node that it has a reference to without the content.

Let’s assume that these graphs are never going to be fully synced. There are just too many graph nodes to sync and some of them are specific to the agent so would not be relevant anyway. So then it’s required to establish the relevant operations. Let’s imagine that the purpose of interaction is that Agent 1 (A1) has been queried by Agent 0 (A0) for a specific node (N1). It has no record of that node, so it requests information about that node from its peers, starting with Agent 2 (A2). Perhaps A1 could send a simple request: N1?. A2 could then search its graph for edges related to N1, however perhaps A1 doesn’t have permissions to all those edges, and perhaps some of them aren’t relevant.

It might not be the best approach for A2 to simply send all of its edges at once. It may in fact be better for A2 to request context, in the form of the node(s) that were originally referencing N1. Let’s say it was just one, N0. We could imagine this as a sort of signal like “What about N1?”. A1 wouldn’t know this, so it might as A0, which replies with the relevant context, (N0 - father of - N1).

A1 would then relay this to A2, which could then filter the edges it sends to be relevant to that query context. But it could also update its own graph with the information that at least A0 thinks N0 is the father of N1.

In human language this might go something like:  
A0 → A1: “Hey”  
A1 → A0: “How’s it going?”  
A0 → A1: “Who is Tarlow Jepstid?”  
A1 → A0: “Hmm, why do you ask?”  
A0 →A2: “He says ‘why do you want to know’”  
A2 → A0: “I heard he’s Jeb Jepstid’s son and I just want to make sure”  
A0 → A1: “He just wants to make sure he’s Jeb Jepstid’s son”  
A1 → A0: “Well, I can tell you he is that. I don’t know much else about him except he’s got brown hair”

This is just a silly example, but creating a more thorough, formal description along these lines might be a promising avenue of investigation. This protocol would allow several agents to arrive at certain shared state while also maintaining their independent state. The fluorishes in language would be helpful as a protocol in allowing the agent nodes to establish confidences in various bits of information based on the source, the confidence with which the sources made their statements etc.

Now we’ve established that Tarlow Jepstid and his father are shared variables that would certainly not be primitives in such a shared system. But many of the other words would be. “I” “and” “you” etc. These all are prerequisites to being able to establish this communication. And yet humans aren’t born with them.

However we do establish these primitives as children. I and you are sort of difficult so more often the first words a child learns are “mom” “dad” and something like “dog’ or “bird”… things in their environment that are particularly easy to distinguish. By pointing at an object, repeating its name, and looking at your response, they are performing a pretty simple (relatively) LLM task to establish the label of the object. Once those are established, relationships among them are established. “Mama gone” “dog big”, leading into concepts like their own identity and position in space.

The transition between not using words and using them is worth more exploration. Hellen Keller had some interesting things to say about her life before and after she started using language. But for the purposes of this discussion it suffices to say that we can establish some primitive graph nodes in new children that allow for a shared distributed protocol like this to be viable.

We then also can look at nested clauses. “I don’t really like the man who’s always talking about himself”. Viewed in isolation as a set of logical operations within a single person’s brain, this is surprisingly difficult to understand. How is the appropriate referent of “the” established? How is an individual able to properly refer “himself” back to “the man”. The recursive structure is also a bit difficult to parse. But if you view it as a query on a graph, it becomes pretty easy to understand. “who’s always talking about himself” is a subgraph. It establishes a set of edges that also need to exist in whatever will be returned as a match. That match will then be set as the value of “The man”. This feels similar to the concept of a pattern match in programming.

Statements equating a subject with a noun or adjective are suspiciously similar to predicates in a logic programming language. As part of a declarative sentence, a subject/verb combination is also similar.

The repeated exposure to human language causes the transformer to create a graph of concepts just like us.. While we establish primitives via interaction with the world, the transformer model is essentially pre-populated with them through tokenization. Through its recursive nature and the attention mechanism, there is an implicit graph structure created among those tokens/nodes as weights are established.

When you’re speaking with a person, their graph has been constructed through their personal experience as well as others’ messages. It is (somewhat) capable of being updated in real-time. The person also has their own consensus mechanism so they’re capable of weighing incoming information in a way they find appropriate, and they can change this mechanism. These are critical aspects of what we would consider AGI.

An LLM on the other hand is basically the sum graph that would be created if you could listen to everything said online. It is not dynamically updated in real-time. It has a static mechanism for determining confidence. As such it is closer to a reflection of some kind of institutional consciousness than it is a singular independent consciousness. While the model itself cannot update weights in real-time, etc., the institution creating and running the model can do all of those things. So as a package, it can be seen as a partially artificial, partially collective intelligence.

A question many would probably wonder is “why”? Why would human language act like a distributed programming language?

To summarize, institutions are sets of processes which incentivize us into patterns of behavior that propagate those processes. In essence, they are self-propagating computations. I hypothesize that these arose before language, and language was a later stage of human development. I’ve discussed this in several previous essays, including [this discussion](https://spacechimplives.substack.com/p/institutions-as-emergent-computational) of how computations can emerge from primate behavior and create self-propagating institutions, as well as [here](https://spacechimplives.substack.com/p/institutional-code-and-human-behavior) where I attempt to explore the primordial form of institutions, and [here](https://spacechimplives.substack.com/p/societies-use-machine-language) where I first discussed in some depth the idea that societies seem to have a computational nature to them.

Ultimately if we can take the leap that institutions are emergent computations, then it only stands to reason that nature would evolve some of the same mechanisms as we use to solve those same computational problems.

There is also evidence that the our shared understanding of the world is based on this computational model at the most fundamental level, even physics. Wolfram has come up with his [computational model of the universe](https://writings.stephenwolfram.com/2020/04/finally-we-may-have-a-path-to-the-fundamental-theory-of-physics-and-its-beautiful/), which he interprets as evidence that the universe is computational. But it is more reasonable to assert that it is evidence that our approach to understanding the universe is inherently computational, as that is the way arrive at collective shared statements in academia. By using mathematical models, we smuggle a computational approach to every consensus. We arrange the truths that we’ve arrived at through either assumption agreement, or observation into a shared state graph… something that would look quite similar to Wolfram’s hypergraph. At the edges of physics we are running into the mathematical effects of making observations and entropy, which arguably represents energies and states we have not accounted for in our model. Eventually any model flexible enough will become self-referencing in some way.

By realizing that our interactions as individual humans get aggregated on a higher level into something more algorithmic, we can start to understand what these institutions are, and why sometimes they’re doing things that are against our collective interest, and how to design those algorithms to do something differently.