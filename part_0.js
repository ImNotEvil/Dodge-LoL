// Needed but could be optimized
function win_loose_splitter(infos) {
    var tab = infos.split(";");
	var tab2 = [ parseInt(tab[0]) , parseInt(tab[1])];
    return ( tab2 ) ;
}

function parser_win_loose(win, loose) {
    return (win.toString() + ";" + loose.toString());
}

function get_win_loose(pseudo){

	var value = sessionStorage.getItem(pseudo);
	if (value == null ){
		set_win_loose(pseudo,0,0);
		return([0,0]);
	}
	else{
		return win_loose_splitter(value);
	}

}
function set_win_loose(pseudo,win,loose){
	sessionStorage.setItem(pseudo, parser_win_loose(win,loose));
}

function table_row(pseudo,infos){
	var tab = win_loose_splitter(infos);
	return '<tr><td>'+pseudo+'</td><td>'+tab[0]+'</td><td>'+tab[1]+'</td></tr>';
}
