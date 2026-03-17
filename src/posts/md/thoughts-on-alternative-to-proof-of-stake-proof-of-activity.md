---
title: "Thoughts on alternative to proof of stake -- proof of activity"
summary: "I was thinking of the concept of \"proof of activity\" as an alternative to proof of stake. &nbsp;I know I'm late to the game on a lot of this thought p"
date: "2017-06-21"
draft: true
---

I was thinking of the concept of "proof of activity" as an alternative to proof of stake.  I know I'm late to the game on a lot of this thought process so I googled it up and found [this article](https://bytecoin.org/blog/proof-of-activity-proof-of-burn-proof-of-capacity/). The author's conception seemed to be pretty different from mine.

Anyway, I just wanted to share my thoughts on my version, see what holes people poke in it, and what ideas people might have for possible implementations.

My conception of proof of activity is that a given wallet is defined for a miner.   The total gas cost (or whatever you want to call it) of the transactions that wallet has made in the past arbitrary amount of time is then used to determine a weight of authority that miner has for a block.  The total gas spent is added up for blocks in agreement.  The block with the most total gas is taken as the consensus.

There are a few issues I can see right off the bat with this setup.

First off, someone could potentially set up a few mining servers and cycle the eth among those wallets on repeat, gain the highest authority, and then force a fake block.  However, they would have to account for >50% of transactions to totally hijack it, just like they would need to control >50% of eth to hijack POS.  Accounting for that number of transactions seems theoretically more feasible than controlling that much ETH, however spending the gas cost required to do this is essentially a big bet on winning, just like with Casper deposits, so they'd want to be pretty sure.  Plus being tied to a wallet, it seems it would be possible to ban a miner/wallet that fakes a block and loses. Not sure if this would be enough disincentive in practice.

Another issue is if this game of pointless transactions being bounced around is incentivized, it could fall to the same disadvantage of proof of work where power is unnecessarily wasted.  Some complicated method of checking for novelty of transactions could be developed to dissuade that, but it seems like that would be a game of cat and mouse.  Ultimately you'd have to rely on the fact that the pointless gas costs would offset the future mining gains by a good amount, so you're better off just tying your miner to a wallet that is already being used for legitimate transactions.  Not sure how this would play out practically.

A few advantages are:

This might tend to stabilize gas costs.  Miners will have competing incentives: keep gas costs low so they can do more transactions and increase their activity without wasting as much gas versus increase gas costs for profit.

It also seems like the problem of POS of just giving more ETH to people that have it to begin with is abated this way a bit.  While people with a lot of ETH will have potential to burn through more gas, small miners can still get in on the game, and the weight should tend to be put on people that use their currency rather than just hoard it (i.e. the poor if this were in everyday use).

Economically, it seems like it would increase the velocity of the currency, which would be a good counterbalance to the fact that ETH's limited supply might ultimately reward hoarding.

Disclaimer: I haven't fully wrapped my head around the technical aspects, so if I'm working on a glaring misunderstanding of some technical details, I will be glad to be informed of that.