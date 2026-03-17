---
title: "Causality and continuous conditionals"
summary: "In the discussion of continuous conditionals, I mentioned that if you play around with the formulas, you'll see why they make sense. In a circuit, if "
date: "2018-07-23"
draft: true
---

In the discussion of [continuous conditionals](http://spacechimplifecom.local/2018/07/21/continuous-conditionals/), I mentioned that if you play around with the formulas, you'll see why they make sense.

In a circuit, if you add 2 resistors in parallel, their total resistance weakens.  As you keep adding resistors, the resistance moves towards 0 but never hits it.  When you put them in series, the resistance just adds normally.  In parallel, the resistance adds as $$ \frac{1}{R_{tot}} = \frac{1}{R_1} + \frac{1}{R_2}... $$.  The OR function shown in the above post can be rewritten as $$ (1-p_{tot}) = (1-p_{1})(1-p_{2})... $$.

While the math isn't exactly the same, there is a hyperbolic aspect to both this addition in parallel and the OR operator defined in the above post.  They are both the inversion of a combination of inversions.  Since probabilities are a way of mapping an entire space onto the interval  [0,1], it kind of makes sense that the math wouldn't be exactly the same.  Probabilities and information often have exponential mappings to regular dimensions, and with exponential transformations comes mapping multiplicative operations to arithmetic or visa versa.

This isn't a very exact explanation, but I'm not totally sure of exactly why it comes out that way myself. The reason this is still worth discussing is because of causal sequences. A domino can fall over and hit another domino, which can in turn hit another domino.  This is causation in series.  A domino can also be arranged to fall due to more than 1 domino.  In other words, causality may be a directed graph, but it is not acyclical.

If there is a series causation, then that means each step in the chain must occur in order for the outcome to happen.  This is much like an AND gate.

If there is parallel causation, this means that in order for the outcome to happen not none of the possible causes happened.  In other words 1 OR the other happened.

So the fact that our parallel causation and parallel resistance show some mathematical similarity makes sense on some level.  However, it is necessary to dig deeper to see where the differences arise. Perhaps an exploration of how much information is transferred through the and and or gates would yield some more insight into these similarities.