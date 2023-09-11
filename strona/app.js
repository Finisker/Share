const karuzelaimg = document.querySelectorAll('.karuzela-slajdy img');

let counter = 0;
let max = karuzelaimg.length;

function przodbtn(){
    karuzelaimg[counter].style.display = "none";
    counter = (counter+1)%max;
    karuzelaimg[counter].style.display = "block";
}

function tylbtn(){
    karuzelaimg[counter].style.display = "none";
    counter--;
    if(counter===-1){
        counter=max-1;
    }
    karuzelaimg[counter].style.display = "block";
}