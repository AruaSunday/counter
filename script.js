let btnClick = document.querySelector(".cli");
let resClick = document.querySelector(".res")
let btnnClick = document.querySelector(".cl");
let counter = document.querySelector("h1");

let count = 0;

btnClick.addEventListener('click', () => {
myFunction2(myFunction1);
});
btnnClick.addEventListener('click', () => {
myFunction(myFunction3);
});
resClick.addEventListener('click', () => {
myFunctions(myFunction_);
});

function myFunction1(){
    return count+= 1;
}
function myFunction3(){
    if (count === 0){
        return count = 0;
    }
    else{
        return count-= 1;
    }
}
function myFunction_(){
return count = 0;
};
function myFunction2(paramFunc){
counter.innerText = paramFunc();
}
function myFunction(paramFun){
counter.innerText = paramFun();
}
function myFunctions(paramFuns){
counter.innerText = paramFuns();
}