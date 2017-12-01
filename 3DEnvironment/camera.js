/*
    Author: Brycen. H. Tate
    Created: 11/29/17
    Primary Purpose: Camera Class for Environmental Purposes
    Dependancies: Vector3 Class, Main.JS
*/

//Initialize Class
var cameraObject = function(fov,aspectRatio,nearPlane,farPlane) {
    //Implement Properties
    if (arguments.length === 0) {
        this.fov = 120;
        this.aspectRatio = width/height;
        this.nearPlane = 0.1;
        this.farPlane = 1000;
    }else {
        this.fov = fov || 120;
        this.aspectRatio = aspectRatio || width/height;
        this.nearPlane = nearPlane || 0.1;
        this.farPlane = farPlane || 1000;
    }
    this.position = new Vector3();
    this.rotation = new Vector3();

    //RenderPass Cycle
	var that = this;
    renderPass.push(function() {
				perspective(Math.rad(that.fov), that.aspectRatio, that.nearPlane, that.farPlane);
        /*
            TODO:
                Add rotation to camera by rotating all objects around cameras position by cameras rotation.
                Add movement of objects relative to the cameras position. 
        */
    });
};
