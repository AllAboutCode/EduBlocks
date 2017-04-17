Blockly.Python['import_edupy'] = function(block) {
  var code = 'from edupy import *\n';
  return code;
};

Blockly.Python['pass'] = function(block) {
  var code = 'pass \n';
  return code;
};

Blockly.Python['ehimport'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import explorerhat\n';
  return code;
};

Blockly.Python['ehtouch'] = function(block) {
  var dropdown_padnumber = block.getFieldValue('padnumber');
  var dropdown_event = block.getFieldValue('event');
  var text_bracket = block.getFieldValue('bracket');
  // TODO: Assemble Python into code variable.
  var code = 'explorerhat.touch.' +dropdown_padnumber+'.' +dropdown_event+'(' +text_bracket+')\n';
  return code;
};

Blockly.Python['ehoutput'] = function(block) {
  var dropdown_outputnumber = block.getFieldValue('outputnumber');
  var dropdown_outputevent = block.getFieldValue('outputevent');
  var text_bracketout = block.getFieldValue('bracketout');
  // TODO: Assemble Python into code variable.
  var code = 'explorerhat.output.' +dropdown_outputnumber+'.' +dropdown_outputevent+'(' +text_bracketout+')\n';
  return code;
};

Blockly.Python['ehinput'] = function(block) {
  var dropdown_inputnumber = block.getFieldValue('inputnumber');
  var dropdown_inputevent = block.getFieldValue('inputevent');
  var text_bracketin = block.getFieldValue('bracketin');
  // TODO: Assemble Python into code variable.
  var code = 'explorerhat.input.' +dropdown_inputnumber+'.' +dropdown_inputevent+'(' +text_bracketin+')\n';
  return code;
};

Blockly.Python['ehlights'] = function(block) {
  var dropdown_lightnumber = block.getFieldValue('lightnumber');
  var dropdown_lightevent = block.getFieldValue('lightevent');
  var text_bracketlight = block.getFieldValue('bracketlight');
  // TODO: Assemble Python into code variable.
  var code = 'explorerhat.light.' +dropdown_lightnumber+'.' +dropdown_lightevent+'(' +text_bracketlight+')\n';
  return code;
};

Blockly.Python['ehanalog'] = function(block) {
  var dropdown_analognumber = block.getFieldValue('analognumber');
  var dropdown_analogevent = block.getFieldValue('analogevent');
  var text_bracketanalog = block.getFieldValue('bracketanalog');
  // TODO: Assemble Python into code variable.
  var code = 'explorerhat.AnalogInput.' +dropdown_analognumber+'.' +dropdown_analogevent+'(' +text_bracketanalog+')\n';
  return code;
};

Blockly.Python['ehmotor'] = function(block) {
  var dropdown_motornumber = block.getFieldValue('motornumber');
  var dropdown_motorevent = block.getFieldValue('motorevent');
  var text_bracketmotor = block.getFieldValue('bracketmotor');
  // TODO: Assemble Python into code variable.
  var code = 'explorerhat.motor.' +dropdown_motornumber+'.' +dropdown_motorevent+'(' +text_bracketmotor+')\n';
  return code;
};

Blockly.Python['blinktimport'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'from blinkt import *\n';
  return code;
};

Blockly.Python['blinktsetpixel'] = function(block) {
  var text_pixelno = block.getFieldValue('pixelno');
  var text_r = block.getFieldValue('r');
  var text_g = block.getFieldValue('g');
  var text_b = block.getFieldValue('b');
  // TODO: Assemble Python into code variable.
  var code = 'set_pixel(' +text_pixelno+ ', ' +text_r+', ' +text_g+ ', ' +text_b+ ')\n';
  return code;
};

Blockly.Python['blinktshow'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'show()\n';
  return code;
};

Blockly.Python['blinktsetbrightness'] = function(block) {
  var text_number = block.getFieldValue('number');
  // TODO: Assemble Python into code variable.
  var code = 'set_brightness(' +text_number+ ')\n';
  return code;
};

