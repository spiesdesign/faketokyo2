    function flashMovie(fid,src,wid,hei,fvs,wmd) {
        this.fPrint = ''; 
        this.Id = document.getElementById(fid); 
        this.Src = src; 
        this.Width = wid; 
        this.Height = hei; 
        this.FlashVars = (fvs != undefined)? fvs :''; 
        this.Wmod = (wmd != undefined)? wmd :''; 
        if(isObject(Id)) { 
            fPrint = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0"'; 
            fPrint = fPrint + ' width="'+Width+'"'; 
            fPrint = fPrint + ' height="'+Height+'">'; 
            fPrint = fPrint + '<param name="movie" value="'+Src+'">'; 
            fPrint = fPrint + '<param name="quality" value="high">'; 
            fPrint = (FlashVars != null) ? fPrint + '<param name="FlashVars" value="'+FlashVars+'">' : ''; 
            fPrint = (Wmod != null) ? fPrint + '<param name="wmode" value="'+Wmod+'">' : ''; 
            fPrint = '<embed'; 
            fPrint = fPrint + ' src="'+Src+'"'; 
            fPrint = (FlashVars != null) ? fPrint + ' FlashVars="'+FlashVars+'"' : ''; 
            fPrint = (Wmod != null) ? fPrint + ' wmode="'+Wmod+'"' : ''; 
            fPrint = fPrint + ' quality="high"'; 
            fPrint = fPrint + ' pluginspage="http://www.macromedia.com/go/getflashplayer"'; 
            fPrint = fPrint + ' type="application/x-shockwave-flash"'; 
            fPrint = fPrint + ' width="'+Width+'"'; 
            fPrint = fPrint + ' height="'+Height+'"'; 
            fPrint = fPrint + '></embed>'; 
            fPrint = fPrint +'</object>'; 
            Id.innerHTML = fPrint; 
        } 
    } 

    function isObject(a) {
        return (a && typeof a == 'object'); 
    } 

    function MS_Embed() {
        var obj = new String;
        var parameter = new String;
        var embed = new String;
        var html = new String;
        var allParameter = new String;
        var clsid = new String;
        var codebase = new String;
        var pluginspace = new String;
        var embedType = new String;
        var src = new String;
        var width = new String;
        var height = new String;

        this.init = function( s ,w , h, getType ) {
            getType = (getType != undefined)? getType :'flash';
            if ( getType == "flash"){

                clsid = "D27CDB6E-AE6D-11cf-96B8-444553540000";
                codebase = "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0";
                pluginspage = "http://www.macromedia.com/go/getflashplayer";
                embedType = "application/x-shockwave-flash";
            }

            parameter += "<param name='movie' value='"+ s + "'>\n";
            parameter += "<param name='quality' value='high'>\n";

            src = s;
            width = w;
            height = h;
        }

        this.parameter = function( parm , value ) {
            parameter += "<param name='"+parm +"' value='"+ value + "'>\n";
            allParameter += " "+parm + "='"+ value+"'";
        }

        this.show = function() {
            if ( clsid ){
                obj = "<object classid=\"clsid:"+ clsid +"\" codebase=\""+ codebase +"\" width='"+ width +"' height='"+ height +"'>\n";
            }

            embed = "<embed src='" + src + "' pluginspage='"+ pluginspage + "' type='"+ embedType + "' width='"+ width + "' height='"+ height +"'"+ allParameter +" ></embed>\n";

            if ( obj ){
                embed += "</object>\n";
            }

            html = obj + parameter + embed;
            document.write( html );
        }
    }

    function decrypt_email(lotate,mail){
        var decoded = "";
        for(var i=0; i<mail.length; i++){
            var c = mail.charCodeAt(i);
            if(c >= "A".charCodeAt(0) && c <= "Z".charCodeAt(0) || c >= "a".charCodeAt(0) && c <= "z".charCodeAt(0)){
                if(c >= "A".charCodeAt(0) && c <= "Z".charCodeAt(0) && (c -= lotate) < "A".charCodeAt(0)){
                    c += 26;
                }
                if(c >= "a".charCodeAt(0) && c <= "z".charCodeAt(0) && (c -= lotate) < "a".charCodeAt(0)){
                    c += 26;
                }
            }
            decoded += String.fromCharCode(c);
        }
        return decoded;
    }
