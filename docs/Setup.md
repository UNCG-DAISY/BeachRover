---
sidebar_position: 3
id: Setup
title: Setup for the Project
sidebar_label: Setup
---

# Setup

While testing, powering the Pi/Navio2 through the Pi's USB Power is fine
but will need to be changed to the Power Module supple through the Navio2
when taken for driving.

## First Time Setup for the Navio2

After powering up your pi, either connect to it via keyboard/monitor or
through a VNC/SSH connection (https://www.raspberrypi.org/documentation/remote-access/ssh/) and follow the onscreen
steps and set up your Navio2 as an ArduRover. Make sure that you either disable
ArduRover on start or remember to turn ArduRover off before testing as you will
not be able to run any testing programs while ArduRover is on.

## Mission Planner

Mission Planner is an application made to make planning out autonomous missions
simple and straightforward. To download go to (https://ardupilot.org/planner/docs/mission-planner-installation.html)
and complete the install Wizard. Once the install is done, launch the app.
To connect it with your Navio2 select COM*X* (the *X* is arbitrary) from the drop down menu in the top-
right corner of the screen with the appropriate baud-rate for your telemetry unit.
Hit connect and you should be greeted with a loading bar that will give way to
your cars location on the map with data readouts on the left hand side of the screen.
