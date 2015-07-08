function Event(){

    this.drill=function(x1, y1, x2 , y2, drill){
    	
    	var a = paper.rect(x1, y1, x2 , y2)
		     .attr({fill: "#0f0","stroke": "#000","stroke-width": 0})
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
		var hoverIn = function() {
        	this.attr({"stroke": "#E3E3E3", fill: "#f00"});
  		}
    
    	var hoverOut = function() {
        	this.attr({"stroke": "#000", fill: "#ff0"});    
    	}
    
    	a.hover(hoverIn, hoverOut, a, a);
	
	}
}




