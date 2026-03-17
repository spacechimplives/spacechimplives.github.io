---
title: "Toward An Analytic Continuation Of"
date: ""
draft: true
---

What would and analytic continuation of lambda calculus even mean? It would allow us to interpret programs as if they’re elements of a continuous complex valued space rather than as discrete syntactic objects. This would have numerous interesting applications, from machine learning, to systems theory, etc.

If we consider lambda terms as elements of a complex analytic

* * *

OLD

What would and analytic continuation of lambda calculus even mean? It would allow us to interpret programs as if they’re elements of a continuous complex valued space rather than as discrete syntactic objects. This would have numerous interesting applications, from machine learning, to systems theory, etc.

Justification:

This is plausible. Many pieces already exist. When lambda terms are interpreted as functions, application becomes ordinary function composition. Composition already has analytic extensions. Moreover, analytic continuations of combinatorial and discrete constructions are standard in mathematics: factorials extend to the gamma function, combinatorial sums extend via generating functions, etc.

Roadmap:

We can start with likely readily approachable examples such as analytic church numerals. Since church numerals are just iteration, it stands to reason that we should be able to directly apply those concepts.

Then we can move to combinators. Starting with a combinator system would allow us to avoid dealing with variable substitution and beta reduction to begin with. Many people may be familiar with the SK combinators, but there’s also the iota combinator which may prove an easier target to begin with since it’s a single object.

The difficult part is creating and understanding an analytic domain which can be interpreted either as a program or as a complex number. This would need to be extended to an entire combinator algebra on which analytic application as well as the S & K (or iota) combinators can be defined. I’ve been attempting this as an amateur and I think there are some promising approaches. If we consider numbers as a coinductive space of hypergraphs where edges represent hyperoperations, and/or a bi-infinite complex extension of the 2-adics.

The next step would be approaching parameter substitution and environments to achieve a full lambda calculus. Using de bruijn indices would avoid some of the complications of considering arbitrary symbols.  
  
In the end we should be able to write a program, compile it to either a lambda calculus or some representation of complex numbers, and view it as an entire landscape. And it’s a taboo to mention it, but there’s good reason to believe whatever analytic domain we arrive at might give us a better understanding of the Riemann zeta function as well.