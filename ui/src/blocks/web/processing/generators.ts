export default function define(Python: Blockly.BlockGenerators) {

  Python['p_arc'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'arc(' +value_text+ ')\n';
    return code;
  };

  Python['p_background'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'background(' +value_text+ ')\n';
    return code;
  };

  Python['p_blue'] = function (block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'blue(' + value_text + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['p_green'] = function (block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'green(' + value_text + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['p_red'] = function (block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'red(' + value_text + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['p_colorMode'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'colorMode(' +value_text+ ')\n';
    return code;
  };

  Python['p_ellipse'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'ellipse(' +value_text+ ')\n';
    return code;
  };

  Python['p_ellipseMode'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'ellipseMode(' +value_text+ ')\n';
    return code;
  };

  Python['p_exit'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'exit()\n';
    return code;
  };

  Python['p_fill'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'fill(' +value_text+ ')\n';
    return code;
  };

  Python['p_colorMode'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'colorMode(' +value_text+ ')\n';
    return code;
  };

  Python['p_framerate_set'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'frameRate(' +value_text+ ')\n';
    return code;
  };

  Python['p_framrate_get'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'framerate';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['p_line'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'line(' +value_text+ ')\n';
    return code;
  };

  Python['p_loadPixels'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'loadPixels(' +value_text+ ')\n';
    return code;
  };

  Python['p_loop'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'loop(' +value_text+ ')\n';
    return code;
  };

  Python['p_noLoop'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'noLoop(' +value_text+ ')\n';
    return code;
  };

  Python['p_noFill'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'noFill(' +value_text+ ')\n';
    return code;
  };

  Python['p_noSmooth'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'noSmooth(' +value_text+ ')\n';
    return code;
  };

  Python['p_smooth'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'smooth(' +value_text+ ')\n';
    return code;
  };

  Python['p_point'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'point(' +value_text+ ')\n';
    return code;
  };

  Python['p_quad'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'quad(' +value_text+ ')\n';
    return code;
  };

  Python['p_rect'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'rect(' +value_text+ ')\n';
    return code;
  };

  Python['p_rectmode'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'rectMode(' +value_text+ ')\n';
    return code;
  };

  Python['p_rotate'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'rotate(' +value_text+ ')\n';
    return code;
  };

  Python['p_run'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'run()\n';
    return code;
  };

  Python['p_scale'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'scale(' +value_text+ ')\n';
    return code;
  };

  Python['p_set'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'set(' +value_text+ ')\n';
    return code;
  };

  Python['p_size'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'size(' +value_text+ ')\n';
    return code;
  };

  Python['p_stroke'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'stroke(' +value_text+ ')\n';
    return code;
  };

  Python['p_noStroke'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'noStroke(' +value_text+ ')\n';
    return code;
  };

  Python['p_stroke3'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'stroke' +dropdown_name+ '(' +value_text+ ')\n';
    return code;
  };

  Python['p_text'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'text(' +value_text+ ')\n';
    return code;
  };

  Python['p_translate'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'translate(' +value_text+ ')\n';
    return code;
  };

  Python['p_triangle'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'triangle(' +value_text+ ')\n';
    return code;
  };

}
