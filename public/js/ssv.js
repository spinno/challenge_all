define(["jquery", "underscore"], function($, _){
	console.log();

    $(document).ready(function(){
        window._ssv = [];

            $(".ssv").each(function(){
                window._ssv.push({
                    name: $(this).attr("name"),
                    value: $(this).html()
                });
            });
    });

    return {
    	has: function(query){ 
    		return _.any(window._ssv, function(e){ return e.name == query });
    	},

    	get: function(query){
    		if(this.has(query)){
    			return _.find(window._ssv, function(e){ return e.name == query }).value;
    		}else{
    			return undefined;
    		}
    	}
    };
});