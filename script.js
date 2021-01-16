//Update les pseudos des gens
//array_pseudo is an array of strings
//win_or_loose is a boolean
function update(array_pseudo, win_or_loose) {

    array_pseudo.forEach((pseudo, i) => {
        //For each pseudo

        var win = 0;
        var loose = 0;


        //Get pseudo infos
        var infos = sessionStorage.getItem(pseudo);

        if (infos != null) {
            //If we encoutered this guy before
            win,loose = win_loose_parser(infos);
        }

        //Now we increase win or loose depending of the situation

        if (win_or_loose) { // True = WIN
            win += 1;
        } else {
            loose += 1; // False = LOOSE
        }

        //Now we are going to set the players infos :

        var value = parser_win_loose(win, loose);

        sessionStorage.setItem(pseudo, value);

    });
}

// Function to parse the text we send when we enter a game //

function extract_pseudos(text){
	var regex = /(^.+)( joined the room)/ ;

	var match = text.match(regExp);
	console.log(match)

}






// Needed but could be optimized
function win_loose_parser(infos) {
    var tab = infos.split(";");
    return (parseInt(tab[0]), parseInt(tab[1]));
}

function parser_win_loose(win, loose) {
    return (win.toString() + ";" + loose.toString());
}
