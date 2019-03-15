export default function define(Python: Blockly.BlockGenerators) {
  Python['senseinit'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'sense = SenseHat()\n';
    return code;
  };

  Python['senseshow'] = function (block) {
    const text_text = block.getFieldValue('text');
    // TODO: Assemble Python into code variable.
    const code = 'sense.show_message("' + text_text + '")\n';
    return code;
  };

  Python['senseshowvar'] = function (block) {
    const text_varname = block.getFieldValue('varname');
    // TODO: Assemble Python into code variable.
    const code = 'sense.show_message(' + text_varname + ')\n\n';
    return code;
  };

  Python['senseimport'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'from sense_hat import SenseHat\n';
    return code;
  };

  Python['senseimportemu'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'from sense_emu import SenseHat\n';
    return code;
  };
}
