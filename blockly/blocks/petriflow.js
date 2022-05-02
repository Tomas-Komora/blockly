'use strict';

goog.provide('Blockly.Blocks.petriflow');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.petriflow.HUE = 310;


//Action block for PetriFlow
Blockly.Blocks['block_assignrole'] = {
    init: function() {
        this.appendValueInput("roleID")
            .setCheck("String")
            .appendField("Assign Role (String)");
        this.setOutput(true,'String');
        this.setColour(65);
        this.setTooltip('Assign role by roleID');
        this.setHelpUrl('https://petriflow.com/#/actions?id=assignrole');
    }
};

Blockly.Blocks['cancel_task_taskid'] = {
    init: function() {
        this.appendValueInput("taskId")
            .setCheck("String")
            .appendField("Cancel Task (taskId)");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Cancel task by taskID');
        this.setHelpUrl('https://petriflow.com/#/actions?id=canceltask');
    }
};

Blockly.Blocks['cancel_task_task_case'] = {
    init: function() {
        this.appendValueInput("taskId")
            .setCheck("String")
            .appendField("Cancel Task (taskId,");
        this.appendValueInput("aCase")
            .setCheck("Case")
            .appendField("                     case)");
        this.setOutput(true);
        this.setTooltip('Cancel task by taskId and Case');
        this.setColour(65);
        this.setHelpUrl('https://petriflow.com/#/actions?id=canceltask');
    }
};

Blockly.Blocks['cancel_task_task'] = {
    init: function() {
        this.appendValueInput("taskId")
            .setCheck("String")
            .appendField("Cancel Task (task)");
        this.setOutput(true);
        this.setTooltip('Cancel task by task');
        this.setColour(65);
        this.setHelpUrl('https://petriflow.com/#/actions?id=canceltask');
    }
};

Blockly.Blocks['finish_task_taskid'] = {
    init: function() {
        this.appendValueInput("taskId")
            .setCheck("String")
            .appendField("Finish Task (task)");
        this.setOutput(true);
        this.setTooltip('Finish task by taskID');
        this.setColour(65);
        this.setHelpUrl('https://petriflow.com/#/actions?id=finishtask');
    }
};
Blockly.Blocks['finish_task_task_case'] = {
    init: function() {
        this.appendValueInput("taskId")
            .setCheck("String")
            .appendField("Finish Task (taskId,");
        this.appendValueInput("aCase")
            .setCheck("Case")
            .appendField("          case)");
        this.setOutput(true);
        this.setTooltip('Finish task by taskId and Case');
        this.setColour(65);
        this.setHelpUrl('https://petriflow.com/#/actions?id=finishtask');
    }
};

Blockly.Blocks['finish_task_task'] = {
    init: function() {
        this.appendValueInput("taskId")
            .setCheck("String")
            .appendField("Finish Task (task)");
        this.setOutput(true);
        this.setTooltip('Finish task by task');
        this.setColour(65);
        this.setHelpUrl('https://petriflow.com/#/actions?id=finishtask');
    }
};

Blockly.Blocks['getdata_task'] = {
    init: function() {
        this.appendValueInput("task")
            .setCheck("Task")
            .appendField("getData(task)");
        this.setOutput(true, "Map<String,Field>");
        this.setTooltip('Get data by Task');
        this.setColour(65);
        this.setHelpUrl('https://petriflow.com/#/actions?id=getdata');
    }
};

Blockly.Blocks['getdata_transition'] = {
    init: function() {
        this.appendValueInput("view_limit")
            .setCheck("Transition")
            .appendField("getData(transition)");
        this.setOutput(true, "Map<String,Field>");
        this.setTooltip('Get data by Transition');
        this.setColour(65)
        this.setHelpUrl('https://petriflow.com/#/actions?id=getdata');
    }
};

Blockly.Blocks['getdata_transition_case'] = {
    init: function() {
        this.appendValueInput("view_limit")
            .setCheck("Transition")
            .appendField("getData(transition,");
        this.appendValueInput("usecase")
            .setCheck("Case")
            .appendField("              usecase)");
        this.setOutput(true, "Map<String,Field>");
        this.setTooltip('Get data by Transition and Case');
        this.setColour(65)
        this.setHelpUrl('https://petriflow.com/#/actions?id=getdata');
    }
};

