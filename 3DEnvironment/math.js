/*
    Author: Brycen. H. Tate
    Created: 11/29/17
    Primary Purpose: Vector3 Class for Environmental Purposes
*/

//Math functions
Math.rad = function(degree) {
	return (degree/360)*PI;
};

//Initialize Class
var Vector3 = function(x,y,z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;

    this.add = function(vector) {
        if (!vector) { return this; }
        if (!vector.x || !vector.y || !vector.z) { return this; }
        return new Vector3(this.x+vector.x, this.y+vector.y, this.z+vector.z);
    };
    this.sub = function(vector) {
        if (!vector) { return this; }
        if (!vector.x || !vector.y || !vector.z) { return this; }
        return new Vector3(this.x-vector.x, this.y-vector.y, this.z-vector.z);
    };
    this.scale = function(scale) {
        if (!scale) { return this; }
        return new Vector3(this.x*scale, this.y*scale, this.z*scale);
    };
    this.divide = function(scale) {
        if (!scale) { return this; }
        return new Vector3(this.x/scale, this.y/scale, this.z/scale);
    };
};
