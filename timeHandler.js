const timeHandler = (tensMins, onesMins, onesSecs, tensSecs, dead) => {
    if (onesSecs.value < "0" && tensSecs.value < "0") {
        tensSecs.value = "5";
        onesSecs.value = "9";
    };
    if (onesSecs.value < 0) {
        onesSecs.value = "9";
        tensSecs.value--;
        if (tensSecs.value < "0") {
            tensSecs.value = "5"
        }
    };
    if (tensSecs.value == "5" && onesSecs.value == "9") {
        onesMins.value--;
        if (onesMins.value < 0) {
            onesMins.value = "9";
            tensMins.value--;
        };
    }
    if (tensSecs.value == "0" && onesSecs.value == "0" && tensMins.value == "0" && onesMins.value == "0") {
        timeOut = true;
        checkForWinner(dead);
    };
}

function blackTimer() {
    let tensMins = document.querySelector(`#timerForBlack .tensMin`);
    let onesMins = document.querySelector(`#timerForBlack .onesMin`);
    let tensSecs = document.querySelector(`#timerForBlack .tensSec`);
    let onesSecs = document.querySelector(`#timerForBlack .onesSec`);
    onesSecs.value--;
    timeHandler(tensMins, onesMins, onesSecs, tensSecs, "black");
}

function whiteTimer() {
    let tensMins = document.querySelector(`#timerForWhite .tensMin`);
    let onesMins = document.querySelector(`#timerForWhite .onesMin`);
    let tensSecs = document.querySelector(`#timerForWhite .tensSec`);
    let onesSecs = document.querySelector(`#timerForWhite .onesSec`);
    onesSecs.value--;
    timeHandler(tensMins, onesMins, onesSecs, tensSecs, "white");

}