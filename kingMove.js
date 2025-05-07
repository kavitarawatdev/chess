// function for possible positions for king
const positionForKing = (id, arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8) => {
    BOX.forEach((element) => {
        //left
        if (String.fromCodePoint(id.charCodeAt(0) - 1)+Number(id[1]) == element.id) arr1.push(String.fromCodePoint(id.charCodeAt(0) - 1)+Number(id[1]));
        //right
        if (String.fromCodePoint(id.charCodeAt(0) + 1)+Number(id[1]) == element.id)  arr2.push(String.fromCodePoint(id.charCodeAt(0) + 1)+Number(id[1]));
        //front
        if (String.fromCodePoint(id.charCodeAt(0))+(Number(id[1]) + 1) == element.id) arr3.push(String.fromCodePoint(id.charCodeAt(0))+(Number(id[1]) + 1));
        //back
        if (String.fromCodePoint(id.charCodeAt(0))+(Number(id[1]) - 1) == element.id) arr4.push(String.fromCodePoint(id.charCodeAt(0))+(Number(id[1]) - 1));
        //frontLeftCorner 
        if (String.fromCodePoint(id.charCodeAt(0) - 1)+(Number(id[1]) + 1)== element.id) arr5.push(String.fromCodePoint(id.charCodeAt(0) - 1)+(Number(id[1]) + 1));
        //front rightCorner 
        if (String.fromCodePoint(id.charCodeAt(0) + 1)+(Number(id[1]) + 1)== element.id)  arr6.push(String.fromCodePoint(id.charCodeAt(0) + 1)+(Number(id[1]) + 1));
        //backLeftCorner 
        if (String.fromCodePoint(id.charCodeAt(0) - 1)+(Number(id[1]) - 1) == element.id)  arr7.push(String.fromCodePoint(id.charCodeAt(0) - 1)+(Number(id[1]) - 1));
        //back right Corner 
        if (String.fromCodePoint(id.charCodeAt(0) + 1)+(Number(id[1]) - 1) == element.id) arr8.push(String.fromCodePoint(id.charCodeAt(0) + 1)+(Number(id[1]) - 1));
    })
}

// function to restrict king moves
const restrictKingMoves = (arr, color) => {
    arr.forEach((ele) => {
        if (document.querySelector(`#${ele}`).childNodes.length !== 0) {
            if (document.querySelector(`#${ele} img`).classList.value.includes(color)) arr.pop();
        }
    })
}

//function for black king move
const whiteKingMovement = (id) => {
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

    const left = [];
    const right = [];
    const front = [];
    const back = [];
    const frontLeftCorner = [];
    const frontRightCorner = [];
    const backLeftCorner = [];
    const backRightCorner = [];

    positionForKing(id, left, right, front, back, frontLeftCorner, frontRightCorner, backLeftCorner, backRightCorner);
    const Arr = [left, right, front, back, frontLeftCorner, frontRightCorner, backLeftCorner, backRightCorner]

    Arr.forEach(arr => {
        restrictKingMoves(arr, "white")
    });

    const highlightSqId = left.concat(right, front, back, frontLeftCorner, frontRightCorner, backLeftCorner, backRightCorner);

    const capturePieces = [];

    // adding pieces that rook can capture
    highlightSqId.forEach(element => {
        if (captureOpponentFunction(element, "black")) {
            capturePieces.push(element);
        }
    });
    let rooks = document.querySelectorAll(".white-rook");
    let king = document.querySelector(".white-king");
    if(king.dataset.ischeck=="false" && king.dataset.ismoved=="false"){
        for (const rook of rooks) {
            if(rook.dataset.ismoved=="false"){
                let {isCastlingPossible, extraMove}  = checkIfCastlingPossible(rook);
                if(isCastlingPossible) highlightSqId.push(extraMove);
            };
        }
    }


    highlightSqId.forEach((SqID) => {
        showCircle(SqID);
    });
    return highlightSqId;
}

const blackKingMovement = (id) => {
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

    const left = [];
    const right = [];
    const front = [];
    const back = [];
    const frontLeftCorner = [];
    const frontRightCorner = [];
    const backLeftCorner = [];
    const backRightCorner = [];

    positionForKing(id, left, right, front, back, frontLeftCorner, frontRightCorner, backLeftCorner, backRightCorner);
    const Arr = [left, right, front, back, frontLeftCorner, frontRightCorner, backLeftCorner, backRightCorner]

    Arr.forEach(arr => {
        restrictKingMoves(arr, "black")
    });

    const highlightSqId = left.concat(right, front, back, frontLeftCorner, frontRightCorner, backLeftCorner, backRightCorner);

    const capturePieces = [];

    // adding pieces that rook can capture
    highlightSqId.forEach(element => {
        if (captureOpponentFunction(element, "white")) {
            capturePieces.push(element);
        }
    });
    let rooks = document.querySelectorAll(".black-rook");
    let king = document.querySelector(".black-king");
    if(king.dataset.ischeck=="false" && king.dataset.ismoved=="false"){
        for (const rook of rooks) {
            if(rook.dataset.ismoved=="false"){
                let {isCastlingPossible, extraMove}  = checkIfCastlingPossible(rook);
                if(isCastlingPossible) highlightSqId.push(extraMove)
            };
        }
    }


    highlightSqId.forEach((SqID) => {
        showCircle(SqID);
    });
    return highlightSqId;
}

