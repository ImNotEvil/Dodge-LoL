//Update les pseudos des gens
//array_pseudo is an array of strings
//win_or_loose is a boolean
function update(array_pseudo, win_or_loose) {

    array_pseudo.forEach((pseudo, i) => {
        //For each pseudo

        var win = 0;
        var loose = 0;


        //Get pseudo infos
        var infos = localStorage.getItem(pseudo);

        if (infos != null) {
            //If we encoutered this guy before
            var tab  = win_loose_splitter(infos);
			win = tab[0];
			loose = tab[1];
        }

        //Now we increase win or loose depending of the situation

        if (win_or_loose) { // True = WIN
            win += 1;
        } else {
            loose += 1; // False = LOOSE
        }

        //Now we are going to set the players infos :

        var value = parser_win_loose(win, loose);

        localStorage.setItem(pseudo, value);

    });
}

function upload(){

	//Get the names of allies

	var tab = [];
	for (var i = 0; i < 4 ; i++){

		var value = document.getElementById('teammate'+i.toString()+'_bis').value;

		if (value == null || value == ""){
			alert("You need temmates to commit first");
			return;
		}else{
			tab.push(value);
		}
	}
	//Check if lost or win
	var boolean = document.getElementById('game_won').checked ;
	update(tab,boolean);
	clearinputs();
}

function clearinputs(){

	for (var i = 0; i < 4 ; i++){
		document.getElementById('teammate'+i.toString()).value = null;
		document.getElementById('teammate'+i.toString()+'_bis').value = null;
	}
	document.getElementById('raw_usernames').value = null;
	document.getElementById('table_dodge').style.display = 'none';
	refresh_table();
}