Blockly.Blocks['assigntask_control_case_user'] = {
    init: function() {
        this.appendValueInput("control")
            .setCheck("String")
            .appendField("assignRole(\"control\",");
        this.appendValueInput("case")
            .setCheck("Case")
            .appendField("              eCase,");
        this.appendValueInput("user")
            .setCheck("User")
            .appendField("              user)");
        this.setOutput(true, "Task");
        this.setTooltip('Assign task by control, case and user.');
        this.setColour(65)
        this.setHelpUrl('https://petriflow.com/#/actions?id=assigntask');
    }
};

Blockly.Blocks['assigntask_task_user'] = {
    init: function() {
        this.appendValueInput("task")
            .setCheck("Task")
            .appendField("assignTask(task,");
        this.appendValueInput("user")
            .setCheck("User")
            .appendField("              user)");
        this.setOutput(true, "Task");
        this.setColour(65);
        this.setTooltip('Assign task by task and user');
        this.setHelpUrl('https://petriflow.com/#/actions?id=assigntask');
    }
};
Blockly.Blocks['assigntask_tasks'] = {
    init: function() {
        this.appendValueInput("tasks")
            .setCheck("List<Task>")
            .appendField("assignTask(task)");
        this.setOutput(true, "Task");
        this.setColour(65);
        this.setTooltip('Assign task by tasks');
        this.setHelpUrl('https://petriflow.com/#/actions?id=assigntask');
    }
};

Blockly.Blocks['createcase_identifier_title_colour_author'] = {
    init: function() {
        this.appendValueInput("identifier")
            .setCheck("String")
            .appendField("createCase(identifier,");
        this.appendValueInput("title")
            .setCheck("String")
            .appendField("                   title,");
        this.appendValueInput("colour")
            .setCheck("String")
            .appendField("                   colour,");
        this.appendValueInput("author")
            .setCheck("User")
            .appendField("                   user)");
        this.setOutput(true, "Case");
        this.setColour(65);
        this.setTooltip('Create case by identifier, title, colour and author.');
        this.setHelpUrl('https://petriflow.com/#/actions?id=createcase');
    }
};

Blockly.Blocks['createcase_net_title_colour_author'] = {
    init: function() {
        this.appendValueInput("net")
            .setCheck("PetriNet")
            .appendField("createCase(net,");
        this.appendValueInput("title")
            .setCheck("String")
            .appendField("                   title,");
        this.appendValueInput("colour")
            .setCheck("String")
            .appendField("                   colour,");
        this.appendValueInput("author")
            .setCheck("User")
            .appendField("                   user)");
        this.setOutput(true, "Case");
        this.setColour(65);
        this.setTooltip('Create case by PetriNet, title, colour and author.');
        this.setHelpUrl('https://petriflow.com/#/actions?id=createcase');
    }
};

Blockly.Blocks['generate'] = {
    init: function() {
        this.appendValueInput("method")
            .setCheck("String")
            .appendField("generate(method,");
        this.appendDummyInput()
            .appendField("constant,")
            .appendField(new Blockly.FieldDropdown([["always", "always"], ["once", "once"]]), "constant");
        this.appendValueInput("field")
            .setCheck("Field")
            .appendField("field)");
        this.setOutput(true, "Case");
        this.setColour(65);
        this.setTooltip('Generate');
        this.setHelpUrl('https://petriflow.com/#/actions?id=generate');
    }
};

Blockly.Blocks['make'] = {
    init: function() {
        this.appendValueInput("field")
            .setCheck("Field")
            .appendField("make (field,");
        this.appendDummyInput()
            .appendField(", ")
            .appendField(new Blockly.FieldDropdown([["visible", "visible"], ["editable", "editable"], ["required", "required"], ["optional", "optional"], ["hidden", "hidden"], ["forbidden", "forbidden"]]), "behaviour")
            .appendField(" on ");
        this.appendValueInput("transition")
            .setCheck("Transition")
            .appendField("transition");
        this.appendValueInput("condition")
            .setCheck("Closure<Boolean>")
            .appendField("when condition");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Make');
        this.setHelpUrl('https://petriflow.com/#/actions?id=make');
    }
};

