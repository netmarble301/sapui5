//Component 역할은 manifest 설정 파일, view, controller 서로 연결 및 조율 역할
// sap/ui/core/UIComponent -> 함수 파라미터 UIComponent
sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device"], 
    function (UIComponent, Device) {
        "use strict"; //자바스크립트 오류 방지용'

        //UIComponent의 기능을 물려받은 새로운 컴포넌트 클래스를 sap.training.exc.Component에 생성
        return UIComponent.extend("sap.training.exc.Component", 
            {
                //같은 폴더에 있는 manifest.json파일을 기반으로 세팅
                metadata: { manifest: "json" },
                
                //Component가 브라우저에 처음 생성되는 순간 자동으로 한 번 실행하는 초기화 함수
                init: function () {
                    //부모클래스 UIComponent가 원래 수행해야 하는 필수 초기화 작업을 커스텀 자식클래스 sap.training.exc.Component 보다 먼저 안전하게 실행
                    UIComponent.prototype.init.apply(this, arguments);
                },

                //화면의 콘텐츠 밀도 결정 함수(sap/ui/Device)
                //manifest.json의 sap.ui5/contentDensities/compact&cozy와는 별개임 지원 가능 선언만 실제 적용x, getContentDensityClass가 실제 밀도 결정
                getContentDensityClass: function () {
                    //_sContentDensityClass : 현재 뷰나 컴포넌트의 콘텐츠 밀도(Content Density) CSS 클래스 문자열을 저장해두는 내부(멤버) 변수
                    if (!this._sContentDensityClass) {
                        //Device.support.touch : 터치 기반 기기
                        if (Device.support.touch) {
                            //sapUiSizeCozy : 모바일용, 손가락으로 터치하기 쉽도록 버튼이나 리스트 등의 간격이 넓고 큼직하게(Cozy) 표시
                            this._sContentDensityClass = "sapUiSizeCozy";
                        } 
                        else {
                            //sapUiSizeCompact : pc용, 마우스 포인터로 정밀하게 조작하기 좋도록 요소들의 간격이 좁고 촘촘하게(Compact) 표시
                            this._sContentDensityClass = "sapUiSizeCompact";
                        }
                    }
                    return this._sContentDensityClass;
                }
            })
    })