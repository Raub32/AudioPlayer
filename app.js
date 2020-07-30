

const audioElement = document.querySelector('audio')
audioElement.src = './public/audio/1596073215304.mp3'

const trackLength = document.getElementById('totalDuration')
const trackbarContainer = document.getElementById('trackbar-container')
const trackHighlight = document.getElementById('trackbar-highlight')
const timeLabel = document.getElementById('currentTime')
const trackbar = document.getElementById('trackbar')
trackbar.style.width =  '0%';
const playbtn = document.querySelector('button')
const submit = document.getElementById('submit')
const input = document.getElementById('url-input')

let isPlaying = false
let trackPlaying

let progress
let selectedTime
let currentTime = new Date(0,0)

button.addEventListener('click', function(){

})
playbtn.addEventListener('click', function(){
  console.log('duration:' + Math.round((audioElement.duration / 60) * 100)  / 100)
  trackLength.innerHTML = ((audioElement.duration / 60).toFixed(2)).replace('.',':')
  if(!isPlaying){
    audioElement.play()
    isPlaying = true

    trackPlaying = setInterval(function(){
        progress = (audioElement.currentTime / Math.round(audioElement.duration)) * 100
        trackbar.style.width = progress + '%';

        timeLabel.innerHTML = (audioElement.currentTime / 100).toFixed(2)

        if( audioElement.ended ){
          clearInterval(trackPlaying)
          playbtn.innerHTML = "play_arrow"
        }
    },1000)

    this.innerHTML = "pause"
  }

  else{
    audioElement.pause()
    clearInterval(trackPlaying)
    isPlaying = false
    this.innerHTML = "play_arrow"
  }
})
trackbarContainer.addEventListener('click', function(event){
  selectedTime = (event.offsetX /  this.offsetWidth) * Math.round(audioElement.duration)
  // console.log(selectedTime)
  progress = (event.offsetX / this.offsetWidth) * 100
  trackbar.style.width = progress + '%';
  audioElement.currentTime = (progress * audioElement.duration) / 100
})
trackbarContainer.addEventListener('mousemove', function(event){
  progress = (event.offsetX / this.offsetWidth) * 100
  // console.log(event.offsetX)
  trackHighlight.style.width = progress + '%';
})
