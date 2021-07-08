---
sidebar_position: 2
---
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
