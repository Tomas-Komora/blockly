'use strict';

goog.provide('Blockly.Java.petriflow');

goog.require('Blockly.Java');

Blockly.Java['block_assignrole'] = function(block) {
    var roleID = Blockly.Java.valueToCode(block, 'roleID',Blockly.Java.ORDER_ATOMIC);
    var code = 'assignRole('+roleID+')';
    return code;
};

Blockly.Java['cancel_task_taskid'] = function(block) {
    var value_taskid = Blockly.Java.valueToCode(block, 'taskId', Blockly.Java.ORDER_ATOMIC);
    var code = 'cancelTask('+value_taskid+')';
    return code;
};

Blockly.Java['cancel_task_task_case'] = function(block) {
    var value_taskid = Blockly.Java.valueToCode(block, 'taskId', Blockly.Java.ORDER_ATOMIC);
    var value_acase = Blockly.Java.valueToCode(block, 'aCase', Blockly.Java.ORDER_ATOMIC);
    var code = 'cancelTask('+value_taskid+', '+value_acase+')';
    return code;
};

Blockly.Java['cancel_task_task'] = function(block) {
    var value_task = Blockly.Java.valueToCode(block, 'taskId', Blockly.Java.ORDER_ATOMIC);
    var code = 'cancelTask('+value_task+')';
    return code;
};

Blockly.Java['finish_task_taskid'] = function(block) {
    var value_taskid = Blockly.Java.valueToCode(block, 'taskId', Blockly.Java.ORDER_ATOMIC);
    var code = 'finishTask('+value_taskid+')';
    return code;
};

Blockly.Java['finish_task_task_case'] = function(block) {
    var value_taskid = Blockly.Java.valueToCode(block, 'taskId', Blockly.Java.ORDER_ATOMIC);
    var value_acase = Blockly.Java.valueToCode(block, 'aCase', Blockly.Java.ORDER_ATOMIC);
    var code = 'finishTask('+value_taskid+', '+value_acase+')';
    return code;
};

Blockly.Java['finish_task_task'] = function(block) {
    var value_task = Blockly.Java.valueToCode(block, 'taskId', Blockly.Java.ORDER_ATOMIC);
    var code = 'finishTask('+value_task+')';
    return code;
};

Blockly.Java['getdata_task'] = function(block) {
    var value_task = Blockly.Java.valueToCode(block, 'task', Blockly.Java.ORDER_ATOMIC);
    var code = 'getData('+value_task+')';
    return code;
};

Blockly.Java['getdata_transition'] = function(block) {
    var value_view_limit = Blockly.Java.valueToCode(block, 'view_limit', Blockly.Java.ORDER_ATOMIC);
    var code = 'getData('+value_view_limit+')';
    return code;
};

Blockly.Java['getdata_transition_case'] = function(block) {
    var value_view_limit = Blockly.Java.valueToCode(block, 'view_limit', Blockly.Java.ORDER_ATOMIC);
    var value_usecase = Blockly.Java.valueToCode(block, 'usecase', Blockly.Java.ORDER_ATOMIC);
    var code = 'getData('+value_view_limit+', '+value_usecase+')';
    return code;
};

Blockly.Java['assigntask_control_case_user'] = function(block) {
    var value_control = Blockly.Java.valueToCode(block, 'control', Blockly.Java.ORDER_ATOMIC);
    var value_case = Blockly.Java.valueToCode(block, 'case', Blockly.Java.ORDER_ATOMIC);
    var value_user = Blockly.Java.valueToCode(block, 'user', Blockly.Java.ORDER_ATOMIC);
    var code = 'assignTask('+value_control+', '+value_case+', '+value_user+')';
    return code;
};

