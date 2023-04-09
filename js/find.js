function div_OnOff1(v,id){
    // 라디오 버튼 value 값 조건 비교
    if(v == "1"){
     document.getElementById('idon').style.display = ""; // 보여줌
     document.getElementById('idon1').style.display = "none"; // 숨김
    }else{
     document.getElementById('idon').style.display = "none"; // 숨김
     document.getElementById('idon1').style.display = ""; // 보여줌
    }
   }

   function div_OnOff2(v,id){
    // 라디오 버튼 value 값 조건 비교
    if(v == "1"){
     document.getElementById('paon').style.display = ""; // 보여줌
     document.getElementById('paon1').style.display = "none"; // 숨김
    }else{
     document.getElementById('paon').style.display = "none"; // 숨김
     document.getElementById('paon1').style.display = ""; // 보여줌
    }
   }

