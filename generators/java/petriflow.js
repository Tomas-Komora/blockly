'use strict';

goog.provide('Blockly.Java.petriflow');

goog.require('Blockly.Java');

Blockly.Java['block_assignrole'] = function(block) {
    var text_roleid = block.getFieldValue('roleID');
    var value_roleid = Blockly.Java.valueToCode(block, 'roleID', Blockly.Java.ORDER_ATOMIC);
    // TODO: Assemble Java into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Java.ORDER_NONE];
};

Blockly.Java['getdata'] = function(block) {
    var dropdown_get_data = block.getFieldValue('get_data');
    var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ATOMIC);
    // TODO: Assemble Java into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Java.ORDER_NONE];
};

Blockly.Java['block_setdata'] = function(block) {
    var dropdown_get_data = block.getFieldValue('get_data');
    var text_setdata = block.getFieldValue('setData');
    var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ATOMIC);
    // TODO: Assemble Java into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Java.ORDER_NONE];
};

Blockly.Java['block_findtask'] = function(block) {
    var value_querydsl_predicate = Blockly.Java.valueToCode(block, 'QueryDSL_Predicate', Blockly.Java.ORDER_ATOMIC);
    // TODO: Assemble Java into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Java.ORDER_NONE];
};