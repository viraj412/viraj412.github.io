---
layout: project
title: "AI Voicebot for CX Support"
description: "Reducing post-purchase anxiety with an AI voice agent — at scale."
status: Work · Myntra
---

## The problem

When something goes wrong after an order — a delay, a wrong item, a refund not processed — customers want resolution fast. Most reach for the phone. At Myntra's scale, that means hundreds of thousands of calls hitting the contact centre every month, each one requiring a human agent to pick up, understand the issue, and resolve it.

The cost is real. The wait times are frustrating. And most of these calls are about the same handful of problems.

## What we built

An AI-powered voicebot integrated into Myntra's contact centre, capable of handling common post-purchase queries end-to-end — without routing to a human agent.

The voicebot handles intents like order status, delivery delays, return initiation, and refund tracking. It speaks to the customer, understands their issue, pulls the relevant data, and resolves or escalates — all in real time.

## The interesting design questions

Building this wasn't just an engineering problem. The harder questions were:

**Where should the AI speak, and where should it hand off?** A voicebot that tries to handle everything erodes trust. One that escalates too quickly defeats the purpose. Getting that boundary right — and making it feel natural, not robotic — took multiple iterations.

**How do you make an AI voice feel human enough to be trusted?** Customers calling support are already anxious. The voice, the pacing, the way it acknowledges frustration — all of this matters more than the resolution itself sometimes.

**How do you measure success?** Deflection rate is the obvious metric, but it's incomplete. A call "deflected" by a bad experience isn't a win. We tracked resolution quality and customer satisfaction alongside volume.

## What I learned

This was my first time shipping a voice AI product at scale. The gap between a demo that works and a product that works for millions of real customers — with all their accents, interruptions, and edge cases — is enormous.

It also confirmed something I believe about AI products: the trust layer is everything. If a customer doesn't believe the voicebot can help them, they'll ask for a human regardless of what the bot is capable of.

*(Open to discussing the thinking behind this — reach out via [email](mailto:rviru412@gmail.com).)*