Blockly.Java['assigntask_task_user'] = function(block) {
    var value_task = Blockly.Java.valueToCode(block, 'task', Blockly.Java.ORDER_ATOMIC);
    var value_user = Blockly.Java.valueToCode(block, 'user', Blockly.Java.ORDER_ATOMIC);
    var code = 'assignTask('+value_task+', '+value_user+')';
    return code;
};
Blockly.Java['assigntask_tasks'] = function(block) {
    var value_tasks = Blockly.Java.valueToCode(block, 'tasks', Blockly.Java.ORDER_ATOMIC);
    var code = 'assignTask('+value_tasks+')';
    return code;
};
Blockly.Java['createcase_identifier_title_colour_author'] = function(block) {
    var value_identifier = Blockly.Java.valueToCode(block, 'identifier', Blockly.Java.ORDER_ATOMIC);
    var value_title = Blockly.Java.valueToCode(block, 'title', Blockly.Java.ORDER_ATOMIC);
    var value_colour = Blockly.Java.valueToCode(block, 'colour', Blockly.Java.ORDER_ATOMIC);
    var value_author = Blockly.Java.valueToCode(block, 'author', Blockly.Java.ORDER_ATOMIC);
    var code = 'createCase('+value_identifier+', '+value_title+', '+value_colour+', '+value_author+')';
    return code;
};

Blockly.Java['createcase_net_title_colour_author'] = function(block) {
    var value_net = Blockly.Java.valueToCode(block, 'net', Blockly.Java.ORDER_ATOMIC);
    var value_title = Blockly.Java.valueToCode(block, 'title', Blockly.Java.ORDER_ATOMIC);
    var value_colour = Blockly.Java.valueToCode(block, 'colour', Blockly.Java.ORDER_ATOMIC);
    var value_author = Blockly.Java.valueToCode(block, 'author', Blockly.Java.ORDER_ATOMIC);
    var code = 'createCase('+value_net+', '+value_title+', '+value_colour+', '+value_author+')';
    return code;
};

Blockly.Java['generate'] = function(block) {
    var value_method = Blockly.Java.valueToCode(block, 'method', Blockly.Java.ORDER_ATOMIC);
    var dropdown_constant = block.getFieldValue('constant');
    var value_field = Blockly.Java.valueToCode(block, 'field', Blockly.Java.ORDER_ATOMIC);
    var code = 'generate "'+value_method+'", '+dropdown_constant+'into '+value_field;
    return code;
};
Blockly.Java['make'] = function(block) {
    var value_field = Blockly.Java.valueToCode(block, 'field', Blockly.Java.ORDER_ATOMIC);
    var dropdown_behaviour = block.getFieldValue('behaviour');
    var value_transition = Blockly.Java.valueToCode(block, 'transition', Blockly.Java.ORDER_ATOMIC);
    var value_condition = Blockly.Java.valueToCode(block, 'condition', Blockly.Java.ORDER_ATOMIC);
    var code = 'make '+value_field+' '+dropdown_behaviour+' on '+value_transition+' when '+value_condition;
    return code;
};

Blockly.Java['setdata_task_fields'] = function(block) {
    var value_task = Blockly.Java.valueToCode(block, 'task', Blockly.Java.ORDER_ATOMIC);
    var value_fields = Blockly.Java.valueToCode(block, 'fields', Blockly.Java.ORDER_ATOMIC);
    var code = 'setData('+value_task+', '+value_fields+')';
    return code;
};

Blockly.Java['setdata_transition_fields'] = function(block) {
    var value_transition = Blockly.Java.valueToCode(block, 'transition', Blockly.Java.ORDER_ATOMIC);
    var value_fields = Blockly.Java.valueToCode(block, 'fields', Blockly.Java.ORDER_ATOMIC);
    var code = 'setData('+value_transition+', '+value_fields+')';
    return code;
};

Blockly.Java['setdata_transitionid_case_fields'] = function(block) {
    var value_transition = Blockly.Java.valueToCode(block, 'transitionID', Blockly.Java.ORDER_ATOMIC);
    var value_case = Blockly.Java.valueToCode(block, 'case', Blockly.Java.ORDER_ATOMIC);
    var value_fields = Blockly.Java.valueToCode(block, 'fields', Blockly.Java.ORDER_ATOMIC);
    var code = 'setData('+value_transition+', '+', '+value_case+value_fields+')';
    return code;
};

