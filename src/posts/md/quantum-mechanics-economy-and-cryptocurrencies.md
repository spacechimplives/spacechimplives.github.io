---
title: "Quantum Mechanics, Economy, and Cryptocurrencies"
summary: "I read this article referencing this paper which demonstrated the use of the mathematical tools of quantum mechanics to deal with another realm of stu"
date: "2017-06-24"
draft: true
---

I read [this article](https://www.technologyreview.com/s/608139/new-model-of-evolution-finally-reveals-how-cooperation-evolves/) referencing [this paper](https://arxiv.org/pdf/1706.03058.pdf) which demonstrated the use of the mathematical tools of quantum mechanics to deal with another realm of study... namely the propagation of a cooperation strategy in an iterated prisoner's dilemma game.

How could the laws of thermodynamics apply to something as abstract as cooperation?

It's a point where a lot of people's intuition will start to break down because there doesn't seem to be a reason that these dynamics which apply to dead particles moving around in deterministic ways could also predict what choice someone will have, when decisions are related to such complex factors as their upbringings, environments, et cetera.

Similar examples include various applications of Zipf's law and or the Gaussian distribution (bell curve).  In these examples, people are often astounded at how these shapes pop up in such diverse fields as biology, economics, astrophysics, quantum mechanics, etc.

The reason these patterns pop up everywhere is both simple and amazing at the same time.

Let's take the exponential function, for example.  It is a function f(x) that satisfies the equation.

$${\displaystyle {\frac {d}{dx}}{\left(f(x)\right)} \sim kf(x)}$$

In other words, it is its own derivative.  What does that mean for someone who doesn't know calculus?  It means that the bigger something is, the faster it grows.  This intuitively makes sense.  The more bunnies there are, the more bunny babies there will be.

This applies to other realms as well.  If something causes more of itself to exist, either through reproduction, or self-causation in some other way, it will behave as an exponential.  So this makes it a little clearer why the exponential and related patterns might appear.  So the pattern is not totally random--it is the manifestation of self-causation.   The exact form that this takes is still mysterious and arbitrary in lots of ways, but there is at least a sort of logic to it.

Similarly there is a logic to the normal curve.  Usually when people are presented with it, it looks like this:

$${\displaystyle f(x\;|\;\mu ,\sigma ^{2})={\frac {1}{\sqrt {2\pi \sigma ^{2}}}}\;e^{-{\frac {(x-\mu )^{2}}{2\sigma ^{2}}}}}$$

That's a bit hard to parse out what is happening.  It is a great form for using the distribution to solve practical problems.  However, when you strip it down to its most basic form, it is easier to see the underlying causal logic to why such a distribution would pop up.

In its most stripped-down form, the gaussian looks like this:

$$f(x) = e^{-x^{2}}$$

Quite a bit easier to parse, right?  Well now what we can do is play with the exponents a little.  We understand a bit of the logic to the exponential function itself, so what if we try to isolate that somehow and use that to understand the logic behind the function?  We could rewrite the equation as

$$f(x) = ( e^x ) ^{-x}$$

or equivalently:

$$f(x) = ( e^{-x} ) ^x$$

So it seems that this could have properties of an exponential which is applied to another exponential in the opposite direction.

Trying to redefine that in similar terms to the original way I defined the exponential-- as a differential equation:

$${\displaystyle {\frac {d}{dx}}{\left(f(x)\right)} \sim -kx (f(x))}$$

So we can see that the derivative is based on