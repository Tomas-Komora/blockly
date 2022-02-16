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

Blockly.Blocks['cancel_task_taskid'] = {
    init: function() {
        this.appendValueInput("taskId")
            .setCheck("String")
            .appendField("Cancel Task (taskId)");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Cancel task by taskID');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['cancel_task_task_case'] = {
    init: function() {
        this.appendValueInput("taskId")
            .appendField("Cancel Task (taskId)");
        this.appendValueInput("aCase")
            .appendField("Case");
        this.setOutput(true);
        this.setTooltip('Cancel task by taskId and Case');
        this.setColour(65);
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['cancel_task_task'] = {
    init: function() {
        this.appendValueInput("taskId")
            .appendField("Cancel Task (task)");
        this.setOutput(true);
        this.setTooltip('Cancel task by task');
        this.setColour(65);
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.Blocks['finish_task_task_case'] = {
    init: function() {
        this.appendValueInput("taskId")
            .appendField("Finish Task (taskId)");
        this.appendValueInput("aCase")
            .appendField("Case");
        this.setOutput(true);
        this.setTooltip('Finish task by taskId and Case');
        this.setColour(65);
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['finish_task_task'] = {
    init: function() {
        this.appendValueInput("taskId")
            .appendField("Finish Task (task)");
        this.setOutput(true);
        this.setTooltip('Finish task by task');
        this.setColour(65);
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['make'] = {
    init: function() {
        this.appendValueInput("field")
            .setCheck("Field")
            .appendField("make (field,");
        this.appendDummyInput()
            .appendField("behaviour,")
            .appendField(new Blockly.FieldDropdown([["visible", "visible"], ["editable", "editable"], ["required", "required"], ["optional", "optional"], ["hidden", "hidden"], ["forbidden", "forbidden"]]), "behaviour");
        this.appendValueInput("transition")
            .setCheck("Transition")
            .appendField("transition");
        this.appendValueInput("condition")
            .setCheck("Closure<Boolean>")
            .appendField("when condition");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Make');
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['change_value'] = {
    init: function() {
        this.appendValueInput("field")
            .setCheck("Field")
            .appendField("change(field,");
        this.appendValueInput("newValueClosure")
            .setCheck("Closure")
            .appendField("            newValueClosure)");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Change value');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['change_value_about'] = {
    init: function() {
        this.appendValueInput("field")
            .setCheck("Field")
            .appendField("change(field,");
        this.appendValueInput("newValueClosure")
            .setCheck("Closure")
            .appendField("            newValueClosure)");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Change about');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['change_choices'] = {
    init: function() {
        this.appendValueInput("field")
            .setCheck("Field")
            .appendField("change field choice");
        this.appendValueInput("newValueClosure")
            .setCheck("Closure<List<String>|Set<String>>")
            .appendField("            newValueClosure");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Change choices');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['change_options'] = {
    init: function() {
        this.appendValueInput("field")
            .setCheck("Field")
            .appendField("change field options");
        this.appendValueInput("newValueClosure")
            .setCheck("Closure<Map<String, String|I18NString>>")
            .appendField("            newValueClosure");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Change options');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['change_case_property'] = {
    init: function() {
        this.appendValueInput("property")
            .setCheck("String")
            .appendField("changeCaseProperty");
        this.appendValueInput("newValueClosure")
            .setCheck("Field")
            .appendField(" about  newValueClosure");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Change case property.');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['findtask'] = {
    init: function() {
        this.appendValueInput("query")
            .setCheck("QueryDSL Predicate")
            .appendField("findTask");
        this.setOutput(true, "Task");
        this.setColour(65);
        this.setTooltip('Find task by query.');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['findtasks'] = {
    init: function() {
        this.appendValueInput("query")
            .setCheck("QueryDSL Predicate")
            .appendField("findTasks");
        this.setOutput(true, "List<Task>");
        this.setColour(65);
        this.setTooltip('Find tasks by query');
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
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
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.Blocks['execute'] = {
    init: function() {
        this.appendValueInput("transitionID")
            .setCheck("String")
            .appendField("execute transitionId,");
        this.appendValueInput("query")
            .setCheck("QueryDSL Predicate")
            .appendField("where query");
        this.appendValueInput("data")
            .setCheck("Map<String,Object>")
            .appendField("with data");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('Execute.');
        this.setHelpUrl('http://www.example.com/');
    }
};