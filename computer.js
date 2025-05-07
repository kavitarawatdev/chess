const checkPossibleMoves = (element, ids) => {
    let possibleMoves;
    if (element.childNodes[1].classList.value.includes("black")) {
        switch (element.childNodes[1].className) {
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
        }
    }
    if (element.childNodes[1].classList.value.includes("white")) {
        switch (element.childNodes[1].className) {
            case "white-pawn":
                possibleMoves=WhitePawnMovement(ids);
                break;
            case "white-bishop":
                possibleMoves= whiteBishopMovement(ids);
                break;        
            case "white-rook":
                possibleMoves= whiteRookMovement(ids);
                break;  
            case "white-queen":               
                possibleMoves=  whiteQueenMovement(ids);
                break;  
            case "white-knight":
               possibleMoves= whiteKnightMovement(ids);
               break; 
            case "white-king":
               possibleMoves= whiteKingMovement(ids);
               break;  
            default:
                break;        
            }
    }
    
    return possibleMoves;
}
// ============================================
const movableComputerPiece = (computerBoxes) => {
    let arr = computerBoxes;
    computerBoxes.forEach((element, i) => {
        let moves = checkPossibleMoves(element, element.id);
        if (moves.length === 0) {
            arr = arr.filter(currEle => currEle.id != element.id);
        }
    })
    console.log("step 4",arr);
    return arr;
}
// ==============================================
const handleComputerPieceSelect = (computerBoxes) => {
        console.log("step 3");
        let newArr = movableComputerPiece(computerBoxes);
        let randomIndex = Math.floor(Math.random() * newArr.length);
        let selected_piece = newArr[randomIndex];
        let  ids = selected_piece.id;
        pieceMovementState = ids;
        console.log("piece chooos by com id:", ids);
        console.log("piece coose by com", selected_piece.childNodes[1].className);
        console.log("step 5", selected_piece, ids);
        return {clickedPiece:selected_piece, clickedPieceId:ids};
}
// ====================================================================================
const handleComputerPieceClick=(selected_piece, ids)=>{
    console.log("stepp 7");
    if(selected_piece.childNodes[1].classList.value.includes("black")){
        switch (selected_piece.childNodes[1].className) {
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
    if(selected_piece.childNodes[1].classList.value.includes("white")){
        switch (selected_piece.childNodes[1].className) {
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

}
// =============================================================
const checkOpponentsAndMoves = () => {
    let movableBoxPos=[]; let capturePiecePos=[];
    let box=document.querySelectorAll(".box")
    let Arr = Array.from(box)
    for (let element of Arr) {
        const moveIndicatorSpan = element.querySelector('span.round'); // Correct Selector
        const opponent = element.querySelector('img.opponent'); // Correct Selector
        if (moveIndicatorSpan && !opponent) {
            movableBoxPos.push(element.id);
        }
        if (moveIndicatorSpan && opponent) {
            capturePiecePos.push(element.id);
        }
    }
    console.log("stepp 9", capturePiecePos, movableBoxPos);
    return capturePiecePos.length == 0 ? movableBoxPos : capturePiecePos;
}

const gettingComputerPieceFinalPos=(computerPieceMoves)=>{
    console.log("stepp 11");
    let i = Math.floor(Math.random() * computerPieceMoves.length);
    let finalpos = computerPieceMoves[i];
    console.log("stepp 12", finalpos);
    return finalpos;
}
const handleComputerPlayer = () => {
    let computerBoxes = []; // Array to store boxes containing the computer's element
    let computerBoxes2=[];
    let Arr=Array.from(BOX);
    for(let box of Arr){
        if (!box.classList.value.includes("check")){
            if(box.childNodes.length ==3  && box.childNodes[1].className.includes(computer) && !box.childNodes[1].classList.value.includes("opponent")) {
                computerBoxes.push(box);
            } 
        }if (box.classList.value.includes("check")) {
            computerBoxes2.push(box)
            console.log("checkkkkkkkkkkkkkkkkkkk", computerBoxes2);
            computerBoxes=computerBoxes2;
            break;
        }
    };
    console.log("step 2",computerBoxes);

    let {clickedPiece, clickedPieceId}=handleComputerPieceSelect(computerBoxes);
    console.log("step 6",clickedPiece, clickedPieceId);
    handleComputerPieceClick(clickedPiece,clickedPieceId)
    console.log("stepp 8");
    let computerPieceMoves = checkOpponentsAndMoves();
    console.log("stepp 10");
    let pieceFinalPos=gettingComputerPieceFinalPos(computerPieceMoves);
    console.log("stepp 13", pieceFinalPos);
    let pieceInitPos = pieceMovementState;
    console.log("step 14",pieceInitPos, pieceFinalPos);
   setTimeout(() => {
    pieceMovement(pieceInitPos, pieceFinalPos);
   }, 1000);

};


