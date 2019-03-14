export default function define(Blocks: Blockly.BlockDefinitions) {
Blockly.Blocks['import_mylib'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import mylib");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Imports mylib");
 this.setHelpUrl("");
  }
}; 
  
Blockly.Blocks['mylib_cmd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mylib.")
        .appendField(new Blockly.FieldTextInput("hello"), "input")
        .appendField("()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Command for mylib");
 this.setHelpUrl("");
  }
};
 
}