Blockly.Blocks['setdata_task_fields'] = {
    init: function() {
        this.appendValueInput("task")
            .setCheck("Task")
            .appendField("setData(task,");
        this.appendValueInput("fields")
            .setCheck("Map<String,{type,value}>")
            .appendField("             fields)");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Set data by task and fields');
        this.setHelpUrl('https://petriflow.com/#/actions?id=setdata');
    }
};
Blockly.Blocks['setdata_transition_fields'] = {
    init: function() {
        this.appendValueInput("transition")
            .setCheck("Transition")
            .appendField("setData(transition,");
        this.appendValueInput("fields")
            .setCheck("Map<String,{type,value}>")
            .appendField("             fields)");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Set data by transition and fields');
        this.setHelpUrl('https://petriflow.com/#/actions?id=setdata');
    }
};

Blockly.Blocks['setdata_transitionid_case_fields'] = {
    init: function() {
        this.appendValueInput("transition")
            .setCheck("String")
            .appendField("setData(transitionID,");
        this.appendValueInput("case")
            .setCheck("Case")
            .appendField("             case,");
        this.appendValueInput("fields")
            .setCheck("Map<String,{type,value}>")
            .appendField("             fields)");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Set data by transitionId, case and fields');
        this.setHelpUrl('https://petriflow.com/#/actions?id=setdata');
    }
};

Blockly.Blocks['change_value'] = {
    init: function() {
        this.appendValueInput("field")
            .setCheck("Field")
            .appendField("change(field) value");
        this.appendValueInput("newValueClosure")
            .setCheck("Closure")
            .appendField("         (newValueClosure)");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Change value');
        this.setHelpUrl('https://petriflow.com/#/actions?id=change-value');
    }
};

Blockly.Blocks['change_value_about'] = {
    init: function() {
        this.appendValueInput("field")
            .setCheck("Field")
            .appendField("change(field) about");
        this.appendValueInput("newValueClosure")
            .setCheck("Closure")
            .appendField("       (newValueClosure)");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Change about');
        this.setHelpUrl('https://petriflow.com/#/actions?id=change-value');
    }
};

Blockly.Blocks['change_choices'] = {
    init: function() {
        this.appendValueInput("field")
            .setCheck("Field")
            .appendField("change (field) choices");
        this.appendValueInput("newValueClosure")
            .setCheck("Closure<List<String>|Set<String>>")
            .appendField("            (newValueClosure)");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Change choices');
        this.setHelpUrl('https://petriflow.com/#/actions?id=change-choices');
    }
};

Blockly.Blocks['change_options'] = {
    init: function() {
        this.appendValueInput("field")
            .setCheck("Field")
            .appendField("change (field) options");
        this.appendValueInput("newValueClosure")
            .setCheck("Closure<Map<String, String|I18NString>>")
            .appendField("            (newValueClosure)");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Change options');
        this.setHelpUrl('https://petriflow.com/#/actions?id=change-options');
    }
};

Blockly.Blocks['change_case_property'] = {
    init: function() {
        this.appendValueInput("property")
            .setCheck("String")
            .appendField("changeCaseProperty (property)");
        this.appendValueInput("newValueClosure")
            .setCheck("Field")
            .appendField(" about  (newValueClosure)");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Change case property.');
        this.setHelpUrl('https://petriflow.com/#/actions?id=changecaseproperty');
    }
};

Blockly.Blocks['findtask'] = {
    init: function() {
        this.appendValueInput("query")
            .setCheck("QueryDSL Predicate")
            .appendField("findTask(query)");
        this.setOutput(true, "Task");
        this.setColour(65);
        this.setTooltip('Find task by query.');
        this.setHelpUrl('https://petriflow.com/#/actions?id=findtask');
    }
};

