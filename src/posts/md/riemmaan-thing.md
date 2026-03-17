---
title: "Riemmaan Thing"
summary: "Messing around with the Riemmann Zeta Function, I have been led some little tidbits that I find interesting, albeit not very useful as far as I can te"
date: "2017-08-18"
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

Expanding this out, a pattern starts to appear.. The first term for every m ends up being $$\frac{{{(-\sigma)^{m}(ln(n))^{m}}}}{m!}$$ and the last term is  $$\frac{{{(-it)^l(ln(n))^{m}}}}{l!}$$ when l=m, meaning in every iteration of m you have these terms.  We can thus take them out as exponentials.  However, since every exponential series starts with 1 and there is only 1 1 at the beginning of the series, we also must subtract 1 from the parent series in order to take both the first and last terms out.

$$!\displaystyle\sum_{n=1}^{\infty} e^{-{\sigma}ln(n)} + e^{-itln(n)} - 1 + \displaystyle\sum_{m=2}^{\infty} \displaystyle\sum_{l=1}^{m-1} \frac{(ln(n))^{m}(-\sigma)^{m-l}(-it)^l}{l!(m-l)!}$$

So then we expand out that last term some more and get:

$$! [m=2, l=1] \frac{(-\sigma)(-it)(ln(n)^2)}{(1!)(1!)} + [m=3, l=1] \frac{(-\sigma)^2(-it)(ln(n)^3)}{(2!)(1!)} + [m=3,l=2] \frac{(-\sigma)(-it)^2(ln(n)^3)}{(2!)(1!)} + [m=4, l=1] \frac{(-\sigma)^3(-it)(ln(n)^4)}{(3!)(1!)} + [m=4, l=2] \frac{(-\sigma)^2(-it)^2(ln(n)^4)}{(2!)(2!)} + [m=4, l=3] \frac{(-\sigma)(-it)^3(ln(n)^4)}{(1!)(3!)} + ....$$

