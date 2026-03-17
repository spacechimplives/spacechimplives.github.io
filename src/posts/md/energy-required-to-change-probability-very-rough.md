---
title: "Energy required to change probability (very rough)"
summary: "(this is all very stupid stuff and is pretty much a bad model for everything. It literally counts the cost of training a neural net as the amount of m"
date: "2024-01-26"
draft: true
---

(this is all very stupid stuff and is pretty much a bad model for everything.  It literally counts the cost of training a neural net as the amount of money that can be made based on information.  Which, while it may be kind of true doesn't give any information anyone can use to make money.  A more useful thing to calculate would be the information contained in an LLM by calculating the volume of the regions corresponding to certain concepts etc.)

Let's say we have a system S which is 1 liter in volume and contains 1 mole of helium at STP.  Let's say they're at 0 degrees Celcius.  Obviously they will be at low pressure

These particles are bouncing around a the box, but we want to reduce the concentration on one half of the box while increasing the concentration on the other.  Let's say we want to increase the probability such that there's a 55% chance of a particle being on one side and a 65% chance of it being on the other, while keeping the total temperature and pressure of the system the same.

One way we can do this is through electromagnetism, another is through gravity, another is thermally, and another is mechanically.  Assuming 100% efficiency, We should be able to calculate the work required to do this in all cases and determine some consistent relationship for the work required to adjust the probabilities.

What we should find is that the work is the same in all cases. We can know this without any calculations because the result will be a certain amount of potential energy stored in the system, in the configuration of the particles.  There will be a difference in pressure, and creating that difference will be the work required.

An interesting point from an information point of view is that there's no difference in this system whether it's the sender or recipient of the "signal."  If an outsider has prepared this system, or this is how the system were found, either way the information content is the same.

What we know is that the mass of the system has not changed at the local scale.  The temperature has not changed, as the temperature of one side slightly increased, and the other decreased by a corresponding amount.  The mass has not changed either.

We can use the Isothermal Expansion equation to gather that the change in entropy (and hence the negative change in information) is related by nRT(v1/v2).  When the volume is reduced this gives a negative value, which means an increase in information.  Combined with the ideal gas laws, we can thus use this to calculate the energy required to hit any probability.

We can calculate the energy required to keep a single particle in one half of the x/y plane by using the isothermal compression equation on a single particle.  Multiplied by the temperature of the system gives us the information.

So then going the other way, we can decide what state we want, and see how much work it will take to get us there with a certain probability.  Let's say we want a certain particle to be restricted to a certain half of our experimental setup.  We will have to compress the volume of the entire setup by 1/2.  We can calculate the work required to do this, and this will give us at least an upper bound on the energy required.  The ability to be "sure" that the particle is on a certain half of the plane sort of reminds me of the shannon nyquist theorem.  That we can communicate signals losslessly under certain conditions.  To me, successfully constraining the particle with probability 1 feels like a lossless communication.

In the shannon-nyquist theorem, the bandwidth is the number of bits which can be transferred to the recipient.  In our case the recipient is the system, we are communicating via compressing the volume of the container.  Since we're assuming the particles all respond to this compression by constraining their motion to the new allotted volume, we can assume the bandwidth included at least 1 bit per particle.  This automatically keeps us above the threshold for perfect communication.  If instead of dealing with the particles from that mass-level view, if we instead worked with individual particles which responded probabilistically to our attempts at constraint, we may have to deal with the concept of a bandwidth, and a maximum fidelity with which we could constrain the particles.

We could also attempt to calculate the bandwidth using the continuously valued macroscopic state of the system.

Another thing this does is give us the ability to calculate the work we can do by having certain information.  Each time we localize a particle to a smaller volume, we can do a certain amount of work with that information.

We can then bring money into the equation by determining the cost per kwh, and that should give us the amount of money we can expect to make with a given amount of information.