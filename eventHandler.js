BOX.forEach((box) => {
    box.addEventListener("click", (event) => {
        // checkForWinner();
        if (event.target.localName == "img" && event.target.className.includes(turn) && !(event.target.classList.value.includes("opponent"))) {
            correctTurn = event.target.className.includes(turn);
            const clickedPieceId = event.target.parentNode.id;
            pieceMovementState = clickedPieceId;
            if (correctTurn) {
                switch (event.target.className) {
                    case "black-pawn":
                        BlackPawnMovement(clickedPieceId);
                        break;
                    case "white-pawn":
                        WhitePawnMovement(clickedPieceId);
                        break;
                    case "black-bishop":
                        blackBishopMovement(clickedPieceId);
                        break;
                    case "white-bishop":
                        whiteBishopMovement(clickedPieceId);
                        break;              
                    case "black-rook":
                        blackRookMovement(clickedPieceId);
                        break;
                    case "white-rook":
                        whiteRookMovement(clickedPieceId);
                        break;               
                    case "black-queen":
                        blackQueenMovement(clickedPieceId);
                        break;
                    case "white-queen":
                        whiteQueenMovement(clickedPieceId);
                        break;              
                    case "black-knight":
                        blackKnightMovement(clickedPieceId);
                        break;
                    case "white-knight":
                        whiteKnightMovement(clickedPieceId);
                        break;             
                    case "black-king":
                        blackKingMovement(clickedPieceId);
                        break;
                    case "white-king":
                        whiteKingMovement(clickedPieceId);
                        break;
                // =============================================
                    default:
                        break;
                } 
            };
        }
        else if (event.target.localName == "span" || event.target.classList.value.includes("opponent") || event.target.childNodes.length === 1) {
            console.log(box.childNodes);
            let pieceFinalPos;
            if (event.target.localName == "span" || event.target.classList.value.includes("opponent")) {
                pieceFinalPos = event.target.parentNode.id;
            } else if (event.target.childNodes.length === 1) {
                pieceFinalPos = event.target.id;
            }
            pieceInitPos = pieceMovementState;
            pieceMovement(pieceInitPos, pieceFinalPos);
        }
    });

})


// document.addEventListener('DOMContentLoaded', () => {
//     const roundSpans = document.querySelectorAll('span.round');
//     console.log(roundSpans.length); // Now it should be the correct length
//     // Your code that uses roundSpans here
// });