//======================================
//  function for piece movement
// =======================================
const pieceMovement = (pieceInitPos, pieceFinalPos) => {
    removingCheck();
    clearCircle();
    const prevPos = document.getElementById(pieceInitPos);
    const currPos = document.getElementById(pieceFinalPos);

    showingCapturedPieces(currPos);
    let pieceChooseForMove = document.querySelector(`#${pieceInitPos} img`);
    if (pieceChooseForMove.className.includes("king")) {
        let extra1 = String.fromCodePoint(pieceInitPos.charCodeAt(0) + 2) + pieceInitPos[1];
        let extra2 = String.fromCodePoint(pieceInitPos.charCodeAt(0) - 2) + pieceInitPos[1];
        if (extra1 == pieceFinalPos || extra2 == pieceFinalPos) castlingForKing(pieceFinalPos);
        pieceChooseForMove.dataset.ismoved = "true";
    }
    if (pieceChooseForMove.className.includes("rook")) {
        pieceChooseForMove.dataset.ismoved = "true";
    }
    currPos.innerHTML = prevPos.innerHTML;
    prevPos.innerHTML = "";

    removeHighlight(pieceInitPos);
    removeOpponent();

    // for pawn promotion
    if (pieceChooseForMove.classList.value.includes("pawn") && (pieceFinalPos[1] == "8" || pieceFinalPos[1] == "1")) {
        console.log("promote");
        if(pieceChooseForMove.className == "white-pawn" && pieceFinalPos[1] == "8") {
            whitePawnPromo = true;
            promoBox="whitepawn-promo"; 
        }
        if(pieceChooseForMove.className == "black-pawn" && pieceFinalPos[1] == "1"){
            blackPawnPromo = true;
            promoBox="blackpawn-promo";
        }  
        promotedPawnId=pieceFinalPos ;
        pawnPromotion(promoBox)
    }else{
        findingKings();
        check_on_white(white_king_pos);
        check_on_black(black_king_pos);
        changeTurn();
        checkForWinner();
    };
};