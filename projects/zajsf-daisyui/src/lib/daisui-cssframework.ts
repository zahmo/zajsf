import { css_fw } from "@zajsf/cssframework";

export const cssFrameworkCfgDaisyUI:css_fw.frameworkcfg={
    "name": "daisyui",
    "text":"DaisyUI",
    "scripts": [],
    "stylesheets": [
        //"/assets/cssframework/daisyui-framework.css"
    ],
    "widgetstyles": {
        "__themes__": [
            {"name":"daisyui_default","text":"default"},
            {"name":"light","text":"light"}, 
            {"name":"dark","text":"dark"}, 
            {"name":"cupcake","text":"cupcake"}, 
            {"name":"cmyk","text":"cmyk"}, 
            {"name":"pastel","text":"pastel"},
            {"name":"daisyui_leaf","text":"leaf"}
            
        ],
        "$ref": {
            "fieldHtmlClass": "btn btn-sm btn-accent float-right"
        },
        "__array_item_nonref__": {
            "htmlClass": "border shadow-md p-1"
        },
        "__form_group__": {
            "htmlClass": "mb-1"
        },
        "__control_label__": {
            "labelHtmlClass": "control-label"
        },
        "__active__": {
            "activeClass": "active"
        },
        "__required_asterisk__": "text-danger",
        "__screen_reader__": "sr-only",
        "__remove_item__": "float-right text-2xl opacity-50",
        "__help_block__": "help-block",
        "__field_addon_left__": "input-group-addon",
        "__field_addon_right__": "input-group-addon",
        "alt-date": {
            "fieldHtmlClass": "input input-md input-bordered w-full"
        },
        "alt-datetime": {
            "fieldHtmlClass": "input input-md input-bordered w-full"
        },
        "__array__": {
            "htmlClass": "border shadow-md p-1"
        },
        "array": {},
        "authfieldset": {},
        "advancedfieldset": {},
        "button": {
            "fieldHtmlClass": "btn btn-sm btn-info"
        },
        "checkbox": {
            "fieldHtmlClass": "checkbox"
        },
        "checkboxes": {
            "fieldHtmlClass": "checkbox"
        },
        "checkboxbuttons": {
            "fieldHtmlClass": "w-px",
            "labelHtmlClass": "tabs tabs-boxed",
            "htmlClass": "btn-group",
            "itemLabelHtmlClass": "btn",
            "activeClass": "btn-info"
        },
        "checkboxes-inline": {
            "fieldHtmlClass": "checkbox",
            "htmlClass": "inline-flex",
            "itemLabelHtmlClass": "checkbox-inline"
        },
        "date": {
            "fieldHtmlClass": "input input-md input-bordered w-full"
        },
        "datetime-local": {
            "fieldHtmlClass": "input input-md input-bordered w-full"
        },
        "fieldset": {},
        "integer": {
            "fieldHtmlClass": "input input-md input-bordered w-full max-w-xs"
        },
        "number": {
            "fieldHtmlClass": "input input-md input-bordered w-full max-w-xs"
        },
        "optionfieldset": {},
        "password": {
            "fieldHtmlClass": "input input-md input-bordered w-full"
        },
        "radiobuttons": {
            "fieldHtmlClass": "w-px",
            "labelHtmlClass": "tabs tabs-boxed",
            "htmlClass": "btn-group",
            "itemLabelHtmlClass": "btn",
            "activeClass": "btn-info"
        },
        "radio": {
            "fieldHtmlClass": "radio"
        },
        "radios": {
            "fieldHtmlClass": "radio"
        },
        "radios-inline": {
            "htmlClass": "inline-flex",
            "fieldHtmlClass": "radio",
            "itemLabelHtmlClass": "radio-inline"
        },
        "range": {
            "fieldHtmlClass": "range range-info"
        },
        "section": {},
        "selectfieldset": {},
        "select": {
            "fieldHtmlClass": "select select-md select-bordered w-full"
        },
        "submit": {
            "fieldHtmlClass": "btn btn-sm btn-info rounded-full"
        },
        "text": {
            "fieldHtmlClass": "input input-md input-bordered w-full"
        },
        "tabs": {
            "labelHtmlClass": "tabs-md tabs-boxed",
            "htmlClass": "",
            "itemLabelHtmlClass": "tab",
            "activeClass": "tab-active"
        },
        "tabarray": {
            "labelHtmlClass": "tabs tabs-boxed",
            "htmlClass": "",
            "itemLabelHtmlClass": "tab",
            "activeClass": "tab-active"
        },
        "textarea": {
            "fieldHtmlClass": "textarea textarea-bordered w-full"
        },
        "default": {
            "fieldHtmlClass": "form-control"
        }
    }
}

export function getCssFrameworkCfgPrefixed(cssFrameworkCfg:css_fw.frameworkcfg,prefix="dui"):css_fw.frameworkcfg{
    
    let classNamesIgnored=[
        'w-full','mb-1','float-right','shadow-md','p-1',
        'control-label','sr-only','text-2xl', 'opacity-50',
        'help-block','input-group-addon','w-px','checkbox-inline',
        'max-w-xs','rounded-full','form-control','inline-flex'
    ];
    let replaceClasses=(classList:string[]|string,pref:string,ignoredClasses:string[])=>{
        if(!Array.isArray(classList)){
            classList=classList.split(" ");
        }
        return classList.map(cname=>{
            if(classNamesIgnored.indexOf(cname)>=0){
                return cname;
            }
            return pref+"-"+cname;
        });
    }
    
    let cssFrameworkCfgPrefixed=JSON.parse(JSON.stringify(cssFrameworkCfg));
    let widgetNamesIgnore=["__themes__"];
    let widgetNamesNoSubLevel=[
        "__required_asterisk__",
        "__screen_reader__",
        "__remove_item__",
        "__help_block__",
        "__field_addon_left__",
        "__field_addon_right__",
    ];
    Object.keys(cssFrameworkCfgPrefixed.widgetstyles).forEach(widgetName=>{
        if(widgetNamesIgnore.indexOf(widgetName)>=0){
            return;
        }
        if(widgetNamesNoSubLevel.indexOf(widgetName)>=0){
           let cnames= cssFrameworkCfgPrefixed.widgetstyles[widgetName];
           cnames=replaceClasses(cnames,prefix,classNamesIgnored);
           cssFrameworkCfgPrefixed.widgetstyles[widgetName]=cnames;
        }
        let widgetClassMap=cssFrameworkCfgPrefixed.widgetstyles[widgetName];
        Object.keys(widgetClassMap).forEach(classListName=>{
            let classListAsArr:string[]|string=widgetClassMap[classListName];
            classListAsArr=replaceClasses(classListAsArr,prefix,classNamesIgnored);
            widgetClassMap[classListName]=classListAsArr;
        })
        
    })
    return cssFrameworkCfgPrefixed;

}
