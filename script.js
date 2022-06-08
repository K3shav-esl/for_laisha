//startin the code 
console.log('Hi again, in case you come here')

const content = document.getElementById('manipulationDiv')
var index = 0
content.innerHTML = "Howdyy Lai..."
const play = document.getElementById('audioDiv')

setInterval(() => {
    content.style.opacity = 0;
}, 5500);
setInterval(() => {
    const contentArray = ["How have you been?", "I hope you were fine all this time.", "I just wanted to say something.", "Maybe I went a little too far by making this website but ehh anyways", "I always hesitated to say this,", "I even dropped a few hints", "But the thing is", "I feel sad that we stopped talking", "I always wanted to initiate the chat again", "but you seemed involved in the new friends you made in the class", "so I thought I shouldn't interrupt", "But now, I cannot hold it anymore", "this is about you, and you have the right to know this", "the thing is...", " I have a fat ass crush on you 🙄", "so....", "yeahh...", "I feel a bit lighter", "I know a shit ton of people would have said this to you but..", "I just wanted put my thought forward", "Anyways...", "Have a good day/night, depending on the time you see this.", "🙃"]
    if (index == 13) {
        play.innerHTML = `
        <iframe src="background.mp3" allow="autoplay" style="display:none" id="iframeAudio">
    </iframe> 
`
        console.log("audio pushed")
    }
    if (index != contentArray.length) {
        content.innerHTML = contentArray[index]
        content.style.opacity = 1;
        index = index + 1
        console.log("data changed")
    }
    else {
        return null
    }

}, 6000);
