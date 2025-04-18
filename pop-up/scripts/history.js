class History
{    
    #history = [];
    constructor()
    {
        this.current = -1;
        this.length = 0;
    }
    push(val)
    {        
        this.#history.push(val);
        this.current++;
        this.length++;
    }
    deleteAt(idx)
    {
        if(typeof(idx) != "number")
        {
            throw new Error("this is not a number, cant delete item from history");            
        }
        else if(idx < 0 || idx >= this.length)
        {
            throw new Error("incorrect index");
        }
        if(this.isEmpty())
        {
            throw new Error("history is empty");
        }

        this.#history.deleteAt(idx);
        
        //c less del
        //do nothing
        
        //c is del
        if(this.current == idx && (this.isFirst() || this.isLast()))
        {
            this.current--;
        }
        //c more del
        if(this.current > idx && ())
        {
            
        }
        if(this.current > idx && this.current == this.length)
        {
            this.current --;         
        }
        this.length--;
    }
    isEmpty()
    {
        return this.length == 0;
        //... or this ...
        //return this.#history.isEmpty();
    }
    isLast()
    {
        return this.current == this.length -1;
    }
    isFirst()
    {
        return this.current == 0;
    }
}