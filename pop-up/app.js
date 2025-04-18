//import "./double directed linked list.js"

function activate_button()
{
    let text_area = document.getElementById("main-text");
    document.getElementsByClassName("buttons-control").setAttribute("disabled") = (text_area.value != "");
}

function setStyle(block, style)
{
    //let old_style = block.style;
    if(block.childElementCount == 0)
    {
        block.style = style;
    }
    for (let i = 0; i < block.children.length; i++) 
    {
        setStyle(block.children[i], style);
        block.style = style;
    }
}


function getElement(name, type)
{
    switch (type) 
    {
        case 0://"id":
            return  document.getElementById(name);
        case 1://"name":
            return  document.getElementsByName(name);
        case 2://"class":
            return  document.getElementsByClassName(name);
    }
}

function findElenemt()
{
    var block = null;
    let text = document.getElementById("main-text").value;
    for (let i = 0; i < 3; i++) 
    {
        if(block != null)
        {
            break;
        }
        block = getElement(text,i);        
    }
    if(block == null)
    {
        throw new Error("cant find element with that name");
    }
    return block;
}

function setStyleForBlock(style)
{
    let block = findElenemt();

    setStyle(block, style);    
}