---
layout: page-sidebar
title: Introduction
---
## Introduction

---

More and more new cool devices and technologies arrive at our homes every day. But though they are all aimed at enhancing our lifestyle they all lack one important feature: a common language they could speak to each other to create a really automated and smart environment at home. The main goal of openHAB is to provide an integration platform to fix this issue.

<div class="img-wrapper"><img alt="project title" src="https://raw.github.com/wiki/openhab/openhab/images/features.png"></div>

## What is openHAB?

---

openHAB is a software for integrating different home automation systems and technologies into one single solution that allows over-arching automation rules and that offers uniform user interfaces.

This means that openHAB

1.  is designed to be absolutely vendor-neutral as well as hardware/protocol-agnostic
2.  can run on any device that is capable of running a JVM (Linux, Mac, Windows)
3.  lets you integrate an abundance of different home automation technologies into one
4.  has a powerful rule engine to fulfill all your automation needs
5.  comes with different web-based UIs as well as native UIs for iOS and Android
6.  is fully open source
7.  is maintained by a passionate and growing community
8.  is easily extensible to integrate with new systems and devices
9.  provides APIs for being integrated in other systems

## Who is the Target Audience?

---

openHAB is highly flexible and customizable, but this comes at a cost. You have to invest some time for learning its concepts and to set up an individual system tailored to your needs. Many parts of the setup require textual configuration, potentially accessing log files for debugging, etc. Therefore setting up openHAB is mainly a job for tech-savvy people - it is not a commercial off-the-shelf product that you plug in and that is ready to go.

Nonetheless, this only applies to the setup and configuration of the system, which is usually done by a single person in the household, while all other family members are merely using the system. And here is where openHAB shines: It is very stable, has apps for all different end devices, allows voice interaction, etc.

## Our Vision and Philosophy

---

There are many home automation solutions and Internet-of-Things (IoT) gadgets on the market, which are all useful on their own. They come with their own way on how to setup and configure devices and are perfect for their intended use cases.

The problem with all of these systems and devices is that these use cases are defined by the manufacturer - but as a user, you will quickly come up with wishes that are not supported out of the box or which require interaction between the different systems. openHAB fills this gap: It puts the user in the focus and allows him to do what he wants to do. It thus serves as an integration point for all your home automation needs and lets systems talk to each other across any vendor or protocol boundaries.

From our point of view, a commercial product can never stay up to date with all interesting things that can be integrated. So the only way to be sure that you do not bet on a dead horse is by using an open source solution that is maintained by a big community and which does not depend on the fate of a single company. openHAB is hence the best choice for a future-proof Smart Home setup.

Considering the user perspective also means caring for data privacy. With openHAB, all data (like sensor data or actuator commands) belongs to the user and it is up to him to decide, what data should potentially leave his house and where it is sent. Furthermore, there is no remote access possible, if it is not desired - everything works nicely within the intranet and does not even require an Internet connection. We therefore also like to call it the "Intranet of Things".

## Architectural Principles

---

openHAB does not try to replace existing solutions, but rather wants to enhance them - it can thus be considered as a system of systems. It therefore assumes that the sub-systems are setup and configured independently of openHAB as this is often a very specific and complex matter (including "pairing" processes, direct device links etc.). Instead, openHAB focuses on the "daily use" side of things and abstracts from the devices themselves.

A core concept for openHAB is the notion of an "item". An item is a data-centric functional atomic building block - you can think of it as an "capability". openHAB does not care whether an item (e.g. a temperature value) is related to a physical device or some "virtual" source like a web service or an calculation result. All features offered by openHAB are using this "item" abstraction, which means that you will not find any reference to device specific things (like IP addresses, IDs etc.) in automation rules, UI definitions and so on. This makes it perfectly easy to replace one technology by another without doing any changes to rules and UIs.

A very important aspect of openHAB's architecture is its modular design. It is very easy to add new features (like the integration with yet another system through a "binding") and you can add and remove such features at runtime. This modular approach has been a huge enabler for the active community around openHAB with many engaged contributors.

## Further Reading

---

Please see our [documentation](http://docs.openhab.org/concepts/index.html) for further details about the concepts of openHAB, its features and possibilities.