Blockly.Blocks['findtasks'] = {
    init: function() {
        this.appendValueInput("query")
            .setCheck("QueryDSL Predicate")
            .appendField("findTasks(query)");
        this.setOutput(true, "List<Task>");
        this.setColour(65);
        this.setTooltip('Find tasks by query');
        this.setHelpUrl('https://petriflow.com/#/actions?id=findtasks');
    }
};

Blockly.Blocks['findtasks_page'] = {
    init: function() {
        this.appendValueInput("query")
            .setCheck("QueryDSL Predicate")
            .appendField("findTasks (query,");
        this.appendValueInput("page")
            .setCheck("Pageable")
            .appendField("                 page)");
        this.setOutput(true, "List<Task>");
        this.setColour(65);
        this.setTooltip('Find tasks by query and page.');
        this.setHelpUrl('https://petriflow.com/#/actions?id=findtasks');
    }
};

Blockly.Blocks['findcase'] = {
    init: function() {
        this.appendValueInput("query")
            .setCheck("QueryDSL Predicate")
            .appendField("findCase (query)");
        this.setOutput(true, "Case");
        this.setColour(65);
        this.setTooltip('Find case by query.');
        this.setHelpUrl('https://petriflow.com/#/actions?id=findcase');
    }
};
Blockly.Blocks['findcases'] = {
    init: function() {
        this.appendValueInput("query")
            .setCheck("QueryDSL Predicate")
            .appendField("findCases (query)");
        this.setOutput(true, "List<Case>");
        this.setColour(65);
        this.setTooltip('Find cases by query');
        this.setHelpUrl('https://petriflow.com/#/actions?id=findcases');
    }
};

Blockly.Blocks['findcases_page'] = {
    init: function() {
        this.appendValueInput("query")
            .setCheck("QueryDSL Predicate")
            .appendField("findCases (query,");
        this.appendValueInput("page")
            .setCheck("Pageable")
            .appendField("                  page)");
        this.setOutput(true, "List<Case>");
        this.setColour(65);
        this.setTooltip('Find cases by query and page.');
        this.setHelpUrl('https://petriflow.com/#/actions?id=findcases');
    }
};
Blockly.Blocks['execute'] = {
    init: function() {
        this.appendValueInput("transitionID")
            .setCheck("String")
            .appendField("execute (transitionId),");
        this.appendValueInput("query")
            .setCheck("QueryDSL Predicate")
            .appendField("where (query)");
        this.appendValueInput("data")
            .setCheck("Map<String,Object>")
            .appendField("with (data)");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Execute.');
        this.setHelpUrl('https://petriflow.com/#/actions?id=execute');
    }
};

// Variable block for PetriFlow

Blockly.Blocks['variable_user'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Type User :")
            .appendField(new Blockly.FieldTextInput("User Name"), "User");
        this.setOutput(true, "User");
        this.setColour(260);
        this.setTooltip('variable User');
        this.setHelpUrl('https://petriflow.com/#/actions');
    }
};

Blockly.Blocks['variable_task'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Type Task :")
            .appendField(new Blockly.FieldTextInput("Task Name"), "Task");
        this.setOutput(true, "Task");
        this.setColour(260);
        this.setTooltip('variable Task');
        this.setHelpUrl('https://petriflow.com/#/actions');
    }
};

Blockly.Blocks['variable_case'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Type Case :")
            .appendField(new Blockly.FieldTextInput("Case Name"), "Case");
        this.setOutput(true, "Case");
        this.setColour(260);
        this.setTooltip('variable Case');
        this.setHelpUrl('https://petriflow.com/#/actions');
    }
};

Blockly.Blocks['variable_transition'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Type Transition :")
            .appendField(new Blockly.FieldTextInput("Transition Name"), "Transition");
        this.setOutput(true, "Transition");
        this.setColour(260);
        this.setTooltip('variable Transition');
        this.setHelpUrl('https://petriflow.com/#/actions');
    }
};

