
//function for white bishop movement in chessboard
const whiteQueenMovement = (id) => {
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

    //adding positions same as bishop
    const forwardLeftPos = [];
    const forwardRightPos = [];
    const backwardLeftPos = []; 
    const backwardRightPos = [];

    positionForBishop(id, forwardLeftPos, forwardRightPos, backwardLeftPos, backwardRightPos);

    restrictForwardBishopMove(forwardLeftPos,"white");
    restrictForwardBishopMove(forwardRightPos,"white");
    restrictBackwardBishopMove(backwardLeftPos, "white");
    restrictBackwardBishopMove(backwardRightPos, "white");

    //adding positions same as rook
    const forwardPos = [];const backwardPos = [];const rightPos = [];const leftPos = [];
    
    positionForRook(id, forwardPos, backwardPos, rightPos, leftPos );

    restrictRookForwardAndLeftMove(forwardPos, "white");
    restrictRookBackwardAndRightMove(backwardPos, "white");
    restrictRookBackwardAndRightMove(rightPos, "white")
    restrictRookForwardAndLeftMove(leftPos, "white");

    const highlightSqId = forwardLeftPos.concat(forwardRightPos, backwardLeftPos, backwardRightPos, forwardPos, backwardPos, rightPos, leftPos);
    const capturePieces = [];
  
    //adding pieces that Queen can capture
    highlightSqId.forEach(element => {
      if (captureOpponentFunction(element, "black")) {
          capturePieces.push(element);
      }
    });
    
    highlightSqId.forEach((SqID) => {
      showCircle(SqID);
    });
    return highlightSqId
}

//function for white bishop movement in chessboard
const blackQueenMovement = (id) => {
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

    //adding positions same as bishop
    const forwardLeftPos = [];
    const forwardRightPos = [];
    const backwardLeftPos = []; 
    const backwardRightPos = [];
  
    positionForBishop(id, forwardLeftPos, forwardRightPos, backwardLeftPos, backwardRightPos);

    restrictForwardBishopMove(forwardLeftPos,"black");
    restrictForwardBishopMove(forwardRightPos,"black");
    restrictBackwardBishopMove(backwardLeftPos,"black");
    restrictBackwardBishopMove(backwardRightPos,"black");

    //adding positions same as rook
    const forwardPos = [];
    const backwardPos = [];
    const rightPos = [];
    const leftPos = [];

    positionForRook(id, forwardPos, backwardPos, rightPos, leftPos );

    restrictRookForwardAndLeftMove(forwardPos, "black");
    restrictRookBackwardAndRightMove(backwardPos, "black");
    restrictRookBackwardAndRightMove(rightPos, "black")
    restrictRookForwardAndLeftMove(leftPos, "black");
  
    const highlightSqId = forwardLeftPos.concat(forwardRightPos, backwardLeftPos, backwardRightPos, forwardPos, backwardPos, rightPos, leftPos);
    const capturePieces = [];
  
    //adding pieces that Queen can capture
    highlightSqId.forEach(element => {
      if (captureOpponentFunction(element, "white")) {
          capturePieces.push(element);
      }
    });
    highlightSqId.forEach((SqID) => {
      showCircle(SqID);
    });
    return highlightSqId
}