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
            .setCheck("String")
            .appendField("Assign Role");
        this.setOutput(true,'String');
        this.setColour(65);
        this.setTooltip('Assign role by roleID');
        this.setHelpUrl('https://petriflow.com/#/?id=actions');
    }
};
