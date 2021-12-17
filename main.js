to_draw = ["Stars","Alien", "Bus", "Car", "Coffee", "Fork", "Feet", "Pencil", "Spider", "Laptop"];
choose= Math.floor((Math.random()*to_draw.length)+ 1);
array_element = to_draw[choose];
document.getElementById("drawn").innerHTML = "To be Drawn: "+ array_element;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
sketch = array_element;

function draw(){
    check_sketch();
    if(drawn_sketch == sketch){
        answer_holder = "set";
        score = score+1;
        document.getElementById("score").innerHTML = "Score: "+score;
    }
}

function check_sketch(){
    timer_counter++;
    document.getElementById("timer").innerHTML = "Timer: "+timer_counter;
    if(timer_counter>1000){
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check == "completed" || answer_holder == "set"){
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}

function updateCanvas(){
    background("cyan");
    to_draw = ["Stars","Alien", "Bus", "Car", "Coffee", "Fork", "Feet", "Pencil", "Spider", "Laptop"];   
    choose= Math.floor((Math.random()*to_draw.length)+ 1);
array_element = to_draw[choose];
document.getElementById("drawn").innerHTML = "To be Drawn: "+ array_element;
    sketch = array_element;
}

function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
}