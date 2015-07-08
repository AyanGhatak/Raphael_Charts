function DrawingAPI(width,height)
{
	debugger;
		
	this.rect =function(x1, y1,x2,y2){
		debugger;
		paper.rect(x1, y1, x2 , y2);
	}

	this.text= function(x,y,text, deg){
		debugger;
		paper.text(x,y,text).rotate(deg);
	}

	this.line= function(x1,y1, x2, y2){
		debugger;
		paper.path("M"+""+x1+" "+y1+"L"+x2+" "+y2);
    }		

}