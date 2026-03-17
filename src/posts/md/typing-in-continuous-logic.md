---
title: "Typing in continuous logic"
summary: "So if we say that our basic conditionals are figured out, then a next logical step would be to do a loop. Since we're dealing with probabilities here,"
date: "2018-07-21"
draft: true
---

So if we say that our basic conditionals are figured out, then a next logical step would be to do a loop.  Since we're dealing with probabilities here, what we really want to do is loop "enough" times.  Unless we revert to the unrealistic probabilities of 1 and 0, then our logic can't really guarantee that a loop will be run 10 times.

So if we say a = .8, we can try to create a control structure that would correlate to a classic loop along the lines of

```
while(a>.5)
{
do something
}

```

We do not have greater than or less than operators, nor do we have a while loop, so this code doesn't make sense to us yet.

First, let's discuss what our options are for how to store a in terms of type.  We could call it a float or a double.  Since it's a continuous value, those would seem to be our options.  However our probabilities are limited to positive values between 1 and 0.  This represents a minuscule part of the space doubles and floats allow.  We could instead look at an unsigned int and consider the maximum value of the int to represent probability 1, and then every intermediate value to represent a probability of that value divided by the max int value.  This would be a sensible choice.

However, since we have defined our special case of true booleans as a subset, it would be great if we had a type that could be represented by 1 bit only when possible, but expand the number of bits required into essentially what was discussed above when more resolution is necessary.

Managing the variable lengths would add considerable complication.  However there may be some possible advantages to gain. Even though it is more complicated, it may allow for some different kinds of operations to be more easily performed.

First, what would cause a transition from a pure boolean to our probabilistic boolean?  And visa versa?  In life such a transition occurs when we either learn more about a thing (increase dedicated bits), or generalize about it (decrease dedicated bits).  These are operations that neural nets perform all the time.

So lets move to something tangible.  If we have a music platform, and there are control structures to add a certain song to a playlist if it fits into a certain genre along with maybe some other factors, perhaps we start with a simple boolean.  Yes it is rock, or no it isn't, depending on which label is pulled from the database.  As time goes on, though, let's say the users determine how well the song fits the playlist, and this in turn informs our program's certainty of the genre.  Let's say a user indicates the song is not rock.  We probably should be less sure about recommending that song.  But we have 2 datapoints now.  Our original label said it was rock.  The user says it was not.  We probably don't want to just flip it and say there is now a 0% probability that it is rock.  That seems wrong.  But we also don't necessarily need that much precision, because we don't have much precision.  We just want a way to show that we're not totally certain. Why would we need to use a whole float for that? We could just use 2 bits instead.  01 or 10 could work.

So what we did is we merely appended or prepended a bit to our previous bit.  In C we could initially set this type up as an array of booleans, perhaps in chunks of 4 or 8 bits, and increase the size as needed.  It might be a bit of a pain to create, but nothing particularly difficult.  However in this state it really doesn't have a whole lot of advantage over unsigned ints. The overhead of managing it almost certainly outweighs the saved memory.

The part that is interesting to me is the idea that certain sections could be shared by multiple variables. So if the user says the song is not rock, they probably don't think it's hard rock.  So one thing you could do is have a function is_rock() and is_hard_rock() and have them both access a variable representing the user's input.  You could also certainly have is_hard_rock() reference is_rock(), however parent-child relationships are not always so straightforward. You could also create a struct for both rock and hard rock that access each datapoint that compose them via reference.  That way if the user changed their mind, their would be no rewriting.  You'd allow both genres to change what constitutes being a part of that genre, and you would be able to access these as variables in control structures.

Back to the loop idea. Let's imagine we have had a lot of users call a song rock, and we know it is not.  We don't want to overwrite their datapoints, but we want to be sure that the song is not classified as rock.