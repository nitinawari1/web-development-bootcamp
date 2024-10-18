
//instilllazing varibles
let songindex = 0;
let audioElement = new Audio('audio/0.mp3')
let masterplay = document.getElementById('masterplay')
let gif = document.getElementById('gif')
let songrange = document.getElementById('songrange')
let mastertext = document.getElementById('mastertext')
let songitems = Array.from(document.getElementsByClassName('songitem'))

//array of songs 
let songs = [
    { name: 'onmyway', filepath: "audio/0.mp3", coverpath: "cover/1.jpg" },
    { name: 'Dil meri na sunne ', filepath: "audio/1.mp3", coverpath: "cover/2.jpg" },
    { name: 'Ik kahani ', filepath: "audio/2.mp3", coverpath: "cover/3.jpg" },
    { name: 'justin bieber mashup', filepath: "audio/3.mp3", coverpath: "cover/4.jpg" },
    { name: 'leja re ', filepath: "audio/4.mp3", coverpath: "cover/5.jpg" },
    { name: 'char chudhiya', filepath: "audio/5.mp3", coverpath: "cover/6.jpg" },
]



//giving cover and song name 
songitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerHTML = songs[i].name
})

// listen to  audiotimeupdate
audioElement.addEventListener('timeupdate', () => {
    //update seekbar 
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    songrange.value = progress;
})

//setting bar time eqaul to song time
songrange.addEventListener('change', () => {
    audioElement.currentTime = audioElement.duration * songrange.value / 100
})

//reseting minibuttons because masterplay stop
const stopminibutton = () => {
    Array.from(document.getElementsByClassName('miniplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })

}

//playing minibutton simutanasly with master playbutton 
const playminibutton = () => {
    let miniplay = document.getElementsByClassName('miniplay')

    miniplay[songindex].classList.remove('fa-circle-play')
    miniplay[songindex].classList.add('fa-circle-pause')



}
//Handled play/pause button 
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        mastertext.innerText = songs[songindex].name
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
        gif.style.opacity = 1
        playminibutton()

    }

    else {
        audioElement.pause()
        masterplay.classList.remove('fa-circle-pause')
        masterplay.classList.add('fa-circle-play')
        stopminibutton()
        gif.style.opacity = 0;

    }
});




//setting all minibuttonns to play position
const makeallplay = () => {
    Array.from(document.getElementsByClassName('miniplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })

}

// listing the minibuttons
Array.from(document.getElementsByClassName('miniplay')).forEach((element) => {

    element.addEventListener('click', (e) => {
        makeallplay()


        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        songindex = parseInt(e.target.id)
        audioElement.src = `audio/${songindex}.mp3`
        audioElement.play()
        mastertext.innerText = songs[songindex].name
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;

        e.target.addEventListener('click', () => {
            if (e.target.classList.contains('fa-circle-pause')) {
                e.target.classList.remove('fa-circle-pause')
                e.target.classList.add('fa-circle-play')
                audioElement.pause()
                masterplay.classList.remove('fa-circle-pause')
                masterplay.classList.add('fa-circle-play')
                gif.style.opacity = 0;
                console.log(1)
            }

            else {
                e.target.classList.remove('fa-circle-play')
                e.target.classList.add('fa-circle-pause')
                audioElement.play()
                // audioElement.currentTime = 0;
                masterplay.classList.remove('fa-circle-play')
                masterplay.classList.add('fa-circle-pause')
                gif.style.opacity = 1;
                console.log(2)
            }

        })

    })
})

//previous button 

document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex += 5;
    }

    else {
        songindex -= 1
    }
    audioElement.src = `audio/${songindex}.mp3`
    audioElement.play()
    mastertext.innerText = songs[songindex].name
    audioElement.currentTime = 0;

    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')
    gif.style.opacity = 1;
    makeallplay()
    let miniplay = document.getElementsByClassName('miniplay')
    miniplay[songindex].classList.remove('fa-circle-play')
    miniplay[songindex].classList.add('fa-circle-pause')

})

//after button
document.getElementById('after').addEventListener('click', () => {
    if (songindex >= 5) {
        songindex = 0;
    }

    else {
        songindex += 1
    }
    audioElement.src = `audio/${songindex}.mp3`
    audioElement.play()
    mastertext.innerText = songs[songindex].name
    audioElement.currentTime = 0;

    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')

    makeallplay()
    let miniplay = document.getElementsByClassName('miniplay')
    miniplay[songindex].classList.remove('fa-circle-play')
    miniplay[songindex].classList.add('fa-circle-pause')
    gif.style.opacity = 1;

})




