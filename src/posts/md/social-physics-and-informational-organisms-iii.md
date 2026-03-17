---
title: "Continuous Information I"
summary: "So ICP's are information. &nbsp;Information can be discrete, as in the binary information of computers, quaternary like the genetic code, ternary like"
date: "2017-12-10"
draft: true
---

So ICP's are information.  Information can be discrete, as in the binary information of computers, quaternary like the genetic code, ternary like quantum computing, but it can also be continuous.

How can you quantify continuous information? Let's start with a binary system.  In this system 1 bit of information can take 2 values.  To quantify something with 4 values would require 2 bits.  The four values are 00, 01, 10, 11.

In reality, this requires a mechanism with the ability to distinguish between a high and low logic voltage with very high accuracy.  At the level of the computer, this accuracy is assumed to be 100%.  Each state is assumed to be known with 100% confidence.  When this assumption breaks down, the computer stops functioning altogether.

Let's take their output voltages and sum them.  Now we have 0, high, and 2x high--3 values.  Our original states.  If we receive and output of 0 we know with 100% confidence that the value was 00.  If we receive 3, we know it was 11.  If we receive 01, or 10, we have a 50/50 shot.  However on the output end, the information we have is no longer 2 bits.  It's 1.584963 bits ($$log_{2}3$$).

Let's say the 4 values are information about states of the environment, like "predator" or "tree" or "food" or "flower".  Since predator and food are more likely to be important, we would want them to be assigned to 00 or 11, and since flower and tree aren't a huge deal, and the reactions to both will probably be similar, we can comfortably give them values of 01 and 10 without a major issue.  And we will be right 50% of the time. So we have 1*100% + 1*100% + 2*50% --> that gives us 3... the number of states we can identify with 100% certainty.

Increasing this to something like 8 inputs, we have a lot more possible initial states. 2^8 (256) possibilities.  Now, rather than 3 values, we'll have 9.  Rather than 8 bits of information, we'll have 3.169925 ($$log_{2}9$$).  If they are all off or all on, we can again identify the input with 100% confidence.  If there is 1 on, then we can narrow it down to 8 states.  If there are 2 on, then it could be any of 28 states, 3->56, 4->70, 5->56, 6->28, and 7->8.

 

So that's a confidence effect on the output side.   Now let's look at the input side.

Let's go back to our 2 bit system and imagine that when a 1 or 0 is input into the system, we are only 75% sure that that was the real value.  So we receive an input of 00.  We know that there is a 56.25% (.75^2) chance of this being the actual value.  That's better than chance.  So we have 1*75%+1*75%+1*75%+1*75%.  This gives us 3 -- the number of states we can identify with 100% certainty

For an 8 bit system, we fare a bit worse.  For any given input, we have a 10% ($$.75^8$$) chance of it being correct.  It is no longer better than chance.  If we want to have confidence in our ID's we'll need to figure out a way to increase our confidence.

Now we'll combine the 2.  Let's say we have 2 bits that we're 75% confident about.  We get an input 00.  But we're only 56.25% sure that's correct now.  It could have actually been 01 or 10.  Not good enough if you've got a tiger lunging at you and there's a 43.75% chance you'll think it's a turkey sandwich.

Let's check our states and go back to summing the voltage.  If we get a 0, we're 56.25% sure that it was 00.  If we get a 2, then we're 56.25% sure that the original input was 11.  If we get a 1, then it could be 01 or 10.  Since there's a 56.25% chance that the original input was correct, the chances that it was one or the other should be 80.859375 % ($$1- (1-.5625)^2$$).

So if we decide to map a 1 output to danger instead, we can do better than just using an input that we're only 75% confident in.  We can then map 0 to food and 2 to trees or visa versa and do better than chance on each.  Alternatively, we could map danger to 0 or 2 and map 1 to food, and be ~81% confident in either. And still yet another alternative is to do some combo like group 1 and 2 both to danger and have 0 be food.  That way, if we get a 2, we can be about 94% sure it is danger, and if we get a 0, we can be slightly more sure than chance that it's food.

So we started with 2 inputs that we were 75% sure about each with. At the end, we have 3 outputs, 2 of which we are 56% sure of, and 1 that were 81% sure of.

How much information do these quantities represent?  According to models of [channel capacity](https://en.wikipedia.org/wiki/Information_theory#Channel_capacity), the 75% confidence rate should give information of $$1-H_{b}(.25)$$ where $$H_{b}$$ is the [binary entropy function](https://en.wikipedia.org/wiki/Binary_entropy_function).  [This comes out to be](http://www.davidyding.com/binEntropy.html) 1 - 0.8112781244591328 =  0.18873 bits per bit with 75% confidence.  Since there are 2, that means we started with  ~ 0.37744 bits per signal.  This number represents the maximum amount of mutual information that can be obtained through this channel.  Using this same calculation on the end result, we get 0.29852854011 for 1, and .022 bits for 00 and 11 (which we are only slightly more sure than chance of) = ~.32 bits.  This is as opposed to the .044 bits we would have if we tried to read each state separately and didn't create our redundancy.

Using it on the result where we group any output with a 1 to danger, we end up with about .7 bits per pass.  A similar analysis for 8 bits would show that we can find groupings to create almost arbitrary confidence levels as long as we can find an appropriate grouping.