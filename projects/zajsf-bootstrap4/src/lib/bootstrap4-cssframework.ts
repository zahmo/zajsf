import { css_fw } from "@zajsf/cssframework";

export const cssFrameworkCfgBootstrap4:css_fw.frameworkcfg={
    "name": "bootstrap-4",
    "scripts": [
        "//code.jquery.com/jquery-3.3.1.slim.min.js",
        "//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
        "//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    ],
    "stylesheets": [
        "//stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        "/assets/cssframework-assets/bootstrap4-framework.css"
    ],
    "widgetstyles": {
        "__themes__": [
            {"name":"bootstrap4_default","text":"Bootstrap4 default"}
        ],
        "$ref": {
            "fieldHtmlClass": "btn float-right btn-info"
        },
        "__array_item_nonref__": {
            "htmlClass": "list-group-item"
        },
        "__form_group__": {
            "htmlClass": "form-group"
        },
        "__control_label__": {
            "labelHtmlClass": "control-label"
        },
        "__active__": {
            "activeClass": "active"
        },
        "__required_asterisk__": "text-danger",
        "__screen_reader__": "sr-only",
        "__remove_item__": "close float-right",
        "__help_block__": "help-block",
        "__field_addon_left__": "input-group-text input-group-prepend",
        "__field_addon_right__": "input-group-text input-group-append",
        "alt-date": {},
        "alt-datetime": {},
        "__array__": {
            "htmlClass": "list-group"
        },
        "array": {},
        "authfieldset": {},
        "advancedfieldset": {},
        "button": {
            "fieldHtmlClass": "btn btn-sm btn-primary"
        },
        "checkbox": { "fieldHtmlClass": "checkbox" },
        "checkboxes": {
            "fieldHtmlClass": "checkbox"
        },
        "checkboxbuttons": {
            "fieldHtmlClass": "sr-only",
            "htmlClass": "btn-group",
            "itemLabelHtmlClass": "btn"
        },
        "checkboxes-inline": {
            "htmlClass": "checkbox",
            "itemLabelHtmlClass": "checkbox-inline"
        },
        "date": {},
        "datetime-local": {},
        "fieldset": {},
        "integer": {},
        "number": {},
        "optionfieldset": {},
        "password": {},
        "radiobuttons": {
            "fieldHtmlClass": "sr-only",
            "htmlClass": "btn-group",
            "itemLabelHtmlClass": "btn"
        },
        "radio": { "fieldHtmlClass": "radio" },
        "radios": {
            "fieldHtmlClass": "radio"
        },
        "radios-inline": {
            "htmlClass": "radio",
            "itemLabelHtmlClass": "radio-inline"
        },
        "range": {},
        "section": {},
        "selectfieldset": {},
        "select": {},
        "submit": {
            "fieldHtmlClass": "btn btn-primary"
        },
        "text": {},
        "tabs": {
            "labelHtmlClass": "nav nav-tabs",
            "htmlClass": "tab-content",
            "fieldHtmlClass": "tab-pane"
        },
        "tabarray": {
            "labelHtmlClass": "nav nav-tabs",
            "htmlClass": "tab-content",
            "fieldHtmlClass": "tab-pane"
        },
        "textarea": {},
        "default": {
            "fieldHtmlClass": "form-control"
        }
    }
}