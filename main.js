canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_x=10;
car_y=10;

car2_x=695;
car2_y=10;

car_img="car1.png";
car_img2="download.jpg";

background_img="Background.jpg";

car2_width="150";
car2_height="80";

car_width="150";
car_height="80";

function add(){
    bgimg=new Image();
    bgimg.onload=uploudbg;
    bgimg.src=background_img;  
    
    carimg=new Image();
    carimg.onload=uploudcar;
    carimg.src=car_img;   

    car2img=new Image();
    car2img.onload=uploudcar2;
    car2img.src=car_img2;   
}

function uploudbg(){
    ctx.drawImage(bgimg,0,0, canvas.width, canvas.height);
}

function uploudcar(){
    ctx.drawImage(carimg, car_x, car_y, car_width, car_height);
}

function uploudcar2(){
    ctx.drawImage(car2img, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown",my_keydown2)

function  my_keydown2(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '87'){
         up2(); 
        console.log("up w key");
    }
    if (keyPressed == '83'){
        down2();
        console.log("down s key");
    }
    if (keyPressed == '68'){
        left2();
        console.log("left d key");
    }
    if (keyPressed == '65'){
         right2();
         console.log("right a key");
    }

}
   

function down2(){
    if (car2_y<=700 )
        car2_y+=10;
        console.log("When the s key is pressed x="+ car2_x +"| y=" + car2_y );
        uploudbg();
        uploudcar2();
        uploudcar();
    };
    function up2(){
        if (car2_y>=0 ) {
            car2_y-=10;
            console.log("When the w key is pressed x="+ car2_x +"| y=" + car2_y );
            uploudbg();
            uploudcar2();
            uploudcar();
        }
        };
        function right2(){
            if (car2_x<=1000 ){
                car2_x+=10;
                console.log("When the d key is pressed x="+ car2_x +"| y=" + car2_y );
                uploudbg();
                uploudcar2();
                uploudcar();
            }
            };
    
            
            function left2(){
                if (car2_x>=0 ){
                    car2_x-=10;
                    console.log("When the left key is pressed x="+ car2_x +"| y=" + car2_y );
                    uploudbg();
                    uploudcar2();
                    uploudcar();
                }
                };
                
            
window.addEventListener("keydown",my_keydown)

function  my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38'){
         up(); 
        console.log("up arrow key");
    }
    if (keyPressed == '40'){
        down();
        console.log("down arrow key");
    }
    if (keyPressed == '37'){
        left();
        console.log("left arrow key");
    }
    if (keyPressed == '39'){
         right();
         console.log("right arrow key");
    }

}
   

function down(){
    if (car_y<=700 )
        car_y+=10;
        console.log("When the down key is pressed x="+ car_x +"| y=" + car_y );
        uploudbg();
        uploudcar();
        uploudcar2();
    };
    function up(){
        if (car_y>=0 ) {
            car_y-=10;
            console.log("When the up key is pressed x="+ car_x +"| y=" + car_y );
            uploudbg();
            uploudcar();
            uploudcar2();
        }
        };
        function right(){
            if (car_x<=1000 ){
                car_x+=10;
                console.log("When the right key is pressed x="+ car_x +"| y=" + car_y );
                uploudbg();
                uploudcar();
                uploudcar2();
            }
            };
    
            
            function left(){
                if (car_x>=0 ){
                    car_x-=10;
                    console.log("When the left key is pressed x="+ car_x +"| y=" + car_y );
                    uploudbg();
                    uploudcar();
                    uploudcar2();
                }
                };
                
            