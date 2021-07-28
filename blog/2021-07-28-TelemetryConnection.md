---
title: Trial and Error for Telemetry Connections
author: Steven Tagner
author_url: https://github.com/StevenTagner
author_image_url: https://avatars.githubusercontent.com/u/78876545?v=4
tags: [Rover, Trial and Error, Telemetry]
---

My trial and error process to follow if your Telemetry Units won't connect.

<!--truncate-->

One of the seemingly simple things that I had problems with was getting my telemetry units to connect to each other.
If you are using the [units](https://www.amazon.com/Soulload-Telemetry-915Mhz-Transmit-Pixhawk/dp/B0768WQ989) we are,
then these steps could help you get your units communicating with each other.

Firstly, lets review what the lights on the units mean. Blinking green means they are searching for their partner, while
a solid green means that they have found and are communicating with their partner unit. If your units are not communicating,
first restart your computer (the device with the ground station unit) with the ground unit *remaining plugging in*. This allows your
computer to register the device properly on startup and recognize it as a COM device. Failing that, check to see if your devices drivers
are up to date through your device manager:
![Device Manager Screenshot](/img/DeviceManager.PNG)

If you have any other continuing issues, you should contact your units manufacturer for additional help. 
