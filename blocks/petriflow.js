'use strict';

goog.provide('Blockly.Blocks.petriflow');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.petriflow.HUE = 310;

Blockly.Blocks['block_assignrole'] = {
    init: function() {
        this.appendValueInput("roleID")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldTextInput("roleID"), "roleID");
        this.setOutput(true);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.Blocks['getdata'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck("")
            .appendField(new Blockly.FieldDropdown([["task", "task"], ["transition", "transition"], ["transitionID", "transitionID"]]), "get_data");
        this.setOutput(true);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['block_setdata'] = {
    init: function() {
        this.appendValueInput("NAME")
            .appendField(new Blockly.FieldDropdown([["task", "task"], ["transition", "transition"], ["transitionID", "transitionID"]]), "get_data")
            .appendField(new Blockly.FieldTextInput("setData"), "setData");
        this.setOutput(true);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.Blocks['block_findtask'] = {
    init: function() {
        this.appendValueInput("QueryDSL_Predicate")
            .setCheck("Predicate");
        this.setOutput(true);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};