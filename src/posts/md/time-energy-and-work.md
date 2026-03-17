---
title: "Time Energy And Work"
date: "2024-10-20"
draft: false
---

Imagine you’re in charge of a large company. You’ve been contracted with digging a large trench, but uniquely for this project, you must move the dirt that has been dug out to a certain location. Let’s further imagine you’ve never done something like that, and you’re in a world where moving dirt is not commonly done. You’ve got no idea what it’s going to take.

You ask your employees — can anyone move this pile of dirt. “Nope, it’s too big." “Anyone who moves it gets a $5k bonus.”.. no takers. So you put an ad out. $25k to move this pile of dirt. No takers, but you need to get it moved. You up it to $50k. Still nobody. You keep the ad out for weeks. A crew comes by and says they’ll do it but it will take 2 months. You need it done faster. Finally a crew comes that seems competent to do the job. They start but run over time and in the end they charge $75k.

Let’s run the story again. Instead of starting small and creeping up, you just decide you need it moved ASAP and offer $100k. Within a week the dirt pile is gone.

This is a silly hypothetical, but it’s meant to highlight the fact that there’s a clear relationship between the money that you’re willing to spend and the time that it will take to reach a goal. The same goal can be reached slowly and cheaply, or quickly but for more money.

[

![](https://substack-post-media.s3.amazonaws.com/public/images/b69d91ba-fabf-47d5-90c5-224bee6e0a90_1024x1024.webp)



](https://substackcdn.com/image/fetch/$s_!UTnS!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb69d91ba-fabf-47d5-90c5-224bee6e0a90_1024x1024.webp)

  
  
Now let’s look at this from a physical lens. Let’s talk about moving a ball from point A to point B. Let’s say the points are a distance X away. You can impart a certain amount of kinetic energy into the ball and get it to point B in a certain amount of time. If the energy you impart is higher, then the time will be lower. If the energy is lower, the time will be higher.

The choice of moving a pile of dirt is one that makes the physical interpretation clear. There’s a minimum amount of physical work that needs to be done to move the dirt. Kinetic energy needs to be imparted on the dirt one way or another to get it from point A to point B. It will take a certain amount of money to not only incentivize people to do that, but also to buy gas or whatever fuel is actually responsible for getting the mechanical work done. In a big enough dirt moving project the cost of the latter might dwarf the former. Ultimately these are 2 sides of the same coin. A company exhibits a form of constraint on a member by paying a certain amount… changing the probability of some states over others. A human constraints its arm to move in a certain way by stimulating certain motor neurons. Those motor neurons end in muscle cells which constrain the actin to behave a certain way.

However, just establishing this vague relationship isn’t very helpful. The question is whether we can glean anything new from these ideas. We can start with understanding what the relationship is between energy supplied and the minimum time required to move a ball from point A to point B. In order to impart energy on the ball, we have to use a force. We haven’t established a maximum force that we’re capable of imparting on the ball, but let’s just assume we can instantaneously impart 50% of the energy into the ball as kinetic energy, then at the very end we can do the opposite. That would mean that for a distance X, E = 1/2 mv^2 => v = 2sqrt(E/m), x/v = t => t = (x \* sqrt(m)) / (2 \* sqrt(E)). This is all to say that the time required is reduced by the square root of the energy provided.

If we assume that money linearly represents energy, which I believe is likely valid for low amounts (that is, amounts that don’t significantly impact the amount of money in circulation), then we should be able to empirically establish a relationship where people can e.g. spend 4 times the amount of money to reduce the time something takes by 1/2 on average. This would represent a power law relationship.

Of course there’s the argument “moving a ball along a line a certain distance is nothing like writing code etc.” But if you model the code situation as a state space with billions of dimensions that you’re moving through, then it’s not as different as it would seem at first glance.

In order to test this hypothesis, I think a great set of data to start with would be shipping data. According to ChatGPT, the increased cost of shipping in less time is generally modeled as an exponential relationship. However after a quick google, I found [this paper](https://www.sciencedirect.com/science/article/pii/S2772390923000203) , in which it appears that there’s a power law relationship between fuel consumption and shipping speed, which would closely track with the cost. The assumed power law has generally been a cube relationship, however this is being revised closer to 2. The paper only accounts for fuel costs, and not for issues like increased maintenance and staffing costs for vessels that are out at sea longer, which may push the relationship further toward 2.