function AyanCharts(obj)
{
	this.render=function(){

    debugger;
		var base_obj = new Base(obj);
		base_obj.parse();
		base_obj.render();

  }
}  