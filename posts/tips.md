---
title: 'Best Practices for Frontend Developers'
date: '2023-04-20'
---

### Tips and best practices

- use partytown.js to load js library [read more about this]
- CLS
- consider accessibility
- research on the bundle size of packages before using them
- page speed: test the speed and performance of your site (pagespeed.web.dev)
- minimize using animations that disrupts the UX (instead use state effects that lets the user know when they interact with a button, link, etc.)
- using custom fonts also reduces the initial load of a website
- Incremental Service Regeneratio (NextJS).
- consider writing tests
- Don't Repeat Yourself (reusable components)
- _Never ever trust the browser_

### There are several types of attacks

- Man-in-the-middle
- click-jacking
- DDoS
- SQL injection

### Solutions

strict user inputs
DOM purify
be aware of hidden views: when setting inputs to hidden
strong content security policy
XXS protection mode
disable iframe
keep error messages generic
set referal policy
avoid third party services: use `snake` to scan packages
take a snapshot of your components (code that generates snapshots of your codebase): helps to know when someone makes a change in your codebase\*
Don't store tokens in the local storage, use cookies instead
Don't store keys or tokens in a hosting platform, eg github; use .env file instead.
