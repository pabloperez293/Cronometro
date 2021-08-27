let active = false;

const time = [
    H = 0,
    M = 0,
    S = 0,
    CS = 0
]

const timeContainer = {
    H: document.getElementById("tiempo-horas"),
    M: document.getElementById("tiempo-minutos"),
    S: document.getElementById("tiempo-segundos"),
    CS: document.getElementById("tiempo-miliseg")
}

function fixTime (){
    if ( time.CS > 99 ) {
        time.CS = 0;
        time.S++;
    }

    if ( time.S > 59 ) {
        time.S = 0;
        time.M++;
    }

    if (time.M > 59) {
        time.M = 0;
        time.H++;
    }
}

function timeToString (time) {
    const timex = String(time);
    if (timex.toString().length == 1) {
        return "0" + timex.toString();
    } else {
        return timex.toString();
    }
}

function upDatetime() {
    let horasString = `${time.H}`;
    let minutosString = timeToString(time.M);
    let segundosString = timeToString(time.S);
    let milisegString = timeToString(time.CS);

    timeContainer.H.innerText = horasString;
    timeContainer.M.innerText = minutosString;
    timeContainer.S.innerText = segundosString;
    timeContainer.CS.innerText = milisegString;
}

function togglePause() {
    active = !active;
}

function reset() {
    active = false;
    time.H = 0;
    time.M = 0;
    time.S = 0;
    time.CS = 0;
    upDatetime();
}

setInterval(()=> {
    if (active) {
        time.CS++;
        fixTime();
        upDatetime();
    }
},10);