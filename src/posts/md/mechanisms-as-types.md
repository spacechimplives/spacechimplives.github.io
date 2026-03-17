---
title: "Mechanisms As Types"
date: "2025-12-02"
draft: false
---

We can view a system as a dependency graph. However, in a real physical system the dependency graph is never truly cyclical except (sort of) [in the case of potential energy](https://spacechimplives.substack.com/p/cycles-persistence-and-categories). Even then this is likely not truly the case but instead it’s just easiest to model it that way when the time scale of pseudo-cyclical behavior is large enough. Take an engine. The fuel and oxygen that end up in the combustion chamber are never the same, they are present at different time states, and the location of that chamber relative to many other observers will vary.

However it’s also non-nonsensical to ignore the cyclical aspects of the mechanism. So this means we have some abstraction over the real instantiated objects. This is similar to types and objects in computing, but the similarity goes deeper.

[Objects in a computation can be modeled as dependency graphs.](https://spacechimplives.substack.com/p/computing-with-geometry) One of the most powerful models of computing involves viewing all computation as rewrites on such a graph. Ultimately lambda calculus can be expressed in this way as well. In a standard computation with no cycles we can treat all objects and computations as DAGs. This has an interesting effect that we can content address everything and create a term graph. We do not need any arbitrary symbols to reference objects in the system. However this limits us to hierarchically finite objects and computations. In order to have recursion, we need cycles. Once we have cycles, we no long have a DAG, which means we need to introduce arbitrary symbols or channels to wire up our graph properly.

Now let’s consider a physical mechanism. When we consider the full dependency graph, there are no cycles. We also don’t need to arbitrarily draw lines between this part of the system or that part of the system. However once we decide to name objects in the system, we are abstracting them from space and time. We also can consider invariants or fixpoints of the system after repeated similar actions. With the introduction of symbols, we create an abstraction which both constrains us and enables us to define information relative to those symbols.

In the computation, when we truncate a dependency graph and create a hole, that hole may be filled by one of a set of different objects. Therefore that dependency graph with hole can be said to represent a type. Similarly a named component of a physical system is truncated from the rest of its dependency graph, It has many holes. This means it corresponds to a type. The holes in the dependency graph may be filled by, in the physical case, a continuous space different objects. So when we analyze the mechanism, we can consider its behavior among any objects in that space

So let’s think of this more practically. What does it mean to consider a mechanism to be a type? Well, we can consider a circuit. 2 resistors in parallel will each have holes that can be filled, but 2 in series will have 1 hole that is fed by the output of the other, so the interface exposed to the world contains a single hole. We can also create such a language for physical mechanisms.

We can consider a lever which has an input and an output. Perhaps with an effect on a rock. The composition of types would correspond to the composition of physical objects with their coordinates in space and time as well as other relevant parameters like weight velocity etc. So the model exists in type world, and the dependency graph provides paths for the model to evolve.

Those familiar with type theory will likely be considering the correspondence to product types, sum types, arrows, monads, etc. Some sort of obvious examples of how these would work is that a system with 2 particles would be a product type of the 2 particle types. A physical switch in an electric outlet would be a sum type. A function type might be a lever. A coordinate system, energy potentials, or stochastic noise might be added via monad.

Physical systems are complex and there’s a reason why this hasn’t already happened. Type theory has not been expressive enough to contain coordinate systems, for instance. However with the blossoming of Homotopy Type Theory, that will likely change.

**A new way to do science**

This could allow us to create a unified language with which to compare models directly.

Given this idea, with some slight modifications to theorem provers, we can do something completely different: training our models directly from observations. Each assumption that we make in our model can be given a certain confidence. We can then create theorems based on those assumptions or propositions. We can create hypotheses which give us expected observations based on the propositions. We can then update the confidence in our assumptions based on reducing the error between observations and expected observations.

This is exactly active inference. Rather than ask LLM’s to generate models which we then attempt to formalize and gather evidence for, and hopefully notice what evidence should update what assumptions, we simply input observations, and see the confidence of various models updated, potentially in real time.