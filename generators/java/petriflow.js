'use strict';

goog.provide('Blockly.Java.petriflow');

goog.require('Blockly.Java');

Blockly.JavaScript['block_assignrole'] = function(block) {
    var roleID = Blockly.JavaScript.valueToCode(block, 'roleID');
    var code = 'assignRole('+roleID+')';
    return [code, Blockly.Java.ORDER_COLLECTION];
};
