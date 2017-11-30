/*
    Author: Brycen. H. Tate
    Created: 11/29/17
    Primary Purpose: Camera Class for Environmental Purposes
    Dependancies: Vector3 Class, Main.JS
*/

//Initialize Class
var camera = function(fov,aspectRatio,nearPlane,farPlane) {
    //Implement Properties
    if (arguments.length === 0) {
        this.fov = 70;
        this.aspectRatio = width/height;
        this.nearPlane = 0.1;
        this.farPlane = 100;
    }else {
        this.fov = fov || 70;
        this.aspectRatio = aspectRatio || width/height;
        this.nearPlane = nearPlane || 0.1;
        this.farPlane = farPlane || 100;
    }
    this.position = new Vector3();
    this.rotation = new Vector3();

    //RenderPass Cycle
    this.renderPass.push(function() {
        perspective(this.fov, this.aspectRatio, this.nearPlane, this.farPlane);
        /*
            TODO:
                Add rotation to camera by rotating all objects around cameras position by cameras rotation.
                Add movement of objects relative to the cameras position. 
        */
    });
}
