---
title: "Continuous information II"
summary: "Last post was about quantifying information relative to uncertainty of the input. &nbsp;The equation for this is basically 1 - information entropy (as"
date: "2017-12-10"
draft: true
---

Last post was about quantifying information relative to uncertainty of the input.  The equation for this is basically 1 - information entropy (as in one minus the information entropy)

So extrapolating to the continuous case, we can say that we have all sorts of different inputs that we sum, and each time we add one, we reduce the input voltage.  We add an infinite number, and when they are all on, the voltage is 1.  Since we have an infinite number, we can turn any number on to create a continuous set of values.

In this case, it no longer makes sense to talk about an individual state.  The probability that exactly half of an infinite number of switches is on is 0. We can only discuss ranges.  We can start with the obvious.  The probability that there is an output between 0 and 1 is 1.  The probability that the output is above .5 is .5, and below is .5.

Let's say we have noisy inputs. Each input has a 25 percent chance of being flipped.  Let's say we're going for .8 volts.  So 80% of the inputs try to flip on and 20% try to stay off. We have the possibility that each of the infinite bits are 0.

So imagine there are 1000 bits. 800 of them are supposed to be on.  Of those 800, an average of 200 will have flipped. Of the 200 that are supposed to be off, and average of 50 will turn on.  So this means, on average we will actually register .65 volts rather than .8.   In a perfect channel, we would register .8 volts.  So we have lost .5 volts on average.

Image we attempt a voltage of 9.  Of the 900 that should be on, an average of 675 will correctly register their value.  Of the 100 that should be off, 25 will instead be on.  This leaves us with .7 volts.  If we try to go full power, we will get an average of .8 volts.   Similarly on the other end, we will tend toward the mean.  If we try to go to 0 volts, we will actually come to .2 on average.  We have basically narrowed our measurable window.

What's the probability that all the bits are correct?  \(.75^{1000}\).  The probability that exactly 1 is wrong would be according to the binomial distribution \(\binom{999}{1}(.75)^{999}(.25)^{1}\)..

 

Now this 1 that is wrong.. which way is it wrong?  Is it an on bit flipped off, or an off-bit flipped on?  There's a 80% chance is will be an on bit flipped off, so 20% chance of the opposite.   What if there are 2 flipped? We get a .64 chance of both being on bits flipped off.  a .04 chance of them both being off bits flipped on, and that leaves 32% chance that they cancel each other out. For 3? We're starting to get another binomial distribution.

So we have a regular binomial distribution: \(\binom{n}{k}(p)^{k}(1-p)^{n-k}\). So for n number of errors, we have a probability that k of them will be + errors.  This will leave n-k as - errors.  The + errors and - errors will even each other out.  The only ones that will contribute to the end voltage will be the ones left over.  Since we said k are + errors, we can add them to the voltage, and we can subtract the - errors.  so that would leave \(V_{no errrors} + k - (n - k)\).  Or  \(V_{no errrors} + 2k - n \).

By summing all the possibilities multiplied by their probabilities, we can calculate the expected voltage for a given error rate and target voltage.  However, it would be useful to calculate a distribution of possible input values for a given measured voltage, as well as a distribution of possible output values for a given set of inputs.

So if we measure the voltage at .7, what is the probability that .5 was intended?  And what is the probability that .9 was intended?

And if before the noisy channel, we try to input a .7, what is the probability we will get .9 or .5 instead?