function DrawingAPI(width,height)
{
	//debugger;
		
	this.rect =function(x1, y1,x2,y2, drill){
		//debugger;
		if(drill=== 'null')
			paper.rect(x1, y1, x2 , y2);
		else{
			//paper.remove();
			
			//paper.circle(data.chart.width,data.chart.height, 10);
			paper.rect(x1, y1, x2 , y2)
				.attr({fill: "#ff0"})
				.data("i", drill)
				.click(function () {
					alert(this.data("i"));
					/*paper.remove();
					paper = Raphael(0, 0, data.chart.width, data.chart.height);
					var drill_chart = new AyanCharts();
					drill_chart.render();*/
					//(this.data("i"));*/
				});

		}
			
	}

	this.text= function(x,y,text, deg){
		//debugger;
		paper.text(x,y,text).rotate(deg);
	}

	this.line= function(x1,y1, x2, y2){
		//debugger;
		paper.path("M"+""+x1+" "+y1+"L"+x2+" "+y2);
    }		

}