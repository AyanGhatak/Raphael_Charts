function Renderr(page_width,page_height)
{
	debugger;
	var draw = new DrawingAPI(page_width,page_height);
		
	this.format_background =function(chart, origin, width, height){
		draw.rect(0,0,width,height,'null');
		draw.rect(origin[0], 0.25*height, 0.8*width, 0.65*height, 'null');
		draw.text((width/2), (height/8), chart.caption, 0);
		draw.text((width/2), (height/5), chart.subcaption, 0);
		draw.text((0.55*width), (0.97*height), chart.xaxisname, 0);
		draw.text((0.05*width), (0.55*height), chart.yaxisname, -90);
	}

	this.format_chartArea = function(origin, increment, scale, width){
		var benchmark = 0;
		for(var i=0;i<=5;i++){
            draw.text((origin[0]),(origin[1]-(i*increment*scale)), benchmark, 0);
            draw.line(origin[0], (origin[1]-(i*increment*scale)), 0.9*width, (origin[1]-(i*increment*scale)));
            benchmark+=increment;
        }
	}

	this.plot_col2d = function(length, spacing, origin, data, scale, Prefix){
		var width,
			column_local_origin,
			width=spacing/2;
		for(var i=0;i<length;i++){       
            
            column_local_origin=[(origin[0]+(spacing*(i+1))),(origin[1]-((data[i].value)*scale))];
        	draw.rect(column_local_origin[0], column_local_origin[1], width, (data[i].value*scale), data[i].link);
            draw.text((column_local_origin[0]+(width/2)),origin[1]+(0.2*(width/1.2)), data[i].label, 0);
            draw.text(column_local_origin[0]+(width/2), (1.1*column_local_origin[1]), (""+Prefix+data[i].value), 0);
       	}
        
	}		
}