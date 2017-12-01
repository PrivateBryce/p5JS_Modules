
/*
    Author: Brycen. H. Tate
    Created: 12/1/17
    Primary Purpose: Object Class for Environmental Purposes
    Dependancies: Vector3 Class, Main.JS
*/

//Initialize Class
var object = function(type,size,position,rotation) {
	this.size = size || new Vector3(25,25,25);
	this.position = position || new Vector3();
	this.rotation = rotation || new Vector3();
	this.type = type || "cube";

	var that = this;
	renderPass.push(function() {
		translate(that.position.x,that.position.y,that.position.z);
		rotateX(that.rotation.x);
		rotateY(that.rotation.y);
		rotateZ(that.rotation.z);
		//specularMaterial(125,45,122);
		if(that,type==="cube") {
			box(that.size.x,that.size.y,that.size.z);
		}else if(that.type==="sphere") {
			sphere(that.size.x);
		}else if(that.type==="cylinder") {
			cylinder(that.size.x, that.size.y);	
		}
		translate(-that.position.x,-that.position.y,-that.position.z);
	});
};
