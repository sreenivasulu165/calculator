getfastlaptop()
let laptop1={
    model:2021,
    cpu:4,
    comapny:"dell",
 getconflig:function(){
 
    console.log(laptop2.model);
 }
}

let laptop2={
    model:2023,
    cpu:8,
    comapny:"hp",
}

getfastlaptop(laptop1,laptop2)

{
    if(laptop1.cpu>laptop2.cpu)
    console.log(laptop1);
    else{
        console.log(laptop2);
    }
}

laptop.getconflig()