---
title: "Base 2 System"
date: ""
draft: true
---

Per this essay on [representing computation with binary matrices here](https://spacechimplives.substack.com/p/computing-with-geometry), I began considering what the matrix would look like under different conditions. This led me to consider the infinite situation which made me realize we would then be talking about a matrices indexed with 2-adics. Or we could also view this as considering 2-adics on a space filling curve.

This can be transformed with either a Morton indexing scheme or Hilbert, which might give access to more physical or geometric tools. For instance operators seem like they could be helpful. This means we would need to consider ultrametric geometries.

**Category Theoretical Implications**

I also had suspected that this structure could be related to category theory since the left side represents a morphism carried out on the object on the right side and they have equivalent representations.

**Periodic behavior**

Since we know the matrix expands in size by leaps of n^4, we can make certain guarantees analyze what digits will be at the bottom right by looking at the behavior modulo powers of 4.

We should be able to look at the discrete fourier behavior on the digits to analyze the behavior of rationals. <TODO>

**1/2 in the 2-adics**

1/2 is not defined in the 2-adics. However if we consider …111111\_2 (which equals -1) to be the sum of …101010101\_2 and …01010101\_2, then we end up with an equation 2x + x = -1, or alternatively x + 1/2x = -1. This gives us x = -1/3 or x = -2/3 respectively. If we then divide the larger by the smaller value, that gives us 1/2. <TODO>

**Wrap Around Indexing**

After some exploring with 2-adics I started considering how to represent 1/2 even though it’s not “allowed.” In maninpu <TODO>

**i in the 2-adics**

If you do newton’s iteration on -1 in the 2-adics (…1111111\_2) then you end up with an interesting patter arising. You start with your random seed digits, but every iteration gives you <TODO>

**Complex Indexing**

If we treat

**Mahler Expansions**

**Operation Tree**

Digits are constructed without considering how this is possible. We implicitly construct a potentially infinite list of digits without