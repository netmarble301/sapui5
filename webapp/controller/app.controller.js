//app.view.xml의 controllerName 참고
// sap/ui/core/mvc/Controller -> Controller
sap.ui.define(["sap/ui/core/mvc/Controller"],
    function (Controller) {
        "use strict";

        //Controller 기능을 물려받은 새로운 컴포넌트 클래스를 sap.training.exc.controller.app에 생성
        return Controller.extend("sap.training.exc.controller.app", { });
    });