function close1()
{
	window.close();
}



// 대분류,소분류 스크립트기능
function firstChange() {
 var x = document.frmBuy.id30.options.selectedIndex;
 var groups=document.frmBuy.id30.options.length;
 var group=new Array(groups);
 for (i=0; i<groups; i++)
  group[i]=new Array();

 group[0][0]=new Option("-선택 없음-",""); 

//의류 잡화
 group[1][0]=new Option("전체","0100");
 group[1][1]=new Option("여성의류","0101");
 group[1][2]=new Option("남성의류","0102");
 group[1][3]=new Option("쥬얼리","0103");
 group[1][4]=new Option("가방","0104");
 group[1][5]=new Option("언더웨어","0105");
 group[1][6]=new Option("지갑/벨트","0106");
 group[1][7]=new Option("시계","0107");
 group[1][8]=new Option("유아의류","0108");

//뷰티
 group[2][0]=new Option("전체","0200");
 group[2][1]=new Option("스킨케어","0201");
 group[2][2]=new Option("메이크업","0202");
 group[2][3]=new Option("선케어","0203");
 group[2][4]=new Option("남성화장품","0204");
 group[2][5]=new Option("클렌징/필링","0205");
 group[2][6]=new Option("향수","0206");

//레저 자동자
 group[3][0]=new Option("전체","0300");
 group[3][1]=new Option("스포츠 의류","0301");
 group[3][2]=new Option("등산/아웃도어","0302");
 group[3][3]=new Option("캠핑","0303");
 group[3][4]=new Option("자동차용품","0304");
 group[3][5]=new Option("자전거","0305");
 group[3][6]=new Option("헬스","0306");
 group[3][7]=new Option("낚시","0307");
 group[3][8]=new Option("수영","0308");
 group[3][9]=new Option("라켓스포츠","0309");

//식품
 group[4][0]=new Option("전체","0400");
 group[4][1]=new Option("농산","0401");
 group[4][2]=new Option("수산","0402");
 group[4][3]=new Option("축산","0403");
 group[4][4]=new Option("반찬/간편가정식","0404");
 group[4][5]=new Option("김치","0405");
 group[4][6]=new Option("가공식품","0406");
 group[4][7]=new Option("커피/생수/음료","0407");
 group[4][8]=new Option("과자/간식","0408");
 group[4][9]=new Option("즉석식품","0409");
 group[4][10]=new Option("건강식품","0410");

//생활 건강
 group[5][0]=new Option("전체","0500");
 group[5][1]=new Option("주방용품","0501");
 group[5][2]=new Option("수납정리용품","0502");
 group[5][3]=new Option("욕실용품","0503");
 group[5][4]=new Option("청소용품","0504");
 group[5][5]=new Option("세탁용품","0505");
 group[5][6]=new Option("세제/방향/살충","0506");
 group[5][7]=new Option("화장지","0507");
 group[5][8]=new Option("구강/세안/면도","0508");

//가구 인테리어
 group[6][0]=new Option("전체","0600");
 group[6][1]=new Option("침실가구","0601");
 group[6][2]=new Option("거실가구","0602");
 group[6][3]=new Option("서재/사무용가구","0603");
 group[6][4]=new Option("유아동가구","0604");
 group[6][5]=new Option("리모델링가구","0605");
 group[6][6]=new Option("커튼/블라인드","0606");
 group[6][7]=new Option("침구","0607");
 group[6][8]=new Option("조명","0608");

//디지털 가전 컴퓨터
 group[7][0]=new Option("전체","0700");
 group[7][1]=new Option("tv","0701");
 group[7][2]=new Option("노트북","0702");
 group[7][3]=new Option("냉장고","0703");
 group[7][4]=new Option("카메라/주변기기","0704");
 group[7][5]=new Option("모니터","0705");
 group[7][6]=new Option("휴대폰","0706");
 group[7][7]=new Option("세탁기/건조기","0707");
 group[7][8]=new Option("영상가전","0708");
 group[7][9]=new Option("데스크탑","0709");
 group[7][10]=new Option("태블릿","0710");
 group[7][11]=new Option("프린터/복합기","0711");
 group[7][12]=new Option("게임","0712");
 group[7][13]=new Option("pc부품","0713");

//도서 취미 반려동물
 group[8][0]=new Option("전체","0800");
 group[8][1]=new Option("도서/음반","0801");
 group[8][2]=new Option("문구/사무용품","0802");
 group[8][3]=new Option("화방용품","0803");
 group[8][4]=new Option("악기","0804");
 group[8][5]=new Option("취미","0805");
 group[8][6]=new Option("꽃/원예","0806");
 group[8][7]=new Option("강아지용품","0807");
 group[8][8]=new Option("고양이용품","0808");
 group[8][9]=new Option("조류용품","0809");


 temp = document.frmBuy.id31;
 for (m = temp.options.length-1 ; m > 0 ; m--)
  temp.options[m]=null
 for (i=0;i<group[x].length;i++){
  temp.options[i]=new Option(group[x][i].text,group[x][i].value)
 }
 temp.options[0].selected=true
}

		
		
