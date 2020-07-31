实现一个new
function Mynew(father,arguments){
	let obj={};
	obj._proto_=father.prototype;
	father.apply(obj,arguments)
	return obj
}
实现JSON.stringify
function my_JsonStr(obj){
	let type=typeof obj;
	if(type!=="object"){
		if(/function|string|undefined/.test(type))
		{
			obj='"'+obj+'"'
		}
		return String(obj)
	}else{
		let json=[];
		let arr=Array.isArray(obj)
		for(let k in obj){
			let v=obj[k];
			let type=typeof v
			if(type!=="object"){
				if(/function|string|undefined/.test(type))
				{
				v='"'+v+'"'
				}
				else {
				v=my_JsonStr(v)
			}
			
			}
			
			json.push((arr?"":'"'+k+'":')+String(v));
		}
		return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
		
	}
}