//position for pawn 
const posistionForPawn = (id, arr1) => {
    let selected_piece = document.querySelector(`#${id} img`);
    let first; let second;
    if (selected_piece.className == "white-pawn"){
        first = id[0] + (Number(id[1]) + 1);
        second = id[0] + (Number(id[1]) + 2);
        for(let element of BOX){
            if (first == element.id && document.querySelector(`#${element.id}`).childNodes.length === 0){
                arr1.push(first);
                if (id[1] == "2")arr1.push(second);
            } 
        }

    }else if(selected_piece.className == "black-pawn"){
        first=id[0] + (Number(id[1]) - 1);
        second=id[0] + (Number(id[1]) - 2)
        for(let element of BOX){
            if (first == element.id && document.querySelector(`#${element.id}`).childNodes.length === 0) {
            arr1.push(first);
            if (id[1] == "7")  arr1.push(second);
        }
        } 
    }

}


// adding diagonal position for capturing
const diagonalposForPawn = (id, arr1) => {
    let selected_piece = document.querySelector(`#${id} img`);
    let left;
    let right;
    switch (selected_piece.classList.value.includes("white")) {
        case true:
            left = String.fromCodePoint(id.charCodeAt(0) - 1) + (Number(id[1]) + 1);
            right = String.fromCodePoint(id.charCodeAt(0) + 1) + (Number(id[1]) + 1);
            for (let element of BOX) {
                if (left == element.id) arr1.push(left)
                if (right == element.id) arr1.push(right)
            }
            break;
            // ===========================================
        case false:
            left = String.fromCodePoint(id.charCodeAt(0) - 1) + (Number(id[1]) - 1);
            right = String.fromCodePoint(id.charCodeAt(0) + 1) + (Number(id[1]) - 1);
            for (let element of BOX) {
                if (left == element.id) arr1.push(left)
                if (right == element.id) arr1.push(right)
            }
            break;
             // ===========================================
        default:
            break;
    }
}

// function for white pawn movement in chess Board
const WhitePawnMovement = (id) => {

    if (id == BgHighligtState) {
        removeHighlight(BgHighligtState);
        BgHighligtState = null;
        clearCircle();
        removeOpponent();
        return;
    }
    removeOpponent();
    removeHighlight(BgHighligtState);
    highlightBg(id);
    BgHighligtState = id;
    const highlightSqId = [];
    const capturePieces = [];
    posistionForPawn(id, highlightSqId);
    diagonalposForPawn(id, capturePieces);


    capturePieces.forEach((element) => {
        if (captureOpponentFunction(element, "black")) {
            highlightSqId.push(element);
        }
    });


    clearCircle();
    highlightSqId.forEach((SqID) => {
        showCircle(SqID);
    });
     return highlightSqId;
};

// function for Black pawn movement in chess Board
const BlackPawnMovement = (id) => {
    //check if piece clicked once or not if clicked twice then remove bg effect
    if (id == BgHighligtState) {
        removeHighlight(BgHighligtState);
        BgHighligtState = null;
        clearCircle();
        removeOpponent();
        return;
    }

    removeOpponent();
    removeHighlight(BgHighligtState);
    highlightBg(id);
    BgHighligtState = id;

    const highlightSqId = [];
    const capturePieces = [];
    posistionForPawn(id, highlightSqId);
    diagonalposForPawn(id, capturePieces)

    //adding pieces that pawn can capture
    capturePieces.forEach((element) => {
        if (captureOpponentFunction(element, "white")) {
            highlightSqId.push(element);
        }
    });

    clearCircle();
    highlightSqId.forEach((SqID) => {
        showCircle(SqID);
    });
    return highlightSqId;
};