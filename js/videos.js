const d = document;

const $videoUgc = d.getElementById('t-v-ugc'),
    $templateVideo = d.getElementById('template-video').content,
    $fragmentoVideo = d.createDocumentFragment(),
    $video = await fetch('/Recursos-json/video.json'),
    $datosVideo = await $video.json();

$datosVideo.forEach(el => {
    $templateVideo.querySelector("#titulo-videos").textContent = el.h2;
    $templateVideo.querySelector("#video1-1").innerHTML = el.video1;
    $templateVideo.querySelector("#video1-2").innerHTML = el.video2;
    $templateVideo.querySelector("#video1-3").innerHTML = el.video3;
    $templateVideo.querySelector("#video1-4").innerHTML = el.video4;
    $templateVideo.querySelector("#video2-5").innerHTML = el.video5;
    $templateVideo.querySelector("#video2-6").innerHTML = el.video6;
    $templateVideo.querySelector("#video2-7").innerHTML = el.video7;
    $templateVideo.querySelector("#video2-8").innerHTML = el.video8;
    $templateVideo.querySelector("#video3-9").innerHTML = el.video9;
    $templateVideo.querySelector("#video3-10").innerHTML = el.video10;
    $templateVideo.querySelector("#video3-11").innerHTML = el.video11;
    $templateVideo.querySelector("#video3-12").innerHTML = el.video12;
    $templateVideo.querySelector("#video4-13").innerHTML = el.video13;
    $templateVideo.querySelector("#video4-14").innerHTML = el.video14;
    $templateVideo.querySelector("#video4-15").innerHTML = el.video15;



    $fragmentoVideo.appendChild($templateVideo);
    $videoUgc.appendChild($fragmentoVideo);
});

export default $videoUgc;