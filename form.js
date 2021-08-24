class Forms {
    constructor(){

    }

display(){

    var namebox = createInput("Enter your name");
    namebox.position(340,190);


    var creation = createButton("Submit")
    creation.position(380, 230);

    var headsing = createElement("h1");
    headsing.html(" Car Racers");
    headsing.position(390, 120);


    creation.mousePressed(function(){
        namebox.hide();
        creation.hide();

        var storm = namebox.value();
        var greek = createElement("h4");
        greek.html("Hello "+ storm);
        greek.position(300, 190);

        playerCount = playerCount +1;
        pliers1.updating(playerCount)
        pliers1.update(storm)   

    })


}
}