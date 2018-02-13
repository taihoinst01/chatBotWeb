$(document).ready(function() {
	dictateMic.init();
});

//apikey 획득 정보 	  : https://azure.microsoft.com/ko-kr/try/cognitive-services/?api=speech-api
var bingClientTTS = new BingSpeech.TTSClient("ec3daaf7a24f47d69ed6e20fc556670c");

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
		lfn_speakTTS(hypText);
	}else{
		console.log(flag + " : " + msg);
	}
}
