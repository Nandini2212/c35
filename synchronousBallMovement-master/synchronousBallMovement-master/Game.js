class Game{
    constructor(){}
    getState(){
        var gamestateInfo=database.ref("gameState");
        gamestateInfo.on("value",function(data){
            gameState=data.val();
        })
    }
    updateState(s){
        database.ref("/").set({
            gameState:s
        })
    }
    start(){
        if(gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display()
        }
    }
}
