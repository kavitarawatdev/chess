// ==============================================
//    6.now getting the selected move of clicked piece
// ============================================
const gettingComputerPieceFinalPos = (moves) => {
    let pieceFinalPos;
    let i = Math.floor(Math.random() * moves.length);
    moves.length == 1 ? pieceFinalPos = moves[0] : pieceFinalPos = moves[i];
    let pieceInitPos = pieceMovementState;
    setTimeout(() => {
        pieceMovement(pieceInitPos, pieceFinalPos)
    }, 1000);
}

// ==============================================
//    5.now checking the possible moves and opponents of clicked piece
// ============================================
const checkOpponentsAndMoves = () => {
    console.log("step VIII")
    let movable = [];
    let captured=[];
    let span = document.querySelectorAll(".box span")
    let opponent = document.querySelectorAll(".box .opponent")
    console.log(span);
    for(let circle of span){
        console.log(circle.parentNode);
        console.log(circle);
        console.log(circle.parentNode.id);
        movable.push(circle.parentNode.id);
    };
    for(let enemy of opponent){
        console.log(enemy.parentNode);
        console.log(enemy);
        console.log(enemy.parentNode.id);
        captured.push(enemy.parentNode.id);
    };
    console.log(movable, captured);
    console.log(movable, captured);
    captured.length === 0 && movable.length!=0? gettingComputerPieceFinalPos(movable) : gettingComputerPieceFinalPos(captured);
    if(movable.length===0 && captured.length===0) handleComputerPieceClick(pieceMovementState);
}

// ==============================================
//    4.now clicking on selected piece
// ============================================
const handleComputerPieceClick = (ids) => {
    let selected_piece = document.querySelector(`#${ids} img`);
    console.log("step VI")
    if (selected_piece.classList.value.includes("black")) {
        switch (selected_piece.className) {
            case "black-pawn":
                BlackPawnMovement(ids);
                break;
            case "black-bishop":
                blackBishopMovement(ids);
                break;
            case "black-rook":
                blackRookMovement(ids);
                break;
            case "black-queen":
                blackQueenMovement(ids);
                break;
            case "black-knight":
                blackKnightMovement(ids);
                break;
            case "black-king":
                blackKingMovement(ids);
                break;
            default:
                break;
        }
    }
    if (selected_piece.classList.value.includes("white")) {
        switch (selected_piece.className) {
            case "white-pawn":
                WhitePawnMovement(ids);
                break;
            case "white-bishop":
                whiteBishopMovement(ids);
                break;
            case "white-rook":
                whiteRookMovement(ids);
                break;
            case "white-queen":
                whiteQueenMovement(ids);
                break;
            case "white-knight":
                whiteKnightMovement(ids);
                break;
            case "white-king":
                whiteKingMovement(ids);
                break;
            default:
                break;
        }
    }
    console.log("step VII")
    checkOpponentsAndMoves();
}
// =============================================================


// ==============================================
//    3.. checking that piece are movable or not
// ============================================
const checkPossibleMoves = (ids) => {
    let possibleMoves;
    element = document.querySelector(`#${ids} img`);
    console.log("step IV")
    if (element.classList.value.includes("black")) {
        switch (element.className) {
            case "black-pawn":
                possibleMoves = BlackPawnMovement(ids);
                break;
            case "black-bishop":
                possibleMoves = blackBishopMovement(ids);
                break;
            case "black-rook":
                possibleMoves = blackRookMovement(ids);
                break;
            case "black-queen":
                possibleMoves = blackQueenMovement(ids);
                break;
            case "black-knight":
                possibleMoves = blackKnightMovement(ids);
                break;
            case "black-king":
                possibleMoves = blackKingMovement(ids);
                break;
            default:
                break;
        }
    }
    if (element.classList.value.includes("white")) {
        switch (element.className) {
            case "white-pawn":
                possibleMoves = WhitePawnMovement(ids);
                break;
            case "white-bishop":
                possibleMoves = whiteBishopMovement(ids);
                break;
            case "white-rook":
                possibleMoves = whiteRookMovement(ids);
                break;
            case "white-queen":
                possibleMoves = whiteQueenMovement(ids);
                break;
            case "white-knight":
                possibleMoves = whiteKnightMovement(ids);
                break;
            case "white-king":
                possibleMoves = whiteKingMovement(ids);
                break;
            default:
                break;
        }
    }

    return possibleMoves;
}

// ==============================================
//    2. selecting the piceces that are movable piece
// ============================================
const movableComputerPiece = (computerBoxes) => {
    let arr = computerBoxes;
    console.log("step III")
    computerBoxes.forEach((element, i) => {
        let moves = checkPossibleMoves(element);
        if (moves.length === 0) {
            arr = arr.filter(currEle => currEle != element);
        }
    })
    return arr;
}
// ==============================================
//    1. selecting random piece
// ============================================
const handleComputerPieceSelect = (computerBoxes) => {
    console.log("step II")
    let newArr = movableComputerPiece(computerBoxes);
    let randomIndex = Math.floor(Math.random() * newArr.length);
    let selected_piece = newArr[randomIndex];
    let ids = selected_piece;
    pieceMovementState = ids;
    console.log("step V")
    console.log("selected piece", pieceMovementState, ids);
    handleComputerPieceClick(ids)
}

const handleComputerPlayer = () => {
    let computerBoxes = []; // Array to store boxes containing the computer's element
    let computerBoxes2 = [];
    let Arr = Array.from(BOX);
    for (let box of Arr) {
        if (!box.classList.value.includes("check")) {
            if (box.childNodes.length == 3 && box.childNodes[1].className.includes(computer) && !box.childNodes[1].classList.value.includes("opponent")) {
                computerBoxes.push(box.id);
            }
        } if (box.classList.value.includes("check")) {
            computerBoxes2.push(box.id)
            computerBoxes = computerBoxes2;
            break;
        }
    };
    console.log("step ", computerBoxes);
    console.log("step I")
    handleComputerPieceSelect(computerBoxes);

};


