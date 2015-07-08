function DrawingAPI(width,height)
{
	var event_obj = new Event();
	
	this.rect =function(x1, y1,x2,y2, e){
		if(e === 'null')
			paper.rect(x1, y1, x2 , y2).attr({"fill" : "#fff"});
		else{
			event_obj.drill(x1, y1,x2,y2, e)
		}
	}

	this.text= function(x,y,text, deg){
		paper.text(x,y,text).rotate(deg);
	}

	this.line= function(x1,y1, x2, y2){
		var a = paper.path("M"+""+x1+" "+y1+"L"+x2+" "+y2)
					 .attr({"stroke": "#000","stroke-width": 2});
		
		var hoverIn = function() {
        	this.attr({"stroke": "#f00"});
  		}
    
    	var hoverOut = function() {
        	this.attr({"stroke": "#000"});    
    	}
    
    	a.hover(hoverIn, hoverOut, a, a);
    }
}