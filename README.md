![alt tag](misc/mainebheader.png)

Welcome to the EduBlocks Github Repository!
===========================================

About EduBlocks
---------------
EduBlocks is a visual block based programming tool that will hopefully help teachers to introduce text based programming languages, like Python, to children at an earlier age.
![alt tag](misc/edublocksvividtheme.png)
EduBlocks features:
* Block Format:
Easy and simple interface that uses a building block format to code.
* Extensive Documentation:
Lots of documentation to get you ready to go quickly. New projects added every 2 weeks.
* Range of libraries:
EduBlocks has a range of libraies like GPIOzero, Minecraft & Sonic Pi. 
* Python View:
Once you have coded the blocks, you can easily switch to the Python View to see the real Python code.

Status
---------------
### Build Status
![Build Status](https://circleci.com/gh/AllAboutCode/EduBlocks.png?circle-token=:circle-token)

### Branch Status
![experimental](http://badges.github.io/stability-badges/dist/stable.svg)

Installation
------------
Get started with EduBlocks on your Raspberry Pi in these simple steps:

1. Open up a terminal window by clicking on the terminal icon on the top right hand corner of your Raspberry Pi's Screen
![alt tag](misc/step1new.png)
2. Type the following command and then press enter on your keyboard.
![alt tag](misc/step2new.png)
```bash
curl -sSL get.edublocks.org | bash
```
3. The installer will now run for a few minutes. This depends on your internet speeds.
![alt tag](misc/step3new.png)
4. You will now be able to see EduBlocks in the Raspberry Pi >> Programming menu. Click on the EduBlocks link to run the program.
![alt tag](misc/step4new.png)
5. After around half a minute, you should be able to see the EduBlocks workspace. Happy Coding.
![alt tag](misc/step5new.png)

Did this not work for you? Look at the Support section of this document.

Manual Install
--------------

If you would rather mannually install EduBlocks instead of running our curl command. Here is the commands to do it:
```
wget http://edublocks.org/downloads/edublocks-armv6l.tar.xz

tar -xf edublocks-armv6l.tar.xz

edublocks/install-deps.sh

edublocks/install.sh
```

Developer Instructions
----------------------

NOTE: Windows users will need to enable symbolic link support before they attempt to clone the repository!



### Dependencies

Install Node.JS 6.10.2 using the appropriate installer for your platform. For Linux and Mac OS X (and also Bash on Windows), we recommend using NPM for this.

Install Yarn:

    npm --global install yarn

Install PIP packages:

    pip3 install edupy python-sonic blinkt explorerhat 'ipython==6.0.0'

### Running Server and Client locally in developer mode on your PC

Developer mode allows you to run EduBlocks on your PC and watch for live code changes for developer convenience.

Open two terminal windows/tabs.

In the first terminal, run the UI watcher:

    cd ui
    yarn
    yarn run watch

In the second terminal, run the server:

    cd server
    yarn
    yarn run watch

EduBlocks UI will now be available at http://localhost:8081/

#### Bash on Windows instructions (better instructions will follow)

    sudo apt install git build-essential
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
    . ~/.nvm/nvm.sh
    nvm install 6.10.2
    npm --global install yarn
    
    git clone git@github.com:AllAboutCode/EduBlocks.git

    cd EduBlocks

    cd ui
    ln -s ../../server/src/protocol.ts src/protocol.ts

    yarn
    yarn run build

    cd ../server
    yarn
    yarn run watch

### Releasing a new version

Increment version, this will automatically tag the current commit as the new version:

    yarn version

Push changes along with the new tag to GitHub, triggering a new build:

    git push --tags
    git push

Once build has completed successfully, a new build will be available at:

    http://edublocks.org/downloads/edublocks-armv6l.tar.xz

### Building EduBlocks

Building is performed by our CI platform. See `circle.yml` for more info. The tarball is built using a shell script. This will create the subdirectory `edublocks`. The build script is only intended to be run by the CI platform however it will probably work on most Linux platforms.

To run build script:

    ./tarball-create.sh

Support
-------

Need help or support with EduBlocks? There are a few ways in which you can get in touch with us. We try our best to provide a speedy and smooth support service for our users. It may take us a few hours to respond as EduBlocks is not our full time jobs/ commitment. Also, it may take a few days/weeks/months before your request is solved.

### Twitter

EduBlocks Support: @edu_blocks
<br>
All About Code: @all_about_code

### Email

Support Email: support@edublocks.org
<br>
Joshua Email: josh@edublocks.org
<br>
Chris (Developer) Email: chris@edublocks.org

### Website

EduBlocks: http://edublocks.org
<br>
All About Code: http://allaboutcode.co.uk

Ways to contribute
-----------

We want to make EduBlocks a community project. We are open to people opening issues, giving us feedback on how we can improve and opening pull requests to add features or fixes to the project. The community plays a huge part in EduBlocks.

Contributors
-----------

Meet the contributers who make EduBlocks a reality.

### Joshua Lowe @joshualowe1002

Joshua is the project lead and oversees all new changes. He programs he blocks and adds new libraries and features. Josh also was the founder of EduBlocks.

### Chris Dell @cjdell

Chris is a freelance software developer who works on the programming and software side of EduBlocks. He works with Joshua to make his ideas a reality.

### Les Pounder

Les is a freelance software developer who mainly contributed on the original install script making sure that anyone can install EduBlocks with ease. Also Les helps with writing and making sure EduBlocks is out there in the Raspberry Pi community. Les is also a pi-top champion meaning we can borrow 10 pi-tops for our workshops.

### Chris Penn (AKA NCS:Computing) @ncscomputing

Chris P developed the first ever EduBlocks resource sheets within the HackPack anthology. Also, Chris P suggested that MineCraft should be incuded with EduBlocks. Chris also blogs about his cool uses of new EduBlocks features.

We would also like to recognize the following companies. These may not have contibuted to software but have contributed in other ways.

### Makerspace @ CPC:
For supplying GPIO equimpment for workshops and helping EduBlocks out whenever we need them. They are a truly great team. Thanks Kev, Rachel & Ivan!

### Pimoroni:
For letting us visit the ship at Sheffield-On-Sea to promote and learn about software & hardware to improve EduBlocks and for being awesome people. Thanks Jon, Paul, Phil, Sandy & The team.

### Pi-Top:
For the pi-top  FUTUREchampions for giving us acess to 4 pi-top CEEDS for demonstrating and running EduBlocks workshops.





