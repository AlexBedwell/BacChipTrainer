window.onload = function() {
};

let baseBlueValue, baseRedValue, baseGreenValue, baseBlackValue, totalChipValue, pandaBlue, pandaRed, pandaGreen,pandaBlack, pandaTotal;
let tieBlue, tieRed, tieGreen, tieBlack, tieTotal, dragBlue, dragRed, dragGreen, dragBlack, dragTotal;



function generateChips(){
    let tempChip = Math.floor(Math.random() * 10);
    return tempChip;
}

$("#gen-chip").click(function(){
    $('input').val('');

    //Generate Chips
    let tempBlue = generateChips();
    console.log("There are " +tempBlue+ " Blue chips")
    let tempRed = generateChips();
    console.log("There are " +tempRed+ " Red chips")
    let tempGreen = generateChips();
    console.log("There are " +tempGreen+ " Green chips")
    let tempBlack = generateChips();
    console.log("There are " +tempBlack+ " Black chips")

    //empty chips
    $("#dBLUE").empty();
    $("#dRED").empty();
    $("#dGREEN").empty();
    $("#dBLACK").empty();


    //display chips
    $("#dBLACK").prepend(tempBlack);
    $("#dGREEN").prepend(tempGreen);
    $("#dRED").prepend(tempRed);
    $("#dBLUE").prepend(tempBlue);

        //Calculate the chip values for each color and the total of all chips
     baseBlueValue = tempBlue * 1;
     baseRedValue = tempRed * 5;
     baseGreenValue = tempGreen * 25;
     baseBlackValue = tempBlack * 100;
     totalChipValue = baseBlueValue + baseRedValue + baseGreenValue + baseBlackValue;


    //generate panda value of all chip colors and total
     pandaBlue = baseBlueValue *25;
     pandaRed = baseRedValue *25;
     pandaGreen = baseGreenValue *25;
     pandaBlack = baseBlackValue *25;
     pandaTotal = totalChipValue * 25;   
    
    //generate tie of all chip colors and total
     tieBlue = baseBlueValue * 8;
     tieRed = baseRedValue * 8;
     tieGreen = baseGreenValue * 8;
     tieBlack = baseBlackValue * 8;
     tieTotal = totalChipValue * 8;

        //generate dragon of all chip colors and total
     dragBlue = baseBlueValue * 40;
     dragRed = baseRedValue * 40;
     dragGreen = baseGreenValue * 40;
     dragBlack = baseBlackValue * 40;
     dragTotal = totalChipValue * 40;

})

$("#blue-check").click(function(){
    console.log("base: "+baseBlueValue);
    console.log("panda: "+pandaBlue);
    console.log("tie: "+tieBlue);
    console.log("dragon: "+dragBlue);

    $("#blue-base-chk").empty();
    $("#blue-panda-chk").empty();
    $("#blue-tie-chk").empty();
    $("#blue-dragon-chck").empty();


    if( $("#blue-chip-base").val() == baseBlueValue){
        $("#blue-base-chk").css("color", "green");
        $("#blue-base-chk").append("CORRECT");
    }else{
        $("#blue-base-chk").append("FALSE");
    }


    if( $("#blue-chip-panda").val() == pandaBlue){
        $("#blue-panda-chk").append("CORRECT");
    }else{
        $("#blue-panda-chk").append("FALSE");
    }    
    
    if( $("#blue-chip-tie").val() == tieBlue){
        $("#blue-tie-chk").append("CORRECT");
    }else{
        $("#blue-tie-chk").append("FALSE");
    }    
    
    if( $("#blue-chip-dragon").val() == dragBlue){
        $("#blue-dragon-chck").append("CORRECT");
    }else{
        $("#blue-dragon-chck").append("FALSE");
    }
})

$("#red-check").click(function(){
    console.log("base: "+baseRedValue);
    console.log("panda: "+pandaRed);
    console.log("tie: "+tieRed);
    console.log("dragon: "+dragRed);

    $("#red-base-chk").empty();
    $("#red-panda-chk").empty();
    $("#red-tie-chk").empty();
    $("#red-dragon-chck").empty();


    if( $("#red-chip-base").val() == baseRedValue){
        $("#red-base-chk").append("CORRECT")
    }else{
        $("#red-base-chk").append("FALSE")
    }


    if( $("#red-chip-panda").val() == pandaRed){
        $("#red-panda-chk").append("CORRECT")
    }else{
        $("#red-panda-chk").append("FALSE")
    }    
    
    if( $("#red-chip-tie").val() == tieRed){
        $("#red-tie-chk").append("CORRECT")
    }else{
        $("#red-tie-chk").append("FALSE")
    }    
    
    if( $("#red-chip-dragon").val() == dragRed){
        $("#red-dragon-chck").append("CORRECT")
    }else{
        $("#red-dragon-chck").append("FALSE")
    }
})


$("#green-check").click(function(){

    $("#green-base-chk").empty();
    $("#green-panda-chk").empty();
    $("#green-tie-chk").empty();
    $("#green-dragon-chck").empty();


    if( $("#green-chip-base").val() == baseGreenValue){
        $("#green-base-chk").append("CORRECT")
    }else{
        $("#green-base-chk").append("FALSE")
    }


    if( $("#green-chip-panda").val() == pandaGreen){
        $("#green-panda-chk").append("CORRECT")
    }else{
        $("#green-panda-chk").append("FALSE")
    }    
    
    if( $("#green-chip-tie").val() == tieGreen){
        $("#green-tie-chk").append("CORRECT")
    }else{
        $("#green-tie-chk").append("FALSE")
    }    
    
    if( $("#green-chip-dragon").val() == dragGreen){
        $("#green-dragon-chck").append("CORRECT")
    }else{
        $("#green-dragon-chck").append("FALSE")
    }
})


$("#black-check").click(function(){

    $("#black-base-chk").empty();
    $("#black-panda-chk").empty();
    $("#black-tie-chk").empty();
    $("#black-dragon-chck").empty();


    if( $("#black-chip-base").val() == baseBlackValue){
        $("#black-base-chk").append("CORRECT")
    }else{
        $("#black-base-chk").append("FALSE")
    }


    if( $("#black-chip-panda").val() == pandaBlack){
        $("#black-panda-chk").append("CORRECT")
    }else{
        $("#black-panda-chk").append("FALSE")
    }    
    
    if( $("#black-chip-tie").val() == tieBlack){
        $("#black-tie-chk").append("CORRECT")
    }else{
        $("#black-tie-chk").append("FALSE")
    }    
    
    if( $("#black-chip-dragon").val() == dragBlack){
        $("#black-dragon-chck").append("CORRECT")
    }else{
        $("#black-dragon-chck").append("FALSE")
    }
})