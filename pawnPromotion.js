// ===================================================
//pawn Promo-handle
// ========================================
let promotedPawnId;
let promoBox;
// function for pawn promotion

const PAWN_PROMO_LIST=document.querySelectorAll('.pawn-promo-list li');

const pawnPromotion = (promoBox) => {
    const selected_box=document.querySelector(`#${promoBox}`);
    selected_box.classList.remove("hidden");
    switch (id[0]) {
        case "a":
            selected_box.style.right = "-5rem";
            break;
    
        case "b":
            selected_box.style.right = "-15rem";
            break;
    
        case "c":
            selected_box.style.right = "-25rem";
            break;
        
        case "d":
            selected_box.style.right = "-35rem";
            break;
        case "e":
            selected_box.style.left = "0rem";
            break;

        case "f":
            selected_box.style.left = "10rem";
            break;

        case "g":
            selected_box.style.left = "20rem";
            break;
    
        case "h":
            selected_box.style.left = "30rem";
            break;
    
        default:
            break;
    }
}
const handlePawnPromo=(event)=>{
    const selected_box=document.querySelector(`#${promoBox}`);
    document.querySelector(`#${promotedPawnId} img`).src = event.target.src;
    document.querySelector(`#${promotedPawnId} img`).className = event.target.className;
    selected_box.classList.add("hidden");
    selected_box.style.left="none";
    selected_box.style.right="none";
    changeTurn()
    findingKings();
    check_on_white(white_king_pos);
    check_on_black(black_king_pos);
    checkForWinner();
}