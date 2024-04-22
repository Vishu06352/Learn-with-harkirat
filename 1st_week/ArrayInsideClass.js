
class Random{

    constructor()
    {
       this.arr = [];
    }
    add(str)
    {
        this.arr.push(str);
    }

    display()
    {
        for(let i = 0 ; i < this.arr.length; i++)
        {
            console.log(this.arr[i]);
        }
    }
}

const obj = new Random();
obj.add("Vishu");
obj.add(1);
obj.display();
