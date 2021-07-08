# Overview

The Beach Rover Project was started with the intent to
make monitoring and surveying the coastline faster, easier,
and more accurate than the current by-hand method through
a rover running pre-planned missions gathering various sensor data.

We are documenting the development of the rover on a dedicated site: https://uncg-daisy.github.io/BeachRover

## Parts Needed [**Work in Progress**]

~RC Car

~Raspberry Pi

~Navio2

~Telemetry Units

~GPS Module

~Battery (7V)

~Chassis (Donkey Car Recommended)

~Pi Camera

~Multiplexer

~Ground Control Station (EX: laptop)

# Assembly
The Rover will consist of two main parts, the **RC Car/Chassis** and the
**Pi, Navio2,** and **Sensors**. We will set these parts up separately then
combine them when it is time to drive.

## Connect RC Car to Chassis

After taking the top off your RC Car, you will put the adaptors in and
attach the Chassis. Make sure to secure it on with clips.

https://www.youtube.com/watch?v=OaVqWiR2rS0&t=848s

## Attach Navio2 to Pi

To make attach the Navio2 to the Pi, make sure it is oriented the right
way then connect through the GPIO and screw them together with the
provided screws and spacers.

https://docs.emlid.com/navio2/hardware-setup

## Plugging in the Telemetry Unit and GPS

The air telemetry unit gets plugged into the UART Port, the ground telemetry unit
gets plugged in on any available USB Port on your ground station, while the GPS
Module gets plugged into the ANT Port on the Navio2. Make sure
that you have as little electronic and atmospheric interference as possible
in order to get the best results.

**Note:** Your telemetry units will *blink* green when looking for their partner
unit and maintain a *solid* green when they are connected to their partner. If your
telemetry units are not communicating try restarting your ground station with the
telemetry unit remaining plugged in and failing that update your units drivers.

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
