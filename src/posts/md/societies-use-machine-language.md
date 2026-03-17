---
title: "Societies Use Machine Language"
summary: "Some people fear the idea of an AI ruling society. However, their worst fears have already come true. Society is already an AI running on machine lang"
date: "2017-08-18"
---

Some people fear the idea of an AI ruling society.  However, their worst fears have already come true.  Society is already an AI running on machine language and it has been since the tribal days.

This is why conspiracy theories are so compelling.  The actions of society seem very intentional even though often, no single person or group is necessarily intending those actions, planning them, or carrying them out.

Why are we stuck continuing to pollute the earth when so many people want it to stop?  Why sometimes do two nations march seemingly irresistibly towards conflict when the vast majority of people on either side would rather just live their lives in peace and enjoy time with friends and family?

Is it because some cabal at the top wants to control us or an alien lord?   Honestly, probably not, as compelling as those cases can be sometimes.  They probably really don't want pollution any more than we do. It's because we are running a program that has redundancies in place, and there are hidden incentives that . If any one person deviates from the program, they are replaced. This program is not unstoppable. It hiccups often, but since it has evolved for millennia, it can usually recover because it has evolved some error handling.

So surely this brings up all kinds of thoughts.  Probably most immediately: "prove it."  Then, "what is the mechanism?"  "Does this mean we have no free will?"  "What about it?.. Why does it matter?" and importantly "What program is it executing?"

So before I start, I will say that this absolutely doesn't mean we have no free will.  It just means that we have some constraints to our choices.  This should be obvious.  You can't suddenly decide to turn into a frog and have it happen immediately, and same with having a million dollars.  Any transition in this world takes time.  More time for a bigger change.

So with that aside, I'll start with some evidence first, since that's probably the most important part initially:

What do I mean when I say machine language?  Do I mean actual assembly-like machine code?  Is society feeding 1s and 0s into our brains?

Yes, kind of.

But let me establish that I don't mean the human brain runs like a computer for any purpose of this initial discussion.  This has been well established by the science of neurology, linguistics and cognitive science.  On the level of our consciousness, there is little to no processing that is done through the sort of algorithms that computers use.  Except when we do something like math or logic, in which case our brains strain to conform to that mode of processing.

But if our brains don't use 1's and 0's, and our brains compose society, then how could society run on binary?

Well, we convert our experiences into binary for society through a myriad of ways.  Amongst ourselves in society we use language, currency, laws, art, religion, etc., however when we behave institutionally, we use binary.

For instance, take a look at this little snippet of law:

```
(a) Murder is the unlawful killing of a human being with malice aforethought. Every murder perpetrated by poison, lying in wait, or any other kind of willful, deliberate, malicious, and premeditated killing; or committed in the perpetration of, or attempt to perpetrate, any arson, escape, murder, kidnapping, treason, espionage, sabotage, aggravated sexual abuse or sexual abuse, child abuse, burglary, or robbery; or perpetrated as part of a pattern or practice of assault or torture against a child or children; or perpetrated from a premeditated design unlawfully and maliciously to effect the death of any human being other than him who is killed, is murder in the first degree.
Any other murder is murder in the second degree.

Within the special maritime and territorial jurisdiction of the United States,Whoever is guilty of murder in the first degree shall be punished by death or by imprisonment for life;
Whoever is guilty of murder in the second degree, shall be imprisoned for any term of years or for life.
(c)For purposes of this section
(1)the term “assault” has the same meaning as given that term in section 113;
(2)the term “child” means a person who has not attained the age of 18 years and is(A)under the perpetrator’s care or control; or
(B)at least six years younger than the perpetrator;
```

In other words:

