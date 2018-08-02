// let message:any;
//     message = 555;
//     message = "welcome to your life... there's no turning back";
// var heroes:Array<string> = ["Batman","Gotham","Superman"];

// alert(heroes);

// union type
// let user:(string | Array<string>);
/*
let user:( string | string[] );
user = "vijay";
*/
let myfun = function(val1: number = 0, val2: number = 0, val3?: number){
    if(val3){
        return val1+val2+val3
    }else{
        return val1+val2
    }
};

alert(myfun(1,2));