Blockly.Python['blinktsetpixelbright'] = function(block) {
  var text_pixelno = block.getFieldValue('pixelno');
  var text_r = block.getFieldValue('r');
  var text_g = block.getFieldValue('g');
  var text_b = block.getFieldValue('b');
  var text_bright = block.getFieldValue('bright');
  // TODO: Assemble Python into code variable.
  var code = 'set_pixel(' +text_pixelno+ ', ' +text_r+', ' +text_g+ ', ' +text_b+ ',' +text_bright+ ')\n';
  return code;
};

Blockly.Python['blinktsetall'] = function(block) {
  var text_r = block.getFieldValue('r');
  var text_g = block.getFieldValue('g');
  var text_b = block.getFieldValue('b');
  // TODO: Assemble Python into code variable.
  var code = 'set_all(' +text_r+', ' +text_g+ ', ' +text_b+ ')\n';
  return code;
};

Blockly.Python['blinktsetallbright'] = function(block) {
  var text_pixelno = block.getFieldValue('pixelno');
  var text_r = block.getFieldValue('r');
  var text_g = block.getFieldValue('g');
  var text_b = block.getFieldValue('b');
  var text_bright = block.getFieldValue('bright');
  // TODO: Assemble Python into code variable.
  var code = 'set_all(' +text_r+', ' +text_g+ ', ' +text_b+ ',' +text_bright+ ')\n';
  return code;
};

Blockly.Python['blinktclear'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'clear()\n';
  return code;
};




Blockly.Python['import_sonic'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'from psonic import *\n';
  return code;
};

Blockly.Python['play'] = function(block) {
  var text_value = block.getFieldValue('value');
  // TODO: Assemble Python into code variable.
  var code = 'play(' + text_value + ')\n';
  return code;
};

Blockly.Python['sleep1'] = function(block) {
  var text_value = block.getFieldValue('value');
  // TODO: Assemble Python into code variable.
  var code = 'sleep(' + text_value + ')\n';
  return code;
};

Blockly.Python['sampleson'] = function(block) {
  var text_name = block.getFieldValue('name');
  // TODO: Assemble Python into code variable.
  var code = 'sample(' + text_name + ')\n';
  return code;
};


Blockly.Python['senseinit'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'sense = SenseHat()\n';
  return code;
};

Blockly.Python['senseshow'] = function(block) {
  var text_text = block.getFieldValue('text');
  // TODO: Assemble Python into code variable.
  var code = 'sense.show_message("' +text_text+ '")\n';
  return code;
};

Blockly.Python['import_block'] = function(block) {
  var code = 'from mcpi import block\n';
  return code;
};

Blockly.Python['random'] = function(block) {
  var code = 'import random\n';
  return code;
};

Blockly.Python['import_math'] = function(block) {
  var code = 'import math\n';
  return code;
};

Blockly.Python['equalsblock'] = function(block) {
  var text_1 = block.getFieldValue('1');
  var text_2 = block.getFieldValue('2');
  // TODO: Assemble Python into code variable.
  var code = text_1 + '=' + text_2 +'\n';
  return code;
};

Blockly.Python['import_emine'] = function(block) {
  var code = 'from eduminecraft import *\n';
  return code;
};

Blockly.Python['sleep'] = function(block) {
  var text_sleeptime = block.getFieldValue('sleepTime');
  var code = 'time.sleep(' + text_sleeptime + ')\n';
  return code;
};

Blockly.Python['led_on'] = function(block) {
  var dropdown_led_colour = block.getFieldValue('led_colour');
  // TODO: Assemble Python into code variable.
  var code = dropdown_led_colour + '_led_on()\n';
  return code;
};


Blockly.Python['led_off'] = function(block) {
  var dropdown_led_colour = block.getFieldValue('led_colour');
  // TODO: Assemble Python into code variable.
  var code = dropdown_led_colour + '_led_off()\n';
  return code;
};

Blockly.Python['button_pressed'] = function(block) {
  var code = 'button_pressed()\n';
  return code;
};

