// function for possible pos for knight 
const positionForKnight = (id, arr1, arr2, arr3, arr4 , color) => {
    BOX.forEach((element)=> {
        if(document.querySelector(`#${element.id}`).childNodes.length === 0 ||  !document.querySelector(`#${element.id} img`).className.includes(color)){
            // forward possible moves
            if(String.fromCodePoint(id.charCodeAt(0) + 1)+(Number(id[1]) + 2)== element.id ) arr1.push(String.fromCodePoint(id.charCodeAt(0) + 1)+(Number(id[1]) + 2));
            if(String.fromCodePoint(id.charCodeAt(0) - 1)+(Number(id[1]) + 2)== element.id)  arr1.push(String.fromCodePoint(id.charCodeAt(0) - 1) +(Number(id[1]) + 2));

           //backward possible moves
            if(String.fromCodePoint(id.charCodeAt(0) + 1)+(Number(id[1]) - 2)== element.id) arr2.push(String.fromCodePoint(id.charCodeAt(0) + 1)+(Number(id[1]) - 2));
            if(String.fromCodePoint(id.charCodeAt(0) - 1)+(Number(id[1]) - 2)== element.id) arr2.push(String.fromCodePoint(id.charCodeAt(0) - 1)+(Number(id[1]) - 2));

        //left possible moves
            if(String.fromCodePoint(id.charCodeAt(0) - 2)+(Number(id[1]) + 1)== element.id) arr3.push(String.fromCodePoint(id.charCodeAt(0) - 2)+(Number(id[1]) + 1));
            if(String.fromCodePoint(id.charCodeAt(0) - 2)+(Number(id[1]) - 1)== element.id) arr3.push(String.fromCodePoint(id.charCodeAt(0) - 2)+(Number(id[1]) - 1));

        //right possible moves
            if(String.fromCodePoint(id.charCodeAt(0) + 2)+(Number(id[1]) + 1)== element.id) arr4.push(String.fromCodePoint(id.charCodeAt(0) + 2)+(Number(id[1]) + 1));
            if(String.fromCodePoint(id.charCodeAt(0) + 2)+(Number(id[1]) - 1)== element.id) arr4.push(String.fromCodePoint(id.charCodeAt(0) + 2)+(Number(id[1]) - 1));
            
        }
   
    })
}

// function for black knight movement in chess board
const blackKnightMovement = (id)=> {
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

    const forwardL = [];
    const backwardL = [];
    const leftL = [];
    const rightL = [];

    positionForKnight(id, forwardL, backwardL, leftL, rightL, "black");

    const highlightSqId = forwardL.concat(backwardL, leftL, rightL) ;
    
    const capturePieces = [];
  
    //adding pieces that knight can capture
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

//function for white knight movement in chess board
const whiteKnightMovement = (id) => {
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
    const forwardPos = [];
    const backwardPos = [];
    const leftPos = [];
    const rightPos = [];

    positionForKnight(id, forwardPos, backwardPos, leftPos, rightPos, "white");

    const highlightSqId = forwardPos.concat(backwardPos, leftPos, rightPos) ;

    const capturePieces = [];
  
    //adding pieces that knight can capture
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