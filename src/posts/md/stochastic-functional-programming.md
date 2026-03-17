---
title: "Stochastic functional programming"
summary: "Imagine you have 2 functional programs, each with the same type: Let's say [Integer] -> Integer, for the sake of it. Now imagine that rather than runn"
date: "2018-07-10"
draft: true
---

Imagine you have 2 functional programs, each with the same type:

Let's say [Integer] -> Integer, for the sake of it.

Now imagine that rather than running just 1 of these functions on the input, you run both of them and weight the outputs based on whatever measure you feel like.  Then you multiply the output by the weight.

Now instead of