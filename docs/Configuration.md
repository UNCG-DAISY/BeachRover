---
sidebar_position: 3
id: Config
title: Configuration of Components
sidebar_label: Configuration
---

# Configuration

While testing or configuring, powering the Pi and Navio2 combo through the Pi's USB Power is fine
but will need to be changed to the Power Module supply through the Navio2's Power Port
when being used as a rover.

## Navio2

The Navio2 has configurations for testing and deployment depending on your needs,
it is important to use the correct configuration otherwise your rover
will not work or could even get damaged.

<details>
  <summary>Click to expand</summary>

  ## Testing Configuration

  When testing, Ardupilot has to be turned off. This can be done by using the command:

  ```
  sudo emlidtool ardupilot
  ```

  From this screen, you should be able to edit some of your settings, such as the state of ardupilot,
  what vehicle you are using, the model of the vehicle, and whether or not you want ardupilot to run on boot.
  you should turn this off if you will be doing testing for multiple sessions otherwise you will have to manually
  turn it off every time you boot your Pi up. For testing purposes, make sure you turn ardupilot off.

   Reload your configuration by typing:
   ```
   sudo systemctl daemon-reload
   ```

  ## Rover Configuration

  When you are ready to drive as an autonomous rover, you will need to turn ardupilot back on. This can be done
  by typing:
  ```
  sudo emlidtool ardupilot
  ```

  then either turning ardupilot on or if you are done testing for the foreseeable future you can let ardupilot
  run on boot so you don't have to manually turn it on every time you boot up your rover.

  Make sure to reload your configuration with:
  ```
  sudo systemctl daemon-reload
  ```

</details>

## Mission Planner

To connect your Mission Planner with your Navio2 select COM*X* (the *X* is arbitrary) from the drop down menu in the top-
right corner of the screen with the appropriate baud-rate for your telemetry unit.
Hit connect and you should be greeted with a loading bar that will give way to
your cars location on the map with data readouts on the left hand side of the screen.
