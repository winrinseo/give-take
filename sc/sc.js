//회원 가입

function pop()//회원가입 팝업 뛰우기
{
	window.open("register.html","회원가입","width=900, height=500, left=550, top=240");
}

let c1=0;//내용체크
let c2=0;//id체크 사용여부


function aaa()//회원가입 확인
{

	aaa1();
	if (c1==1){}
		else {
			aaa2();
			if (c1==2){}
				else {
					aaa3();
					if (c1==3){}
						else {
							aaa4();
							if (c1==4){}
								else {
									aaa5();
									if (c1==5){}
									else {
										aaa6();
										if (c1==6){}
										else{
											aaa7();
											if (c1==7){

											}
											else{
												aaa8();
											}
										}
										
									}
								}
					}
				}
		}
	
}

function aaa1()//회원가입 이름 확인
{
	let a = document.getElementById('id1').value;
	
	if (a=="")
	{
	alert('이름을 입력하세요');
	c1=1;
	}
	else {
	c1=0;
	}
}

function aaa2()//회원가입 아이디 확인
{
	let a = document.getElementById('id2').value;
	
	if (a=="")
	{
	alert('아이디을 입력하세요');
	c1=2;
	}
	else if(a.length < 4 || a.length >10){
		alert('ID는 4~10글자로 입력하세요');
	c1=2;
	}
	else
	{
	c1=0;
	}
}

function aaa3()//회원가입 비밀번호
{
	let a = document.getElementById('id3').value;
	
	if (a=="")
	{
	alert('비밀번호을 입력하세요');
	c1=3;
	}
	else if(a.length < 4 || a.length >10){
		alert('PW는 4~10글자로 입력하세요');
	c1=3;
	}
	else {
	c1=0;
	}
}

function aaa4()//회원가입 비밀번호 확인 
{
	let a = document.getElementById('id4').value;
	let aa = document.getElementById('id3').value;
	if (a==aa)
	{
	c1=0;
	}
	else {
	alert('비밀번호가 일치하지 않습니다');	
	c1=4;
	}
}

function aaa5()//회원가입 이메일 
{
	let a = document.getElementById('id5').value;
	if (a=="")
	{
	alert('이메일을 입력하세요');	
	c1=5;
	}
	else {
	c1=0;
	}
}

function aaa6()//회원가입 핸드폰
{
	let a = document.getElementById('id6').value;
	if (a=="")
	{
	alert('핸드폰을 입력하세요');	
	c1=6;
	}
	else if (isNaN(a)) {
		alert('숫자만 입력하세요');	
	c1=6;
	}
	else if(a.length < 10 || a.length >12){
		alert('전화번호는 11자리입니다');
	c1=6;
	}

	else
	{
	c1=0;
	
	
	
	

	}
}

function aaa7()//지역 선택여부
{
	let a = document.getElementById('id8').value;
	if (a=="")
	{
	alert('지역을 선택하세요');	
	c1=7;
	}
	else {
	c1=0;



	}
}


function aaa8()//지역 선택여부
{
	let a = document.getElementById('id10').value;
	if (a=="")
	{
	alert('카테고리을 선택하세요');	
	c1=8;
	}
	else {
	c1=0;


	let ma = function(){document.getElementById('form').submit();}//입력값 전송
	ma();

	alert('가입완료')
	setTimeout(function(){
	self.close();	
	},1000);


	}
}


function pop2()//id 중복확인 팝업
{

	c2 = 1;
	window.name = "중복확인"
	openwin = window.open("idck.html","id중복확인","width=500, height=450, left=780, top=400");

}


function ckid(){//id 중복체크??
	
	let a = document.getElementById('id2').value;
	let ma = function(){
	document.getElementById('form1').submit();
	}
	c2=1;
}



function pop3()//로그인 팝업 뛰우기
{
	window.open("login.html","로그인","width=450, height=520, left=750, top=240");
}

function pop()//회원가입 팝업 뛰우기
{
	window.open("join.html","회원가입","width=900, height=820, left=550, top=240");
}