Blockly.Python['get_reading'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'get_reading()\n';
  return code;
};

Blockly.Python['stop'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'stop()\n';
  return code;
};

Blockly.Python['forward'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'forward()\n';
  return code;
};

Blockly.Python['backward'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'backward()\n';
  return code;
};

Blockly.Python['turn_left'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'turn_left()\n';
  return code;
};

Blockly.Python['turn_right'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'turn_right()\n';
  return code;
};

Blockly.Python['line_test'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'line_test()\n';
  return code;
};

Blockly.Python['all_on'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'all_on()\n';
  return code;
};

Blockly.Python['all_off'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'all_off()\n';
  return code;
};

Blockly.Python['while_true'] = function(block) {
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  return 'while True:\n' + branch;
};

Blockly.Python['else'] = function(block) {
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  return 'else:\n' + branch;
};

Blockly.Python['df'] = function(block) {
  var text_def = block.getFieldValue('def');
  // TODO: Assemble Python into code variable.
  var code = text_def + '()\n';
  return code;
};

Blockly.Python['if'] = function(block) {
  var text_var = block.getFieldValue('var');
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  return 'if ' + text_var + ':\n' + branch;
};

Blockly.Python['elif'] = function(block) {
  var text_var = block.getFieldValue('var');
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  return 'elif ' + text_var + ':\n' + branch;
};

Blockly.Python['define'] = function(block) {
  var text_1 = block.getFieldValue('1');
  var text_2 = block.getFieldValue('2');
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = 'def ' + text_1 + '(' + text_2 + '):\n' + branch;
  return code;
};

Blockly.Python['liveloop'] = function(block) {
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  var dropdown_num = block.getFieldValue('num');
  var statements_do = Blockly.Python.statementToCode(block, 'DO');
  // TODO: Assemble Python into code variable.
  var code = 'def live_loop_' +dropdown_num+ '():\n' + branch;
  return code;
};

Blockly.Python['for'] = function(block) {
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  var text_letter = block.getFieldValue('letter');
  var text_no = block.getFieldValue('no');
  var statements_name = Blockly.Python.statementToCode(block, 'DO');
  // TODO: Assemble Python into code variable.
  var code = 'for ' +text_letter+ ' in range(' +text_no+ '):\n' +branch;
  return code;
};

Blockly.Python['greater'] = function(block) {
  var text_1 = block.getFieldValue('1');
  var text_v = block.getFieldValue('v');
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  // TODO: Assemble Python into code variable.
  var code = 'while ' + text_1 + ' > ' + text_v + ':\n' + branch;
  return code;
};

Blockly.Python['whileout'] = function(block) {
  var text_1 = block.getFieldValue('1');
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  // TODO: Assemble Python into code variable.
  var code = 'while ' + text_1 + ':\n' + branch;
  return code;
};

Blockly.Python['all_blink'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'all_blink()\n';
  return code;
};

Blockly.Python['button'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'button_test()\n';
  return code;
};

Blockly.Python['buzzer'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'buzzer_' + dropdown_name + '()\n';
  return code;
};

Blockly.Python['blink'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = dropdown_name + '_led_blink()\n';
  return code;
};

Blockly.Python['user_input'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'user_input()\n';
  return code;
};

Blockly.Python['key_control'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'key_control()\n';
  return code;
};

Blockly.Python['line_follower'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'line_follower()\n';
  return code;
};

Blockly.Python['avoid'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'avoid()\n';
  return code;
};

Blockly.Python['2led_on'] = function(block) {
  var dropdown_led_colour = block.getFieldValue('led_colour');
  // TODO: Assemble Python into code variable.
  var code = dropdown_led_colour + '_led_on()\n';
  return code;
};


Blockly.Python['2led_off'] = function(block) {
  var dropdown_led_colour = block.getFieldValue('led_colour');
  // TODO: Assemble Python into code variable.
  var code = dropdown_led_colour + '_led_off()\n';
  return code;
};

