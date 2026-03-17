---
title: "Linking information and representation"
summary: "There's a bit of a disconnect in the way that thermodynamics, statistics, and information theory discuss information and the common usage. However, th"
date: "2024-05-10"
draft: true
---

There's a bit of a disconnect in the way that thermodynamics, statistics, and information theory discuss information and the common usage.  However, this difference also highlights a bit of a gap in current theories of information: information is about things.  We can talk about the information in a black hole, but are we suggesting that some future galactic-level civilization could use a black hole like a hard drive?  Or are we saying no, that's thermodynamic information.  That's different from data or facts like the year of the battle of Hastings.  In that case, why would we call it information?  And what's with its connection to information theory, which clearly has something to do with codes and computers, and allows us to make definitive statements about how data can be manipulated?

I think what it boils down to is a key missing piece of "information" when we're discussing physical or statistical information: the model we're using.

The second law of thermodynamics defines entropy as $$ \delta S = \frac{Q}{T} $$.  In other words, it is some quantity that increases when you put more energy into a system while holding its temperature constant.

Now let's think about temperature for a second.  It's a measure of the kinetic energy of the particles of a system.  So what we're doing when we hold temperature constant is we're keeping that total kinetic energy constant.  So how is it possible to add energy to this closed system without increasing the kinetic energy of those particles?  We know that energy must be going *somewhere*, so if it's not going  into the kinetic energy of the particles, there must be some store of energy in the system that is otherwise unlabeled in our little model.

We can see this illustrated further when we keep looking into other definitions involving entropy, for instance Helmholtz free energy.  By reorganizing the equation for the standard definition  we get $$ A \equiv U - TS $$ => $$ S = \frac{(U - A)}{T} $$.  Looking at this new equation piece by piece we now see that if we take the internal energy of the system, minus any free energy (i.e. potential, kinetic, or chemical energy that can be used to do work).  Again we're keeping temperature constant.  Let's first assume we're keeping the free energy constant.  How can we increase the entropy of a system?  According to the equation we can do this in 1 of 2 ways: Increase the internal energy, or decrease the free energy.

Attempting to increase the internal energy while holding the free energy and entropy constant leads to all sorts of contradictions.  It involves either increasing mass without increasing useable potential energy, but adding mass increases gravitational potential energy.  Or it involves decreasing the volume without increasing the pressure, which would would require slowing down the movement of the particles, violating our constant temperature.  Other definitions are dependent on entropy, which results in a circular definition which doesn't help us.

So let's move to the next one and assume we're keeping the internal energy of the system constant and we're decreasing the free energy of the system.  This means we need to decrease the useful work that can be done.  How can we do this?  Well, we can remove kinetic energy from the system at large, or potential energy.   But if we hold that constant to, we can still increase the entropy by just limiting what we consider to be "available for useful work".

This may seem silly, but we can see that this is actually what is happening when we consider different definitions of entropy which account for things like chemical energy.  We can view the same system with and without that chemical energy, and consistently the "missing energy" will turn up in the entropy term.

Why this is becomes clearer if we start with look at kinetic theory and Boltzmann entropy.  The kinetic theory of temperature says that as we put energy E into a box of gas particles, the translational kinetic energy will increase by E/3.

The same box of particles can be a source of energy which can be transferred to other systems, in which case the kinetic energy of its molecules is free energy, or it can be considered entropy if we assume that no work can be extracted from

If we consider another definition of entropy which is sometimes used: the number of microstates corresponding to a given macrostate, we can easily see that our choice of macrostates to register is critical.

According to the fundamental thermodynamic relation, one statement we can make is that the change in free energy is the sum of the change in entropy * temperature + the energy of the system accounted for in the things we're paying attention to.

Thermal energy is essentially dis-located energy.  It's energy of the system that's not associated with an entity that's labeled in the equations we're using.

So revisiting that ration, we can view the change in entropy as the transfer of energy from *labeled entities* to

 

If we revise our definition of entropy be to *with respect to a given model* then we can unify it with concepts from communication theory.  We can use the entropy of our model as a measure of how good we expect our predictions to be.  Back to the second law of thermodynamics--it implies a model of the world that only consists of temperature.  Energy that goes into anything besides temperature is going into entropy.  Perhaps in this system which measured a constant temperature while energy was poured into it, the volume increased.  We don't know because we're not measuring that.  It counts as entropy.

In systems that account for free energy, we have more elaborate models, which consist of things like pressure, temperature, or chemical energy.  When we increase the energy in these systems and note that the temperature stays the same, we also have the opportunity to account for that energy increase in terms of volume, pressure or other variables.  So the entropy for these systems will be less than if we analyze the same system through the lens of only temperature.  But in the end, there is still energy that can't be accounted for, and that's where we find the entropy defined. What's happening is the information of the more comprehensive model gives us access to that energy and make it useful by virtue of being able to model it.  In that way the model is essentially converting aspects of the system that would be accounted for in as entropy into free energy.

This doesn't work

This brings us to an interesting comparison between entropy arrived at by thermodynamics vs statistical mechanics.  Comparing between the former and the latter has resulted in people defining entropy as "the number of microstates corresponding to a given macrostate".  If this is true, then by increasing the number of macrostates, we should be able to extract more work.  How can we create more macrostates?  Well, one example would be to register the random fluctuation

 

The comparison between the entropy that one arrives at through statistical mechanics to the one which one arrives at through taking advantage of the ideal gas laws shows us that the ratio of this unknown stays constant between different levels of abstraction.

But we can also realize the "microstates" in our model are also macrostates of a system that contains other microstates themselves, for instance some atoms may be ionized.  This won't necessarily affect their observed behavior under the ideal gas laws, but as soon as we bring that possibility into our model, we also have a way to extract useful work from them in our model.  The inclusion of this aspect in our model increases the useful work that can be extracted if there is some asymmetry in the ionization that can be taken advantage of.  If the ionization is completely random, then there is nothing that can be done.

The entropy then gives us an estimate of how closely we should expect that model to match reality.