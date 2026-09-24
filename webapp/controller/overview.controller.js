//overview.view.xml의 controllerName 참고
sap.ui.define(["sap/ui/core/mvc/Controller"],

    //JSDoc 주석 : 개발도구(vscode)에게 명령 내리는 특수 주석
    //즉 개발도구에게 sap.ui.core.mvc.Controller와 함수 파라미터 Controller를 미리 매핑시켜주는 것
    //그런데 요즘 vscode가 똑똑해서 JSDoc주석 안 해도 알아서 매핑 및 자동완성해줌 이제 필요없음
    // /** @param {typeof sap.ui.core.mvc.Controller} Controller*/

    function (Controller) {
        "use strict";

        //Controller 기능을 물려받은 새로운 컴포넌트 클래스를 sap.training.exc.controller.overview에 생성
        //app에서 생성한 컴포넌트 클래스 Controller와 overview에서 생성한 컴포넌트 클래스 Controller의 구분은 생성된 네임스페이스 위치로 구분
        return Controller.extend("sap.training.exc.controller.overview", { });
    });