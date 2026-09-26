//overview.view.xml의 controllerName 참고
sap.ui.define(["sap/ui/core/mvc/Controller"],
    function (Controller) {
        "use strict";

        //Controller 기능을 물려받은 새로운 컴포넌트 클래스를 sap.training.exc.controller.overview에 생성
        //app에서 생성한 컴포넌트 클래스 Controller와 overview에서 생성한 컴포넌트 클래스 Controller의 구분은 생성된 네임스페이스 위치로 구분
        return Controller.extend("sap.training.exc.controller.overview", { });
    });