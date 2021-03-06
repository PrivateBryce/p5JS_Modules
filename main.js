/*
    Author: Brycen. H. Tate
    Created: 11/29/17
    Primary Purpose: Primary javascript file required by most modules in this repo.
    NOTICE: Use this as your build off file, paste modules code in at bottom (After draw loop); your code should go above the draw loop.
*/

//Initialize primary loop and side render functions.
var renderPass = [];

function render() {
 //Your code goes here.
}

function draw() {
    //Run RenderPass Functions.
    for(var index in renderPass) {
        if(!renderPass.hasOwnProperty(index)) { continue; }
        renderPass[index]();
    }
    
    //Run user_Code afterwards.
    if(render) { render(); }
}
