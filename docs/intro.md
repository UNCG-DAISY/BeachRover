---
sidebar_position: 1
id: intro
title: Starting the Project
sidebar_label: Starting Up
---

## Who is this project for?

This rover was made to survey beaches and gather valuable data about how and why our coastlines are changing.
You could easily use this model for surveying other environmental areas or even for educational purposes.

## Parts Needed

- RC Car

    While any RC car can work, in order to use our CAD Chassis you will need a 1:16 sized Car. Make sure it has a controller
    as that will be important when setting up the rover later on.

- Raspberry Pi

    You will need a Raspberry Pi to serve as the brains of the rover. We use a Pi 4, that can
    be bought [here](https://www.raspberrypi.org/products/raspberry-pi-4-model-b/). The RAM,
    storage, and other specs are subject to what you will be using the rover to do, we use a
    Pi4 with 4 Gigabytes RAM and a 32 Gigabyte SD Storage Card.

- Navio2

  The Navio2 is an autopilot hat for the Raspberry Pi, and is what we will be using throughout
  the project. You can get it [here](https://navio2.emlid.com/), and read more about it [here](https://docs.emlid.com/navio2/).

- Telemetry Units

  Telemetry Units allow us to communicate without the use of a Wifi connection. We use
  [these](https://www.amazon.com/Soulload-Telemetry-915Mhz-Transmit-Pixhawk/dp/B0768WQ989)
  but there are many alternatives.

- GPS Module

  In order to get positional data like orientation and location we need a GPS Unit. As of now we are using
  the module that [Emlid sells](https://store.emlid.com/product/gpsgnss-antenna-mcx/) and plugs right into
  the Navio2 ANT port.

- Battery and Charger

  You will need a RC battery and charger to power your rover, these are widely available across the web and at
  hobby stores.

- Chassis (Donkey Car Recommended)

 As of now, we are using a Donkey Car Chassis that you can [buy](https://store.donkeycar.com/collections/accessories/products/standard-donkey-chassis-includes-screws) or [print yourself](https://www.thingiverse.com/thing:2566276). We are working on making our own that will better fit
 the other equipment and modules we will be using throughout the project.

- Pi Camera/lens

  You will need a camera to take high resolution photos of the sand for the best analysis results. A we are using
  a [generic Pi Camera](https://www.raspberrypi.org/products/camera-module-v2/) as of now.

- Multiplexer

  Since the Navio2 takes up the nearly entire 40 Pin GPIO of the Pi you cannot have any other sensors or devices on your rover.
  In order to get around this, we used a multiplexer. This increases the amount of pins your Pi has and allows us
  to have more sensors on our rover besides the ones contained on the Navio2. We use this [one](https://www.amazon.com/Stayhome-Raspberry-MultipleStayhome-Expansion-Multiplex/dp/B07PN8RZR7).

- Ground Control Station and Accompanying Software

  A ground control station is a device that you will use to control your rover. You will make missions, monitor readouts, and more
  from this device. We use a laptop running Mission Planner to create our missions and monitor our rover.

  [Mission Planner](https://ardupilot.org/planner/) is a program created by Michael Oborne that allows you to create mission plans,
  monitor your rover, and run SITL simulations all in one application.

- U-Center

  While not strictly nessasary, this software allows you to see detailed information on what satellites are connected to a given
  machine, namely our Pi. This can be very helpful when diagnosing issues or checking GPS variance. If you would like this capability,
  go to [this site](https://www.u-blox.com/en/product/u-center), download U-Center for your operating system, and complete the installation
  wizard.
