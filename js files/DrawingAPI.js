function DrawingAPI(width,height)
{
	
	this.rect =function(x1, y1,x2,y2, drill){
		if(drill=== 'null')
			paper.rect(x1, y1, x2 , y2);
		else{
			paper.rect(x1, y1, x2 , y2)
				.attr({fill: "#ff0"})
				.data("i", drill)
				.click(function () {
					alert('Value is : ' + '' + this.data("i"));
				});

		}
			
	}

	this.text= function(x,y,text, deg){
		paper.text(x,y,text).rotate(deg);
	}

	this.line= function(x1,y1, x2, y2){
		paper.path("M"+""+x1+" "+y1+"L"+x2+" "+y2);
    }		

}