Blockly.Blocks['variable_field'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Type Field :")
            .appendField(new Blockly.FieldTextInput("Field Name"), "Field");
        this.setOutput(true, "Field");
        this.setColour(260);
        this.setTooltip('variable Field');
        this.setHelpUrl('https://petriflow.com/#/actions');
    }
};

Blockly.Blocks['variable_petrinet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Type PetriNet :")
            .appendField(new Blockly.FieldTextInput("PetriNet Name"), "PetriNet");
        this.setOutput(true, "PetriNet");
        this.setColour(260);
        this.setTooltip('variable PetriNet');
        this.setHelpUrl('https://petriflow.com/#/actions');
    }
};

Blockly.Blocks['variable_map'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Type Map<String,Object> input:")
            .appendField(new Blockly.FieldTextInput("Map input"), "Map_INPUT");
        this.setOutput(true, "Map<String,Object>");
        this.setColour(260);
        this.setTooltip('variable Map');
        this.setHelpUrl('https://petriflow.com/#/actions');
    }
};

Blockly.Blocks['variable_query'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Type query input:")
            .appendField(new Blockly.FieldTextInput("Query input"), "query_input");
        this.setOutput(true, "QueryDSL Predicate");
        this.setColour(260);
        this.setTooltip('variable query');
        this.setHelpUrl('https://petriflow.com/#/actions');
    }
};

Blockly.Blocks['variable_pageable'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Type pageable input:")
            .appendField(new Blockly.FieldTextInput("pageable input"), "pageable_input");
        this.setOutput(true, "Pageable");
        this.setColour(260);
        this.setTooltip('variable Pageable');
        this.setHelpUrl('https://petriflow.com/#/actions');
    }
};

Blockly.Blocks['variable_closure_boolean'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Closure<Boolean>")
            .appendField(new Blockly.FieldTextInput("Closure<Boolean>"), "Closure<Boolean>input");
        this.setOutput(true, "Closure<Boolean>");
        this.setColour(260);
        this.setTooltip('variable Closure<Boolean>');
        this.setHelpUrl('https://petriflow.com/#/actions');
    }
};

Blockly.Blocks['variable_closure'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Closure")
            .appendField(new Blockly.FieldTextInput("Closure"), "Closure");
        this.setOutput(true, "Closure");
        this.setColour(260);
        this.setTooltip('variable Closure');
        this.setHelpUrl('https://petriflow.com/#/actions');
    }
};


Blockly.Blocks['variable_closure_list_string_set_string'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Closure<List<String>|Set<String>>")
            .appendField(new Blockly.FieldTextInput("Closure<List<String>|Set<String>>"), "Closure<List<String>Set<String");
        this.setOutput(true, "Closure<List<String>|Set<String>>");
        this.setColour(260);
        this.setTooltip('variable Closure<List<String>Set<String');
        this.setHelpUrl('https://petriflow.com/#/actions');
    }
};

Blockly.Blocks['variable_closure_map_string_string_i18nstring'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Closure<Map<String, String|I18NString>>")
            .appendField(new Blockly.FieldTextInput("Closure<Map<String, String|I18NString>>"), "input_closure");
        this.setOutput(true, "Closure<Map<String, String|I18NString>>");
        this.setColour(260);
        this.setTooltip('variable Closure<Map<String, String|I18NString>>');
        this.setHelpUrl('https://petriflow.com/#/actions');
    }
};

Blockly.Blocks['def'] = {
    init: function() {
        this.appendValueInput("NAME")
            .appendField("def")
            .appendField(new Blockly.FieldTextInput("def variable"), "def_variable")
            .appendField("=");
        this.setColour(120);
        this.setOutput(true);
        this.setTooltip('');
        this.setHelpUrl('https://petriflow.com/#/actions');
    }
};



Blockly.Blocks['main_block'] = {
        init: function() {
            this.appendValueInput('input')
                .setCheck(null)
                .appendField('public class MyApp{');
            this.appendAddSubGroup('', 'items',null,'');
            this.itemCount_ = 1;
            this.updateShape_();
            this.setInputsInline(false);
            this.setHelpUrl('');
            this.setColour(120);
            this.setTooltip('Main blok');
        }
};