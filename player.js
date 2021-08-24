class Playing{
    connstructor(){

    }

    playerState(){
        var pliers = database.ref("playerCount");
        pliers.on("value", function(data){
            playerCount = data.val();
        })

    }

    updating(count){
        database.ref("/").update({
            playerCount:count
        }
        )
    }

    update(name){
        var ploy = "player"+playerCount;
        database.ref(ploy).set({
            name:name
        })
    }
}