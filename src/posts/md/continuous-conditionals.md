---
title: "Continuous conditionals"
summary: "[latexpage] Boolean logic is the basis of all computing. But these true and false values are assumed to be perfect. In practice our hardware may as we"
date: "2018-07-21"
draft: true
---

[latexpage]
Boolean logic is the basis of all computing.  But these true and false values are assumed to be perfect.  In practice our hardware may as well be perfect.  There are few misreads and miswrites, and error correction is built in at a low enough level that it does not matter to the programmer.  However there are situations where this does not work.

For these situations, we need new tools that do not rely on perfect boolean logic.  This is the case for quantum computing, however it also is important for understanding and working with neural networks, because while their outputs are generally ultimately mapped to a true or false, there are may cases where it would be more useful to work with the continuous probabilistic output they give.

For a variety of reasons, the easiest way to deal with this is via probabilities.  If this is  not convincing, then I can make a detailed case for it, but I doubt most people involved in these topics would have qualms with that statement. So the goal then is to implement control structures via probabilities, where a probability close to 1 is "truthy" and a probability close to 0 is "falsey."

So first thing is that "AND(A,B)" and "OR(A,B)" can be mapped very easily to $$ p_{A} \cdot p_{B} $$ and $$ 1-(1- p_{A})(1-p_{B}) $$ respectively for single values.  "NOT(A)" is just $$(1 - p_{A})$$.

If you play around with it you will see why. For the "AND" function, if either A or B are close to 0, the value is close to zero. When the probabilities are 1 or 0, they behave appropriately as the discrete boolean gates would. In this way, the discrete case is a special case of these continuous probability control structures. In [this post](http://spacechimplifecom.local/2018/07/23/causality-and-continuous-conditionals/), I attempt to provide a deeper, intuitive explanation, other than just "the math works".

In boolean logic one way to determine whether a large set of bits contains any data--whether it is "NULL" is to use NOT OR(all the bits).  This allows a mathematical definition of the IF operator as NOT(OR(A,B,...)).  This would translate to $$ 1-(1-(1-p_{A})(1-p_{B})) -> (1-p_{A})(1-p_{B})$$ ... which could alternatively be called "AND(NOT(A), NOT(B))."

So now we have at least the ability to do some basic control statements using only math.

So from a hardware perspective, as long as we can map all inputs to a signal voltage, we can directly take these inputs and use them to trigger logical chains, assuming we have gates that can perform these basic functions, which so far boil down to $$(1-V_{in})$$--[I'll call this the "inverter"] and $$(V_{1})(V_{2})$$--[I'll call this the "multiplier"].  Those circuit elements do exist, however I am not sure how accurate they are on computer-type scales.  In a quantum computer it seems the inverter would be the Pauli X gate and the multiplier I can't find an obvious correlate.