Blockly.Python['temperature'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'temperature()\n';
  return code;
};

Blockly.Python['ldr'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'ldr()\n';
  return code;
};

Blockly.Python['capacitor'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'capacitor_drain()\n';
  return code;
};

Blockly.Python['motion'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'motion_reading()\n';
  return code;
};

Blockly.Python['crossing'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = dropdown_name + '()\n';
  return code;
};

Blockly.Python['alarm'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'alarm()\n';
  return code;
};

Blockly.Python['dot'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'dot()\n';
  return code;
};

Blockly.Python['dash'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'dash()\n';
  return code;
};

Blockly.Python['letter'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'letter_space()\n';
  return code;
};

Blockly.Python['word'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'word_space()\n';
  return code;
};

Blockly.Python['sen'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'sen_gui()\n';
  return code;
};

Blockly.Python['mcimport'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'from mcpi.minecraft import Minecraft \n';
  return code;
};

Blockly.Python['mccreate'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'global mc; mc = Minecraft.create() \n';
  return code;
};

Blockly.Python['mcpost2'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mc.postToChat("Hello") \n';
  return code;
};

Blockly.Python['mcpost'] = function(block) {
  var text_chat = block.getFieldValue('chat');
  // TODO: Assemble Python into code variable.
  var code = 'mc.postToChat("' + text_chat + '")\n';
  return code;
};

Blockly.Python['print'] = function(block) {
  var text_print = block.getFieldValue('print');
  // TODO: Assemble Python into code variable.
  var code = 'print("' + text_print + '")\n';
  return code;
};

Blockly.Python['mcpos'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'playerPos = mc.player.getPos() \n';
  return code;
};


Blockly.Python['varprint'] = function(block) {
  var text_var = block.getFieldValue('var');
  // TODO: Assemble Python into code variable.
  var code = 'print(' + text_var + ')\n';
  return code;
};

Blockly.Python['setpos'] = function(block) {
  var number_x = block.getFieldValue('x');
  var number_y = block.getFieldValue('y');
  var number_z = block.getFieldValue('z');
  // TODO: Assemble Python into code variable.
  var code = 'mc.player.setPos(' + number_x + ', ' + number_y + ', ' + number_z + ')\n';
  return code;
};

Blockly.Python['campos'] = function(block) {
  var number_x = block.getFieldValue('x');
  var number_y = block.getFieldValue('y');
  var number_z = block.getFieldValue('z');
  // TODO: Assemble Python into code variable.
  var code = 'mc.camera.setPos(' + number_x + ', ' + number_y + ', ' + number_z + ')\n';
  return code;
};

Blockly.Python['getblock'] = function(block) {
  var number_x = block.getFieldValue('x');
  var number_y = block.getFieldValue('y');
  var number_z = block.getFieldValue('z');
  // TODO: Assemble Python into code variable.
  var code = 'blockType = mc.getBlock(' + number_x + ', ' + number_y + ', ' + number_z + ')\n';
  return code;
};

Blockly.Python['setblock'] = function(block) {
  var number_x = block.getFieldValue('x');
  var number_y = block.getFieldValue('y');
  var number_z = block.getFieldValue('z');
  var number_id = block.getFieldValue('id');
  // TODO: Assemble Python into code variable.
  var code = 'blockType = mc.setBlock(' + number_x + ', ' + number_y + ', ' + number_z + ', ' + number_id +  ')\n';
  return code;
};

Blockly.Python['mcvar'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'x, y, z = mc.player.getPos() \n';
  return code;
};

Blockly.Python['return'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'return math.sqrt((xd*xd) + (yd*yd) + (zd*zd))\n';
  return code;
};

Blockly.Python['time'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import time\n';
  return code;
};


Blockly.Python['mctext'] = function(block) {
  var text_x = block.getFieldValue('x');
  var text_y = block.getFieldValue('y');
  var text_z = block.getFieldValue('z');
  var number_id = block.getFieldValue('id');
  // TODO: Assemble Python into code variable.
  var code = 'blockType = mc.setBlock(' + text_x + ', ' + text_y + ', ' + text_z + ', ' + number_id +  ')\n';
  return code;
};

