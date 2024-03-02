var result1 = 0;
var result2 = 0;

function credit() {
    document.getElementById("credit").style.left = "82vh";
    var element = document.getElementById("Top");
    element.style.transform = "rotate(360deg)";
    element.style.left = "102vh";
}

function up() {
    var element = document.getElementById("Top");
    var p_t = parseInt(element.style.top) || 53;
    var p_a_t = p_t - 10;
    element.style.top = p_a_t + "vh";
}

function bottom() {
    var element = document.getElementById("Top");
    var p_b = parseInt(element.style.top) || 53;
    var p_a_b = p_b + 10;
    element.style.top = p_a_b + "vh";
}

function right() {
    var element = document.getElementById("Top");
    var p_r = parseInt(element.style.left) || 102;
    var p_a_r = p_r + 10;
    element.style.left = p_a_r + "vh";
}

function left() {
    var element = document.getElementById("Top");
    var p_l = parseInt(element.style.left) || 102;
    var p_a_l = p_l - 10;
    element.style.left = p_a_l + "vh";
}

function back() {
    document.getElementById("credit").style.left = "300vh";
    var element = document.getElementById("Top");
    element.style.transform = "rotate(0deg)";
}

function shoot_r() {
    var element = document.getElementById("Top");
    element.style.left = "199.5vh";
    element.style.top = "53vh";
    var goal = document.getElementById("title");
    goal.style.top = "25vh";
    result1++;
}

function shoot_l() {
    var element = document.getElementById("Top");
    element.style.left = "2.5vh";
    var goal = document.getElementById("title");
    goal.style.top = "25vh";
    result2++;
}

function OK() {
    var goal = document.getElementById("title");
    goal.style.top = "-30vh";
}

function Result() {
    alert(result);
}

function reset() {
    location.href = "index.html";
}

document.addEventListener( 'keydown', Event => {
    if(Event.key === 'a') {
        var element = document.getElementById("Top");
        var p_l = parseInt(element.style.left) || 102;
        var p_a_l = p_l - 10;
        element.style.left = p_a_l + "vh";
    }
}

)

document.addEventListener( 'keydown', Event => {
    if(Event.key === 'd') {
        var element = document.getElementById("Top");
        var p_r = parseInt(element.style.left) || 102;
        var p_a_r = p_r + 10;
        element.style.left = p_a_r + "vh";
    }
}

)

document.addEventListener( 'keydown', Event => {
    if(Event.key === 'w') {
        var element = document.getElementById("Top");
        var p_t = parseInt(element.style.top) || 53;
        var p_a_t = p_t - 10;
        element.style.top = p_a_t + "vh";
    }
}

)

document.addEventListener( 'keydown', Event => {
    if(Event.key === 's') {
        var element = document.getElementById("Top");
        var p_b = parseInt(element.style.top) || 53;
        var p_a_b = p_b + 10;
        element.style.top = p_a_b + "vh";
    }
}

)

document.addEventListener( 'keydown', Event => {
    if(Event.key === 'r') {
        var element = document.getElementById("Top");
        element.style.left = "199.5vh";
        element.style.top = "53vh";
        var goal = document.getElementById("title");
        goal.style.top = "25vh";
        result1++;
    }
}

)

document.addEventListener( 'keydown', Event => {
    if(Event.key === 'l') {
        var element = document.getElementById("Top");
        element.style.left = "2.5vh";
        element.style.top = "53vh";
        var goal = document.getElementById("title");
        goal.style.top = "25vh";
        result2++;
    }
}

)

document.addEventListener( 'keydown', Event => {
    if(Event.key === 't') {
        var element = document.getElementById("Top");
        element.style.left = "102vh";
        element.style.top = "53vh";
    }
}

)