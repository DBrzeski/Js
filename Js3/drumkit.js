document.addEventListener('keypress', onKeyPress)

const ch1 = []
const ch2 = []
const ch3 = []
const ch4 = []
selectedCh = 0
let tempo = 128
let interval = 60000 / tempo;
ch1Active = false
ch2Active = false
ch3Active = false
ch4Active = false

const KeyToSound = {
    'a': document.querySelector('#s1'),
    's': document.querySelector('#s2'),
    'd': document.querySelector('#s3'),
    'f': document.querySelector('#s4'),
    'g': document.querySelector('#s5'),
    'h': document.querySelector('#s6'),
    'j': document.querySelector('#s7'),
    'k': document.querySelector('#s9')
}

function onKeyPress(event) {
    playSound(KeyToSound[event.key])
    switch (selectedCh){
        case 1:
            time = Date.now() - ch1Start;
            note = {
            sound: event.key,
            time: time
            }
            ch1.push(note)
        break
        case 2:
            time = Date.now() - ch2Start;
            note = {
            sound: event.key,
            time: time
            }
            ch2.push(note)
        break
        case 3:
            time = Date.now() - ch3Start;
            note = {
            sound: event.key,
            time: time
            }
            ch3.push(note)
        break
        case 4:
            time = Date.now() - ch4Start;
            note = {
            sound: event.key,
            time: time
            }
            ch4.push(note)
        break
    ch1.push(sound)
    }
}
function playSound(sound) {
    sound.currentTime = 0
    sound.play()
}
function record(x){
    switch (x){
        case 1:
            ch1Start = Date.now()
            selectedCh = 1
        break
        case 2:
            ch2Start = Date.now()
            selectedCh = 2
        break
        case 3:
            ch3Start = Date.now()
            selectedCh = 3
        break
        case 4:
            ch4Start = Date.now()
            selectedCh = 4
        break
    }
}
function play(x){
    switch (x){
        case 1:
            ch1.forEach((notes) => { setTimeout(() => { playSound(KeyToSound[notes.sound])}, notes.time);})
        break  
        case 2:
            ch2.forEach((notes) => { setTimeout(() => { playSound(KeyToSound[notes.sound])}, notes.time);})
        break    
        case 3:
            ch3.forEach((notes) => { setTimeout(() => { playSound(KeyToSound[notes.sound])}, notes.time);})
        break  
        case 4:
            ch4.forEach((notes) => { setTimeout(() => { playSound(KeyToSound[notes.sound])}, notes.time);})
        break    
        case 5:
            if (ch1Active != false) {
                ch1.forEach((notes) => { setTimeout(() => { playSound(KeyToSound[notes.sound])}, notes.time);})
            }
            if (ch2Active == true) ch2.forEach((notes) => { setTimeout(() => { playSound(KeyToSound[notes.sound])}, notes.time);})
            if (ch3Active == true) ch3.forEach((notes) => { setTimeout(() => { playSound(KeyToSound[notes.sound])}, notes.time);})
            if (ch4Active == true) ch4.forEach((notes) => { setTimeout(() => { playSound(KeyToSound[notes.sound])}, notes.time);})
        break      
    }
}



function startMn(){
    if (typeof intervalId !== 'undefined') clearInterval(intervalId);
    tempo = document.getElementById("tempo").value
    interval = 60000 / tempo;
    intervalId = setInterval(beat, interval);
}
function stopMn(){
    clearInterval(intervalId);
}
function beat() {
    playSound(document.querySelector('#s8'))
}

function switchState(x){
    switch (x){
        case 1:
            if(ch1Active != true){
                document.getElementById("ch1").style.color = "green"
                ch1Active = true
                break
            }
            else
            {
                document.getElementById("ch1").style.color = "red";
                ch1Active = false
            }
            break
        case 2:
            if(ch2Active != true){
                document.getElementById("ch2").style.color = "green"
                ch2Active = true
                break
            }
            else
            {
                document.getElementById("ch2").style.color = "red";
                ch2Active = false
            }
            break
        case 3:
            if(ch3Active != true){
                document.getElementById("ch3").style.color = "green"
                ch3Active = true
                break
            }
            else
            {
                document.getElementById("ch3").style.color = "red";
                ch3Active = false
            }
            break
        case 4:
            if(ch4Active != true){
                document.getElementById("ch4").style.color = "green"
                ch4Active = true
                break
            }
            else
            {
                document.getElementById("ch4").style.color = "red";
                ch4Active = false
            }
            break   
    }
}