```
class FirstDegreeMurder extends Crime{
   perp
   judge
   victim
   jury 
   jurisdiction
   evidence
   type=murder
   degree=1
   sentenceOptions={life, death}
   conditions={"malice aforethought","use poison", "lying in wait" ... etc}

   construct(perp, judge, victim, jury, jurisdiction, evidence){
      if( jurisdiction == special maritime || jurisdiction == territorial ){
           assault = 113.assault;
           if (v.age < 18 || v.age + 6 < p.age){
               v.is_child = true;
           }     
           if (is_guilty()){
  
           }
    }
    get_sentence(){
           return judge.decide(this); 
    }

    is_guilty(){
           return jury.verdict(this);
    }

}

class Judge{
   decide(crime){
     return judge.chooseSentenceFromOptions(crime.sentenceOptions);//Judge uses human brain to select from options
   }
}

class Sentence{
    perp;
    time;
    startTime;
    global Enforcement;
    construct(time, crime, type){
      if(type == prison){
        if(time == "life"){
            while (crime.perp.alive){
               Enforcement.keepInJail(perp);  
            }
        }elseif(isInt(time)){
            while (crime.sentence.time < now() - crime.sentence.startTime){
               Enforcement.keepInJail(perp);  
            }
        }
      }elseif(type == death){
          Enforcement.execute(perp);
      }
   }
    
    
}
class Jury{
   jurors = {};
   construct(jurisdiction, crime){
      jurors = jurisdiction.get12Randos();
   }
   verdict(crime){
       guilty = false; //supposedly anyway... amirite?;
       for (j in jurors){
           j.decide(crime.conditions, crime.evidence);//Here is where the juror actually uses its brain and returns a boolean to the institution
       }
   }
}


```

 

Please don't be too harsh about my pseudocode, it's not meant to compile after all. Anyway that might seem like a lot of code. But first off, most of that code is recyclable throughout the entire legal system, and it would be easy to reapply its logic to other crimes. Also I wanted to cover the logic as completely as possible. to show that it truly can very easily be represented in programming-type patterns, *except* when it relies on human interaction, in which case the ridiculously complex human interaction is organized in a way to return simple types that are easily plugged back into the system.  This is done through booleans like votes, or enums of choices, or floats like money.

It's not just the legal system it applies to, but the economic system, and they apply together in a lot of ways. For instance, the budget that is set by the government follows similar kinds of logic. The money that is spent, or allowed to be lent by banks then filters through to everyone through employers, which also use similar kinds of logic. Especially if you work at a large institution, how much of your time is spent inputting information in a way that the company can then use it somewhere else (e.g. TPS Reports)? If you do a skilled trade like carpentry or plumbing, maybe not so much, but if you're at a bank, I'd bet it's over 50%.

When a new corporation is started, it must register with the government and fulfill certain organizational requirements that allow it to interface with the legal system. It must have registered agents, certain accounting practices, etc. It is an instantiation of a class.

This style of organization has been around since long before computers. It is the collective program that we run in order to exist in large groups.

When we're just cracking open a cold one with the boys, this is not what we do. There is already a sense of this sentiment in our culture. Specifically through art, which manages to simultaneously get propagated through the machine system, yet the contents are not accessible to the machine code (except in instances of propaganda and advertising). So people's favorite movies often show a conflict between the dogmatic enforcer of the machine code versus the Ferris Bueller who defies the rules at every turn while still being ethically superior in some way. These narratives are meant to highlight where the machine code is not adequate. There are laws which, properly enforced, are unethical (i.e. slavery). And in fact if some of these laws were enforced to their endpoint, society would not be able to function. Imagine the bureaucratic nightmare that would ensue if speeding were enforced without any thought. As in, the first car that a cop saw going 1 mph over the limit, they had to pull over immediately. The cops would not be able to do their jobs. In some ways, society requires and counts on people to bend the rules, and propagating art can kind of smooth out some of the edges of our societal algorithm.

Another narrative that highlights the difference is the idea of a golem in Jewish lore. According to what I've read, in some variations of the myths, golems are beings made from clay which are fed a piece of paper and then proceed to become animated, but their behavior is not quite human. They lack a certain kind of common sense and will perform instructions literally.

If this is not convincing or clear, I can do another post giving more evidence and clarifying instances of this societal machine code, but I want to get deeper into the mechanism of how an institution can actually execute instructions and store data using our brains and bodies.

