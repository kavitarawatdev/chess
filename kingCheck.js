// =======================================
// handle check functionality

let black_king_pos;
let white_king_pos;

const findingKings = () => {
   let kings = document.querySelectorAll('.box [class*="king"]');
    kings.forEach((piece) => {
        if (piece.classList.value.includes("white-king")) {
            white_king_pos = piece.parentNode.id;
        };
        if (piece.classList.value.includes("black-king")) {
            black_king_pos = piece.parentNode.id;
        };
    });
}
// function for giving class check if king is on check
const showingCheck = (pos) => {
    console.log("check from showing check");
    let kingPos = document.querySelector(`#${pos}`);
    let king = document.querySelector(`#${pos} img`)
    kingPos.classList.add("check");
    king.dataset.ischeck = "true";
}

// function for removing class check 
const removingCheck = () => {
    BOX.forEach(element => {
        if (element.classList.value.includes("check")) {
            element.classList.remove("check");
            let king = document.querySelector(`#${element.id} img`);
            king.dataset.ischeck = "false";
        }
    });
}

// condition for check by rook queen and  bishop
const conditionForCheck = (arr, color, piece1, piece2) => {
    for(let i=0;i<arr.length;i++){
        if (document.querySelector(`#${arr[i]}`).childNodes.length !== 0 && document.querySelector(`#${arr[i]}`).children[0].localName == "img") {
            if (document.querySelector(`#${arr[i]} img`).classList.value.includes(piece1) || document.querySelector(`#${arr[i]} img`).classList.value.includes(piece2)) {
                if (color == "white") {
                    showingCheck(white_king_pos);
                };
                if (color == "black") {
                    showingCheck(black_king_pos);
                }
            }else{
                break
            }
        }
    }  

}

// condition for check by pawn
const conditionForCheckByPawn = (arr, color, piece1) => {
    arr.forEach(element => {
        if (document.querySelector(`#${element}`).childNodes.length !== 0 && document.querySelector(`#${element}`).children[0].localName == "img") {
            if (document.querySelector(`#${element} img`).classList.value.includes(piece1)) {
                if (color == "white") {
                    showingCheck(white_king_pos);
                };
                if (color == "black") {
                    showingCheck(black_king_pos);
                }
            }
        }
    });
}

// function for showing check on white king
const check_on_white = (posOfKing) => {
    const forwardLeftPos = [];
    const forwardRightPos = [];
    const backwardLeftPos = [];
    const backwardRightPos = [];
    const forwardPos = [];
    const backwardPos = [];
    const rightPos = [];
    const leftPos = [];
    const forwardL = [];
    const backwardL = [];
    const leftL = [];
    const rightL = [];
    const diagonalPos = [];
    positionForBishop(posOfKing, forwardLeftPos, forwardRightPos, backwardLeftPos, backwardRightPos);
    positionForRook(posOfKing, forwardPos, backwardPos, rightPos, leftPos);
    positionForKnight(posOfKing, forwardL, backwardL, leftL, rightL);
    diagonalposForPawn(posOfKing, diagonalPos);
    // condition for checked by queen or bishop
    conditionForCheck(forwardLeftPos.reverse(), "white", "black-bishop", "black-queen");
    conditionForCheck(forwardRightPos.reverse(), "white", "black-bishop", "black-queen");
    conditionForCheck(backwardLeftPos, "white", "black-bishop", "black-queen");
    conditionForCheck(backwardRightPos, "white", "black-bishop", "black-queen");
    // condition for checked by queen or rook
    conditionForCheck(forwardPos.reverse(), "white", "black-rook", "black-queen");
    conditionForCheck(backwardPos, "white", "black-rook", "black-queen");
    conditionForCheck(rightPos, "white", "black-rook", "black-queen");
    conditionForCheck(leftPos.reverse(), "white", "black-rook", "black-queen");
    //// condition for checked by Knight
    conditionForCheck(leftL, "white", "black-knight");
    conditionForCheck(rightL, "white", "black-knight");
    conditionForCheck(forwardL, "white", "black-knight");
    conditionForCheck(backwardL, "white", "black-knight");
    // condition for checked by pawn
    conditionForCheckByPawn(diagonalPos, "white", "black-pawn");
}

// function for showing check on white king
const check_on_black = (posOfKing) => {
    const forwardLeftPos = [];
    const forwardRightPos = [];
    const backwardLeftPos = [];
    const backwardRightPos = [];
    const forwardPos = [];
    const backwardPos = [];
    const rightPos = [];
    const leftPos = [];
    const forwardL = [];
    const backwardL = [];
    const leftL = [];
    const rightL = [];
    const diagonalPos = [];

    positionForBishop(posOfKing, forwardLeftPos, forwardRightPos, backwardLeftPos, backwardRightPos);
    positionForRook(posOfKing, forwardPos, backwardPos, rightPos, leftPos);
    positionForKnight(posOfKing, forwardL, backwardL, leftL, rightL);
    diagonalposForPawn(posOfKing, diagonalPos);
    // condition for checked by queen or bishop
    conditionForCheck(forwardLeftPos.reverse(), "black", "white-bishop", "white-queen");
    conditionForCheck(forwardRightPos.reverse(), "black", "white-bishop", "white-queen");
    conditionForCheck(backwardLeftPos, "black", "white-bishop", "white-queen");
    conditionForCheck(backwardRightPos, "black", "white-bishop", "white-queen");
    // condition for checked by queen or rook
    conditionForCheck(forwardPos.reverse(), "black", "white-rook", "white-queen");
    conditionForCheck(backwardPos, "black", "white-rook", "white-queen");
    conditionForCheck(rightPos, "black", "white-rook", "white-queen");
    conditionForCheck(leftPos.reverse(), "black", "white-rook", "white-queen");
    //// condition for checked by Knight
    conditionForCheck(leftL, "black", "white-knight");
    conditionForCheck(rightL, "black", "white-knight");
    conditionForCheck(forwardL, "black", "white-knight");
    conditionForCheck(backwardL, "black", "white-knight");
    // condition for checked by pawn
    conditionForCheckByPawn(diagonalPos, "black", "white-pawn");
}