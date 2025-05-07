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
    // switch (id[0]) {
    //     case "a":
    //         selected_box.style.marginRight = "40rem";
    //         break;
    
    //     case "b":
    //         selected_box.style.marginRight = "20rem";
    //         break;
    
    //     case "c":
    //         selected_box.style.marginRight = "0rem";
    //         break;
        
    //     case "d":
    //         selected_box.style.marginleft = "20rem";
    //         break;
    //     case "e":
    //         selected_box.style.marginleft = "40rem";
    //         break;

    //     case "f":
    //         selected_box.style.marginleft = "60rem";
    //         break;

    //     case "g":
    //         selected_box.style.marginleft = "80rem";
    //         break;
    
    //     case "h":
    //         selected_box.style.marginleft = "95rem";
    //         break;
    
    //     default:
    //         break;
    // }
}
const handlePawnPromo=(event)=>{
    const selected_box=document.querySelector(`#${promoBox}`);
    document.querySelector(`#${promotedPawnId} img`).src = event.target.src;
    document.querySelector(`#${promotedPawnId} img`).className = event.target.className;
    selected_box.classList.add("hidden");
    changeTurn()
    findingKings();
    check_on_white(white_king_pos);
    check_on_black(black_king_pos);
    checkForWinner();
}