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
					paper.remove();
					paper = Raphael(0, 0, data.chart.width, data.chart.height);
					data = this.data("i");
					var drill_chart = new AyanCharts();
					drill_chart.render();

					paper.rect(0.05*data.chart.width, 0.1*data.chart.height,0.05*data.chart.width,0.05*data.chart.height)
						 .attr({fill: "#0f0"})
						 .click(function(){
							paper.remove();
							paper = Raphael(0, 0, data.chart.width, data.chart.height);
							data = data1;
							var drill_chart_back = new AyanCharts();
						 	drill_chart_back.render();
						 });
					paper.text(0.075*data.chart.width, 0.125*data.chart.height, "Back");
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