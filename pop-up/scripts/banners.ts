class Banner 
{
    //no functionality for not idettified DOM elements. yet
    is_hidden: boolean;
    div_element:HTMLElement;

    constructor(current_html_elem:HTMLElement) 
    {
        if (current_html_elem === undefined)
        {
            //todo
            console.log('current dom element is undefined, please check that everything is right.');
            return;   
        }
        this.div_element=current_html_elem;
        this.is_hidden=(current_html_elem.offsetParent==null);
    }

    change_visibility_state()
    {
        this.is_hidden=!(this.div_element.offsetParent==null);
        this.div_element.hidden=this.is_hidden;
    }
}