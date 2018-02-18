$(document).ready(function() {
	dictateMic.init();
});

//apikey 획득 정보 	  : https://azure.microsoft.com/ko-kr/try/cognitive-services/?api=speech-api
var bingClientTTS = new BingSpeech.TTSClient("150528dddf6947509ec84ecd5e6584a7");

function lfn_speakTTS(text, speaker){
	bingClientTTS.multipleXHR = true;
	if(!speaker){
		speaker = BingSpeech.SupportedLocales.koKR_Female;
	}
	bingClientTTS.synthesize(text,speaker);
}

function lfn_stopTTS(){
	bingClientTTS.stop();
}

function printMsg(flag,msg){
	
	if(flag === 'guide'){
		console.log(flag + " : " + msg);
		//lfn_speakTTS(hypText);
	}else{
        console.log(flag + " : " + msg);

        //$(".wc-textbox").html('<input type="text" class="wc-shellinput" value="'+msg+'" placeholder="Type your message...">')
        $("input[type=text]").val(msg);
        //$(".wc-console").addClass("has-text");
        //$(".wc-console.has-text .wc-send svg").css("fill", "#3a96dd");
        //var e = jQuery.Event("keydown", { keyCode: 110 });
        //$("input[type=text]").trigger(e);
        //$(".wc-send").trigger("click");
        var e = jQuery.Event("keydown", { keyCode: 32 });
        $("input[type=text]").trigger(e);
        //postButtonMessage(msg);
	}
}

