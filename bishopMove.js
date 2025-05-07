// function for showing movement of bishop
const positionForBishop = (id, arr1, arr2, arr3, arr4) => {
    for(const element of BOX){
        for (let i = 1; i < 8; i++) {
            if (String.fromCodePoint(id.charCodeAt(0) - i) + (Number(id[1]) + i) == element.id) {
                arr1.push(String.fromCodePoint(id.charCodeAt(0) - i)+(Number(id[1]) + i))
            } if (String.fromCodePoint(id.charCodeAt(0) + i) + (Number(id[1]) + i) == element.id) {
                arr2.push(String.fromCodePoint(id.charCodeAt(0) + i)+(Number(id[1]) + i))
            } if (String.fromCodePoint(id.charCodeAt(0) - i) + (Number(id[1]) - i) == element.id) {
                arr3.push(String.fromCodePoint(id.charCodeAt(0) - i)+(Number(id[1]) - i))
            } if (String.fromCodePoint(id.charCodeAt(0) + i) + (Number(id[1]) - i) == element.id) {
                arr4.push(String.fromCodePoint(id.charCodeAt(0) + i)+(Number(id[1]) - i))
            }
        }
    }
}

//function for restrict bishop forward moves
const restrictForwardBishopMove = (arr, color) => {
    arr.reverse();
    arr.forEach((ele, i) => {
        if (document.querySelector(`#${arr[i]}`).childNodes.length !== 0) {
            if (document.querySelector(`#${ele} img`).classList.value.includes(color)) {
                arr.splice(i, arr.length - i);
            }
            arr.splice(i + 1, arr.length - (i + 1))
        }
    })
}

//function for restrict bishop backward moves
const restrictBackwardBishopMove = (arr, color) => {
    arr.forEach((ele, i) => {
        if (document.querySelector(`#${ele}`).childNodes.length !== 0) {
            document.querySelector(`#${ele} img`).classList.value.includes(color)? arr.splice(i, arr.length - i):arr.splice(i + 1, arr.length - (i + 1));
        }
    })
}

//function for white bishop movement in chessboard
const whiteBishopMovement = (id) => {
    if (id == BgHighligtState) {
        removeHighlight(BgHighligtState);
        BgHighligtState = null;
        clearCircle();
        removeOpponent();
        return;
    }
    clearCircle();
    removeOpponent();
    removeHighlight(BgHighligtState);
    highlightBg(id);
    BgHighligtState = id;
    const forwardLeftPos = [];
    const forwardRightPos = [];
    const backwardLeftPos = [];
    const backwardRightPos = [];

    positionForBishop(id, forwardLeftPos, forwardRightPos, backwardLeftPos, backwardRightPos);

    restrictForwardBishopMove(forwardLeftPos, "white");
    restrictForwardBishopMove(forwardRightPos, "white");
    restrictBackwardBishopMove(backwardLeftPos, "white");
    restrictBackwardBishopMove(backwardRightPos, "white");

    const highlightSqId = forwardLeftPos.concat(forwardRightPos, backwardLeftPos, backwardRightPos);
    const capturePieces = [];

    //adding pieces that bishop can capture
    highlightSqId.forEach(element => {
        if (captureOpponentFunction(element, "black")) {
            capturePieces.push(element);
        }
    });

    highlightSqId.forEach((SqID) => {
        showCircle(SqID);
    });
    return highlightSqId;
}

//function for black bishop movement in chessboard
const blackBishopMovement = (id) => {
    // console.log("clicked same piece two times ?", id == BgHighligtState);
    if (id == BgHighligtState) {
        removeHighlight(BgHighligtState);
        BgHighligtState = null;
        clearCircle();
        removeOpponent();
        return;
    }
    clearCircle();
    removeOpponent()
    removeHighlight(BgHighligtState);
    highlightBg(id);
    BgHighligtState = id;

    const forwardLeftPos = [];
    const forwardRightPos = [];
    const backwardLeftPos = [];
    const backwardRightPos = [];

    positionForBishop(id, forwardLeftPos, forwardRightPos, backwardLeftPos, backwardRightPos);

    restrictForwardBishopMove(forwardLeftPos, "black");
    restrictForwardBishopMove(forwardRightPos, "black");
    restrictBackwardBishopMove(backwardLeftPos, "black");
    restrictBackwardBishopMove(backwardRightPos, "black");

    const highlightSqId = forwardLeftPos.concat(forwardRightPos, backwardLeftPos, backwardRightPos);
    const capturePieces = [];

    //adding pieces that pawn can capture
    highlightSqId.forEach(element => {
        if (captureOpponentFunction(element, "white")) {
            capturePieces.push(element);
        }
    });
    highlightSqId.forEach((SqID) => {
        showCircle(SqID);
    });
    return highlightSqId;
}      
