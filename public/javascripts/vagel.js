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
        $(".wc-message-group-content").append('<div class="wc-message-wrapper list"><div class="wc-message wc-message-from-me"><div class="wc-message-content"><svg class="wc-message-callout"><path class="point-left" d="m0,6 l6 6 v-12 z"></path><path class="point-right" d="m6,6 l-6 6 v-12 z"></path></svg><div><span class="format-plain"><span><!-- react-text: 93 -->호빵도시락<!-- /react-text --><br></span></span><!-- react-empty: 95 --></div></div></div><div class="wc-message-from wc-message-from-me"><span><!-- react-text: 150 -->userid<!-- /react-text --></span></div></div>');
        var e = jQuery.Event("keyup", { keyCode: 32 });
        $("input[type=text]").trigger(e);
        //postButtonMessage(msg);
	}
}

