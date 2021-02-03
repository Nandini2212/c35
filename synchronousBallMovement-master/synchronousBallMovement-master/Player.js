class Player{
    constructor(){}
    getCount(){
        var playerCountInfo=database.ref("playerCount");
        playerCountInfo.on("value",function(data){
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    update(n){
        var playerIndex="player"+playerCount;
        database.ref(playerIndex).set({
            name:n
        })
    }
}