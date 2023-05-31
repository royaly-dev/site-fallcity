console.log("chargement terminer")

/*récupération du statut de la chaîne*/

$.getJSON("")
.done(addStream)
.fail(function(){
    console.log("erreur lors de la récupération du statut");
})

function addStream(data){
    reponse = data
}

/*définition de l'html streamer-kirbys*/

const streamkirby = `
<h1>KIRBY 360</h1>
<h3 id="streamkirby"></h3>
<img src="./asset/kirby.png" alt="">
<div class="streamer-button">
    <button><a href="">Twitch</a></button>
    <button><a href="">Youtube</a></button>
</div>
`

const streamkirbyOnline = `
<h1>En ligne</h1>
<h1>KIRBY 360</h1>
<h3 id="streamkirby"></h3>
<img src="./asset/kirby.png" alt="">
<div class="streamer-button">
    <button><a href="">Twitch</a></button>
    <button><a href="">Youtube</a></button>
</div>
`

const streamkirbyOffline = `
<h1>hort ligne</h1>
<h1>KIRBY 360</h1>
<h3 id="streamkirby"></h3>
<img src="./asset/kirby.png" alt="">
<div class="streamer-button">
    <button><a href="">Twitch</a></button>
    <button><a href="">Youtube</a></button>
</div>
`

function checkValue(reponse) {
    if (reponse === "online")
        online = true
        else
            online = false
}

function checkValue(online) {
    if (online === ture)
        document.querySelector('.streamer-kirby').innerHTML = streamkirbyOnline;
        else
            document.querySelector('.streamer-kirby').innerHTML = streamkirbyOffline;

    }

    document.querySelector('.streamer-kirby').innerHTML = streamkirby;
