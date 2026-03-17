---
title: "Exercise Structural Induction Proof"
summary: "Problem: Prove the following distribution law for map over concatenation(++) For any lists xs, ys, and function f: (xs ++ ys) map f = (xs map f) ++ (y"
date: "2018-02-19"
draft: true
---

Problem:

Prove the following distribution law for *map* over concatenation(++)

For any lists xs, ys, and function f:

```
    (xs ++ ys) map f = (xs map f) ++ (ys map f)

```

```
function map:
    Nil map f = Nil
    (x :: xs) map f = f(x) :: (xs map f)

```

```
function ++:
    Nil ++ ys = ys
    (x :: xs1) ++ ys = x :: (xs1 ++ ys)

```

First, we will prove the Nil case for xs.  In order to do this we will first prove the Nil case for ys as well:

```
    (Nil ++ Nil) map f = (Nil map f) ++ (Nil map f)

```

This transforms to Nil = Nil within a few steps

```
    (Nil) map f = (Nil map f) ++ (Nil map f) //clause 1 of ++
    (Nil) = Nil ++ Nil //clause 1 of map
    Nil = Nil //clause 1 of ++

```

Now we will do an induction step for ys in the case where xs is Nil.

```
    (Nil ++ (y :: ys1)) map f = (Nil map f) ++ ( (y :: ys1) map f) //Substitution
    (y :: ys1) map f = (Nil map f) ++ ( (y :: ys1) map f) //Clause 1 of ++
    (y :: ys1) map f = Nil ++  ( (y :: ys1) map f) //Clause 1 of map
    (y :: ys1) map f = ( (y :: ys1) map f) //Clause 1 of ++

```

Since the 2 sides are equal, we have the Nil case established for xs.

Next we will prove the induction case for xs, starting with the case where ys is Nil

```
    (x :: xs1 ++ Nil) map f = (x :: xs1 map f) ++ (Nil map f) //Substitution
    (x :: xs1 ++ Nil) map f = (x :: xs1 map f) ++ (Nil) //clause 1 of map
    x :: (xs1 ++ Nil) map f = (x :: xs1 map f) ++ (Nil) //clause 2 of ++
    x :: (xs1 ++ Nil) map f = f(x) :: (xs1 map f) ++ Nil //clause 2 of map

```

We have stumbled into a road block.

Both sides will constantly expand, and we have no given clauses to allow simplification, so we need to prove an intermediary step that can allow simplification.

A proof that xs ++ Nil = xs should do the trick. First, to prove the Nil case. This becomes

```
    Nil ++ Nil = Nil //Substitution
    Nil = Nil //Clause 1 of ++

```

Now we assume the induction hypothesis.

```
    (x :: xs1) ++ Nil = x :: xs1 //substitution
    x :: (xs1 ++ Nil) = x :: xs1 //2nd clause of ++
    x :: (xs1 ++ Nil) = x :: (xs1 ++ Nil) //assumed in induction hypothesis

```

So we can refer to this statement as lemma 1:

```
    xs ++ Nil = xs 

```

Now we can go back and establish the ys = Nil case with our original problem

```
    (x :: xs1 ++ Nil) map f = (x :: xs1 map f) ++ (Nil map f) //substitution
    f(x) :: (xs1 ++ Nil) map f = f(x) :: (xs1 map f) ++ (Nil map f) //Clause 2 of map
    f(x) :: (xs1 ++ Nil) map f = f(x) :: (xs1 map f) ++ (Nil)//Clause 1 of map
    f(x) :: (xs1) map f = f(x) :: (xs1 map f) //Lemma 1

```

The two sides are equal, so now we have established the base case of ys for the xs induction step.

Now we must do the induction step for both xs and ys.  We assume

```
    (x1 ++ y1) map f = (x1 map f) ++ (y1 map f)

```

And we establish the equality:

```
    (x :: xs1 ++ y :: ys1) map f = (x :: xs1 map f) ++ (y :: ys1 map f) //Substitution
    f(x) :: (xs1 ++ (y :: ys1) ) map f = f(x) :: (xs1 map f) ++ (y :: ys1 map f)//2nd clause of map
    f(x) :: (xs1 map f) ++ ((y :: ys1) map f) = f(x) :: (xs1 map f) ++ ((y :: ys1) map f)//induction hypothesis

```

The 2 sides are equal so we have established the proof of the original hypothesis.