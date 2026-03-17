---
title: "Quantum computing and human programs"
summary: "In order for a quantum program to run, there is input from outside the system. Microwaves are used to set the quantum states of the various qubits. Si"
date: "2018-07-10"
draft: true
---

In order for a quantum program to run, there is input from outside the system. Microwaves are used to set the quantum states of the various qubits. Similarly, in our human program, we'll pay people. So lets do a tangible walkthrough of a simple program, written for a quantum computer, running on a population via game theory.

Unfortunately quantum computing is still not very standardized. But we can take a look at [this stack overflow thread](https://cstheory.stackexchange.com/questions/9381/what-would-a-very-simple-quantum-program-look-like) to give us an idea of what a very simple program might look like.

Here is the program the top answer offers:

```
        # create a new quantum bit and identify it as '2'
E 1 2   # entangle qubits '1' and '2', qubit 1 already exists and is considered input
M 1 0   # measure qubit '1' with an angle of zero (angle can be anything in [0,2pi]
        # qubit '1' is destroyed and the result is either True or False
        # operations beyond this point can be dependent on the signal of '1'
X 2 1   # if the signal of qubit '1' is True, execute the Pauli-X operation on qubit '2'

```

A correlate human program will inevitably come off nonsensical because we are dealing with totally different scales.  However humans have their own versions of entanglement.  If you pay 2 people to work on a project for several years, they will likely come out with a lot of shared states.  You can make inferences about the second person based on the questions you ask the first person.  However if you ask them in front of each other, it may affect their answers.  Despite all the hype, on some level, this is all entanglement means.

```
        # Take 2 people charged of committing a crime together.  They are now prisoner 1 and 2
E 1 2   # Allow them to discuss before interrogation to get their stories straight
M 1 0   # Take prisoner 1 into a room and ask them whether they used a gun
        # We can assume that they would have gotten their stories straight on whether they had a gun 
X 2 1   # If prisoner 1 says "yes," then d 

```

This isn't a very good human program as it is written.  But then again it isn't a very good quantum program either.  However you can see where elements of it might be useful, just the like the original simple classical program in the stack overflow post.

The classical program is also not written at the appropriate level.  A loop seems trivial to any modern programmer, but it is not really an atomic unit of computational logic.

[Here we can see a simple loop in assembly](https://stackoverflow.com/questions/28665528/while-do-while-for-loops-in-assembly-language-emu8086):

```
        xor cx,cx   ; cx-register is the counter, set to 0
loop1   nop         ; Whatever you wanna do goes here, should not change cx
        inc cx      ; Increment
        cmp cx,3    ; Compare cx to the limit
        jle loop1   ; Loop while less or equal

```

However even this abstracts a lot of what is going on in the hardware.  If you start asking questions you can see why it took 100 years to get from Ada Lovelace to Linus Torvalds.  In order to properly compare this program to the quantum program we are trying to deconstruct, we would have to look at what is actually happening on the machine level, which involves the actual transistors and voltage readings. That is outside the scope of what I'm trying to achieve in this post, though.

So on a human program, the equivalent of "voltage reading" are most obviously  things like elections, market prices, protest numbers, etc. These readings will not be accurate