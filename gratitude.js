/*
	마이크 버튼을 눌렀을 때, 녹음이 시작되고 다시 누르면 녹음이 끝난다. -> 고맙다는 인사가 포함되어 있으면, 화면이 짜잔 하고 바뀐다.

	버튼과 배경 디자인 바꾸고 다양한 언어를 지원하도록 만들면 끄읕!

	버튼을 눌렀을 때, 음성 입력 상태 변환과 UI에 변화가 일어나야 한다.
*/

//버튼에 표시할 문자열이다.
const MIC_STATUS_OFF = "마이크가 꺼져있어요.";
const MIC_STATUS_ON = "경청하는 중이예요!.";

//고마움을 표현했는지 판단하는 논리형 변수이다.
var isAppreciate = false;

//"마이크가 켜졌나요?."를 판단하는 논리형 변수이다.
var hasTurnedOn =false;

//깜박이
var onAirSign = document.querySelector('.live-icon');
//ON AIR 문자열
var onAirText = document.querySelector('.text');			

//버튼 요소
var btnMic = document.getElementById('btnMic');

/*
	버튼을 누를 때마다 안냥 객체를 새로 만들어서 isListening()이 항상 거짓을 반환한다.
	아주 그냥 항등식이 따로 없네~
*/

function appreciate(){
	console.log("you're welcome");
	isAppreciate = true;
}

function toggleMic(){


	if(hasTurnedOn == false){
		if(annyang){
			console.log("annyang : 안냥~");
			
		/*
			서로 다른 언어로 표현된 감사인사이기 때문에 안냥은 각 인사말을 하나의 '감사 인사'가 아닌 다른 단어로 인식할 것이다.
			따라서 commands객체를 통해 명령을 지정할 수 없다. -> 자체 번역 기능을 내장하고 있으면 가능하다!. TT
		*/

	//우리말을 언어로 설정한 상태에서 영어 또한 인식하는 것을 확인했다.
	//안냥 깃허브 FAQ
	//https://github.com/TalAter/annyang/blob/master/docs/FAQ.md
	annyang.setLanguage('ko');
	/*annyang.setLanguage('en-GB');
	annyang.setLanguage('en-US');
	annyang.setLanguage('es-ES');
	annyang.setLanguage('de-DE');
	annyang.setLanguage('ja');
	annyang.setLanguage('zh-CN');
	annyang.setLanguage('fr-FR');
	annyang.setLanguage('it-IT');
	*/
	const ENGLISH = {
		'thank you': appreciate,
		'thanks':appreciate,
		'I appreciate':appreciate,
		'generous of':appreciate
	};

	 const KOREAN = {
		'고맙습니다': appreciate,
		'감사합니다':appreciate,
		'고마워':appreciate,
		'감사해':appreciate,
		'고마움':appreciate,
		'감사':appreciate,
		'땡큐':appreciate
	};

	const SPANISH = {
		'gracias':appreciate
	};

	const GERMAN = {
		'Vielen Dank':appreciate,
		'Danke':appreciate
	};

	const JAPANESE = {
		'ありがとうございます':appreciate
	};

	const MANDARIN = {
		'謝謝':appreciate
	};
	
	const FRENCH = {
		'Merci':appreciate
	};
	
	const ITALIAN = {
		'Grazie':appreciate
	};


	annyang.addCommands(KOREAN);
	annyang.addCommands(ENGLISH);		
	annyang.addCommands(SPANISH);
	annyang.addCommands(GERMAN);
	annyang.addCommands(JAPANESE);
	annyang.addCommands(MANDARIN);
	annyang.addCommands(FRENCH);
	annyang.addCommands(ITALIAN);
	
	annyang.start({autoRestart:false, continous:true});
		
		btnMic.innerText = MIC_STATUS_ON;
		//깜박깜박
		onAirSign.style.visibility = 'visible';
		//불 켜짐
		onAirText.style.color = 'red';		
		}
		//마이크가 켜졌있당~
		hasTurnedOn = true;
	}
	else{

			annyang.abort();

			hasTurnedOn = false;
			
			if(isAppreciate == true){
				location.href="thankyou.html";
			}else{
				//안 깜박깜박
				onAirSign.style.visibility = 'hidden';
				//불 꺼짐
				onAirText.style.color = '#65160e';
				btnMic.innerText = MIC_STATUS_OFF;
			}
	}
	}
