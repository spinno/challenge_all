var ssv = [];

exports.add = function(name, value){
	ssv.push({name: name, value: value});
}

exports.fetch = function(){
	return ssv;
}