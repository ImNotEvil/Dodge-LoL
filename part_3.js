//Load content instanty so you don't have to put your stuff back in again and again
//However all content is lost on session clear
function load_content() {
	var table_future_content = '';
    for (var [key, value] of Object.entries(localStorage)) {
        if ( key.includes("RIOT_") ){
			document.getElementById( key.replace("RIOT_","") ).value = value;
		}else{
			table_future_content+= table_row(key,value);
		}
    };
	document.getElementById('table_body2').innerHTML = table_future_content;
}

function save_content(id) {
    var value = document.getElementById(id).value;
    console.log(value);
    localStorage.setItem("RIOT_" + id, value);

}

function refresh_table(){
	var table_future_content = '';
    for (var [key, value] of Object.entries(localStorage)) {
        if ( !key.includes("RIOT_") ){
			table_future_content+= table_row(key,value);
		}
    };
	document.getElementById('table_body2').innerHTML = table_future_content;
}

function clear_all(){
	clearinputs();
	localStorage.clear();
	location.reload();
}
