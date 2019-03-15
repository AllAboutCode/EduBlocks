export default function define(Blocks: Blockly.BlockDefinitions) {
  Blockly.Blocks['senseshow'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('sense.show_message("')
        .appendField(new Blockly.FieldTextInput('Text Here'), 'text')
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip('Shows a message on the Sense Hat');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['senseshowvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('sense.show_message(')
        .appendField(new Blockly.FieldTextInput(''), 'varname')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip('Show a variable on the display');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['senseinit'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('sense = SenseHat()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip('Detects the sense hat');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['senseimport'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from sense_hat import SenseHat');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip('Imports the Sense Hat library');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['senseimportemu'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from sense_emu import SenseHat');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip('Imports the Sense Hat Emulator library');
      this.setHelpUrl('');
    },
  };
}
