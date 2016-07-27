const Config = {
    apiURL: 'http://localhost:1337/api/',
    JSFindItem(json, search, key){
        var result = null
        for(var i = 0; i < json.length; i++){
            var json_item = json[i]
            if(json_item[key] === search){
                result = json_item
                result.index = i
                break
            }
        }
        return result
    },
    JSConvertArray(json, key){
        var result = []
        json.map(function(item){
            result.push(item[key])
        })
        return result
    },
    parseQueryString(location){
        var params = location.split('?');
        var str = params[1] ? params[1] : '';
        var objURL = {};
        str.replace(
            new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
            function( $0, $1, $2, $3 ){
                objURL[ $1 ] = $3;
            }
        );
        return objURL;
    },
    getFileToUrl(file, type){
        var options={};
        if(type) options.type = type;
        var blob = new Blob([file.data],options);
        var objectUrl = URL.createObjectURL(blob);
        return objectUrl;
        // return {blob:blob,filename:res.headers().filename||''};
    }
}

export default Config