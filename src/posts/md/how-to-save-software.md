---
title: "How to save software"
summary: "Short answer: Create a shared standard that exposes services as a shared programming language with the following characteristics: (1) content addresse"
date: "2023-03-27"
draft: true
---

Short answer:

Create a shared standard that exposes services as a shared programming language with the following characteristics: 
(1) content addressed
(2) 

It seems to be generally acknowledged that software is running into some problems.  We've accepted an decreasing level of reliability into our applications.  

Why has this happened?  (1) The efforts of engineers are fragmented across many projects with a huge amount of redundancy, so the total of all engineering efforts is mostly redundant .  (2) The cost of reverse engineering is tiny.  So access to a certain functionality is hard to control.  So the only way to stay ahead of the competition is speed. (3) Network effects are exponential and abound in software.  So a tiny difference in ranking between competing networks one year can suddenly be huge the next year. 

Because of this, the business imperative has been speed of entry into market, and speed of introducing new market-capturing features.  The result is that compromises are made to do things the "quick and dirty" way.  This is almost glorified by some managers, but the way is called "dirty" for a reason.  Eventually the grime builds up and gums up the gears.  Every engineer has experience with this.  But the culture goes far beyond engineering.  It's just a given at this point in our society that "doing" is way more valuable than "thinking" (if LinkedIn posts are any indication of our society, that is).  Hold up.  Are we sure about that?  Last I checked you're supposed to think before you act?   

So what to do? 

Access to a certain kind of functionality is hard to control, so we need to design new ways to make money that incentivize the mode of work we need to develop good software.  Ones that don't depend on controlling that access through speed or otherwise.  Ones that don't depend on capturing and controlling the network.

One of the clear disadvantages of the system we've developed is fragmented efforts toward the same goal.  We all know the pain of running out of passwords from all the login services.   How many many variables do you think are out there named LoginService?  How many hours of your lives were spent on code like that?  

Why is this information replicated in so many places?  (1) The separate applications don't have access to shared state (2) Even if they did and somehow the tenancy/privacy/security issues of such a scheme were resolved, there is no standard for writing and accessing that state (3) Even if there were, services with the largest market share for any given functionality would not be incentivized to create or abide by standards unless compelled by a regulatory force (a la iphone charger).  Any such scheme would have a serious tragedy of the commons situation to get around.  

(1) Why do they not have access to shared state? Services are redundantly duplicating infrastructure that keeps the data separate, with no mechanism to join the data across services.  Why? Because if they don't host their own data, (1) they can't easily use that data within their application (2) 

Another clear 

One approach is--rather than trying to treat each service as independent--we can consider that all these services are part of a broader network of shared state and shared instructions. Accounts are redundant state, profile information is redundant state. If you were writing these multiple services that each require these things as a single program, you would not duplicate this information. You would have a single service provide this information to multiple applications.

I am of the belief that [societies run on machine language](https://spacechimplife.com/wp-admin/post.php?post=788&action=edit).   (Note: not people, societies)  So if that is true, then perhaps the most efficient way to address the code smells of our society is through a shared programming language. This is the clear result of giving competition primacy over cooperation. Competition always incurs redundant costs, almost half of which tend to be flushed down the drain. It has its place of course, but maybe it should be an energizing force infused through another structure, rather than trying to force it to serve a purpose it was never good at... organizing.