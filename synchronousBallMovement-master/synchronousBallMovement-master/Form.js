class Form{
    constructor(){}
    display(){
        var title=createElement("h1");
        title.position(130,0);
        title.html("car racing game");

        var input=createInput("name");
        var button=createButton("play");
        input.position(130,150);
        button.position(130,180);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();

playerCount=playerCount+1;
player.update(name);
player.updateCount(playerCount)

            var greeting=createElement("h2");
            greeting.html("hello "+name);
            greeting.position(130,160);
        })
    }
}
