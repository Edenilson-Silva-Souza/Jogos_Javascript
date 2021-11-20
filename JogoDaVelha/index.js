let turno='y';
function p(a){
    
    let X = document.getElementById(a).innerHTML;
if(X=='-' && turno=='y'){
    document.getElementById(a).innerHTML='X';
    turno='p';
}
else if(X=='-'){
    turno='y';
    document.getElementById(a).innerHTML='O';
}

}