Blockly.Java['change_value'] = function(block) {
    var value_field = Blockly.Java.valueToCode(block, 'field', Blockly.Java.ORDER_ATOMIC);
    var value_newvalueclosure = Blockly.Java.valueToCode(block, 'newValueClosure', Blockly.Java.ORDER_ATOMIC);
    var code = 'change ' +value_field+' value '+value_newvalueclosure;
    return code;
};

Blockly.Java['change_value_about'] = function(block) {
    var value_field = Blockly.Java.valueToCode(block, 'field', Blockly.Java.ORDER_ATOMIC);
    var value_newvalueclosure = Blockly.Java.valueToCode(block, 'newValueClosure', Blockly.Java.ORDER_ATOMIC);
    var code = 'change ' +value_field+' about '+value_newvalueclosure;
    return code;
};

Blockly.Java['change_choices'] = function(block) {
    var value_field = Blockly.Java.valueToCode(block, 'field', Blockly.Java.ORDER_ATOMIC);
    var value_newvalueclosure = Blockly.Java.valueToCode(block, 'newValueClosure', Blockly.Java.ORDER_ATOMIC);
    var code = 'change ' +value_field+' choices '+value_newvalueclosure;
    return code;
};

Blockly.Java['change_options'] = function(block) {
    var value_field = Blockly.Java.valueToCode(block, 'field', Blockly.Java.ORDER_ATOMIC);
    var value_newvalueclosure = Blockly.Java.valueToCode(block, 'newValueClosure', Blockly.Java.ORDER_ATOMIC);
    var code = 'change ' +value_field+' options '+value_newvalueclosure;
    return code;
};

Blockly.Java['change_case_property'] = function(block) {
    var value_property = Blockly.Java.valueToCode(block, 'property', Blockly.Java.ORDER_ATOMIC);
    var value_newvalueclosure = Blockly.Java.valueToCode(block, 'newValueClosure', Blockly.Java.ORDER_ATOMIC);
    var code = 'changeCaseProperty'+value_property+' about '+value_newvalueclosure;
    return code;
};

Blockly.Java['findtask'] = function(block) {
    var value_query = Blockly.Java.valueToCode(block, 'query', Blockly.Java.ORDER_ATOMIC);
    var code = 'findTask '+value_query;
    return code;
};

Blockly.Java['findtasks'] = function(block) {
    var value_query = Blockly.Java.valueToCode(block, 'query', Blockly.Java.ORDER_ATOMIC);
    var code = 'findTasks('+value_query+')';
    return code;
};

Blockly.Java['findtasks_page'] = function(block) {
    var value_query = Blockly.Java.valueToCode(block, 'query', Blockly.Java.ORDER_ATOMIC);
    var value_page = Blockly.Java.valueToCode(block, 'page', Blockly.Java.ORDER_ATOMIC);
    var code = 'findTask('+value_query+', '+value_page+')';
    return code;
};

Blockly.Java['findcase'] = function(block) {
    var value_query = Blockly.Java.valueToCode(block, 'query', Blockly.Java.ORDER_ATOMIC);
    var code = 'findCase('+value_query+')';
    return code;
};


Blockly.Java['findcases'] = function(block) {
    var value_query = Blockly.Java.valueToCode(block, 'query', Blockly.Java.ORDER_ATOMIC);
    var code = 'findCases('+value_query+')';
    return code;
};

Blockly.Java['findcases_page'] = function(block) {
    var value_query = Blockly.Java.valueToCode(block, 'query', Blockly.Java.ORDER_ATOMIC);
    var value_page = Blockly.Java.valueToCode(block, 'page', Blockly.Java.ORDER_ATOMIC);
    var code = 'findCases('+value_query+', '+value_page+')';
    return code;
};

Blockly.Java['execute'] = function(block) {
    var value_transitionid = Blockly.Java.valueToCode(block, 'transitionID', Blockly.Java.ORDER_ATOMIC);
    var value_query = Blockly.Java.valueToCode(block, 'query', Blockly.Java.ORDER_ATOMIC);
    var value_data = Blockly.Java.valueToCode(block, 'data', Blockly.Java.ORDER_ATOMIC);
    var code = 'execute '+value_transitionid+' where '+value_query+' with '+value_data;
    return code;
};