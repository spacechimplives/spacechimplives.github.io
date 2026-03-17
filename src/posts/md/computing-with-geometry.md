---
title: "Computing With Geometry"
date: "2025-06-19"
draft: false
---

A programming language can be represented by its syntax tree.

A syntax tree consists of some finite number of expressions, consisting of one of some finite number of term types on the left combined with some term on the right, some of which may also be expressions, or else one of some finite number of primitive objects of an appropriate type. If more than one argument is required for the expression to be well-formed, the terms on the right can be rewritten as a tuple and considered as a single object.

Since any turing complete language in theory can express any program in any other turing complete language, we can say that any computation can be represented as such a "graph"-like structure.

A node of the graph could be represented with the preceding form. N1.1L could mean something like "function application", and N1.1R might be a tuple containing a reference to the function being applied as well as its arguments.

However there's another way to look at this as well. If you look at the primitive element of any programming language, they ultimately form functions of some kind. In a lisp language, one of the functions is \`apply\` which is ultimately responsible for function applications. There are also \`cdr\` and \`car\` which are functions which may be primitive functions for manipulating lists implemented in assembly. For those not familiar with functional lanugages, constructing data looks can look similar to function application as data is built up from "data constructors" which are basically functions that don't get reduced like \`cons\`. There is no substitution of arguments into a body, the arguments just are appended as nodes to the syntactic element and possibly later converted to a primitive of some kind. This means that after the language is parsed the s expressions exist in tree form in the compiler. The function applications do as well, where the function body and arguments are both required for the function application to continue. Thus the tree forms a dependency graph.

This treatment of the lowest level elements as functions and dependency graphs is deeper than just a superficial element of functional languages though. Assembly similarly can be represented this way, and ultimately it constructs not just a dependency graph of computations, but also physcial mechanisms which instantiate those computations. This gives some insight into the nature of computations and information which that they are physical transformations. And many or perhaps the majority are specifically physical transformations \*of those transformations\* which is why category theory comes into play.

All of this is to say, rather than put the primitive type "function application" on the left and put the function reference on the right along with the arguments. We _\*should\*_ be able to construct a language in which the function is referenced on the left, as long as the dependency graphs they represent can ultimately be translated into some sort of physical mechanism. So in the tree the left would no longer be a finite set of terms, but would be infinite just like the right.

This means the N1.1L and N1.1R would both be graphs in their own rights. But in this case, where are the primitive elements they're built up from? We already have them (sort of):

\- the empty node

\- the operation of parallel compostion

\- the ability to construct terms with a left and a right

\- some set of rewrite rules\*

\* It is probably provable that these rewrite rules should exist, but I'm not sure how to prove it and I haven't found them yet other than the trivial cases of a finite number of hard-coded primitive bindings.

Now we have a mathematical object from first principles that should theoretically be able to represent any computation. Each element in the graph can represent some combination of previously constructed nodes. We now can build up expressions as a left + right node, and create more nodes as sets of these expressions.

We can keep going though. If we assign a number to each node, We can represent them as an adjacency matrix. Each "expression" is represented by a 1 in the cell corresponding to the key-value pair. The row could be indexed by the integer corresponding to the key and the column could be indexed by the integer corresponding to the value. So each node is both an integer and a matrix. Each coordinate is an expression.

For instance we could represent the node: 0\_0-0\_1-1\_1 as

This would also be added on to the matrix as a new column to reference. And so new layers would be added in with a new maximum depth

The size of the matrix is then 2^(2^n) where n represents the maximum depth of elements. This happens to correspond to the number of boolean functions that can be done for n input bits as well, so that's a hint that perhaps we're not far off the trail in considering that these can effectively represent computations.

It turns out one way to create this matrix is with a Z-ordering space-filling curve. This is sort of like the Hilbert curve, but uses a zigzag pattern versus the Hilbert curve’s U shape.

We've now unlocked some capabilities. We can start to consider how various matrix operations map to the domain of computation. We can explore developing our rewrite rules as matrix operations. We can also explore the properties of our matrix, and play with different ways of numbering the columns which may provide more insight.

First thing to notice is that the diagonal is the same node on the left and right.

Another thing that one might notice is that there's a "pascal's triangle" flavor to the above listing of expressions for the 2 levels of depth. There's a 1 - 4 - 6 - 4 - 1 sequence in the number of nodes with a given number of expressions. That's a pretty straightforward consequence of the fact that we're iterating over all possible values of the matrix, but still deeper patterns may show up depending on which numberings we choose for the nodes.

One set of evaluation rules I considered was that if the left side were deeper than the right, then it would be considered "void" or not return a value. I was considering this to behave like pattern matching. The node on the left would "eat" from the node on the right until it was exhausted and return whatever was on the right. On some level this behavior feels like when the left is larger, it's like a negative number, and it means that any expression on the lower diagonal half of the matrix would be "negative" in this way. However, we should expect that a Turing complete version of these rewrite rules should be able to enter a cycle, so the eating alone is not sufficient.

Another consideration is: what if we consider that a single key can only be reused once? These sparse matrices might have interesting behavior when recombined in various ways. 2x2 matrices correspond to linear transformations, which can also be represented by a complex number. Perhaps these computations could be viewed as chains of linear transformations and represented as sets of complex numbers, opening up a new model and form of computation.  
  
This is a bit beyond my ability and perhaps more out there, but I'm thinking that these expressions can also be modeled as gaussian integers (which also can represent transformations), and the matrices could be mapped to sets of them. This could lead to some interesting rewriting schemes based on Gaussian prime factorization etc. The question is whether it's possible to do in a productive way.

Now all of this hinges on (a) finding a nice minimal set of rewrite rules that can result in a Turing complete language, and (b) a space-filling curve that reveals something interesting about those rewrite rules. Perhaps we could analyze existing languages through this lens with its finite number of possible values for the left side. But I think it would get much more interesting if the left could be just as dynamic as the right.