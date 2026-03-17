---
title: "Riemmann 2"
summary: "Messing around with the Riemmann Zeta Function, I have been led some little tidbits that I find interesting, albeit not very useful as far as I can te"
date: "2017-08-20"
draft: true
---

Messing around with the Riemmann Zeta Function, I have been led some little tidbits that I find interesting, albeit not very useful as far as I can tell,  and I was wondering if someone could check my work. 

So we start with the RZF: 

$$!\zeta(s) = \displaystyle\sum_{n=1}^{\infty} n^{-s} = \frac{1}{1^s} + \frac{1}{2^s} + \frac{1}{3^s} + ...+ \frac{1}{n^s}$$

which can be rewritten as 

$$!\zeta(s) = \displaystyle\sum_{n=1}^{\infty} e^{-sln(n)} = 1 + {e^{-sln(2)}} + {e^{-sln(3)}} +...+ {e^{-sln(n)}}$$

Each of those terms can then be written as an infinite series using 

$$!e^x = \displaystyle\sum_{m=0}^{\infty} \frac{(x)^m}{m!}$$

so we have 

$$!\zeta(s) = \displaystyle\sum_{n=1}^{\infty} \displaystyle\sum_{m=0}^{\infty} \frac{(-sln(n))^{m}}{m!}  = \displaystyle\sum_{n=1}^{\infty} \displaystyle\sum_{m=0}^{\infty} \frac{{{(-\sigma - it)}^m(ln(n))^{m}}}{m!}$$

So when you expand out the terms of $$(\sigma + it)^n$$ using the binomial coefficients, that gives you 

$$!\displaystyle\sum_{n=1}^{\infty} \displaystyle\sum_{m=0}^{\infty} \displaystyle\sum_{l=0}^{m} \frac{m!(-\sigma)^{m-l}(-it)^l}{l!(m-l)!}\frac{{{(ln(n))^{m}}}}{m!}$$

$$! = \displaystyle\sum_{n=1}^{\infty} \displaystyle\sum_{m=0}^{\infty} \displaystyle\sum_{l=0}^{m} \frac{(-\sigma)^{m-l}(-it)^l}{l!(m-l)!}{{(ln(n))^{m}}}$$

$$! =1 + 1 \frac{(-\sigma)ln(n)^1}{1} + \frac{(-it)ln(n)^1}{1} + \frac{(-\sigma)^{2}(ln(n)^2)}{2} + \frac{2(-\sigma)(-it)(ln(n)^2)}{2} + \frac{(-it)^{2}(ln(n)^2)}{2}    + ... +\frac{{{(-\sigma)^{m-l}(-it)^l(ln(n))^{m}}}}{l!(m-l)!}$$

From there we can separate out the imaginary and real components and set each of those equal to 0