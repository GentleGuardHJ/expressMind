/*
	마이크 버튼을 눌렀을 때, 녹음이 시작되고 다시 누르면 녹음이 끝난다. -> 고맙다는 인사가 포함되어 있으면, 화면이 짜잔 하고 바뀐다.

	artyom의 녹음(음성 인식) 시작 - 종료 시점을 조절할 수 있는가? -> YES!

	버튼과 배경 디자인 바꾸고 다양한 언어를 지원하도록 만들면 끄읕!

	버튼을 눌렀을 때, 음성 입력 상태 변환과 UI에 변화가 일어나야 한다.
*/

	/*
			//artyom 생성 
			const artyom = new Artyom();

			//현재 음성을 입력 중인지 판단하는 논리형
			var listeningStatus = false;

			//고마움을 표현했나요?.
			var isAppreciate = false;

			//음성 명령 추가
			artyom.addCommands([{
				indexes:["Thanks","Thank you"],
				action:()=>{
					//성공 시 별도 페이지에 표시하기
					//페이지 이동 처리 필요
					isAppreciate = true;
				}
			}]);

			/*
				document.querySelector() behaves similarly to the jQuery.(document).ready() method. When the DOM is ready, the selector returns the object.
			*/
			var onAirSign = document.querySelector('.live-icon');
			var onAirText = document.querySelector('.text');			

			//버튼 요소
			var btnMic = document.getElementById('btnMic');

			function toggleMic(){

				if(listeningStatus == false){ //경청하고 itzy않다면?
					artyom.initialize({
							lang:"en-GB",
							continous:true,
							soundex:true,
							debug:true,
							executionKeyword:"and to it now",
							listen:true
						}).then(()=>{
							console.log("Artyom has been successfully initialized!.");
							var output = document.getElementById('output');

							output.append("Say something!.");
							console.log("Artyom : I am listening!");
							btnMic.innerText = "경청하는 중이예요.....";
						}).catch(err=>{
							console.log("A fancy error has occured!.",err);
						});

						listeningStatus = true;

						//깜박깜박
						onAirSign.style.visibility = 'visible';
						//불 켜짐
						onAirText.style.color = 'red';
						

				}else{
					//멈춰!!!!!
					artyom.fatality();
					console.log("ARtyom: I am not listening anymore");
					listeningStatus = false;

					if(isAppreciate == true){
						location.href="thankyou.html";
					}else{
						//안 깜박깜박
						onAirSign.style.visibility = 'hidden';
						//불 꺼짐
						onAirText.style.color = '#65160e';
						btnMic.innerText = "버튼을 누르고 말해보세요.";
					}

					 				
				}
			}



			artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
				console.log(recognized);
				var output = document.getElementById('output');
				output.innerHTML=recognized;
			});

	
