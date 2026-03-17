---
title: "Social Physics and Informational Organisms II"
summary: "Let's say we have a robot that is trying to reach a point p on a line. It can sense 2 things. Whether it has moved left or right, and whether its goal"
date: "2018-02-09"
draft: true
---

Let's say we have a robot that is trying to reach a point p on a line.  It can sense 2 things.  Whether it has moved left or right, and whether its goal is to its left or right.  It has a set of batteries connected to switches and at each tick of the clock, it can turn a switch on or off and when there are no switches on, it can reverse the direction.

So it can choose -1 or +1, and it will get some information -1 or +1.

If the point is to its right, it receives a signal +1.  If it is already traveling in that direction, then switching on another +1 might cause it to overshoot if it is close.

Each time it flips a switch, it costs 1 energy.

Let's say it starts at point 0.  The goal is at +100.  For now it has no memory.  At time t=0, it flips a switch to the right.  This costs 1 energy.  At t=1 it is now at position 1 and has used 1 energy.  Since the goal is still to the right, it flips on another switch. This costs 1 energy.  At t=2 it is at position 3 and it has used 2 energy.  The goal is to the right, so it flips on another switch.  This costs 1 energy.  It has now consumed 3 energy.  At t=4, the bot gets to position 6 and flips on another.

So for the position we end up with the triangular numbers.

[table id=1 /]

Oh crap.  We overshot.  Time to slow it down.

[table id=2 /]

So we finally come to rest having overshot the goal by 125, or 9/4 what our original goal was.

We can easily see that if we kept trying with this naive tactic, we would just continue to overshoot further and further away.

So the robot must have some memory of the instructions that it gave, and it must find a way to use that memory comparing it to the sensor data.

The