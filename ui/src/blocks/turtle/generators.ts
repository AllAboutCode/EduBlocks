export default function define(Python: Blockly.BlockGenerators) {
  Python['import_turtle'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'import turtle\n';
    return code;
  };

  Python['turtle'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+ ' = turtle.Turtle()\n';
    return code;
  };
  
  Python['screeninit'] = function(block) {
    var variable_wn = Blockly.Python.variableDB_.getName(block.getFieldValue('wn'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_wn+ ' = turtle.Screen()\n';
    return code;
  };

  Python['background'] = function(block) {
    var variable_wn = Blockly.Python.variableDB_.getName(block.getFieldValue('wn'), Blockly.Variables.NAME_TYPE);
    var text_color = block.getFieldValue('color');
    // TODO: Assemble Python into code variable.
    var code = variable_wn+ '.bgcolor(' +text_color+ ')\n';
    return code;
  };

  Python['directions'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    var dropdown_options = block.getFieldValue('options');
    var text_dist = block.getFieldValue('dist');
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+ '.' +dropdown_options+ '(' +text_dist+ ')\n';
    return code;
  };

  Python['pen'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+'.Pen()\n';
    return code;
  };

  Python['colourpen'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    var text_dist = block.getFieldValue('dist');
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+'.pencolor(' +text_dist+ ')\n';
    return code;
  };


  Python['penwidth'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    var text_dist = block.getFieldValue('dist');
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+'.width(' +text_dist+ ')\n';
    return code;
  };

  Python['circle'] = function(block) {
    var variable_turtle = Blockly.Python.variableDB_.getName(block.getFieldValue('turtle'), Blockly.Variables.NAME_TYPE);
    var text_dist = block.getFieldValue('dist');
    // TODO: Assemble Python into code variable.
    var code = variable_turtle+'.circle(' +text_dist+ ')\n';
    return code;
  };
}
