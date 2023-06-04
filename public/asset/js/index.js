console.log("chargement terminer")

/*récupération du statut de la chaîne de Kirby*/

$.getJSON("")
.done(addStream)
.fail(function(){
    console.log("erreur lors de la récupération du statut de Kirby");
})

function addStream(data){
    reponse1 = data
}

/*définition de l'html streamer-kirby*/

const streamkirby = `
<h1>KIRBY 360</h1>
<img src="./asset/img/kirby.png" alt="">
<div class="streamer-button">
    <button><a href="">Twitch</a></button>
    <button><a href="">Youtube</a></button>
</div>
`

const streamkirbyOnline = `
<h1>En ligne</h1>
<h1>KIRBY 360</h1>
<img src="./asset/img/kirby.png" alt="">
<div class="streamer-button">
    <button><a href="">Twitch</a></button>
    <button><a href="">Youtube</a></button>
</div>
`

const streamkirbyOffline = `
<h1>hort ligne</h1>
<h1>KIRBY 360</h1>
<img src="./asset/img/kirby.png" alt="">
<div class="streamer-button">
    <button><a href="">Twitch</a></button>
    <button><a href="">Youtube</a></button>
</div>
`

function checkValue(reponse1) {
    if (reponse1 === "online")
        online1 = true
        else
            online1 = false
}

function checkValue(online1) {
    if (online1 === ture)
        document.querySelector('.streamer-kirby').innerHTML = streamkirbyOnline;
        else
            document.querySelector('.streamer-kirby').innerHTML = streamkirbyOffline;

    }

    document.querySelector('.streamer-kirby').innerHTML = streamkirby;

    /*récupération du statut de la chaîne de Erafly*/

    $.getJSON("")
    .done(addStream)
    .fail(function(){
        console.log("erreur lors de la récupération du statut de Erafly");
    })
    
    function addStream(data){
        reponse2 = data
    }
    
    /*définition de l'html streamer-era*/
    
    const streamera = `
    <h1>ERAFLY</h1>
    <img src="./asset/img/era.png" alt="">
    <div class="streamer-button">
        <button><a href="">Twitch</a></button>
        <button><a href="">Youtube</a></button>
    </div>
    `
    
    const streameraOnline = `
    <h1>En ligne</h1>
    <h1>ERAFLY</h1>
    <img src="./asset/img/era.png" alt="">
    <div class="streamer-button">
        <button><a href="">Twitch</a></button>
        <button><a href="">Youtube</a></button>
    </div>
    `
    
    const streameraOffline = `
    <h1>hort ligne</h1>
    <h1>ERAFLY</h1>
    <img src="./asset/img/era.png" alt="">
    <div class="streamer-button">
        <button><a href="">Twitch</a></button>
        <button><a href="">Youtube</a></button>
    </div>
    `

    /*ajout du html via le script*/
    
    function checkValue(reponse2) {
        if (reponse2 === "online")
            online2 = true
            else
                online2 = false
    }
    
    function checkValue(online2) {
        if (online2 === ture)
            document.querySelector('.streamer-era').innerHTML = streameraOnline;
            else
                document.querySelector('.streamer-era').innerHTML = streameraOffline;
    
        }
    
        document.querySelector('.streamer-era').innerHTML = streamera;
       