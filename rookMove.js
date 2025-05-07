// function for showing movement of Rook
const positionForRook = (id, arr1, arr2, arr3, arr4) => {
 BOX.forEach((element)=> {
    for(let i =1; i < 8; i++){
        if(String.fromCodePoint(id.charCodeAt(0))+(Number(id[1]) + i)== element.id){
            arr1.push(String.fromCodePoint(id.charCodeAt(0))+(Number(id[1]) + i))

        }if(String.fromCodePoint(id.charCodeAt(0))+(Number(id[1]) - i)== element.id){
            arr2.push(String.fromCodePoint(id.charCodeAt(0))+(Number(id[1]) - i))

        }if(String.fromCodePoint(id.charCodeAt(0) + i) +Number(id[1])== element.id){
            arr3.push(String.fromCodePoint(id.charCodeAt(0) + i)+Number(id[1]))

        }if(String.fromCodePoint(id.charCodeAt(0) - i)+Number(id[1])== element.id){
            arr4.push(String.fromCodePoint(id.charCodeAt(0) - i)+Number(id[1]))
        }   
    }
 })
}

//function for restrict rook forward and left moves
const restrictRookForwardAndLeftMove = (arr,color)=> {
    arr.reverse();
    arr.forEach((ele,i)=> {
        if(document.querySelector(`#${arr[i]}`).childNodes.length !== 0){
            if(document.querySelector(`#${ele} img`).classList.value.includes(color)) arr.splice(i, arr.length-i);
            arr.splice(i+1, arr.length-(i+1));
        }
    })
}

//function for restrict rook backward and right moves
const restrictRookBackwardAndRightMove = (arr,color)=> {
    arr.forEach((ele,i)=> {
        if(document.querySelector(`#${arr[i]}`).childNodes.length !== 0){
            if(document.querySelector(`#${ele} img`).classList.value.includes(color)) arr.splice(i, arr.length-i);
            arr.splice(i+1, arr.length-(i+1));
        }
    })
}

// function for blackrook movement in chessboard
const blackRookMovement = (id) => {
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
    const forwardPos = [];
    const backwardPos = [];
    const rightPos = [];
    const leftPos = []; 
 
    positionForRook(id, forwardPos, backwardPos, rightPos, leftPos );

    restrictRookForwardAndLeftMove(forwardPos, "black");
    restrictRookBackwardAndRightMove(backwardPos, "black");
    restrictRookBackwardAndRightMove(rightPos, "black")
    restrictRookForwardAndLeftMove(leftPos, "black");
 
    const highlightSqId = forwardPos.concat(backwardPos, rightPos, leftPos);
    const capturePieces = [];
  
    // adding pieces that rook can capture
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

// function for white rook movement in chessboard
const whiteRookMovement = (id) => {
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
    const forwardPos = [];
    const backwardPos = [];
    const rightPos = [];
    const leftPos = []; 
 
    positionForRook(id, forwardPos, backwardPos, rightPos, leftPos );
    
    restrictRookForwardAndLeftMove(forwardPos, "white");
    restrictRookBackwardAndRightMove(backwardPos, "white");
    restrictRookBackwardAndRightMove(rightPos, "white")
    restrictRookForwardAndLeftMove(leftPos, "white");
    
    const highlightSqId = forwardPos.concat(backwardPos, rightPos, leftPos);
    const capturePieces = [];
  
    // adding pieces that pawn can capture
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
