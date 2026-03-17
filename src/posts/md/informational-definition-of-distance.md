---
title: "Informational Definition of Distance"
summary: "What exactly is a dimension? We know of our spatial dimensions, as well as time. And when we're dealing with math or statistics, we often talk about d"
date: "2017-08-03"
draft: true
---

What exactly is a dimension? We know of our spatial dimensions, as well as time. And when we're dealing with math or statistics, we often talk about different dimensions something can interact in.

But we don't actually have a great idea of what space is. We know how it relates to time, which is another thing we don't really understand.

One way to look at it is in terms of probabilities of paths, which can lead itself to the concept of an infinite number and type of dimensions.

For instance, if you have a glass of water on a table, how far is the water from the table?

The probability of a drop of water going through the glass to the table is much lower than the probability of it moving over the lip of the glass to the table.

From our perspective, the table and water are very close, however from the water's perspective, the table is far.

When the glass is just sitting there at a given instance, of course, we assume that the glass will be stationary and upright.

But given time, the water will end up outside the glass one way or another. The glass might tip over, the glass might break, the water might erode the edges of the glass, it might evaporate and condense. All of these are possible paths more probable than the water teleporting through the bottom of the glass.

However since we know that the water will end up outside the glass eventually, we know that the sum of all these probabilities will add up to 1 asymptotically as time increases.

If the water is in a glass in front of someone who is thirsty, perhaps the most probable path would be into that person's stomach.

We could then say that the distance, between that person's stomach and the water is less than the distance between inside the glass and below it on the table, if you take into account all these extra "dimensions" along which these possible paths could travel--at least from the water's perspective.  We could call this the "causal distance" or something to separate it from the distance we experience as observers.

Think of it in terms of flow through a pipe. If you have water going at a certain speed, but decrease the cross-sectional area of the pipe by 2, then only 1/2 the volume of water will get through. Decreasing the cross-sectional area is decreasing the number of paths, each with approximately equal probability of being taken, by 2. You could say that the volumetric flow rate was halved, or you could say that the distance increased.

That may seem a bit silly, but there is another important metaphor that comes into play that was the main motivation for thinking this way: bandwidth. Reducing the bandwidth by 1/2 reduces the amount of information that can move through by 1/2. The number of paths that a bit of information can take to get to a certain location has a huge statistical bearing on when it will arrive. Rather than seeing the bit as going slower, it makes sense to see the distance the bit is traveling as larger. In other words, the distance between 2 nodes in a network is inversely proportional to the total bandwidth between them.

If distance is defined in these terms, then that means acceleration and velocity can be. If distance is inversely proportional to bandwidth 1/(bits/sec), then velocity would be in units 1/bits which would make a bit equal to a second per meter. Say we have a distribution of possible paths. If we have more paths with more evenly distributed probabilities, we have less information about which path the particle is likely to take. If we want to increase our information about which path the particle is going to take by 1 bit, we would want to half the number of paths if each path had an equal likelihood of being taken. This would double the time that it took for a message to go 1 unit of distance.

Of course this is a lovely little bit of mental play, but could it have any practical use? I believe so.

I believe the laws of thermodynamics will tend to hold up under such a definition of space. I say tend to because I mean on average over time. If they do, this definition could be used to apply existing mathematical tools to transitions between states that aren't spatial in nature, but are still time dependent.

In fact, I think this is the reason why Zipf's law holds across so many areas. Networks of people follow similar laws of space that matter does. The more you communicate with a person, the more likely you are to communicate with them in the future. In other words, the larger the bandwidth between 2 nodes in a network, the larger it tends to grow.

We should also then be able to talk about forces in terms of changing the probability distribution of various paths. This would also make the idea of acceleration as a change in the shape of space totally clear. The distances will change due to the differences in probabilities of the various paths.

However we need a few experiments to check this idea.

Imagine you have 2 oppositely charged particles at either end of a U-shaped corridor. How long will it take them to meet at the curved part of the U? I'm not sure how well this experiment would work. At first though, I'm thinking "wouldn't they just slam into the barriers between them and stick to it?" I'm not sure. They might. However, I think at a reasonable temperature, they would inevitably meet at the joined part and it would *on average* take a time that reflected Coulomb's law calculated using the distance around the full length of the U.

You might think "If that reduces the number of paths and is supposed to have physically observable effects, how about just reducing the size of a container with 2 charge particles. Shouldn't they then move slower?" Well, in that case you're reducing the number of possible paths, but you're also increasing the probability that any given one will be taken--I'd imagine at the same rate.

If it's true that distance depends on the number of paths and their respective probabilities of being taken, it would mean that light would take longer to get somewhere with fewer paths available for the light to travel. The first thought that pops into my head is fiberoptic cables. Does a single pulse travel slower down a thinner cable? If not, is it a noisier transmission? By what factor does the thickness of a cable change the number of available paths and the probability of those paths being taken?

We do have to more rigorously define our model to determine whether observations would fit expectations. However bringing rigor to these kinds of ideas takes a long time and a lot of work.

I do think this is a path worth exploring.  The idea of figuring out how to include information into the laws of physics could be very useful, and there are all kinds of parallels that I would like to see explored.  One big one being how to extend this concept of space to allow the use of inner products on it.  Also, using it as a starting point to explore fractal spaces, etc.