So I think I'm throwing a little too much shade at the code/institution side of things. These instructions that are followed are required for society to run. They represent a bond. They constrain our behavior, which is annoying.. but in doing so, they give us access to more behaviors. They are a collective investment. For instance, taxes. Imagine trying to use common sense, empathetic human interaction while collecting taxes. A guy going door to door just trying to convince people to give some money for the roads. Probably (but not definitely) not going to work. "Oh, uhh, I had a rough year, maybe next year." Some people would surely give, but there would be freeloaders, and the Nash equilibrium would be nobody contributing. It's a standard tragedy of the commons issue. To get around this issue, we need the code. Also, the code is not totally off on its own plane. It needs us humans to propagate, and its execution results in safer housing, more access to food, etc.

OK, so back to the mechanism:

Where does an institution receive its instructions from?
It depends on the institution. Much like a body gets hormones from several different sources, and different cell bodies use those hormones for different things.

Some examples:

A business can get instructions from a sale. It gets that information in the form of a purchase order which contains information about the price, the quantity, and the inventory number of the item that was purchased.

A local government gets instructions from a local council. It gets the information in the form of basically a script like the law script above and then is either executed when called, set to run like a daemon or cron job, or set up for event listening.

A business can also get instructions from a board. When it gets instructions from the board, it is in a similar form to the local government example. The same goes for non-profits, national governments, universities, religions, etc.

A monarchy gets instructions from a single individual. These instructions are of a similar form to the above. As stated, these are essentially a form of code.

How does it process those instructions and pass them, along with whatever parameters to us humans?
In the case of a business processing a purchase, lets imagine an online store gets an order. In this case, it is very obvious that the business generates a P.O., it sends the information to whatever accounting mechanism and in parallel, uses customer information {if (!customer_address) CallCenter.retrieveAddress(customer.id)} to determine the relevant warehouse, sends the P.O. to the warehouse, where the packing task is given to a packer (often a robot now). This packer likely receives the relevant info electronically. They reduce the inventory log appropriately, etc.

In the case of the local governments, as said these can be triggered by cron jobs (once a year, do this), events (911 call), whatever. It's all programmatic logic, and the information flow happens in a similar way.

How does our brain decode those instructions?
Well, since the instructions are in the form of language, numbers, and money, which are the forms of data that are shared between the institutions and humans, we decode them using our regular old consciousness.

Why can it count on us to execute those instructions?
First, obviously in most instances it has to do with pay or some enforcement mechanism somehow. In the instance of pay, the idea is to get someone to do the task. In the instance of an enforcement mechanism, the idea is to prevent a behavior. The confidence in either one is proportional to the extremity of the measures, and institutions have generally developed explicit policies for increasing or reducing reward or punishment depending on the level of confidence that the action will or will not be performed within a certain time. A business changes its prices. A country changes its sentencing laws. An institution has a limited amount of resources to enforce these policies.

In the instance of the warehouse: if the packer does not execute the instructions, someone else presumably will. Either that or the institution will have to increase the resources dedicated to promoting that behavior. This is the case in almost all of the "do" instructions. The instructions to prevent behaviors are executed through an enforcement mechanism. That enforcement turns a "don't" instruction into a "do" instruction by instructing an agent to take measures to prevent an action.

Similarly, if the reward or punishment level is not sufficient, this event can be detected and routed into a "do" instruction (while(not done(){ changeRewardPolicy(); }).

In this way, as long as the policies are set up for incentivizing and modifying the incentive parameters, any instruction will eventually get executed as long as the institution has the resources.

When an agent executes an instruction, they generally return some response. In the case of a purchase, they return a status and eventually the item ordered. In the case of a sentencing, the judge returns information that gets put into the legal record and sent to enforcement institutions.

When it receives a response, how does the institution interpret the response into institutional format?
The institution generally ultimately records some information about the instruction into some sort of ledger. Old tribes would maintain oral histories. Language is the original shared ledger. That ledger information is generally processed and abstracted in some way that can then be used to emit events to trigger new instructions.

This is where institutions can diverge dramatically. What data do they collect? What events trigger what responses? Other areas where institutions diverge is enforcement policies. What behaviors do they incentivize and how much of their resources/power do they put into incentivizing those behaviors?

As for the "what about it?" and "what program is it executing?" those will have to be for another post.