//사용 목적 데이터모델에서 가져온 데이터를 자신이 원하는 형태로 변형(예: 날짜 '2024-07-07'를 '24년7월7일월요일' 이렇게 변경 가능 )
//사용법
//<mvc:View xmlns:core="sap.ui.core", core:require="{formatter: 'sap/training/exc/model/formatter'}">
//<Text text="{path: '데이터모델>속성값', formatter: '.파일명.함수명'}"/>
//이때 함수 파라미터는 '데이터모델>속성값'가 자동 들어감

sap.ui.define([], function () {
    "use strict";

    return {
        함수명: function (sDate) {
            if (!sDate) {
                return "";
            }
            var oDate = new Date(sDate); //Date 날짜 클래스 : 서버에서 날짜 데이터를 받아오면 보통 컴퓨터가 읽기 편한 문자열(String) 형태로 옵니다
            return oDate.getFullYear() + "." + (oDate.getMonth() + 1) + "." + oDate.getDate();
        }
    };
});