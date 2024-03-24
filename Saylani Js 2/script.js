document.getElementById("con").onclick= function(){
    let a = prompt("Enter the First String:")
    let b = prompt("Enter the second String:")
    document.getElementById("original-statement").innerText = "The concatenation is given below:"
    document.getElementById("result-output").innerText = a+b;
}

document.getElementById("name").onclick= function(){
    let c = prompt("Enter your First Name:")
    let d = prompt("Enter your Last Name:")
    let e = c + " " + d
    document.getElementById("original-statement").innerText = "Your Full Name is:"
    document.getElementById("result-output").innerText = e;
}
document.getElementById("com-op").onclick = function(){
    let a = prompt("Input the first Number:")
    let b = prompt("Input the Second Number:")
    if (a===b) {
    document.getElementById("original-statement").innerText = "The result is below:"
    document.getElementById("result-output").innerText = "both numbers are equal!"
    }
    else {
    document.getElementById("original-statement").innerText = "The result is below:"
    document.getElementById("result-output").innerText = "both numbers are unequal!"
    }
}
document.getElementById("if-else").onclick = function(){
    let a = prompt("Enter your Marks:")
    if (a > 90) {
    document.getElementById("original-statement").innerText = "Your grade is below:"
    document.getElementById("result-output").innerText = "A+"
    }
    else if (a>80) {
    document.getElementById("original-statement").innerText = "Your Grade is below:"
    document.getElementById("result-output").innerText = "A"
    }
    else if (a<=80) {
        document.getElementById("original-statement").innerText = "Your Grade is below:"
        document.getElementById("result-output").innerText = "Fail"
    }
}

document.getElementById("set-con").onclick = function(){
    let a = prompt("Input your Age")
    let b = prompt("Input your Height")
    let c = prompt("Input your weight")
    if (a>15 && b>80 && c>60) {
    document.getElementById("original-statement").innerText = "The result is below:"
    document.getElementById("result-output").innerText = "You are a Healthy"
    }
    else if (a<15 && b<80 && c<60) {
    document.getElementById("original-statement").innerText = "The result is below:"
    document.getElementById("result-output").innerText = "Not healthy!"
    }
}

document.getElementById("nest").onclick = function(){
    let a = prompt("Enter your Age");
    let c = prompt("Input your weight");
    a = parseFloat(a);
    c = parseFloat(c);

    if (a <= 50 && c <= 90) {
        if (a > 40 && c > 60) {
            document.getElementById("original-statement").innerText = "The result is below:";
            document.getElementById("result-output").innerText = "Control your diet";
        }
        else if (a <= 45 && c < 60) {
            document.getElementById("original-statement").innerText = "The result is below:";
            document.getElementById("result-output").innerText = "About to die!";
        }
    }
    else if (a < 30 && c < 40) {
        document.getElementById("original-statement").innerText = "The result is below:";
        document.getElementById("result-output").innerText = "Not Healthy!";
    }
    else {
        document.getElementById("original-statement").innerText = "The result is below:";
        document.getElementById("result-output").innerText = "Healthy";
    }
}

document.getElementById("login").onclick = function(){
    let a = prompt("Enter your UserName:");
    let b = prompt("Enter your Password:");
    if (a === "sham" && b === "2020") {
        document.getElementById("original-statement").innerText = "Your status is below:";
        document.getElementById("result-output").innerText = "Right Credentials!";
    } else {
        document.getElementById("original-statement").innerText = "Your status is below:";
        document.getElementById("result-output").innerText = "Wrong Credentials!";
    }
};

document.getElementById("check").onclick = function(){
    let a = prompt("Enter your UserName:")
    let b = prompt("Enter your Password:")
    document.getElementById("original-statement").innerText = "Your status is below:";
    document.getElementById("result-output").innerText = "The username is Sham and the password is 2020";
}
document.getElementById("clear1").onclick=function(){
    document.getElementById("original-statement").innerHTML=""
}

document.getElementById("Cleared").onclick=function(){
    document.getElementById("result-output").innerHTML=""
}