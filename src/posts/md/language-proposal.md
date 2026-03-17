---
title: "Language proposal"
summary: "A shared programming language that makes room for human input. Rather spend billions of dollars of engineering effort rewriting LoginService 200,000 t"
date: "2023-03-28"
draft: true
---

A shared programming language that makes room for human input. Rather spend billions of dollars of engineering effort rewriting LoginService 200,000 times, aggregate services into a shared decision-making pool where we vote on the contents of the standard library and pay people for implementing what was requested. 

We should not just vote with this language, but we should collectively invest with the language.  We can directly vote on proposed implementation of tasks and disburse funding for that task based on the votes. 

My proposal for the properties of such a language:  

1 - visual, dom-based. The DOM part is for convenience. Visual because it needs to be accessible to as many people as possible, and a visual language has a whole 2nd dimension to present and ingest information from.  This doesn’t preclude text interpreters from being written, but that should not be the priority.  A person logging in would enter an auth key like web 3 people have gotten used to, or just go to a normal web page that stores your key for you where you can log in.  What you would see is a list of all shared state you have access to as well as your tasks. You can propose changes to state.  Executing tasks is a form of this. Similarly an automated client would see shared state and be able to propose changes, and would have a list of tasks. 

2 - content addressed data. This is important in managing redundancy with how distributed this language would be.  It provides a lot of options for how to identify and resolve conflicts in s distributed system

3 - dependent types.  This is important because it is necessary for wrangling the complexity of real life tasks.  This level of type checking is necessary for planning and evaluating proposals that involve specific amounts of money, materials, specific times, etc.  For instance if a task will take 2 hours, if the calendar is stored as state in a system like this, it would be possible to check the calendar as part of the type check and not assign then that task if they don’t have available time. 

4 - algebraic effects.  We need to isolate effects if we have any hope of managing the complexity of these tasks. Not only that but the combination of dependent types and algebraic effects allows a specific dynamic that is a necessary piece of the puzzle. Through the algebraic effect system, type checking of the result of the effect can cause this language to just continue waiting until a valid input is provided. Allowing dependent types here could allow much more detail to be encoded about what is needed to continue execution.  

5 - voting as control flow resolution. Using the effect system, each branch can require a handler.  This resolution can be determined by normal things like predicates or pattern matching (could be the same basic thing with a dependent type system), but it could also be determined by human or IOT input. How?  A control flow effect type which is given a handler of “group choice” could assign a task to relevant individuals in the group to vote.  Once an acceptable number of voting tasks are completed, or a deadline passes etc, the choice is made. These votes could have some relationship to the value of the continuation which is ultimately chosen through some scheme like quadratic voting, and those who contributed to the creation and execution of that plan could be rewarded.  If this sounds far fetched, it’s not. It could simply be a DAO based in a block chain written in this language.  And this aspect is critical.  Without it, we will have a constant pressure to be more golem-like.  The tool will be used to extract an ever-increasing amount of work from us.  But if we’re funding activities that we deem necessary, then we will not have useless jobs. We can vote in a basic income and vote it up as is appropriate.

Essentially the proposal here is to build something similar to Unison, with IPFS as a back end, but with full dependent types and a visual front end.  Then build a block chain in that language with a DAO that everyone can join.  Make it so that DAO votes on the standard library, and can also assign tasks to other DAOs and people. Obviously that’s a bit of a task, but it’s very achievable at this point. The technology is there. 

Opening it up to be visual will allow so many nice things.  First, it will open up legitimate coding on your phone.  Then, imagine coding with gestures while you’re on the treadmill.   It should  also bring coding to people who physically can’t type, or who only have a phone. It will allow people who aren’t tech saavy to actually participate in all this web 3 stuff.  

Obviously all these features cannot be developed immediately, and there will be a long period of developing libraries before it’s really ready for mass adoption and ready to use. 

However, I think an interface of this form is coming sooner or later. It’s just a matter of whether it’s democratically controlled or not, how many years we have to spend fiddling with spagghetified variants with the same feel of today’s web.   We have the opportunity to wrangle ai and our floundering institutions and put ourselves back in the driver’s seat.  

I recently quit my job to fulfill this, but I don't have the resources to get it to where we can accept payments.  Message me if you’re interested in helping make this happen in some way.