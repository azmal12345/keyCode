const listImg = document.querySelectorAll(".imgList");


window.addEventListener("keydown", keyCodeFunction, false);

function keyCodeFunction(e){
    if(e.keyCode == "65"){
        listImg[0].style.display = "block";
    }else if(e.keyCode == "66"){
        listImg[1].style.display = "block";
    }else if(e.keyCode == "67"){
        listImg[2].style.display = "block";
    }else if(e.keyCode == "68"){
        listImg[3].style.display = "block";
    }else if(e.keyCode == "69"){
        listImg[4].style.display = "block";
    }else if(e.keyCode == "70"){
        listImg[5].style.display = "block";
    }else if(e.keyCode == "71"){
        listImg[6].style.display = "block";
    }else if(e.keyCode == "72"){
        listImg[7].style.display = "block";
    }else if(e.keyCode == "73"){
        listImg[8].style.display = "block";
    }else if(e.keyCode == "74"){
        listImg[9].style.display = "block";
    }else if(e.keyCode == "75"){
        listImg[10].style.display = "block";
    }else if(e.keyCode == "76"){
        listImg[11].style.display = "block";
    }else if(e.keyCode == "77"){
        listImg[12].style.display = "block";
    }else if(e.keyCode == "78"){
        listImg[13].style.display = "block";
    }else if(e.keyCode == "79"){
        listImg[14].style.display = "block";
    }else if(e.keyCode == "80"){
        listImg[15].style.display = "block";
    }else if(e.keyCode == "81"){
        listImg[16].style.display = "block";
    }else if(e.keyCode == "82"){
        listImg[17].style.display = "block";
    }else if(e.keyCode == "83"){
        listImg[18].style.display = "block";
    }else if(e.keyCode == "84"){
        listImg[19].style.display = "block";
    }else if(e.keyCode == "85"){
        listImg[20].style.display = "block";
    }else if(e.keyCode == "86"){
        listImg[21].style.display = "block";
    }else if(e.keyCode == "87"){
        listImg[22].style.display = "block";
    }else if(e.keyCode == "88"){
        listImg[23].style.display = "block";
    }else if(e.keyCode == "89"){
        listImg[24].style.display = "block";
    }else{
        alert("Please Try agin..................");
    }
}

// lion svg 


setTimeout(function(){
    document.getElementById("logdding").style.display = "none";
// pop text show 
    setTimeout(function(){
        swal("Click The A to Z Alphabet");
    }, 500);
},17000);