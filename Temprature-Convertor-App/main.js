// Logic for the digital watch
function currentTime() {
    let p1 = document.getElementById("p1")
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let ss = date.getSeconds();
    let current_time = hr + ":" + mn + ":" + ss;
    p1.innerHTML = current_time;
    let t = setTimeout(function () { currentTime() }, 1000);
}
currentTime();

// Logic for temperature converter
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let select1 = document.getElementById('select1');
let select2 = document.getElementById('select2');
let label1 = document.getElementById('L1');
let label2 = document.getElementById('L2');
let temp1;
let temp2;

label1.innerHTML = select1.value;
label2.innerHTML = select2.value;

select1.addEventListener('input', function(){
    temp1 = select1.value;
    label1.innerHTML = temp1;
    
});

select2.addEventListener('input', function(){
    temp2 = select2.value;
    label2.innerHTML = temp2;
});

// function to convert Celsius to Fahrenheit OR Fahrenheit to Celsius
function celToFah(){
    select1.value = "Celsius";
    select2.value = "Fahrenheit";
    label1.innerHTML = select1.value;
    label2.innerHTML = select2.value;

    input1.value = "0";
    input2.value = "32";
    
input1.addEventListener('input', function(){
    let Celsius = this.value;
    let Fahrenheit = (Celsius * 9/5) + 32;
    if(!Number.isInteger(Fahrenheit)){
       Fahrenheit = Fahrenheit.toFixed(2);
    }
    input2.value = Fahrenheit;
});

input2.addEventListener('input', function(){
    let Fahrenheit = this.value;
    let Celsius = (Fahrenheit - 32) * 5/9;
    if(!Number.isInteger(Celsius)){
       Celsius = Celsius.toFixed(2);
    }
    input1.value = Celsius;
});
}

celToFah(); //Calling the function

select1, select2.addEventListener('input', function(){
      if (select1.value == "Celsius" && select2.value == "Fahrenheit") {
          input1.value = "0";
          input2.value = "32";

        celToFah();
      }

    //   If condition to convert Fahrenheit to Celsius OR Celsius to Fahrenheit
      if (select1.value == "Fahrenheit" && select2.value == "Celsius") {
        input1.value = "0";
        input2.value = "-17.77";

        input1.addEventListener('input', function(){
            let Fahrenheit = this.value;
            let Celsius = (Fahrenheit - 32) * 5/9;
            if(!Number.isInteger(Celsius)){
               Celsius = Celsius.toFixed(2);
            }
            input2.value = Celsius;
        });

        input2.addEventListener('input', function(){
            let Celsius = this.value;
            let Fahrenheit = (Celsius * 9/5) + 32;
            if(!Number.isInteger(Fahrenheit)){
               Fahrenheit = Fahrenheit.toFixed(2);
            }
            input1.value = Fahrenheit;
        });
    }
});