Blockly.Python['mctext5'] = function(block) {
  var text_x = block.getFieldValue('x');
  var text_y = block.getFieldValue('y');
  var text_z = block.getFieldValue('z');
  var text_p = block.getFieldValue('p');
  var text_i = block.getFieldValue('i');
  // TODO: Assemble Python into code variable.
  var code = 'mc.setBlock(' + text_x + ', ' + text_y + ', ' + text_z + ', ' + text_i + ', ' + text_p + ')\n';
  return code;
};

Blockly.Python['mctext2'] = function(block) {
  var text_x = block.getFieldValue('x');
  var text_y = block.getFieldValue('y');
  var text_z = block.getFieldValue('z');
  var text_i = block.getFieldValue('i');
  // TODO: Assemble Python into code variable.
  var code = 'mc.setBlock(' + text_x + ', ' + text_y + ', ' + text_z + ', ' + text_i +  ')\n';
  return code;
};





Blockly.Python['2buzzer'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'buzzer_' + dropdown_name + '()\n';
  return code;
};

Blockly.Python['mcblocks'] = function(block) {
  var text_x = block.getFieldValue('x');
  var text_y = block.getFieldValue('y');
  var text_z = block.getFieldValue('z');
  var text_q = block.getFieldValue('q');
  var text_w = block.getFieldValue('w');
  var text_e = block.getFieldValue('e');
  var text_r = block.getFieldValue('r');
  var text_t = block.getFieldValue('t');
  var text_y = block.getFieldValue('y');
  // TODO: Assemble Python into code variable.
  var code = 'mc.setBlocks(' + text_x + ', ' + text_y + ', ' + text_z + ', ' + text_q + ', ' + text_w + ', ' + text_e + ', ' + text_r + ', ' + text_t + ', ' + text_y + ')\n';
  return code;
};

Blockly.Python['mcblocks8'] = function(block) {
  var text_x = block.getFieldValue('x');
  var text_y = block.getFieldValue('y');
  var text_z = block.getFieldValue('z');
  var text_q = block.getFieldValue('q');
  var text_w = block.getFieldValue('w');
  var text_e = block.getFieldValue('e');
  var text_r = block.getFieldValue('r');
  var text_t = block.getFieldValue('t');
  // TODO: Assemble Python into code variable.
  var code = 'mc.setBlocks(' + text_x + ', ' + text_y + ', ' + text_z + ', ' + text_q + ', ' + text_w + ', ' + text_e + ', ' + text_r + ', ' + text_t + ')\n';
  return code;
};

Blockly.Python['build'] = function(block) {
  var number_x = block.getFieldValue('x');
  var number_y = block.getFieldValue('y');
  var number_z = block.getFieldValue('z');
  // TODO: Assemble Python into code variable.
  var code = 'buildPumpkin(' + number_x + ', ' + number_y + ', ' + number_z + ')\n';
  return code;
};

Blockly.Python['getdist'] = function(block) {
  var number_x = block.getFieldValue('x');
  var number_y = block.getFieldValue('y');
  var number_z = block.getFieldValue('z');
  // TODO: Assemble Python into code variable.
  var code = 'distance_to_player(' + number_x + ', ' + number_y + ', ' + number_z + ')\n';
  return code;
};


Blockly.Python['find'] = function(block) {
  var number_x = block.getFieldValue('x');
  var number_y = block.getFieldValue('y');
  var number_z = block.getFieldValue('z');
  // TODO: Assemble Python into code variable.
  var code = 'findObject(' + number_x + ', ' + number_y + ', ' + number_z + ')\n';
  return code;
};

Blockly.Python['cameraset'] = function(block) {
  var dropdown_drop = block.getFieldValue('drop');
  // TODO: Assemble Python into code variable.
  var code = 'mc.camera.set' + dropdown_drop + '()\n';
  return code;
};

