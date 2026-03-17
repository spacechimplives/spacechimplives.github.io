---
title: "Constraints Entropy And Action"
date: "2025-02-09"
draft: false
---

Let’s imagine 2 particles in a 2-d box. First, they are completely independently bouncing around. This means they have 2 fully independent distributions. Since we cannot have an infinitely-sized box with uniform distribution or else the rules of probability break down, lets give it some finite volume V. Let’s consider their momenta. We have the x and y components of each, for a total of 4 degrees of freedom. This would give us the following equation for phase space volume for N particles:

where p\_max represents the maximum allowed momentum. The entropy follows from Boltzmann's definition:

Let’s then connect them with a string. Now if we consider one particle, the second will be some maximum distance d away, and at an angle theta. Still 4 degrees of freedom, but now those degrees of freedom have a different coordinate system. We could also consider the second particle to have an x and y offset whose total is below some distance. This added constraint reduces the available states, thus the entropy is reduced. Rather than the 4 uncorrelated degrees of freedom, there are now some constraints, so we reduce the available phase space volume to.

Giving a reduction of entropy of

Let’s change that string to a rigid bar. Now, we’re down to 3 degrees of freedom, and one of those degrees of freedom is in a coordinate system which only ranges from 0-2pi. We need only consider the position of a certain particle, and an angle theta will give us the position of the other. The new phase space volume would then be

And the entropy would reduce accordingly.

The Helmholtz free energy of such a system would be given by:

As the entropy is reduced, but we are not reducing the total energy of the system, merely adding a constraint, we should expect that that energy has moved. It is now accounted for in the internal energy term via tension in the rod. In the establishment of any constraint, we also have a symmetric constraint imposed on the other particle. The result is that each constraint is mutual. [So we can say that the mutual constraint is equivalent to internal energy](https://spacechimplives.substack.com/p/mutual-constraint-as-internal-energy).

Now let’s reduce the distance of that rigid bar to 0, meaning the particles occupy the same space. There is infinite rotational symmetry. Now there are only 2 degrees of freedom in the system, as if there were only 1 particle. But compared to a single particle there is 2x the internal energy, or for our purposes: 2x the mass.

Again the constraint reduces the number of distinguishable states of the system, which reduces the entropy. In reducing the entropy, the energy that was represented in the entropic term of the free energy equation is suddenly represented in the internal energy term instead. Therefore the addition of constraints to a system essentially converts entropic energy into potential energy.

There’s an interesting avenue of investigation regarding the creating and breaking of symmetries. When we establish the rigid connection we remove at least one full degree of freedom. Where do the states go? By constraining the distance between the 2 particles to D, we are not only further constraining the system, we are also adding a set of symmetries to the system. Noether’s theorem tells us that this creates a new conserved quantity. In this case it’s angular momentum. When the constraint is not rigid, are we to believe that there is no symmetry creation, but suddenly by making it rigid, there’s a leap to full symmetry? What if we progressively increase the rigidity of the connection? Are there less stringent conservation laws established along the way?

We could say that each additional state of the system is actually a breaking of symmetry, and through the addition of constraint we can say that we’re either preventing some symmetry from breaking or adding some new symmetry. Each additional unit that we add to the volume of the box is increasing the number of states available. We could simply divide the box into quadrants, giving each particle 2 bits of information. In such a system, the fact that any position in the top left quadrant is considered equivalent is a kind of symmetry. When we add more possible coordinates, we’re breaking that symmetry by increasing the number of states that would otherwise not be distinguished.

Per the video below, we can recover the entropy from the geometry and visa versa. However if we can establish the entropy from the “unfolding” of the state space by breaking symmetries and the “folding” of the states via constraints to establish new symmetries, then we can also establish the geometry. And if we can also recover the symmetries and asymmetries from the entropy, then we should be able to do so from the geometry as well.

Bringing this back to mass—in establishing the mass of a particle, we’re implicitly taking an infinite number of infinitely small-massed particles and collapsing their degrees of freedom with a symmetry by treating them as part of the same rigid body, such that the infinite sum of those infinitely small masses adds up to the mass we’ve assigned. In this way we can model a mass as a set of constraints. We’ve established that constraints are potential energy, hence mass is simply a form of potential energy. In applying force to a single particle, the constraints distribute the force among all the infinitesimal massed-particles that make up the single mass. Just as when we push a set of balls all interconnected with springs, the re-distribution of force among these infinitesimal particles results in some resistance, or pushing back.

Now we can consider the concept of “action” and what that means.

According to this discussion, in establishing a symmetry, we are establishing potential energy. This means that all else equal, the action is minimized when those symmetries are maximized. If we accept that potential energy is converted to kinetic energy through the removal of constraint, then we can further say that kinetic energy is maximized by removing constraints, so the action is again minimized when maximum constraint or symmetry occurs.

This simply makes sense with the interpretation that the symmetries and entropy are inherent to our description of the system. When we describe the system as a box of particles, we establish a model which “pays attention” to certain states, and ignores other states. We’re not paying attention to the color of the balls in our system, so all colors are symmetric, and the principle of least action suggests that color won’t spontaneously start to have a physical impact on our model. In other words symmetries and constraints won’t spontaneously break without explicitly being taken into account in the model. To the extent that we don’t observe a trajectory consistent with the principle of least action, we assume there’s some asymmetry which we did not account for and must establish in our model to accurately predict the trajectory.