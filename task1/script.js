let a = parseInt(prompt("enter a number")); //string
let b = parseInt(prompt("enter a number"));
let c = parseInt(prompt("enter a number"));
let d = parseInt(prompt("enter a number"));

if(a==b&&a==c&&a==d){
    console.log(a+b+c+d)
}
else if(a==b&&c==d||a==c&&b==d){
    console.log((a+b+c+d)*2)
}
else {
    console.log((a+b+c+d)/2);
}
