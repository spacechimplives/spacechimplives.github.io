---
title: "Temperature And Decay Of Information"
date: ""
draft: true
---

First, let’s consider this definition of Gibbs free energy.

[

![](https://substack-post-media.s3.amazonaws.com/public/images/4c71ceaf-732f-4ef9-967f-0ab79fd8e6ad_629x280.png)



](https://substackcdn.com/image/fetch/$s_!1XQU!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4c71ceaf-732f-4ef9-967f-0ab79fd8e6ad_629x280.png)

The TS term is what I would call “entropic energy”. So what we can see is that the _Free Energy_ is the total energy of the system minus _Entropic energy_. The free energy is the energy available for work. So that means the entropic energy is the energy \*not\* available for work. Why is it not available for work? Because it represents energy in the system that we have not accounted for. We don’t know what form that energy takes. If we don’t know that, how can we appropriately design a mechanism to extract work from it?

Let’s consider a system of 3 bits. This system can be in any of 8 states. Its temperature determines how often these bits flip. Boltzmann’s distribution says this:

[

![](https://substack-post-media.s3.amazonaws.com/public/images/56fdf309-9cf6-4a0d-9a27-09078536c2de_285x72.png)



](https://substackcdn.com/image/fetch/$s_!WvKJ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F56fdf309-9cf6-4a0d-9a27-09078536c2de_285x72.png)

The probability of entering a state with energy E is proportional to that exponential term. We can take the natural log of both sides and get an equation for temperature as T = - E / ( ln ( P(E) ) \* k\_B) So, given the energy of a state and the probability the system entering that state, we can recover the “temperature” of the system. What this tells us is that temperature can be viewed as a measure of how likely a system is to occupy a state of a certain energy.

The entropy is maximized if we assume a uniform distribution among those 3 states. In our case it’s 3 bits of entropy. Upon making an observation, there is no longer a uniform distribution. We can calculate a reduction of entropy by 1 bit. This 1 bit of entropy can now instead be considered \*Free Energy\*. We now know its state, which allows us to extract work when thermal energy flips it the other way. This is \*not\* the same as a Brownian ratchet, which assumes each particle is indistinguishable. Since we have information, negentropy, or “free energy” about the current state of the system, we can extract that energy. This would then decrease the