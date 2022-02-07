'use strict';

goog.provide('Blockly.Java.petriflow');

goog.require('Blockly.Java');

Blockly.Java['block_assignrole'] = function(block) {
    var roleID = Blockly.Java.valueToCode(block, 'roleID',Blockly.Java.ORDER_ATOMIC);
    var code = 'assignRole('+roleID+')';
    return code;
};
