function Store()
{
	this.number_of_data =function(data){
		//debugger;
		return data.length;
	}

	this.space = function(width, length){
		//debugger;
		return ((0.8*width)/(length+1));
	}

	this.scale_factor= function(height, max){
		//debugger;
		return ((0.6*height)/max);
	}

	this.chart_origin = function(width, height){
		//debugger;
		return ([0.1*width,0.9*height]);
	}

	this.maximum_data = function(data , length){
		//debugger;
		var maximum_data=0;
		for(var i=0;i<length;i++){
            if(data[i].value > maximum_data){
                maximum_data=data[i].value;
            }
        }
        return maximum_data;
	}

	this.increment=function(max){
		//debugger;
		return (Math.round((1.05*max/5)));
	}

}