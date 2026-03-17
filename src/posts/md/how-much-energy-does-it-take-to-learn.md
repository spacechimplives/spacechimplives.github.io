---
title: "How Much Energy Does It Take To Learn"
date: "2025-08-22"
draft: false
---

In [this tweet](https://x.com/spacechimplife/status/1953644737354961256), I saw a commonly-spread misconception spread again. The notion was that making computations reversible will allow us to make computations that don’t cost energy. This comes from a naive interpretation of Landauer’s principle which says that energy is only used when an irreversible computation takes place. This is also true. But it’s not the only energy cost involved.

Norton makes [a similar criticism of that interpretation of Landauer’s principle](https://www.youtube.com/watch?v=Tghl6aS5A3M&ab_channel=CurtJaimungal). He describes the correct approach as assessing the number of steps in the computation and deciding the level of certainty you want to have about the output in this video at ~35:00. This is essentially the error propagation of undergraduate labs.

This fact can be generalized into something beyond just minimum heat loss of computations. An under-explored concept which can tie together thermodynamics and stochastic system is the energy of fixture. One might also call it the energy of location or precision. It takes energy to keep or put a specific in a certain location with a certain probability.

There’s a hint at this in the fact that momentum and position are conjugate variables. Per the uncertainty principle, as we reduce the uncertainty in the position states, we’re increasing uncertainty in the momentum states. This tends to cause an increase in kinetic energy, which is related to the square of momentum. A wider range of possible magnitudes or a more even distribution implies an increased possibility of inhabiting larger magnitudes.

There’s another hint at this in the fact that entropy represents how “spread out” probability is across some starting number of states. So we should expect that constraining a system to a smaller number of possible states relative to that is a move away from equilibrium and thus would take energy.

While acceptance of the energy cost of information is quickly becoming accepted [(for instance in a paper like this by Parrondo)](https://arxiv.org/pdf/2306.12447), there’s an omission in most approaches to the topic. Most approaches stop short of stating that observation itself incurs an energy cost. But it does due to the precision involved in the apparatus making it and storing or responding to the resulting observation.

_**Constraint**_

Constraint is essentially another word for a “bunching up” of the probability into a smaller subset of states. This is by definition a lower entropy configuration.

The phrase “negentropy” is used often for the same concept, however this strips it of its concrete meaning. Reduced entropy means a reduced probable range of states. “Constraint” makes this clear. It allows us to talk about which of the various dimensions of the system is constrained and why.

This squishing takes energy. The exact amount of energy it takes is related to the temperature of the system by dE/dS = T. In other words the amount of energy required to constrain the system to a certain subset of states is directly proportional to the temperature.

_**Observation**_

The following idea may seem radical, but it has ample support in subfields which use both information theory and stochastics.

When we make observations at a certain rate, we’re constraining the set of probable states of the system. What we’ve ignored thus far is that when we’re “bunching up” the probability, we’re not just doing this at a certain point in space, we’re doing it at a certain time. Maintaining negentropy indefinitely requires continuous observation or physical constraint and thus takes a contribution of energy over time.

If we have a box with a single gas particle bouncing around and we physically constrain it to 1/2 the volume with a certain probability, we’ve increased the pressure. This will require a certain amount of work. If we instead make a series of observations such that we’re equally sure which side of the container the particle is on, this will require the same amount of work.

Whether we constrain the system through observation or mechanical configuration, as time goes on the system moves toward equilibrium and increased entropy at a certain rate related to temperature unless some other process intervenes.

_**Temperature and mass**_

The rate of this decay is proportional to the temperature, and inversely proportional to the inertia. In a way mass can be treated as an expansion of the number of states required to be traversed.

We also have to note that in order to be observed, the object must do work on our system.

When we observe a system where the amount of energy involved in observing it is non-negligible, our observation can affect the object. In fact we know that the object must do work on our system in order to give us any information.

_**Learning**_

Learning consists of making a series of observations, and then modifying your own state in response. According to the Free Energy Principle model, you then use your modified state to generate predictions which you can then compare to reality to determine how to modify your own state or environment in response. This is essentially an algorithm for minimizing “surprise” or the free energy of the observed state compared to the internal state.

In response to our observations, we physically constrain our external environment—relative to us by moving through it, or absolutely by building something in it—or we physically constraining our internal environment—by updating our neural weights, or our bodies. The line between internal and external is ultimately pretty blurry, just as it is in epigenetic development.

These observations are doing work on us, but rather than just randomly jostling our system around, our system has a “place” for that energy to go… we can model it as a series of tuning forks where each stimulus causes resonance in a certain tuning fork, and at a certain amplitude, that resonance triggers the cascade of a mechanism, removing energy from the tuning fork so that it’s ready for more stimuli.

Ultimately what we’re doing can be described via signal processing. Interactions with the environment which have no “tuning fork” internally just add noise. They cause random vibrations and increase the probability of various state transitions through our whole system. However those which we have attuned to are “signal”, and the work they do on us instead contributes to the information of our system. And by “contribute to the information”, I mean it changes the probability distribution of our behavior relative to the baseline before it.

We can assess how much energy this takes by looking at the precision of physical constraints that occur within the observing system in response to stimuli. A good metaphor is pendulums. If we have a set of n pendulums and we change the precise mass or phase of one, then a constraint is introduced into the output of the system. The degree of control effected is relate to the precision with which that constraint is introduced. If the tolerance is high, then the constraint on the output behavior is lower, and “noisier”.

_**Holding up a mirror**_

As we’re fleshing out a model and conducting experiments to support it, we’re literally engaging in this process we’re describing. It’s become fashionable again to emphasize that thermodynamic entropy and Shannon entropy are not the same thing. They aren’t, but they do have a relationship.

The statistical entropy of a probability distribution measures how “spread out” the probability is among various states. These states in a physical system correspond to the range of possible values allowed in the mathematical model we’ve chosen. So if we have 1 particle in a box, we have 3 transational and 3 rotational continuously valued coordinates.

The “shannon alphabet” is what we might call the fixed number of values that may comprise a message. So when we look at the shannon entropy of a message within such a channel, the “states” we’re talking about is the set of possible messages.

So when we observe that our particle in a box has a certain set of coordinates, we’re essentially receiving a message. The tuning forks are the states of the equation… or in a more physical sense, they’re the observational instruments we have created which often are very literally and deliberately attuned to certain kinds of stimuli.

When we make a scientific observation, we have a place for that. There’s a specific part of the pendulum we can tune. Unless we discard the datapoint for some reason, there is a whole downstream chain of events that occurs in response to it, which ultimately changes the probability distribution of behaviors that we take in response to it. We are attuned to the signal. The mathematical model we use is part of that attunement.

If there were no “place” for the energy that was being transmitted to the system, then rather than resulting in the tuning of a certain pendulum, it would result in a random vibration somewhere in the pendulum. This would result in a general reduction of precision, because we don’t know where or how that vibration will propagate. Therefore, it can also be modeled as an increase in temperature, or an increase in the likelihood of any given state transition.

So the process of learning is the creation of an attunement mechanism, as well as the development of a mechanism which appropriately constrains the distribution of probable behaviors.

_**Potential Field**_

The degree of constraint can then be modeled as a potential field. In order to increase the degree of precision, the system must be driven into a higher potential. This allows us to describe information as a kind of potential energy and model information systems with kinetics etc.