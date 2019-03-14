export default function define(Python: Blockly.BlockGenerators) {
  Python['import_mylib'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'import mylib\n';
    return code;
  }; 
  
  Python['mylib_cmd'] = function(block) {
    var text_input = block.getFieldValue('input');
    // TODO: Assemble Python into code variable.
    var code = 'mylib.' +text_input+ '()\n';
    return code;
  }; 
}

