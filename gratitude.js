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

//<select>태그의 onchange 콜백 함수이다. 언어 설정 값을 반영한다.
function language_selected(){

	//언어 설정 값
	var box = document.getElementById('language');

	var idx = box.selectedIndex;

	//annyang.js에 기본값으로 우리말을 설정했다.
	var language = 'ko';

	switch(idx){
		case 0://우리말
			language = 'ko';
			break;
		case 1://일본어
			language = 'ja';
			break;
		case 2://중국어
			language = 'zh-CN';
			break;
			/*others : 알파벳으로 표기하는 언어*/
		default:
			language = 'en-US';
			break;
	}

	return language;
}

function appreciate(){
	//명령으로 정의한 감사인사를 인식했을 때, 논리형 변수의 값을 참으로 할당한다.
	console.log("you're welcome");
	isAppreciate = true;
}

function toggleMic(){

	var language = language_selected();

	if(hasTurnedOn == false){
		if(annyang){
			console.log("annyang : 안냥~");
	
			//명령 적재 상태 확인
			annyang.debug();

			console.log("현재 설정한 언어 : "+language);
	
			annyang.setLanguage(language);

	const ENGLISH = {

		/*single phrase*/
		'thank you': appreciate,
		'thanks':appreciate,
		'appreciate':appreciate,
		'generous of':appreciate,

		/*some words in front of the command*/
		'*front thank you': appreciate,
		'*front thanks':appreciate,
		'*front appreciate':appreciate,
		'*front generous of':appreciate,
		
		/*some words behind the command*/
		'thank you *end': appreciate,
		'thanks *end':appreciate,
		'appreciate *end':appreciate,
		'generous of *end':appreciate,

		/*if command is in middle of sentence*/
		'*front thank you *end': appreciate,
		'*front thanks *end':appreciate,
		'*front appreciate *end':appreciate,
		'*front generous of *end':appreciate
		
	};

	 const KOREAN = {
		 /*single phrase*/
		'고맙습니다': appreciate,
		'감사합니다':appreciate,
		'고마워':appreciate,
		'감사해':appreciate,
		'고마움':appreciate,
		'감사':appreciate,
		'땡큐':appreciate,

		/*some words in front of the command*/
		'*front 고맙습니다': appreciate,
		'*front 감사합니다':appreciate,
		'*front 고마워':appreciate,
		'*front 감사해':appreciate,
		'*front 고마움':appreciate,
		'*front 감사':appreciate,
		'*front 땡큐':appreciate,

		/*some words in behind the command*/
		'고맙습니다 *end': appreciate,
		'감사합니다 *end':appreciate,
		'고마워 *end':appreciate,
		'감사해 *end':appreciate,
		'고마움 *end':appreciate,
		'감사 *end':appreciate,
		'땡큐 *end':appreciate,

		/*if command is in middle of sentence*/
		'*front thank you *end': appreciate,
		'*front thanks *end':appreciate,
		'*front appreciate *end':appreciate,
		'*front generous of *end':appreciate
	};

	const SPANISH = {
		/*하나*/
		'gracias':appreciate,

		/*앞*/
		'*front gracias':appreciate,

		/*뒤*/
		'gracias *end':appreciate,

		/*가운데*/
		'*front gracias *end':appreciate
	};

	const GERMAN = {
		/*한 개의 구*/
		'Vielen Dank':appreciate,
		'Danke':appreciate,

		/*앞으로*/
		'*front Vielen Dank':appreciate,
		'*front Danke':appreciate,

		/*뒤로*/
		'Vielen Dank *end':appreciate,
		'Danke *end':appreciate,

		/*양쪽으로*/
		'*front Vielen Dank *end':appreciate,
		'*front Danke *end':appreciate
	};

	const JAPANESE = {
		/*하나*/
		'ありがとうございます':appreciate,

		/*앞*/
		'*front ありがとうございます':appreciate,

		/*뒤*/
		'ありがとうございます *end':appreciate,

		/*가운데*/
		'*front ありがとうございます *end':appreciate
	};

	const MANDARIN = {
		/*하나*/
		'謝謝':appreciate,

		/*앞*/
		'*front 謝謝':appreciate,

		/*뒤*/
		'謝謝 *end':appreciate,

		/*가운데*/
		'*front 謝謝 *end':appreciate
	};
	
	const FRENCH = {
		/*하나 */
		'Merci':appreciate,

		/*앞*/
		'*front Merci':appreciate,

		/*뒤*/
		'Merci *end':appreciate,

		/*가운데*/
		'*front Merci *end':appreciate
	};
	
	const ITALIAN = {
		/*하나 */
		'Grazie':appreciate,

		/*앞*/
		'*front Grazie':appreciate,

		/*뒤*/
		'Grazie *end':appreciate,

		/*가운데*/
		'*front Grazie *end':appreciate,
	};

	//각 언어로 정의한 명령(감사인사) 적재
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
