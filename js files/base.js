function Base(obj){

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
    var r = new Renderr(obj.chart.width, obj.chart.height);

  
  	this.parse=function(){
    	debugger;
    	no_of_data = s.number_of_data(obj.data);
     	spacing = s.space(obj.chart.width, no_of_data);
     	chart_origin = s.chart_origin(obj.chart.width, obj.chart.height);
     	maximum_data=s.maximum_data(obj.data, no_of_data);
        scale_factor=s.scale_factor(obj.chart.height,maximum_data);
        increment=s.increment(maximum_data);

    }

 	this.render=function()
 	{
      debugger;
      r.format_background(obj.chart, chart_origin, obj.chart.width, obj.chart.height);
      r.format_chartArea(chart_origin,increment,scale_factor, obj.chart.width);
      r.plot_col2d(no_of_data,spacing,chart_origin,obj.data,scale_factor, obj.chart.numberPrefix);
    }
 }
