// Parse text from textarea
// id = raw_usernames

// Returns an array and fill
// ids : teammate1 teammate2 teammate3 teammate4
//  & ids _bis

function raw_filter(){

	var player_username = document.getElementById('player_username').value ;
	if (player_username == null || player_username == "" ) {
		alert("Your username is needed");
		return;
	}
	var is_player_here = false;
	var texte = document.getElementById('raw_usernames').value;
	var regex = /(^.+)( joined the room)/ ;

	var k = 0;
	var tab=[];
	texte.split("\n").forEach((item, i) => {
		var match = item.match(regex);
		//console.log(match);

		if (match){

			//console.log(match[1]);

			if (match[1] == player_username){
				is_player_here = true;
			}else if (k < 4){
				tab.push( match[1] );
				k+=1;
			}

		}
	});

	if (!is_player_here){
		alert("Don't you have to be in the game ??");
	}
	else{
		//console.log(tab);
		tab.forEach((item, i) => {
			document.getElementById('teammate'+i.toString()).value = item;
			document.getElementById('teammate'+i.toString()+'_bis').value = item;
		});

	}

}

//
function search(){

	var nombre_defaite = 0;
	var nombre_victoire = 0;
	var table_future_content = '';

	for (var i = 0; i < 4 ; i++){

		var value = document.getElementById('teammate'+i.toString()).value;


		if (value == null || value == ""){
			alert("You need temmates to scan first");
			return;
		}else{
			var tab = get_win_loose(value);
			table_future_content += table_row(value,parser_win_loose(tab[0],tab[1]));
			nombre_victoire+= tab[0];
			nombre_defaite+= tab[1];

		}
	}

	document.getElementById('table_dodge').style.display = 'block';
	document.getElementById('nombre_victoire').innerHTML = nombre_victoire;
	document.getElementById('nombre_defaite').innerHTML = nombre_defaite;
	document.getElementById('table_body1').innerHTML = table_future_content;

	var advice = document.getElementById('advice');
	if (nombre_victoire > nombre_defaite ){
		//PLAY
		//success
		advice.className = "label label-success";
		advice.innerHTML = "PLAY";

	}
	else if ( nombre_victoire < nombre_defaite){
		//Dodge !
		advice.className = "label label-danger";
		advice.innerHTML = "Dodge !";
	}
	else{
		//PLAY
		//warning
		advice.className = "label label-warning";
		advice.innerHTML = "PLAY";
	}

}
