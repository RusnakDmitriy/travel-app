export function placesToArr(obj){
    let result=[];
    if(Object.keys(obj).filter(key=>key=='data')==null)
        return result[{message: 'Nothing interesting near your hotel'}];

    //let data=obj.data.places;
    for(let i=0; i<obj.data.places.length; i++){
        let elem=Object.assign({}, {location: obj.data.places[i].location,
                                    name: obj.data.places[i].name,
                                    perex: obj.data.places[i].perex
                                });
        result.push(elem);
    };
    return result
}