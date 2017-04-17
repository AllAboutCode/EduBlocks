Blockly.Blocks['import_edupy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("from edupy import *");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(336);
    this.setTooltip('Imports the edupy library.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pass'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pass");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(336);
    this.setTooltip('Pass to the next command');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['df'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("def"), "def")
        .appendField("()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(336);
    this.setTooltip('Trigger a define function');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ehimport'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import explorerhat");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(240);
    this.setTooltip('Import the Explorer Hat library');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ehtouch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("explorerhat.touch.")
        .appendField(new Blockly.FieldDropdown([["one","one"], ["two","two"], ["three","three"], ["four","four"], ["five","five"], ["six","six"], ["seven","seven"], ["eight","eight"]]), "padnumber")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["is_pressed","is_pressed"], ["is_held","is_held"], ["pressed","pressed"], ["held","held"], ["released","released"]]), "event")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput(""), "bracket")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(240);
    this.setTooltip('Control the eight cap touch buttons on Explorer Hat');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ehinput'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("explorerhat.input.")
        .appendField(new Blockly.FieldDropdown([["one","one"], ["two","two"], ["three","three"], ["four","four"]]), "inputnumber")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["read","read"], ["has_changed","has_changed"], ["on_changed","on_changed"], ["on_low","on_low"], ["on_high","on_high"], ["clear_events","clear_events"]]), "inputevent")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput(""), "bracketin")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(240);
    this.setTooltip('Control the 4 inputs on Explorer Hat');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ehoutput'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("explorerhat.output.")
        .appendField(new Blockly.FieldDropdown([["one","one"], ["two","two"], ["three","three"], ["four","four"]]), "outputnumber")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"], ["toggle","toggle"], ["write","write"], ["blink","blink"], ["pulse","pulse"], ["fade","fade"], ["stop","stop"]]), "outputevent")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput(""), "bracketout")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(240);
    this.setTooltip('Contol the 4 outputs on Explorer Hat');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ehlights'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("explorerhat.light.")
        .appendField(new Blockly.FieldDropdown([["yellow","yellow"], ["blue","blue"], ["red","red"], ["green","green"]]), "lightnumber")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"], ["toggle","toggle"], ["write","write"], ["blink","blink"], ["pulse","pulse"], ["fade","fade"], ["stop","stop"]]), "lightevent")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput(""), "bracketlight")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(240);
    this.setTooltip('Control the 4 lights on Explorer Hat');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ehanalog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("explorerhat.AnalogInput.")
        .appendField(new Blockly.FieldDropdown([["one","one"], ["two","two"], ["three","three"], ["four","four"]]), "analognumber")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["read","read"], ["changed","changed"]]), "analogevent")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput(""), "bracketanalog")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(240);
    this.setTooltip('Control the 4 Analog Inputs on Explorer Hat');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['ehmotor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("explorerhat.motor.")
        .appendField(new Blockly.FieldDropdown([["one","one"], ["two","two"]]), "motornumber")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["forwards","forwards"], ["backwards","backwards"], ["invert","invert"], ["speed","speed"], ["stop","stop"]]), "motorevent")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput(""), "bracketmotor")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(240);
    this.setTooltip('Control the 2 motor outputs on Explorer Hat');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['blinktimport'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("from blinkt import *");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(90);
    this.setTooltip('Import the Blinkt! library.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['blinktsetpixel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set_pixel(")
        .appendField(new Blockly.FieldTextInput("pixelno"), "pixelno")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("r"), "r")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("g"), "g")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("b"), "b")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(90);
    this.setTooltip('Set a pixel on the Blinkt!');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['blinktshow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("show()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(90);
    this.setTooltip('Update the Blinkt! to show your code');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['blinktsetbrightness'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set_brightness(")
        .appendField(new Blockly.FieldTextInput("number"), "number")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(90);
    this.setTooltip('Set the brightness of your Blinkt!');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['blinktsetpixelbright'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set_pixel(")
        .appendField(new Blockly.FieldTextInput("pixelno"), "pixelno")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("r"), "r")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("g"), "g")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("b"), "b")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("brightness"), "bright")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(90);
    this.setTooltip('Set a pixel on your Blinkt! with individual brightness control');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['blinktsetallbright'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set_all(")
        .appendField(new Blockly.FieldTextInput("r"), "r")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("g"), "g")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("b"), "b")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("brightness"), "bright")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(90);
    this.setTooltip('Set all the pixels on your Blinkt! with brightness control');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['blinktsetall'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set_all(")
        .appendField(new Blockly.FieldTextInput("r"), "r")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("g"), "g")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("b"), "b")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(90);
    this.setTooltip('Set all the pixels on your Blinkt!');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['blinktclear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("clear()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(90);
    this.setTooltip('Clear all pixels on your Blinkt!');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['play'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("play(")
        .appendField(new Blockly.FieldTextInput("0"), "value")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(180);
    this.setTooltip('Play a single note');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['for'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("for")
        .appendField(new Blockly.FieldTextInput("i"), "letter")
        .appendField("in range(")
        .appendField(new Blockly.FieldTextInput("number"), "no")
        .appendField("):");
    this.appendStatementInput("DO")
        .setCheck(null);
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(336);
    this.setTooltip('');
    this.setHelpUrl('Create a for loop');
  }
};

Blockly.Blocks['sleep1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sleep(")
        .appendField(new Blockly.FieldTextInput("0"), "value")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(180);
    this.setTooltip('Play a single note');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['import_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("from mcpi import block");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(270);
    this.setTooltip('Imports the mcpi block library.');
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import random");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(336);
    this.setTooltip('Imports the random library.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['build'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("buildPumpkin(")
        .appendField(new Blockly.FieldTextInput("0"), "x")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("0"), "y")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("0"), "z")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['import_math'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import math");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(336);
    this.setTooltip('Imports the math library.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['return'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("return math.sqrt((xd*xd) + (yd*yd) + (zd*zd))");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('Imports the edupy library.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import time");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(336);
    this.setTooltip('Imports the time library.');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['equalsblock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0"), "1")
        .appendField("=")
        .appendField(new Blockly.FieldTextInput("0"), "2");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(336);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sleep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("time.sleep(")
        .appendField(new Blockly.FieldTextInput(1), "sleepTime")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(336);
    this.setTooltip('Wait for a given amount of seconds.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['led_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["red", "red"], ["yellow", "yellow"], ["green", "green"], ["blue", "blue"]]), "led_colour")
        .appendField("_led_on()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(196);
    this.setTooltip('Turns the chosen LED on.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['led_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["red", "red"], ["yellow", "yellow"], ["green", "green"], ["blue", "blue"]]), "led_colour")
        .appendField("_led_off()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(196);
    this.setTooltip('Turns the chosen LED off.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['button_pressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("button_pressed()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(196);
    this.setTooltip('When the button is pressed do:');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['get_reading'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get_reading()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(0);
    this.setTooltip('Get the distance between the wall and robot.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stop()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(0);
    this.setTooltip('Stop the motors.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("forward()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(0);
    this.setTooltip('Make the robot go forward.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("backward()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(0);
    this.setTooltip('Make the robot go backward.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['turn_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn_left()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(0);
    this.setTooltip('Turn the robot left.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['turn_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn_right()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(0);
    this.setTooltip('Turn the robot right.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['line_test'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("line_test()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(0);
    this.setTooltip('Test the line sensor.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['all_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("all_on()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(196);
    this.setTooltip('Turn all 3 LEDs on.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['while_true'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('while True:');
    this.appendStatementInput('DO')
        .appendField('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(336);
    this.setTooltip('Forever loop.');
    this.setHelpUrl('https://t.co/PCZC5EFe4D');
  }
};

Blockly.Blocks['else'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('else:');
    this.appendStatementInput('DO')
        .appendField('');
    this.setPreviousStatement(true);
    this.setNextStatement(false);
    this.setColour(336);
    this.setTooltip('Else statement');
    this.setHelpUrl('https://t.co/PCZC5EFe4D');
  }
};

Blockly.Blocks['if'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("if")
        .appendField(new Blockly.FieldTextInput("0"), "var")
        .appendField(":");
    this.appendStatementInput("DO")
        .appendField("");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true);
    this.setColour(336);
    this.setTooltip('If Statement.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['elif'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("elif")
        .appendField(new Blockly.FieldTextInput("0"), "var")
        .appendField(":");
    this.appendStatementInput("DO")
        .appendField("");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(false);
    this.setColour(336);
    this.setTooltip('Elif Statement.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['greater'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("while")
        .appendField(new Blockly.FieldTextInput(""), "1")
        .appendField(">")
        .appendField(new Blockly.FieldTextInput(""), "v")
        .appendField(":");
    this.appendStatementInput("DO")
        .appendField('');
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(336);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['whileout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("while")
        .appendField(new Blockly.FieldTextInput(""), "1")
        .appendField(":");
    this.appendStatementInput("DO")
        .appendField('');
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(336);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['define'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("def ")
        .appendField(new Blockly.FieldTextInput(""), "1")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput(""), "2")
        .appendField("):");
    this.appendStatementInput("DO")
        .setCheck(null);
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(336)
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['liveloop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("live_loop_")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "num");
    this.appendStatementInput("DO")
        .setCheck(null);
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(180);
    this.setTooltip('Create a live loop with Sonic Pi');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['all_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("all_off()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(196);
    this.setTooltip('Turn all 3 LEDs off.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['all_blink'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("all_blink()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(196);
    this.setTooltip('Make all 3 LEDs blink.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("button_test()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(196);
    this.setTooltip('Print the button status.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['buzzer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("buzzer_")
        .appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"]]), "NAME")
        .appendField("()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(196);
    this.setTooltip('Turns the buzzer on or off');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['blink'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["red", "red"], ["yellow", "yellow"], ["green", "green"]]), "NAME")
        .appendField("_led_blink()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(196);
    this.setTooltip('Make a chosen LED blink');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['user_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("user_input()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(196);
    this.setTooltip('Blink the LED to  a user given amount. Use the output box.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['key_control'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("key_control()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(0);
    this.setTooltip('Control the robot using arrow keys. Use the output box.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['line_follower'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("line_follower()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(0);
    this.setTooltip('Follow a line.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['avoid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("avoid()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(0);
    this.setTooltip('Avoid obstacles.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['2led_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["red", "red"], ["blue", "blue"]]), "led_colour")
        .appendField("_led_on()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(45);
    this.setTooltip('Turns the chosen LED on.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['2led_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["red", "red"], ["blue", "blue"]]), "led_colour")
        .appendField("_led_off()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(45);
    this.setTooltip('Turns the chosen LED off.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['temperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("temperature()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(45);
    this.setTooltip('Prints the temperature in °C and °F. Use the output box.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ldr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ldr()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(45);
    this.setTooltip('Charges up a capacitor using light. Use output box.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['capacitor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("capacitor_drain()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(45);
    this.setTooltip('Drain the capacitor.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['motion'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motion_reading()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(45);
    this.setTooltip('Get a reading from the motion sensor.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['crossing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["green", "green"], ["amber", "amber"], ["red", "red"], ["red amber", "ramber"], ["flash amber", "flamber"], ["beep", "beep"]]), "NAME")
        .appendField("()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(196);
    this.setTooltip('Commands to create a traffic light.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['alarm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("alarm()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(45);
    this.setTooltip('Create a motion alarm.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['dot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dot()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(196);
    this.setTooltip('Dot in morse code.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['dash'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("dash()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(196);
    this.setTooltip('Dash in morse code.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['letter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("letter_space()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(196);
    this.setTooltip('Letter space in morse code.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['word'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("word_space()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(196);
    this.setTooltip('Word space in morse code.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sen_gui()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(336);
    this.setTooltip('Use this to run the SEN Corntrol GUI.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mcimport'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("from mcpi.minecraft import Minecraft");
    this.setPreviousStatement(true, 'block');
    this.setPreviousStatement(false, null);
    this.setNextStatement(true, 'block');
    this.setColour(270);
    this.setTooltip('Use this to import minecraft.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mccreate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mc = Minecraft.create()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(270);
    this.setTooltip('Use this to connect to minecraft. ALWAYS REQUIRED.');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['mcpost'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mc.postToChat(\"")
        .appendField(new Blockly.FieldTextInput(""), "chat")
        .appendField("\")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('Use this to send a message to the Minecraft chat.');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['print'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("print(\"")
        .appendField(new Blockly.FieldTextInput(""), "print")
        .appendField("\")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(336);
    this.setTooltip('Use this to print to the output box.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mcpos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("playerPos = mc.player.getPos()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('Use this set a variable of the players position.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['varprint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("print(")
        .appendField(new Blockly.FieldTextInput(""), "var")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('Use this to print a variable.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setpos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mc.player.setPos(")
        .appendField(new Blockly.FieldNumber(0, 0), "x")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(0, 0), "y")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(0, 0), "z")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('Use this to set the players position');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['campos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mc.camera.setPos(")
        .appendField(new Blockly.FieldNumber(0, 0), "x")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(0, 0), "y")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(0, 0), "z")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('Use this to set the cameras position');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['getblock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("blockType = mc.getBlock(")
        .appendField(new Blockly.FieldNumber(0, 0), "x")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(0, 0), "y")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(0, 0), "z")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('Use this to get a block type.');
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['setblock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("blockType = mc.setBlock(")
        .appendField(new Blockly.FieldNumber(0, 0), "x")
        .appendField(", ")
        .appendField(new Blockly.FieldNumber(0), "y")
        .appendField(", ")
        .appendField(new Blockly.FieldNumber(0), "z")
        .appendField(", ")
        .appendField(new Blockly.FieldNumber(0), "id")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('Use this to set a block type.');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['mcvar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("x, y, z = mc.player.getPos()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('Use this set a variable of the players position.');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['mctext'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("blockType = mc.setBlock(")
        .appendField(new Blockly.FieldTextInput("x"), "x")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput("y"), "y")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput("z"), "z")
        .appendField(", ")
        .appendField(new Blockly.FieldNumber(0), "id")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('Use this to set a block type with text');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mctext2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mc.setBlock(")
        .appendField(new Blockly.FieldTextInput("x"), "x")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput("y"), "y")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput("z"), "z")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput("i"), "i")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('Use this to set a block type with text');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mctext5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mc.setBlock(")
        .appendField(new Blockly.FieldTextInput("x"), "x")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput("y"), "y")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput("z"), "z")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput("p"), "p")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput("i"), "i")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('Use this to set a block type with text');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mcblocks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mc.setBlocks(")
        .appendField(new Blockly.FieldTextInput(0, 0), "x")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput(0), "y")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput(0), "z")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput(0), "q")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput(0), "w")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput(0), "e")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput(0), "r")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput(0), "t")
        .appendField(", ")
        .appendField(new Blockly.FieldTextInput(0), "y")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('Use this to set numerous blocks');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mcblocks8'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mc.setBlocks(")
        .appendField(new Blockly.FieldTextInput("0"), "x")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("0"), "y")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("0"), "z")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("0"), "q")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("0"), "w")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("0"), "e")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("0"), "r")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("0"), "t")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['2buzzer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("buzzer_")
        .appendField(new Blockly.FieldDropdown([["on", "on"], ["off", "off"]]), "NAME")
        .appendField("()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(45);
    this.setTooltip('Turns the buzzer on or off');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['buildpumpkin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("buildPumpkin(")
        .appendField(new Blockly.FieldNumber(0), "x")
        .appendField(", ")
        .appendField(new Blockly.FieldNumber(0), "y")
        .appendField(", ")
        .appendField(new Blockly.FieldNumber(0), "z")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['getdist'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("distance_to_player(")
        .appendField(new Blockly.FieldNumber(0), "x")
        .appendField(", ")
        .appendField(new Blockly.FieldNumber(0), "y")
        .appendField(", ")
        .appendField(new Blockly.FieldNumber(0), "z")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['find'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("findObject(")
        .appendField(new Blockly.FieldNumber(0), "x")
        .appendField(", ")
        .appendField(new Blockly.FieldNumber(0), "y")
        .appendField(", ")
        .appendField(new Blockly.FieldNumber(0), "z")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['import_emine'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("from eduminecraft import *");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('Imports the eduminecraft library.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['cameraset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mc.camera.set")
        .appendField(new Blockly.FieldDropdown([["Fixed","Fixed"], ["Normal","Normal"]]), "drop")
        .appendField("()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(120);
    this.setTooltip('Set camera mode.');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['import_sonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("from psonic import *");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sampleson'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sample(")
        .appendField(new Blockly.FieldTextInput("name"), "name")
        .appendField(")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['senseshow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sense.show_message(\"")
        .appendField(new Blockly.FieldTextInput("Text Here"), "text")
        .appendField("\")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(180);
    this.setTooltip('Imports the Sense Hat library');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['senseinit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sense = SenseHat()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(180);
    this.setTooltip('Detects the sense hat');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['comment_block'] = {
  init: function() {
	  this.appendDummyInput()
		.appendField("#")
		.appendField(new Blockly.FieldTextInput(""), "comment");
		this.setPreviousStatement(true, 'block');
		this.setNextStatement(true, 'block');
		this.setColour(336);
		this.setTooltip('Add a comment');
		this.setHelpUrl('https://docs.python.org/3/library');
  }
};

Blockly.Blocks['code_block'] = {
  init: function() {
	  this.appendDummyInput()
		.appendField(new Blockly.FieldTextInput(""), "code");
		this.setPreviousStatement(true, 'block');
		this.setNextStatement(true, 'block');
		this.setColour(336);
		this.setTooltip('Add a line of Python code');
		this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
  }
};

Blockly.Blocks['http_client_import_rest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import http.client");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(70);
    this.setTooltip('Imports the http client library.');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['https_client_create_connection'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("conn = http.client.HTTPSConnection(\"")
		.appendField(new Blockly.FieldTextInput("www.edublocks.org"), "URL")
		.appendField("\")")
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(70);
    this.setTooltip('Created a connection');
    this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
  }
};

Blockly.Blocks['http_client_create_connection'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("conn = http.client.HTTPConnection(\"")
		.appendField(new Blockly.FieldTextInput("www.edublocks.org"), "URL")
		.appendField(",")
		.appendField(new Blockly.FieldTextInput("80"), "PORT")
		.appendField("\")");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(70);
    this.setTooltip('Created a connection');
    this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
  }
};

Blockly.Blocks['http_client_request'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("conn.request(")
		.appendField(new Blockly.FieldDropdown([["GET","GET"], ["POST","POST"], ["PUT","PUT"], ["DELETE","DELETE"]]), "method")
		.appendField(",\"")
		.appendField(new Blockly.FieldTextInput("/"), "request")
		.appendField("\",\"")
		.appendField(new Blockly.FieldTextInput(""), "body")
		.appendField("\",{")
		.appendField(new Blockly.FieldTextInput(""), "headers")
		.appendField("})");

    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(70);
    this.setTooltip('Create a request text_headers(method,request,body,headers)');
    this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
  }
};

Blockly.Blocks['http_client_responce'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("r1 = conn.getresponse()");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(70);
    this.setTooltip('Get the responce.');
    this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
  }
};

Blockly.Blocks['http_client_status'] = {
  init: function() {
	this.appendDummyInput()
        .appendField("r1.status");
	this.setOutput(true, 'Number');
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(70);
    this.setTooltip('Get the responce.');
    this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
  }
};

Blockly.Blocks['http_client_reason'] = {
  init: function() {
	this.appendDummyInput()
        .appendField("r1.reason");
	this.setOutput(true, 'Number');
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(70);
    this.setTooltip('Get the responce.');
    this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
  }
};

Blockly.Blocks['http_client_read'] = {
  init: function() {
	this.appendDummyInput()
        .appendField("r1.read");
	this.setOutput(true, 'Number');
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(70);
    this.setTooltip('Get the responce.');
    this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
  }
};

Blockly.Blocks['inline_print'] = {
  init: function() {
	  this.appendValueInput('VALUE')
        .setCheck(['String', 'Number'])
        .appendField('print');
		this.setInputsInline(true);
		this.setPreviousStatement(true, 'block');
		this.setNextStatement(true, 'block');
		this.setColour(70);
		this.setTooltip('Use this to print to the output box.');
		this.setHelpUrl('http://www.example.com/');
  }
};

//*******************************
// Added by andrew pye
// 15/04/2017
// Http.client
//*******************************

Blockly.Blocks['http_client_header'] = {
  init: function() {
	this.appendDummyInput()
		.appendField("")
		.appendField(new Blockly.FieldDropdown([["Authorization","Authorization"], ["Content-Type","Content-Type"], ["Accept-Charset","Accept-Charset"], ["Cache-Control","Cache-Control"]]), "key")
		.appendField(",\"")
		.appendField(new Blockly.FieldTextInput(""), "value")
		.appendField("\"");
	this.setOutput(true, 'String');
	this.setIput(true, 'String');
    this.setPreviousStatement(false, 'http_client_header');
    this.setNextStatement(false, 'http_client_header');
    this.setColour(70);
    this.setTooltip('Get the responce.');
    this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
  }
};


//*******************************
// Added by andrew pye
// 15/04/2017
// Flask Web server
//*******************************

Blockly.Blocks['flask_import'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("from flask import Flask");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['flask_server'] = {
  init: function() {
	 
    this.appendDummyInput()
        .appendField("flask port")
        .appendField(new Blockly.FieldTextInput("5000"), "port")
        .appendField(":");
		
    this.appendStatementInput("ROUTE")
        .setCheck(['flask_route']);
		
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(true, 'block');
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['flask_route'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Route")
        .appendField(new Blockly.FieldTextInput("/"), "route")   
		.appendField("Function Name")
        .appendField(new Blockly.FieldTextInput("index()"), "method")   
		
    this.appendStatementInput("DO");
		
    this.setPreviousStatement(true, "flask_route");
    this.setNextStatement(true, "flask_route");
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['flask_return'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("return")
        .appendField(new Blockly.FieldTextInput(""), "var");
    this.setPreviousStatement(true, 'block');
    this.setNextStatement(false, 'block');
    this.setColour(200);
    this.setTooltip('Use this to print a variable.');
    this.setHelpUrl('http://www.example.com/');
  }
};