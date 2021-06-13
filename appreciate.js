/*
	0 ~ 7까지
	일본어 : ありがとうございます
	중국어 : 謝謝
	스페인어 : gracias
	프랑스어 : Merci
	독일어  : Vielen Dank
	이탈리아어 : Grazie
	태국어 : ขอบคุณค่ะ
	한국어 : 고맙습니다
*/

function randomThankyou(){
	//0 ~ 7
	const serial = Math.floor(Math.random() * 8);
	//감사인사를 표시할 영역
	var gratitude = document.querySelector(".thankUCard");

	switch(serial){
		case 0 :
			gratitude.innerHTML = "고맙습니다!";
			break;
		case 1 :
			gratitude.innerHTML = "THANK YOU!";
			break;
		case 2 :
			gratitude.innerHTML = "gracias!";
			break;
		case 3 :
			gratitude.innerHTML = "Merci!";
			break;
		case 4 :
			gratitude.innerHTML = "Grazie!";
			break;
		case 5 :
			gratitude.innerHTML = "Vielen Dank!";
			break;
		case 6 :
			gratitude.innerHTML = "ありがとうございます!";
			break;	
		case 7 :
			gratitude.innerHTML = "謝謝!";
			break;
		case 8 :
			gratitude.innerHTML = "ขอบคุณค่ะ!";
			break;
		default:
			gratitude.innerHTML = "마음이 따뜻해졌어요!";
			break;
	}

	if(gratitude == null)
	{

		alert("이런 내 맘 모르고 너무해 너무해TT");
	}

}