function firstChange1() {
 var x = document.frmBuy.id32.options.selectedIndex;
 var groups=document.frmBuy.id32.options.length;
 var group=new Array(groups);
 for (i=0; i<groups; i++)
  group[i]=new Array();

 group[0][0]=new Option("-선택 없음-",""); 

 // 강원도
 group[1][0]=new Option("전체","0100");
 group[1][1]=new Option("강릉시","0101");
 group[1][2]=new Option("고성군","0102");
 group[1][3]=new Option("동해","0103");
 group[1][4]=new Option("삼척시","0104");
 group[1][5]=new Option("속초시","0105");
 group[1][6]=new Option("양구군","0106");
 group[1][7]=new Option("양양군","0107");
 group[1][8]=new Option("영월군","0108");
 group[1][9]=new Option("원주시","0109");
 group[1][10]=new Option("인제","0110");
 group[1][11]=new Option("정선군","0111");
 group[1][12]=new Option("철원군","0112");
 group[1][13]=new Option("춘천시","0113");
 group[1][14]=new Option("태백시","0114");
 group[1][15]=new Option("평창군","0115");
 group[1][16]=new Option("홍청군","0116");
 group[1][17]=new Option("화천군","0117");
 group[1][18]=new Option("횡성군","0118");
	
 // 경기도
 group[2][0]=new Option("전체","0200");
 group[2][1]=new Option("가평군","0201");
 group[2][2]=new Option("고양시 덕양구","0202");
 group[2][3]=new Option("고양시 일산동구","0203");
 group[2][4]=new Option("고양시 일산서구","0204");
 group[2][5]=new Option("과천시","0205");
 group[2][6]=new Option("광명시","0206");
 group[2][7]=new Option("광주시","0207");
 group[2][8]=new Option("구리시","0208");
 group[2][9]=new Option("군포시","0209");
 group[2][10]=new Option("김포시","0210");
 group[2][11]=new Option("남양주시","0211");
 group[2][12]=new Option("동두천시","0212");
 group[2][13]=new Option("부천시","0213");
 group[2][14]=new Option("성남시 분당구","0214");
 group[2][15]=new Option("성남시 수정구","0215");
 group[2][16]=new Option("성남시 중원구","0216");
 group[2][17]=new Option("수원시 영통구","0217");
 group[2][18]=new Option("수원시 장안구","0218");
 group[2][19]=new Option("수원시 팔달구","0219");
 group[2][20]=new Option("시흥시","0220");
 group[2][21]=new Option("안산시 단원구","0221");
 group[2][22]=new Option("안산시 상록구","0222");
 group[2][23]=new Option("안성시","0223");
 group[2][24]=new Option("안양시 동안구","0224");
 group[2][25]=new Option("안양시 만안구","0225");
 group[2][26]=new Option("양주시","0226");
 group[2][27]=new Option("양평군","0227");
 group[2][28]=new Option("여주시","0228");
 group[2][29]=new Option("연천군","0229");
 group[2][30]=new Option("오산시","0230");
 group[2][31]=new Option("용인시 기흥구","0231");
 group[2][32]=new Option("용인시 수지구","0232");
 group[2][33]=new Option("용인시 처인","0233");
 group[2][34]=new Option("의왕시","0234");
 group[2][35]=new Option("의정부시","0235");
 group[2][36]=new Option("이천시","0236");
 group[2][37]=new Option("파주시","0237");
 group[2][38]=new Option("평택시","0238");
 group[2][39]=new Option("포천시","0239");
 group[2][40]=new Option("하남시","0240");
 group[2][41]=new Option("화성시","0241");

 // 경상남도
 group[3][0]=new Option("전체","0300");
 group[3][1]=new Option("거제시","0301");
 group[3][2]=new Option("거창군","0302");
 group[3][3]=new Option("고성군","0303");
 group[3][4]=new Option("김해시","0304");
 group[3][5]=new Option("남해군","0305");
 group[3][6]=new Option("밀양시","0306");
 group[3][7]=new Option("사천시","0307");
 group[3][8]=new Option("산청군","0308");
 group[3][9]=new Option("양산시","0309");
 group[3][10]=new Option("의령군","0310");
 group[3][11]=new Option("진주시","0311");
 group[3][12]=new Option("창녕군","0312");
 group[3][13]=new Option("창원시 마산합포구","0313");
 group[3][14]=new Option("창원시 마산회원구","0314");
 group[3][15]=new Option("창원시 성산구","0315");
 group[3][16]=new Option("창원시 의창구","0316");
 group[3][17]=new Option("창원시 진해구","0317");
 group[3][18]=new Option("통영시","0318");
 group[3][19]=new Option("하동군","0319");
 group[3][20]=new Option("함안군","0320");
 group[3][21]=new Option("함양군","0321");
 group[3][22]=new Option("합천","0322");
	
 // 경상북도
 group[4][0]=new Option("전체","0400");
 group[4][1]=new Option("경산시","0401");
 group[4][2]=new Option("경주시","0402");
 group[4][3]=new Option("고령군","0403");
 group[4][4]=new Option("구미시","0404");
 group[4][5]=new Option("군위군","0405");
 group[4][6]=new Option("김천시","0406");
 group[4][7]=new Option("문경시","0407");
 group[4][8]=new Option("봉화군","0408");
 group[4][9]=new Option("상주시","0409");
 group[4][10]=new Option("성주군","0410");
 group[4][11]=new Option("안동시","0411");
 group[4][12]=new Option("영덕군","0412");
 group[4][13]=new Option("영양군","0413");
 group[4][14]=new Option("영주시","0414");
 group[4][15]=new Option("영천시","0415");
 group[4][16]=new Option("예천군","0416");
 group[4][17]=new Option("울릉군","0417");
 group[4][18]=new Option("울진군","0418");
 group[4][19]=new Option("의성군","0419");
 group[4][20]=new Option("청도군","0420");
 group[4][21]=new Option("청송군","0421");
 group[4][22]=new Option("칠곡군","0422");
 group[4][23]=new Option("포항시 남구","0423");
 group[4][24]=new Option("포항시 북구","0424");

 // 광주광역시
 group[5][0]=new Option("전체","0500");
 group[5][1]=new Option("광산구","0501");
 group[5][2]=new Option("남구","0502");
 group[5][3]=new Option("동구","0503");
 group[5][4]=new Option("북구","0504");
 group[5][5]=new Option("서구","0505");
 
 // 대구광역시
 group[6][0]=new Option("전체","0600");
 group[6][1]=new Option("남구","0601");
 group[6][2]=new Option("달서구","0602");
 group[6][3]=new Option("달성군","0603");
 group[6][4]=new Option("동구","0604");
 group[6][5]=new Option("북구","0605");
 group[6][6]=new Option("서구","0606");
 group[6][7]=new Option("수성구","0607");
 group[6][8]=new Option("중구","0608");
	
 // 대전광역시
 group[7][0]=new Option("전체","0700");
 group[7][1]=new Option("대덕구","0701");
 group[7][2]=new Option("동구","0702");
 group[7][3]=new Option("서구","0703");
 group[7][4]=new Option("유성구","0704");
 group[7][5]=new Option("중구","0705");
	
 // 부산광역시
 group[8][0]=new Option("전체","0800");
 group[8][1]=new Option("강서구","0801");
 group[8][2]=new Option("금정구","0802");
 group[8][3]=new Option("기장군","0803");
 group[8][4]=new Option("남구","0804");
 group[8][5]=new Option("동구","0805");
 group[8][6]=new Option("동래구","0806");
 group[8][7]=new Option("부산진구","0807");
 group[8][8]=new Option("북구","0808");
 group[8][9]=new Option("사상구","0809");
 group[8][10]=new Option("사하구","0810");
 group[8][11]=new Option("서구","0811");
 group[8][12]=new Option("수영구","0812");
 group[8][13]=new Option("연제구","0813");
 group[8][14]=new Option("영도구","0814");
 group[8][15]=new Option("중구","0815");
 group[8][16]=new Option("해운대구","0816");

 // 서울특별시
 group[9][0]=new Option("전체","0900");
 group[9][1]=new Option("강남구","0901");
 group[9][2]=new Option("강동구","0902");
 group[9][3]=new Option("강북구","0903");
 group[9][4]=new Option("강서구","0904");
 group[9][5]=new Option("관악구","0905");
 group[9][6]=new Option("광진구","0906");
 group[9][7]=new Option("구로구","0907");
 group[9][8]=new Option("금천구","0908");
 group[9][9]=new Option("노원구","0909");
 group[9][10]=new Option("동대문구","0910");
 group[9][11]=new Option("동작구","0911");
 group[9][12]=new Option("마포구","0912");
 group[9][13]=new Option("서대문구","0913");
 group[9][14]=new Option("서초구","0914");
 group[9][15]=new Option("성동구","0915");
 group[9][16]=new Option("성북구","0916");
 group[9][17]=new Option("송파구","0917");
 group[9][18]=new Option("양천구","0918");
 group[9][19]=new Option("영등포구","0919");
 group[9][20]=new Option("용산구","0920");
 group[9][21]=new Option("은평","0921");
 group[9][22]=new Option("종로구","0922");
 group[9][23]=new Option("종구","0923");
 group[9][24]=new Option("중량구","0924");

 // 울산광역시
 group[10][0]=new Option("전체","1000");
 group[10][1]=new Option("남구","1001");
 group[10][2]=new Option("동구","1002");
 group[10][3]=new Option("북구","1003");
 group[10][4]=new Option("울주군","1004");
 group[10][5]=new Option("중구","1005");
	
 // 인천광역시
 group[11][0]=new Option("전체","1100");
 group[11][1]=new Option("강화군","1101");
 group[11][2]=new Option("계양구","1102");
 group[11][3]=new Option("남동구","1103");
 group[11][4]=new Option("동구","1104");
 group[11][5]=new Option("미추홀구","1105");
 group[11][6]=new Option("부평구","1106");
 group[11][7]=new Option("서구","1107");
 group[11][8]=new Option("연수구","1108");
 group[11][9]=new Option("옹진구","1109");
 group[11][10]=new Option("중구","1110");
	
 // 전라남도
 group[12][0]=new Option("전체","1200");
 group[12][1]=new Option("강진군","1201");
 group[12][2]=new Option("고흥군","1202");
 group[12][3]=new Option("곡성군","1203");
 group[12][4]=new Option("광양시","1204");
 group[12][5]=new Option("구례군","1205");
 group[12][6]=new Option("나주시","1206");
 group[12][7]=new Option("담양군","1207");
 group[12][8]=new Option("목포시","1208");
 group[12][9]=new Option("무안군","1209");
 group[12][10]=new Option("보성군","1210");
 group[12][11]=new Option("순천시","1211");
 group[12][12]=new Option("신안군","1212");
 group[12][13]=new Option("여수시","1213");
 group[12][14]=new Option("영광군","1214");
 group[12][15]=new Option("영암군","1215");
 group[12][16]=new Option("완도군","1216");
 group[12][17]=new Option("장성군","1217");
 group[12][18]=new Option("장흥군","1218");
 group[12][19]=new Option("진도군","1219");
 group[12][20]=new Option("함평군","1220");
 group[12][21]=new Option("해남군","1221");
 group[12][22]=new Option("화순군","1222");
	
 // 전라북도
 group[13][0]=new Option("전체","1300");
 group[13][1]=new Option("고창군","1301");
 group[13][2]=new Option("군산시","1302");
 group[13][3]=new Option("김제시","1303");
 group[13][4]=new Option("남원시","1304");
 group[13][5]=new Option("무주군","1305");
 group[13][6]=new Option("부안군","1306");
 group[13][7]=new Option("순창군","1307");
 group[13][8]=new Option("완주군","1308");
 group[13][9]=new Option("익산시","1309");
 group[13][10]=new Option("임실군","1310");
 group[13][11]=new Option("장수군","1311");
 group[13][12]=new Option("전주시 덕친구","1312");
 group[13][13]=new Option("전주시 완산구","1313");
 group[13][14]=new Option("정읍시","1314");
 group[13][15]=new Option("진안군","1315");
	
 // 제주특별자치도
 group[14][0]=new Option("전체","1400");
 group[14][1]=new Option("서귀포시","1401");
 group[14][2]=new Option("제주","1402");

 // 충청남도
 group[15][0]=new Option("전체","1500");
 group[15][1]=new Option("계룡시","1501");
 group[15][2]=new Option("공주시","1502");
 group[15][3]=new Option("금산군","1503");
 group[15][4]=new Option("논산시","1504");
 group[15][5]=new Option("당진시","1505");
 group[15][6]=new Option("보령시","1506");
 group[15][7]=new Option("부여군","1507");
 group[15][8]=new Option("서산시","1508");
 group[15][9]=new Option("서천군","1509");
 group[15][10]=new Option("아산시","1510");
 group[15][11]=new Option("예산군","1511");
 group[15][12]=new Option("천안시 동남구","1512");
 group[15][13]=new Option("전안시 서북구","1513");
 group[15][14]=new Option("청양군","1514");
 group[15][15]=new Option("태안군","1515");
 group[15][16]=new Option("홍성군","1516");
	
 // 충청북도
 group[16][0]=new Option("전체","1600");
 group[16][1]=new Option("괴산군","1601");
 group[16][2]=new Option("단양군","1602");
 group[16][3]=new Option("보은군","1603");
 group[16][4]=new Option("영동군","1604");
 group[16][5]=new Option("옥천군","1605");
 group[16][6]=new Option("음성군","1606");
 group[16][7]=new Option("제천시","1607");
 group[16][8]=new Option("증평군","1608");
 group[16][9]=new Option("진천군","1609");
 group[16][10]=new Option("청주시 상당구","1610");
 group[16][11]=new Option("청주시 서원구","1611");
 group[16][12]=new Option("청주시 청원구","1612");
 group[16][13]=new Option("청주시 흥덕구","1613");
 group[16][14]=new Option("충주시","1614");
	
	
 temp = document.frmBuy.id33;
 for (m = temp.options.length-1 ; m > 0 ; m--)
  temp.options[m]=null
 for (i=0;i<group[x].length;i++){
  temp.options[i]=new Option(group[x][i].text,group[x][i].value)
 }
 temp.options[0].selected=true
}