---
title: Temperature Sensor Log
author: Michael Mungaray
author_url: https://github.com/MichaMung
author_image_url: https://uncg-daisy.github.io/BeachRover/img/MMprofilePicture.jpg
tags: [Rover, Robotics, Sensor, Temperature, Humidity]
---

Log of temperature sensor and code used for logging test data.

<!--truncate-->

The DHT-22 sensor collects readings on both the temperature and humidity of the surrounding area. The default readings are of temperature and humidity in celsius and percentage,
respectively. Readings in fahrenheit require conversion, and overall the readings were accurate. The sensor was tested indoors with the temperature readings being within
~1 degree of difference, while the humidity sensor was within 5% of difference. 

Logging of data was repeated every two seconds with time/date recorded alongside the readings.
The program can have issues with readings as errors can take up extra two seconds between logs and there cane be an extra second on random logs. These issues can be fixed in the
code itself and help with more consistent readings. Support for the sensor is easily accessible online and readings will provide important information for the surrounding
environment of the rover.

![TempLog](/img/tempLogImage.jpg)