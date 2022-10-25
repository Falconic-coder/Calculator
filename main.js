let expression = "";

document.getElementById("n7").addEventListener("click", function(){
    expression += "7";
    document.getElementById("input").value = expression;
})

document.getElementById("n6").addEventListener("click", function(){
    expression += "6";
    document.getElementById("input").value = expression;
})

document.getElementById("n5").addEventListener("click", function(){
    expression += "5";
    document.getElementById("input").value = expression;
})

document.getElementById("n4").addEventListener("click", function(){
    expression += "4";
    document.getElementById("input").value = expression;
})

document.getElementById("n3").addEventListener("click", function(){
    expression += "3";
    document.getElementById("input").value = expression;
})


document.getElementById("n2").addEventListener("click", function(){
    expression += "2";
    document.getElementById("input").value = expression;
})

document.getElementById("n1").addEventListener("click", function(){
    expression += "1";
    document.getElementById("input").value = expression;
})

document.getElementById("n0").addEventListener("click", function(){
    expression += "0";
    document.getElementById("input").value = expression;
})

document.getElementById("n8").addEventListener("click", function(){
    expression += "8";
    document.getElementById("input").value = expression;
})

document.getElementById("n9").addEventListener("click", function(){
    expression += "9";
    document.getElementById("input").value = expression;
})



document.getElementById("plus").addEventListener("click", function(){
    expression += "+";
    document.getElementById("input").value = expression;
})


document.getElementById("minus").addEventListener("click", function(){
    expression += "-";
    document.getElementById("input").value = expression;
})

document.getElementById("multiply").addEventListener("click", function(){
    expression += "*";
    document.getElementById("input").value = expression;
})

document.getElementById("div").addEventListener("click", function(){
    expression += "/";
    document.getElementById("input").value = expression;
})


function onEqualsClick(){
    try{
        expression = eval(expression);
        document.getElementById("input").value = eval(expression);
    }

    catch{
        document.getElementById("input").value = "Invalid Expression";
        expression = "";
        const myTimeout = setTimeout(mathError, 1000);

        function mathError(){
            document.getElementById("input").value = "";
        };
       
        expression = "";
    }
}


document.getElementById("equals").addEventListener("click", onEqualsClick)

document.getElementById("clear").addEventListener("click", function(){
    expression = "";
    document.getElementById("input").value = expression;
});


document.getElementById("prd").addEventListener("click", function(){
    expression += ".";
    document.getElementById("input").value = expression;
});


document.body.addEventListener("keydown", function(e){ 

    if (expression == undefined)
        expression = "";

    if ((e.key <= "9" && e.key >= "0") || e.key == "*" || e.key == "/" || e.key == "-" || e.key == "+" || e.key == ".")
    {
        expression += e.key;
        document.getElementById("input").value = expression;
    }

    if (e.key == "Backspace")
    {    
        expression = expression.slice(0, expression.length-1);
        document.getElementById("input").value = expression;
    }

    if (e.key == "Enter")
        onEqualsClick();

});


let key_id = {"0": "n0", "1": "n1", "2": "n2", "3": "n3", "4": "n4", "5": "n5", "6": "n6", "7": "n7", "8": "n8", "9": "n9",
            "Enter": "equals", ".": "prd", "Backspace": "clear", "+": "plus", "*": "multiply", "-":"minus", "/":"div"};


document.body.addEventListener("keydown", function(e){ 
    let Hover_bg = "rgb(253, 193, 104)";

    if(key_id[e.key] == "equals")
        Hover_bg = "beige";
        

    document.getElementById(key_id[e.key]).style.backgroundColor = Hover_bg;

    setTimeout(main, 250);

    function main(){
        document.getElementById(key_id[e.key]).style.backgroundColor = "";
    }
    
})