class Games{
    constructor(){

    }

    getState(){
        var gaming = database.ref("gameState");
        gaming.on("value", function(data){
            gameState = data.val();
        })

       
    }
    updating(state){
        database.ref("/").update({
            gamestate:state
        }
        )
    }

    start() 
{
  if(gameState === 0){
    forms= new Forms();
    forms.display();
    pliers1 = new Playing();
    pliers1.playerState();
  }
}
}