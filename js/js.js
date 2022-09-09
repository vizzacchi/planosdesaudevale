function right(){
    $("#container__operadoras").animate({scrollLeft: "+=900px"}, "slow");
}
function left(){
    $("#container__operadoras").animate({scrollLeft: "-=900px"}, "slow");
}
function left_fim(){
    $("#container__operadoras").animate({scrollLeft: "0"}, "slow");
}
function right_fim(){
    var largura = 3*document.getElementById("container__operadoras").offsetWidth;
    $("#container__operadoras").animate({scrollLeft: "+="+largura+"px"}, "slow");
}
function right_hosp(){
    $("#container__hospitais").animate({scrollLeft: "+=900px"}, "slow");
}
function left_hosp(){
    $("#container__hospitais").animate({scrollLeft: "-=900px"}, "slow");
}
function left_fim_hosp(){
    $("#container__hospitais").animate({scrollLeft: "0"}, "slow");
}
function right_fim_hosp(){
    var largura = 3*document.getElementById("container__operadoras").offsetWidth;
    $("#container__hospitais").animate({scrollLeft: "+="+largura+"px"}, "slow");
}
function right_lab(){
    $("#container__laboratorios").animate({scrollLeft: "+=900px"}, "slow");
}
function left_lab(){
    $("#container__laboratorios").animate({scrollLeft: "-=900px"}, "slow");
}
function left_fim_lab(){
    $("#container__laboratorios").animate({scrollLeft: "0"}, "slow");
}
function right_fim_lab(){
    var largura = 3*document.getElementById("container__operadoras").offsetWidth;
    $("#container__laboratorios").animate({scrollLeft: "+="+largura+"px"}, "slow");
}