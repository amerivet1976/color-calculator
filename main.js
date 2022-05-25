const prompt = require('prompt-sync')({sigint: true});

let choice = prompt("combine or deconstruct?");

if(choice ==="combine"){
    let color1 = prompt("First color?");
    let color2 = prompt("Second color?");

    if(color1 ==="red" && color2==="blue"){
        console.log("purple")
    }

    else if(color1 ==="blue" && color2 === "red"){
        console.log("purple")
    }

    else if(color1=== "red" && color2 ==="yellow"){
        console.log("orange")
    }

    else if(color1==="yellow" && color2==="red"){
        console.log("orange")
    }

    else if(color1==="blue" && color2==="yellow"){

        console.log("green")
    }

    else if(color1==="yellow" && color2==="blue")  {
        console.log("green")
    }      

    else{
        console.log("error")
    }
}

if(choice==="deconstruct"){

    let color = prompt("color?");

        if(color==="purple"){
            console.log("Red + Blue")
        }
        else if(color ==="orange"){
            console.log("Red + Yellow")
        }
        else if(color==="green"){
            console.log("Blue + Yellow")
        }
        else{
            console.log("Error")
        }
    }