//*******************************
// Added by andrew pye
// 15/04/2017
// Http.client
//*******************************

Blockly.Python['http_client_import_rest'] = function(block) {
  var code = 'import http.client \n';
  return code;
};

Blockly.Python['https_client_create_connection'] = function(block) {
  var text_url = block.getFieldValue('URL');
  var code = 'conn = http.client.HTTPSConnection("'+text_url+'") \n';
  return code;
};

Blockly.Python['http_client_create_connection'] = function(block) {
  var text_url = block.getFieldValue('URL');
  var text_port = block.getFieldValue('PORT');
  var code = 'conn = http.client.HTTPConnection("'+text_url+'",'+text_port+') \n';
  return code;
};

Blockly.Python['http_client_request'] = function(block) {
  var text_method = block.getFieldValue('method');
  var text_request = block.getFieldValue('request');
  var text_headers = block.getFieldValue('headers');
  var text_body = block.getFieldValue('body');
  var code="";
  code = 'conn.request("'+text_method+'", "'+text_request+'", body="'+text_body+'", headers={'+text_headers+'}) \n';
  return code;
};

Blockly.Python['http_client_responce'] = function(block) {
  var code = 'r1 = conn.getresponse() \n';
  return code;
};

Blockly.Python['http_client_responce'] = function(block) {
  var code = 'r1 = conn.getresponse() \n';
  return code;
};

Blockly.Python['inline_print'] = function(block) {
	var text_print2=Blockly.Python.statementToCode(block, 'VALUE');
	// TODO: Assemble Python into code variable.
	var code = 'print(' + text_print2 + ')\n';
	return code;
};

Blockly.Python['http_client_status'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'r1.status';
  return code;
};

Blockly.Python['http_client_reason'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'r1.reason';
  return code;
};

Blockly.Python['http_client_read'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'r1.read().decode()';
  return code;
};

Blockly.Python['code_block'] = function(block) {
  // TODO: Assemble Python into code variable.
  var text_method = block.getFieldValue('code');
  var code = text_method +'\n';
  return code;
};

Blockly.Python['comment_block'] = function(block) {
  // TODO: Assemble Python into code variable.
  var text_method = block.getFieldValue('comment');
  var code = '#' +text_method +'\n';
  return code;
};

//*******************************
// Added by andrew pye
// 17/04/2017
// Flask Web Server
//*******************************
Blockly.Python['flask_import'] = function(block) {
  var code = 'from flask import Flask\n';
  return code;
};

Blockly.Python['flask_server'] = function(block) {
	// TODO: Assemble Python into code variable.
	var route = Blockly.Python.statementToCode(block, 'ROUTE');
	var text_method = block.getFieldValue('port');
	//var code = 'from flask import Flask\n';
	var code = 'app = Flask(__name__)\n';
	//some code to fix the indentation
	var s=route.split("\n");
	for (var i=0;i<s.length;i++){
		if(s[i].startsWith("  ")){
			s[i]=s[i].replace("  ","");
		}
	}
	route=s.join("\n");
	code += route;
	code += 'if __name__ == "__main__":\n';
	code += '  app.run(debug=False,port='+text_method+', host="0.0.0.0")\n';
	return code;
};

Blockly.Python['flask_route'] = function(block) {
	// TODO: Assemble Python into code variable.
	var text_method = block.getFieldValue('method');
	var text_route = block.getFieldValue('route');
	var route = Blockly.Python.statementToCode(block, 'DO');
	var code = '@app.route("'+text_route+'")\n';
	if(text_method.endsWith(")")){
		code += 'def '+text_method+':\n';
	}else{
		code += 'def '+text_method+'():\n';
	}
	
	code += route;//'  return "Hello world"\n';
	return code;
};

Blockly.Python['flask_return'] = function(block) {
  // TODO: Assemble Python into code variable.
  var text_method = block.getFieldValue('var');
  var code = 'return ' + text_method +'\n';
  return code;
};