If we only take the terms where l=1, we can factor out a $$(ln(n)(-it)$$ and we get:

$$! [m=2, l=1] \frac{(ln(n))(-it)(-\sigma)(ln(n)^2)}{(1!)(1!)} + [m=3, l=1] \frac{(ln(n))(-it)(-\sigma)^2(ln(n)^2)}{(2!)(1!)} + [m=4, l=1] \frac{(ln(n))(-it)(-\sigma)^3(ln(n)^3)}{(3!)(1!)} + ... + \frac{(ln(n))(-it)(-\sigma)^{m-1}(ln(n))^{m-1}}{(m-1)!}$$

And if we only take the terms where l=m-1, then we can factor out a $$(ln(n)(-\sigma)$$ to get:

$$! [m=2, l=1] \frac{(ln(n))(-\sigma)(-it)(ln(n))}{(1!)(1!)} + [m=3, l=2] \frac{(ln(n))(-\sigma)(-it)^2(ln(n)^2)}{(2!)(1!)} + [m=4, l=3] \frac{(ln(n))(-\sigma)(-it)^3(ln(n)^3)}{(3!)(1!)} + ... + \frac{(ln(n))(-\sigma)(-it)^{m-1}(ln(n))^{m-1}}{(m-1)!}$$

But, there's only 1 of that 1st term and no 1s, so if we're going to take these exponentials out, then we're going to have to add an extra term to the series and subtract it from the parent series, as well as a 1 times whatever we factored out for each. So now we're looking at:

$$!\displaystyle\sum_{n=1}^{\infty} e^{-{\sigma}ln(n)} + e^{-itln(n)} - 1 - (ln(n)(-\sigma) - (ln(n)(-it) - (-\sigma)(-it)(ln(n))^2 + (-it)(ln(n))e^{-{\sigma}ln(n)}+ (-\sigma)(ln(n))e^{-itln(n)}+ \displaystyle\sum_{m=4}^{\infty} \displaystyle\sum_{l=2}^{m-2} \frac{(ln(n))^{m}(-\sigma)^{m-l}(-it)^l}{l!(m-l)!}$$

Keep expanding the terms and you get:

$$! [m=4, l=2] \frac{(-\sigma)^2(-it)^2(ln(n)^4)}{(2!)(2!)} + [m=5, l=2] \frac{(-\sigma)^3(-it)^2(ln(n)^5)}{(3!)(2!)} + [m=5,l=3] \frac{(-\sigma)^2(-it)^3(ln(n)^5)}{(2!)(3!)} + [m=6, l=2] \frac{(-\sigma)^4(-it)^2(ln(n)^6)}{(4!)(2!)} + [m=6, l=3] \frac{(-\sigma)^3(-it)^3(ln(n)^6)}{(3!)(3!)} + [m=6, l=4] \frac{(-\sigma)^2(-it)^4(ln(n)^6)}{(2!)(4!)} + ....$$

Taking the terms where l=2 and factoring out $$ \frac{(-it)^2(ln(n)^2}{2!} $$:

$$! [m=4, l=2] \frac{(-it)^2(ln(n)^2)(-\sigma)^2(ln(n)^2)}{(2!)(2!)} + [m=5, l=2] \frac{(-it)^2(ln(n)^2)(-\sigma)^3(ln(n)^3)}{(3!)(2!)} + [m=6, l=2] \frac{(-it)^2(ln(n)^2)(-\sigma)^4(ln(n)^4)}{(4!)(2!)} + ....$$
(series 1)

Note that this time, we're missing the 1st 2 terms of the exponential series

Doing the same thing for l=m-2 and factoring out $$ \frac{(-\sigma)^2(ln(n)^2}{2!} $$:

$$! [m=4, l=2] \frac{(-\sigma)^2(ln(n)^2)(-it)^2(ln(n)^2)}{(2!)(2!)} + [m=5, l=3] \frac{(-\sigma)^2(ln(n)^2)(-it)^3(ln(n)^3)}{(3!)(2!)} + [m=6, l=4] \frac{(-\sigma)^2(ln(n)^2)(-it)^4(ln(n)^4)}{(4!)(2!)} + ....$$
(series 2)

We're missing the 1st 2 terms of this one as well, and we are also reusing the term where m=4 and l=2.  So we'll have to add all these terms to the parent series in order to pull out the exponential. 

So the terms we will have to add are:

$$ \frac{(-it)(-\sigma)^2(ln(n))^2}{2!} $$

and

$$ \frac{(-it)^2(ln(n))^2}{2!} $$

to prepend to complete series 1, as well as

$$ \frac{(-\sigma)(-it)^2(ln(n))^2}{2!} $$

and 

$$ \frac{(-\sigma)^2(ln(n))^2}{2!} $$

to prepend to series 2 so we can pull them out as exponentials.

Plus, we have to add in the term that we reused.  In this case, the term where m=4 and l=2 -- $$\frac{(-\sigma)^2(-it)^2(ln(n))^4}{2!2!}$$

This leaves us with:

$$!\displaystyle\sum_{n=1}^{\infty} e^{-{\sigma}ln(n)} + (-it)(ln(n))e^{-{\sigma}ln(n)} + (-it)^2(ln(n)^2)e^{-{\sigma}ln(n)} + e^{-itln(n)}  (-\sigma)(ln(n))e^{-itln(n)} + (-\sigma)^2(ln(n)^2)e^{-itln(n)} - 1 -  (ln(n)(-\sigma) - (ln(n)(-it) - (-\sigma)(-it)(ln(n))^2 - \frac{(-\sigma)^2(ln(n)^2}{2!} -  \frac{(-it)^2(ln(n)^2}{2!} - \frac{(-it)^2(ln(n)^2}{2!}(-\sigma)(ln(n))  - \frac{(-\sigma)^2(ln(n)^2}{2!}(-it)(ln(n)) - \frac{(-\sigma)^2(-it)^2(ln(n))^4}{2!2!} + \displaystyle\sum_{m=6}^{\infty} \displaystyle\sum_{l=3}^{m-3} \frac{(ln(n))^{m}(-\sigma)^{m-l}(-it)^l}{l!(m-l)!} $$

A few parallel series are now starting to emerge:

one is:

$$\displaystyle\sum_{k=0}^{\infty} \frac{e^{-{\sigma}ln(n)}(-itln(n))^k}{k!}$$

Another is

$$\displaystyle\sum_{j=0}^{\infty} \frac{e^{-itln(n)}(-{\sigma}ln(n))^j}{j!}$$

Factor the exponential term out and convert the sum to the exponential that it is and each becomes:

$$e^{-{\sigma}ln(n)}e^{-itln(n)}$$, or the original function $$e^{-sln(n)}$$

so we have 

$$!\displaystyle\sum_{n=1}^{\infty} 2e^{-sln(n)} + all that other stuff$$

looking at these terms that we're popping into the series to complete our series they are: 

$$! - 1 -  (ln(n))(-\sigma) - (ln(n))(-it) - (-\sigma)(-it)(ln(n))^2 - \frac{(-\sigma)^2(ln(n))^2}{2!} -  \frac{(-it)^2(ln(n))^2}{2!} - \frac{(-it)^2(ln(n))^2}{2!}(-\sigma)(ln(n))  - \frac{(-\sigma)^2(ln(n))^2}{2!}(-it)(ln(n)) - \frac{(-\sigma)^2(-it)^2(ln(n))^4}{2!2!} $$

As we can see they are spelling out the terms of the original expansion and this exercise was futile.