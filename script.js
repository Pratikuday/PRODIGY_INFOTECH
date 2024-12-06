function toggleMenu(){
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

//change the background video when u click on the gallery image

function changeVideo(name){
    const bgVideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');

    bgVideoList.forEach(Video =>{
        Video.classList.remove('active');
        if(Video.classList.contains(name)){
            Video.classList.add('active');
        }
    });
    //model name change of mclaren

models.forEach(model =>{
    model.classList.remove('active');
    if(model.classList.contains(name)){
        model.classList.add('active');
    }
});

//trailer video change of mclaren
trailers.forEach(trailer =>{
    trailer.classList.remove('active');
    if(trailer.classList.contains(name)){
        trailer.classList.add('active');
    }
});
}


//change the play and pause button

function togglePlay(){
    const play= document.querySelector('.play');
    const pause= document.querySelector('.pause');
    play.classList.toggle('active');
    pause.classList.toggle('active');
}


//video play and pause code

function pauseVideo(){
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(Video =>{
        Video.pause();
        // Video.style.display= 'none';
    });
    
    togglePlay();
}

function playVideo(){
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(Video =>{
       
        Video.play();
    });
    // video.style.display = 'block';
    togglePlay();
}

