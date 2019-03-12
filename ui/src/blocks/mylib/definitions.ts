export default function define(Blocks: Blockly.BlockDefinitions) {
Blocks['import_mylib'] = {
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
 
}

