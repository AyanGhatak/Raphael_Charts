function Base(){

    var no_of_data,
     	spacing,
     	chart_origin,
     	i,
     	column_local_origin=new Array(2),
        margin,
        maximum_data,
        scale_factor,
        width,
        increment;

    var s = new Store();
    var r = new Renderr(data.chart.width, data.chart.height);

  
  	this.parse=function(){
    	//debugger;

    	no_of_data = s.number_of_data(data.data);
     	spacing = s.space(data.chart.width, no_of_data);
     	chart_origin = s.chart_origin(data.chart.width, data.chart.height);
     	maximum_data=s.maximum_data(data.data, no_of_data);
        scale_factor=s.scale_factor(data.chart.height,maximum_data);
        increment=s.increment(maximum_data);

    }

 	this.render=function()
 	{
      //debugger;
      r.format_background(data.chart, chart_origin, data.chart.width, data.chart.height);
      r.format_chartArea(chart_origin,increment,scale_factor, data.chart.width);
      r.plot_col2d(no_of_data,spacing,chart_origin,data.data,scale_factor, data.chart.numberPrefix);
    }
 }
