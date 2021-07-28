---
title: Trial and Error for Improving GPS Signal
author: Steven Tagner
author_url: https://github.com/StevenTagner
author_image_url: https://avatars.githubusercontent.com/u/78876545?v=4
tags: [Rover, Trial and Error, GPS Signal]
---

My trial and error process to improve your GPS Signal.

<!--truncate-->

Regardless of the units you are using, it is important to be aware of several features that
will improve the performance of any GPS unit.

First, make sure that you are in a proper environment. Clear skies and open space are critical
to getting the most connections to GPS satellites.

Checking local sources of interference is just as important, if you have a Pi Camera or similar
device it can generate a lot of RF "Noise" that can impede or outright block your GPS signal. A cheap
and easy way to bypass this is to cover the cable and board of your camera with tin foil and keeping it
as far away from your GPS unit as possible.

Another local source of interference can be other radio frequencies in the area. Make sure you don't drive
near any devices that are emitting many radio signals otherwise you risk blocking the GPS signal and getting
bad positional data.

To check how many satellites your rover is connected too you can use U-Center. If you are unfamiliar with how
to use it you can check out our first time setup or configuration steps to start getting more out of your GPS.
