---
title: "Continuous Booleans and Neural Nets"
summary: "One thing that continuous booleans should be able to help with is inference from neural nets. Sometimes neural nets need to stay probabilistic, but so"
date: "2018-07-25"
draft: true
---

One thing that [continuous booleans](http://spacechimplifecom.local/2018/07/21/continuous-conditionals/) should be able to help with is inference from neural nets.  Sometimes neural nets need to stay probabilistic, but sometimes it would be good to read the internals of the net and infer the logic that the net is using.

Another thing that would be good is to be able to "imprint" some logic into the net.. as a repair or something potentially.  In many cases, the weights of a net are just too neutral.  However in some cases, the net will set the weight very far in one way or the other.  If we can interpret these weights as combinations of these probabilistic AND/OR gates, we can gain insight into the logic the net is using and transfer it into boolean logic.

There may be parts of the net that don't have the required confidence level, and one could "lace them up" with boolean conditionals where they are clearly defined, dividing the parts of the neural net which are acting somewhat independently of each other into separate nets and allowing them to be trained on specialized datasets, or be reused in other processes.

We can see that a given node would essentially be an OR operation among the various inputs.  A negative weight would be a NOT.  The AND is a bit more convoluted.  Say there is a net with 5 layers--nodes A-Z in each.  Lets say there's a bit of logic in the net that requires an AND of the input of A and C from the first layer (1A and 1C).  So the 2nd layer D (2D) might take a high weight from both.  If that's the case, then it is essentially an OR.  If it has a threshold of 1 then it could take a weight of .5 from either, and 0 from all others.  In this case, it would behave like an AND.  Both 1A and 1C would have to be on in order to activate 2D.  However, it would take a long time and some luck to reach this configuration.

A more robust AND configuration for the net would be to use 2 layers.  The first layer would have 1 strong