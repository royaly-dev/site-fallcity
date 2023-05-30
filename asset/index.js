console.log("chargement terminer")

/*récupération du statut de la chaîne*/

$get.JSON("")
.done(addStream)
.fail(function(){
    console.log("erreur lors de la récupération du statue");
})

function addStream(data){
    $("streamkirby").attr(data.url);
}
