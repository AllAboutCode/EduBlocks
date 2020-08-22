export default function define(Blocks: Blockly.BlockDefinitions) {
  let pro_col = "#c51a4a"

  Blocks['p_arc'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("arc(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_background'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("background(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_blue'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("blue(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(pro_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_red'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("red(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(pro_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_green'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("green(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(pro_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_colorMode'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("colorMode(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_ellipse'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("ellipse(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_ellipseMode'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("ellipseMode(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_exit'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("exit()");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_fill'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("fill(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_colorMode'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("colorMode(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_framerate_set'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("frameRate(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_framerate_get'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("frameRate");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(pro_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_get'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("get(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(pro_col);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_line'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("line(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_loadPixels'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("loadPixels(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_loop'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("loop(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


  Blocks['p_noLoop'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("noLoop(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_noFill'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("noFill(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_noSmooth'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("noSmooth(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_smooth'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("smooth(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_noStroke'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("noFill(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_point'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("point(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_quad'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("quad(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_rect'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("rect(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_rectmode'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("rectmode(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_rotate'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("rotate(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_run'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("run()");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_scale'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("scale(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_set'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("set(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_size'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("size(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_stroke'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("stroke(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_noStroke'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("noStroke(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_stroke3'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("stroke")
          .appendField(new Blockly.FieldDropdown([["Cap","Cap"], ["Join","Join"], ["Weight","Weight"]]), "NAME")
          .appendField("(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pro_col);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blocks['p_text'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("text(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_translate'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("translate(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blocks['p_triangle'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("triangle(");
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      
      this.setColour(pro_col);
      
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

}

