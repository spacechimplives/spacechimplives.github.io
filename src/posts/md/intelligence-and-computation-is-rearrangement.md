---
title: "Intelligence And Computation Is Rearrangement"
date: "2025-08-02"
draft: false
---

We haven’t developed a mature way to describe the information in information-bearing physical systems. Causal dependency graphs which are popping up all over can provide a foundation, but there are key pieces that get glossed over. Considering the physical side of persistence, and the information side of action could provide a foothold to give a full thermodynamic account of information flow through a system.

People intuitively see that here’s a continuum of intelligently behaving entities from a windup toy, to an automaton [like those made in classical Greece](https://www.youtube.com/watch?v=mlqpFfxW4ls&ab_channel=FraserBuilds) to a robot, to a living being, but we don’t have a mathematical language that describes how. Information theory has the rudiments, but Shannon entropy falls short of describing the physical world, while thermodynamic entropy falls short of describing computation or intelligence.

#### Mechanisms

A “mechanism” is a group of objects arranged in such a way that a change in state of one piece causes the system to enter one of a set of intended states. In a mechanism, most degrees of freedom are constrained. By “constraint” on a degree of freedom I mean there is a reduction of probability of entering some states compared to if the object were not fixed to other pieces of this mechanism.

For instance, if we view a classically modeled pendulum as a stochastic system, we can see that the entire phase space above a certain energy is “available.” If we put our hand on the bob and hold it to the side, it may still meet or exceed that energy, but these states are not entered because there is something blocking the system’s travel through that phase space. There is a constraint on the translational degrees of freedom in some direction.

In a mechanism degrees of freedom are then coupled between objects so that in travelling along its degrees of freedom, one object can impose constraint on another object. One type of mechanism that can help us think through this is a Rube Goldberg machine. From a purely energetic perspective, we can describe these following the release of potential energy. But there’s something else interesting here. Each link in the chain of the chain reaction could be displaced. But if it were, then slight changes would need to be made to both the upstream and downstream pieces to allow that. Each part in a link must be located in a particular position relative to the other parts. However there are many arrangements that maintain the same essential dependency graph.

But what transforms it from a mere mechanism to something intelligent? Let’s move onto automaton. What is it about this more complicated mechanism that makes it feel more intelligent than other mechanisms. An automaton is different in that it reconfigures its dependency graph as part of its action.We can take this further to programmable logic controllers and computers. These are essentially very complicated mechanisms which can be rearranged to model arbitrary dependency graphs.

#### Cycles

At the level of Turing machine, these mechanisms allow you to construct almost any deterministic dependency graph you can imagine on the fly. These again represent a significant shift from automata because rather than just rearrange dependency graphs, these mechanisms can also include cycles.

Cycles are critical to the functioning of computers as we know them, with their ability to encode infinite loops and cyclical data structures. This is not just an implementation detail. Without cycles, we are limited the encoding what are called “hereditarily finite” data structures. With cycles, we can find fixed points. The importance of cycles can be seen in the structure of latch memory which feeds the outputs of Boolean logic gates into each other to maintain persistent state.

This is a fundamental representation of persistence.

Bringing this back to the physical realm we can view this through the lens of mechanisms. How does a mechanism with cycles behave?

Without the cycle, energy continues cascades out of the system as quickly as it can be transferred. However with cycles, some of that energy is redirected back into the mechanism. A true causal cycle would be an instantaneous violation of the second law of thermodynamics.

What we see are not true cycles. Once the potential energy is released, you don’t get it back. Another system must have its energy consumed for the next cycle, and the next. The cycles of the fully described dependency graph run through external system and back into the cyclical mechanism. It triggers a cascade of downstream effects that eventually come back and do work on itself.

These were some of the basic elements of a framework which can unite information in the abstract with information in physical systems. Please subscribe if you'd like to see more like this, including any of the following:

*   How it might provide a new lens to view language, metaphor, and institutions
    
*   How it relates to machine learning and LLM’s
    
*   Quantify such a system in terms of thermodynamic and time-dependent entropy as described [here](https://spacechimplives.substack.com/p/a-bridge-between-kinetics-and-information)
    
*   Modeling these dependency graphs via a matrix representation of dependency graphs building off of what I did [here](https://spacechimplives.substack.com/p/computing-with-geometry)