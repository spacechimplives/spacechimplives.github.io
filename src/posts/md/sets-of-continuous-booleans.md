---
title: "Sets of continuous booleans"
summary: "How can we turn these continuous truth values into something we can actually run computations with? Let's imagine sets of classical booleans. Let's sa"
date: "2018-07-24"
draft: true
---

How can we turn [these continuous truth values](http://spacechimplifecom.local/2018/07/21/continuous-conditionals/) into something we can actually run computations with?

Let's imagine sets of classical booleans. Let's say we're trying to write an algorithm to determine whether 2 people are related based on various properties. We could define

```
def is_dog(it):
    IF (it.has_four_legs AND it.has_fur AND it.is_pet AND it.barks): 
        TRUE
    ELSE
        FALSE

```

So this is kind of a naive way to do it. There are animals that are clearly dogs that don't have 4 legs. There are also dogs that aren't pets. This will misclassify many animals. The concept of [family resemblance](https://en.wikipedia.org/wiki/Family_resemblance) points to a slightly more resilient algorithm.

In an imperative program it would be simple.

```
def is_dog(it, acc):
    VAR dog_points = 0;
    IF(it.has_four_legs):
        dog_points++
    IF (it.has_four_legs):
        dog_points++
    IF (it.is_pet):
        dog_points++
    IF (it.barks):
        dog_points++
    IF (dog_points >= 3):
        return TRUE
    ELSE:
        return FALSE    

```

This would seem extremely oversimplified at first glance, but the fact that normal curves exist all over in nature indicate that this could be closer to reality than you would think based on how simple it is.

A binomial distribution is what you get when you flip a coin N times. As you keep flipping the coin, it turns into a normal curve. In other words, normal curves can be modeled as a series of coin flips. In other words, the fact that height is normally distributed means that we can model the factors contributing to height as a series of coin flips, each contributing a minuscule amount to height. These factors could be genetic or environmental. It is clear that this is an oversimplified view. Some factors contribute more than others. But the key is that the randomness tends to be uniform throughout all scales. It really doesn't matter whether they all contribute the same amount if there are enough factors, they will still be randomly distributed. If there were one factor that vastly overshadowed the others, you would see a bimodal distribution. But since we often see a very well-shaped normal curve, in those instances we can assume there is no 1 factor that is so significant that it outweighs the others, so we can treat the situation as a series of coin flips... i.e. use the binomial.

In a similar manner, we can imagine different truth values for it.is_pet. We can assign a probability instead of a discrete boolean value. If we do this with enough variables and the probabilities are symmetrically distributed around .5, we should still see a similar distribution that tends towards a normal curve.

The most realistic version would take these factors into account, but with enough bits, we can translate these factors into more coin-flips and get a similar curve. In a way this makes sense. Sure maybe it.has_four_legs isn't resolved enough. It's clear that having 4 legs is more dog-like than having 2, so that should factor in some. But perhaps rather than just saying it.has_four_legs, it's better to say (it.has_four_legs OR (it.has_three_legs AND it.lost_one_leg)). In this case you're taking expanding the 1 bit, and essentially turning the statement into more and more a continuous boolean.. where it is can be in many more states than just TRUE and FALSE.

In real life everything has this property if you start looking hard enough. There are always edge cases. We use our human judgement on these, and computers do well with this using neural nets. We can keep zooming in infinitely. So in order to properly model it, we should develop a system of computation that reflects this.

So if we have a set of continuous booleans.. say have a set of 4 boolean criteria that are each met with a probability of 50%, we can model this very similarly to having 4 bits with 2 on and 2 off. Of course if these probabilities change we may have to allocate more bits to deal with the gradation. However if all 4 of the continuous booleans are changing, they may balance each other out and maintain a state of being able to be modeled with fewer bits.

Another thing is we can allocate more bits to give a greater resolution when the booleans represent something important, and scale to fewer bits when they should have less influence. For instance if we are running a program that is determining the predicted snowfall this year, we might have a boolean for june.is_record_heat, and that might get allocated a lot of bits.. Even if we only have 1 bit of information, it's potentially an important bit. However we might have continuous information about each day's air quality index... how far form average it is. But if we feel this information is less valuable, we can just assign it 2 or 3 bits.. then when we sum up all the bits. we will have an aggregate number that can easily be operated on in the same way that we would operate on any single bit.