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

<details>
  <summary>Click to expand Pre-Arm Checks</summary>

  ## Pre-Arm Checks
  Pre-Arm Checks are used to make sure your rover has met a certain amount of functionality to be used by Mission Planner,
  we will cover the most frequently used/required ones

  ## Frame Type
  This is page is used to load firmware from Mission Planner to the Vehicle about what type/model vehicle is being used. Since we are using Navio2 which has the firmware loaded onto already it this page is not needed.

  ## Accel Calibration
  This comprises the process of leveling the autopilot and calibrating the accelerometer by rotating the vehicle on its three axes. This is normally passed without incident.

  ## Compass
  This is the process where the car's compass is calibrated by rotating the car around. Need to look into what kind of compass the Navio2 has to continue with tests.

  ## Radio Calibration
  This is the process of letting Mission Planner know the effective bounds of the vehicle's motors and servos using the RC Transmitter. To do this you need to have the RC Transmitter connected to the Navio via the RC Receiver, then the Navio connected to the ground control station running Mission Planner via telemetry. To calibrate, start the test and rotate the sticks and switches on the RC Transmitter to show the proper changes on Mission Planner. Any discrepancies (i.e. If a throttle appears to be in reverse) can be altered by clicking the respective boxes and settings in Mission Planner. In my tests, this has failed as only one of the channels is registered (either the ESC or servo depending on the Servo Rail configuration). This is fixed by altering the channel inputs (images + more directions incoming soon).

  ## Servo Output
  This is less of a check and more of a way to monitor and fine-tune your controls. Since you will not be manually controlling the rover, it is important to adjust the trim and order of the servos and motors so the car does not veer off course frequently. To test your motors, go to >>Optional Hardware >>Motor Test and run each in succession and watch for any dead zones or varying relative speeds (if one wheel spins faster than the other at the same throttle percentage). A video that covers this in detail that helped me out is [this one](https://youtu.be/5ySmzuqE_bg) by Randy Mackay. After noting any dead zones or variations in speeds make sure to adjust your trim values accordingly then repeat the process until you are satisfied with the level of precision. This is important for automatic cars more than manual as the "drift" that improperly calibrated servos can cause during missions can potentially be mission ending.

  ## ESC Calibration
  This is the process of finding the maximum and minimum of the ESC (Electronic Speed Controller) and communicating that information to Mission Planner. It goes as follows:
  Turn on your RC Transmitter and set the throttle to maximum, then power up the rover. The autopilot’s red, blue and yellow LEDs will light up in a cyclical pattern. This means it’s ready to go into ESC calibration mode the next time you plug it in. With the transmitter throttle stick still high, disconnect and reconnect the battery. The autopilot is now in ESC calibration mode, the ESCs should emit a tone, the number of beeps indicating your battery’s cell count (i.e. 3 for 3S, 4 for 4S), and then an additional two beeps to indicate that the maximum throttle has been captured. Pull the transmitter’s throttle stick down to its minimum position, then the ESCs should then emit a long tone indicating that the minimum throttle has been captured and the calibration is complete. If the long tone was heard, the ESCs are “live” now and if you raise the throttle a bit they should spin. Test that the motors spin by raising the throttle a bit and then lowering it again. Set the throttle to minimum and disconnect the battery to exit ESC-calibration mode. [Here](https://ardupilot.org/copter/docs/esc-calibration.html) is an article and video going over the process.

  ## Flight Modes
  This will allow multiple modes to be selected to swap through while the rover is running using the transmitter switches. For example, on our transmitter we have a switch with three states so we can assign one to be "Auto" to run missions, one to be "Manual" for manual control, and one to be "RTL" (Return To Launch). I have not experimented with this much as it should be tested while the rover is running missions and we are not at that point right now. I have been leaving them at their default values (in my case "Manual", but this may change machine to machine) until we get to a point where autopilot is working. You can put in different modes such as guided to see how the dial/switches work, I have never had problems with this.

  ## Failsafe
  Failsafes are certain thresholds that when passed, force the rover to perform a pre-configured action. These actions can be specific to what we are doing and the failsafe that was triggered, so we can make a low voltage failsafe save the data and shut down while a GPS failsafe pauses the mission until a GPS lock has been re-established. Much like the Flight Modes, this is not really testable until we are driving missions but you can set values that you know you will need such as low battery thresholds. I have been leaving these at default with no known errors.

  ## HW ID
  This stands for HardWare ID and can is a place to monitor how Mission Planner is registering the different parts of your rover. You cannot modify anything here but it can be useful for troubleshooting.

  ## ADSB
  This may show up as required on your Mission Planner but to the extent of my knowledge is not. This stands for Automatic Dependent Surveillance-Broadcast and is used to enable aircraft to be accurately tracked by air traffic controllers and other pilots without the need for radar. Since we are driving a rover if you run into this ignore it.

</details>

<details>
  <summary>Click to expand Parameter Tree [not completed]</summary>

  ## Section Incoming

</details>


## U-Center

U-Center is a powerful tool you can use to check how many satellites are connected to a given computer.
This is immensely helpful as we will be able to see the direct connections that our Pi is making with the satellites
and will be able to diagnose problems with our connectivity better.

After downloading and installing with the wizard, you should see a screen that looks like this:
![U-Center Home Page](/img/uCenter.png)


This is the "home screen" for U-Center and is home to many of the tools you will be using to check the various aspects
of your connectivity. To connect to your Pi via telemetry, you should pick you baud rate (highlighted blue) for your
telemetry units and connect them (highlighted red) using this menu at the top left:


![U-Center Menu Bar](/img/uCenterMenuBar.png)


<details>
  <summary>U-Center Tools: Click to expand</summary>
  There are many tools in U-Center, you can turn them off and on using the menu bar in the upper-middle of the screen
  that looks like this:

  ![U-Center Tools Bar](/img/uCenterTools.png)

  - Packet Console: This tool allows you to see and filter packets sent between devices based on PC Time, Name, and Epoch
  markers.

  - Binary Console: This tool works like the Packet Console but with Binary Packets.

  - Text Console:


</details>
