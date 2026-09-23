//Component 역할은 manifest 설정 파일, view, controller 서로 연결 및 조율 역할
// sap/ui/core/UIComponent -> 함수 파라미터 UIComponent
sap.ui.define(["sap/ui/core/UIComponent"], 
    function (UIComponent) {
        "use strict"; //자바스크립트 오류 방지용'

        //UIComponent의 기능을 물려받은 새로운 컴포넌트 클래스 sap.training.exc.Component를 생성
        return UIComponent.extend("sap.training.exc.Component", 
            {
                //같은 폴더에 있는 manifest.json파일을 기반으로 세팅
                metadata: { manifest: "json" },
                
                //Component가 브라우저에 처음 생성되는 순간 자동으로 한 번 실행하는 초기화 함수
                init: function () {
                    //부모클래스 UIComponent가 원래 수행해야 하는 필수 초기화 작업을 커스텀 자식클래스 sap.training.exc.Component 보다 먼저 안전하게 실행
                    UIComponent.prototype.init.apply(this, arguments);
                }
            })
    })