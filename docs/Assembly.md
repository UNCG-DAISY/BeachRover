---
sidebar_position: 2
id: Assembly
title: Assembly of the Rover
sidebar_label: Assembly
---
## Physical Assembly

The Rover will consist of two main parts, the **RC Car/Chassis** and the
**Pi, Navio2,** and **Sensors**. We will set these parts up separately then
combine them when it is time to drive.
<details>
  <summary>Click to expand</summary>

## Attach Navio2 to Pi

To make attach the Navio2 to the Pi, make sure it is oriented the right
way then connect through the GPIO and screw them together with the
provided screws and spacers as shown:

![Navio2 Mounting Image](/img/navio2-mount.png)

You can find more documentation [here](https://docs.emlid.com/navio2/hardware-setup/#attaching-navio2-to-a-raspberry-pi).

[back to top](#)

## Plugging in the Telemetry Unit and GPS

The air telemetry unit gets plugged into the UART Port, the ground telemetry unit
gets plugged in on any available USB Port on your ground station, while the GPS
Module gets plugged into the ANT Port on the Navio2. Make sure
that you have as little electronic and atmospheric interference as possible
in order to get the best results during use.

![Navio2 Port Locations](/img/navioPorts.png)

[back to top](#)

## Print or Buy the Chassis and Case

The chassis and case are important to safely house your sensors and computers while
protecting them from rogue elements such as sand, dust, and wind. You can either
[buy](https://store.donkeycar.com/collections/accessories/products/standard-donkey-chassis-includes-screws)
the chassis or [print one yourself](https://www.thingiverse.com/thing:2566276). A beta version of the case can be
[downloaded here](https://www.thingiverse.com/thing:3082337) to print yourself, we will have a remixed one for the
Raspberry Pi 4 coming soon.

## Connect RC Car to Chassis

After taking the top off your RC Car, you will put the adaptors in and
attach the Chassis. Make sure to secure it on with the clips.

[![RC Car Assembly Video by Adam Conway](/img/videoPic.png)](https://youtu.be/OaVqWiR2rS0 "RC Car Assembly")*Click for link to full video!*

</details>

## Software setup

First time setup for Mission Planner, U-Center, Navio2 OS, Pi, and Telemetry Units.
<details>
  <summary>Click to expand</summary>

## Mission Planner

Go to [the installation site](https://ardupilot.org/planner/docs/mission-planner-installation.html)
and download the msi file. Launch it, and follow the instructions to complete setting up Mission Planner.
You may receive a DirectX installation error, if this happens you may have to update your DirectX Plug-in
from the [Windows Download Center](https://www.microsoft.com/en-us/download/windows.aspx). If you receive
the below error, select **Install this driver software anyway** to finish installation.

![Driver error image](/img/driverWarning.png)

Mission Planner is normally installed in the **C:\Program Files (x86)\Mission Planner** folder.

[back to top](#)

## U-Center

Go to [the installation site](https://www.u-blox.com/en/product/u-center)
and install the zip file. Unzip it, run the executable and follow the installation
steps to set up U-Center.

[back to top](#)

## Navio2 OS

Go to [the installation site](https://docs.emlid.com/navio2/configuring-raspberry-pi)
and download their pre-configured Raspbian image. Then use a imager like the
[Raspbian Imager](https://www.raspberrypi.org/software/) or [Etcher](https://www.balena.io/etcher/)
to write it to the SD Card you will be using with your Pi. To do this, launch your imager (raspberry
pi imager used here) and select your SD Car (normally designated by its size) and the Navio2 Image.
Hit Write and after the imager is done, boot up your pi with the new image and you will be see the
Navio's greeting message:

![Navio's Greeting Message](/img/navioGreetingMessage.png)(https://docs.emlid.com/navio2/ardupilot/installation-and-running)

Now, you will be following the on-screen steps to set up your Navio2 as a autopilot for your rover.
**Remember, you can always view this message again by typing:**

```
sudo emlidtool ardupilot help
```

To set up your Navio2 as an autopilot you need to pick a vehicle, version, and board. To do this, you
need to type
```
sudo emlidtool ardupilot
```

which will bring up a configuration menu, you may receive a prompt to update RCIO Firmware if yours is
outdated:

![RCIO Firmware Prompt](/img/RCIOfirmwarePrompt.png)

After updating you will see a configuration menu, select Rover, the default version, ArduRover Frame,
and set it to enable on boot, then select stop to stop ardupilot as there is still configuration to do
before driving that cannot be done with ardupilot enabled.

[Completed Menu Image]

You can view Emlids walk-through if you would like through this [link](https://docs.emlid.com/navio2/ardupilot/installation-and-running).

[back to top](#)

## Pi

Aside from flashing the SD with the Navio Image, the only other setup you can do with your Pi itself is setup wireless connection like
[SSH](https://www.raspberrypi.org/documentation/remote-access/ssh/)
if you wish to connect to your rover through these means. It can be very helpful when bug testing and preforming first time set-ups,
but is completely optional as you can also use a monitor and keyboard.

If you are running your Pi completely headless (with no monitor to set up your pi) then after you flash the Navio OS put a file named ``ssh`` into the
boot partition of the SD Card. The contents of the file do not matter. This tells the Pi to enable SSH on first time setup and then the file is deleted.

To SSH into computers, you normally will need to find the IP of your pi through either your router or a software such as [nmap](https://nmap.org/download.html)
and have a SSH software like [Putty](https://www.putty.org/). In our case, we can SSH into our Navio using only Putty. Launching
putty will bring us to the home screen where we can input ``navio.local`` as our HostName as long as there in only one Navio unit on the network.
You should be connected and prompted to login, then greeted with the Navio2s greeting prompt.

![putty homescreen](/img/puttyHomescreen.png)

![putty connected](/img/puttyConnected.png)

If there are multiple Navio Units, or if you want to know your Pis' IP for some other reason, ZenMap will let us discover the IP on any network.
Make sure your Pi is powered on, then type your Pis Hostname (default HostName is `navio`) into the target box as shown below, the rest of
the settings profile and command should remain the same. Then click scan and you should see text in the Nmap Output tab. Copy the IP of your
Pi (outlined red), and now launch Putty.

![Zenmap Output](/img/zenmapOutput.png)

With Putty launched, you should see a window titled Putty Configuration. Paste your Pis IP into the HostName (or IP address) box, mark
your port as 22, and specify your connection as SSH if it was not pre-selected. Now you can click `open` to open the connection between your
computer and your Pi. You should see the Navio2 Greeting Prompt, at which point you can log in as usual.

[back to top](#)

## Telemetry Units

In order to connect your Navio2/Pi to your ground control station using telemetry,
you should edit your GCS IP file on the Navio2. To open the file, boot up your Pi/Navio2
and after logging in type:
```
sudo nano /etc/default/ardurover
```

Once in the file, your should see something like this:
```
TELEM1="-A udp:127.0.0.1:14550"
#TELEM2="-C /dev/ttyAMA0"

# Options to pass to ArduPilot
ARDUPILOT_OPTS="$TELEM1 $TELEM2"

# -A is a console switch (usually this is a Wi-Fi link)

# -C is a telemetry switch
# Usually this is either /dev/ttyAMA0 - UART connector on your Navio
# or /dev/ttyUSB0 if you're using a serial to USB convertor

# -B or -E is used to specify non default GPS
```

This tutorial uses Telemetry, so you should comment out the line that
tells ardupilot to connect via a Wi-Fi link so it looks like:

```
#TELEM1="-A udp:127.0.0.1:14550"
```
and un-comment the line that tells ardupilot to connect via a telemetry
switch. This line can also be edited depending on the type of telemetry
you are using. For UART connections you will change the line to:

```
TELEM2="-C /dev/ttyAMA0"
```

and for serial to USB converters:

```
TELEM2="-C /dev/ttyUSB0"
```

Now the start of your file should look like either:

```
#TELEM1="-A udp:127.0.0.1:14550"
TELEM2="-C /dev/ttyAMA0"
```

 if your telemetry uses a UART port or, if you are using a serial to USB converter to use telemetry
 it should look like:

 ```
 #TELEM1="-A udp:127.0.0.1:14550"
 TELEM2="-C /dev/ttyUSB0"
 ```

 Your telemetry units will *blink* green when looking for their partner
 unit and maintain a *solid* green when they are connected to their partner. If your
 telemetry units are not communicating try restarting/rebooting your ground station with the
 telemetry unit remaining plugged in and failing that update your units drivers.
 If you encounter any more problems you should contact the manufacturer.

[back to top](#)
</details>
