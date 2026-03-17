---
title: "Force And Signal"
date: "2024-11-03"
draft: false
---

Work being done on a system, or constraints being placed, can be treated as a communication over a channel. This could allow us to bridge the gap between information and thermodynamics on one hand, to velocities and motion on the other. It could allow us to take the notion that work is required to constrain a probability distribution and use it to explain how conservation of energy allows energy from one probability distribution to translate to constraint on another probability distribution.

It can also just give us a different intuitive way of looking at things. For instance, viewing physical systems in this way, the principle of least action of the system might be restated to say that the path of least action is the path that requires the fewest messages from the sender or has the lowest SNR or the lowest bandwidth, or lowest KL divergence

#### The model - phase space PDF

Let’s start with a ball falling due to gravity. Let’s take a look at the ball and consider its phase space representing its current position, and momentum over time. Let’s start at time T0, and assume the ball is at position Y0 = 10 meters with no momentum. In the absence of the force of gravity, as time moves on, the PDF of the ball’s position in phase space would just turn into a flatter and flatter 2-d gaussian as Brownian motion imparted random energies onto the ball. We could model this as essentially a normalized binomial distribution with a fair coin flip at each time T. We could call this a discrete random walk in phase space.

However in the presence of gravity, this looks different. A skew is added to the gaussian. Rather than modeling this as a binomial distribution with 2 fair coin flips—one for position and one for momentum, we can model it as a normalized binomial distribution with an unfair coin for momentum. This means that the momentum increases linearly as time goes on. Imparting this bias to the coin means you are changing the PDF of the momentum away from one with maximum entropy. You’ve instead produced one with some free energy, or information. The distribution is now constrained.

That constraint is required to do work.

#### The model - communication

So how does this end up translating to a communication model? In this situation our momentum space PDF of the ball is the recipient of the communication. It receives messages from some system. Those messages translate to information, which is then applied to the momentum space as a constraint on the PDF. Each message introduces a bias to the coin flip at time T(N + 1). This means there is a channel between the source of gravity and the ball whose capacity is related to the information difference between the fair coin flip and the unfair.  
  
This also means that the system must be sending messages. In sending the message, it is transmitting information, which means that is entropy must be increasing. Where is the information coming from? Before the ball was dropped, there was potential energy in the form of the gravitational potential between the ball and the entity responsible for the force of gravity (Earth, let’s say). This potential energy must be able to be represented in the form of a constrained probability distribution, which then returns to a uniform distribution, losing information, as the ball moves toward the earth.

A distribution which has that constraint is the distribution of mass along the axis we’re considering between the center of the ball and the center of the earth. Considering the gravitational potential, the maximum entropy PDF of the mass distribution would be a smooth gradient from the center of the earth moving out. However the ball’s position does not follow that gradient, so it represents a lower-entropy configuration. This means there is room for that distribution to move to one of lower entropy.

As messages are sent from the mass distribution PDF to the phase space PDF, they morph a high-entropy PDF to a lower-entropy one. I would have to do the math to be sure, but I suspect the KL-divergence of the initial sender PDF should be larger than the KL-divergence of the recipient. On some level this is a tautology. The energy states and hence Boltzmann distribution of ball at various positions would be defined by what we already know of its gravitational potential. The resulting skew to the ball’s phase space PDF would also be similarly defined that way.

So this is not actually modifying what we know of these forces in any way, it’s merely attempting to bridge the gap between viewing forces in terms of potentials and kinetic energy, to viewing them from an information theory perspective.

#### Conclusion

We can also apply this to a circuit. The constrained probability distribution of the electrons in a battery at each time step is relaxed. This is then able to be translated to a corresponding constraint in the probability distribution of electrons which pushes them to an area of higher potential which they otherwise would not move to.

Rather than apply this only from a source of potential, we should also be able to apply it from an object with other forms of energy. Let’s take a ball rolling. We know that its particles have momentum which is constrained to be in a certain direction. Let’s say this ball hits the head of a piston, which puts a gas under pressure relative to the environment. We should then be able to make some statement such as: the KL divergence of the new probability distribution of momentum in the ball should (probably) not exceed the KL divergence of the gas under pressure vs its previous rest state.

More interestingly, we can potentially use this to quantify how physical laws apply to other entities which have been analyzed with information theory, but which haven’t been connected to the traditional forces and energies, such as biological or institutional systems.

We can also potentially use this framing to take elements from information theory and apply them to physical systems and give new insights. For instance, we might find that relativistic laws correspond to effects on the bandwidth of these communications. Or that something like the Nyquist Shannon theorem corresponds to the Heisenberg uncertainty principle. Perhaps the noisy coding theorem would predict a lower bandwidth, which at some point would be low enough that down-sampling would be required, which might explain quantum phenomena.