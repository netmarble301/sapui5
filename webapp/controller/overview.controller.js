//overview.view.xml의 controllerName 참고
//sap/ui/model/Filter : 검색 및 조건 조회 위한 필터 객체 생성
//sap/ui/model/FilterOperator : Filter를 비교 조건 연산을 정의
//sap/ui/model/json/JSONModel : 자바스크립트 객체 데이터를 기반으로 클라이언트 측 JSON 모델을 생성하여 뷰와 데이터를 바인딩할 때 사용
sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/Filter", "sap/ui/model/FilterOperator", "sap/ui/model/json/JSONModel"], 
    function (Controller, Filter, FilterOperator, JSONModel) {
    "use strict";

    return Controller.extend("sap.training.exc.controller.overview", {
        
        onInit: function () {
            //선택된 고객 정보를 담을 빈 모델 생성 후 뷰에 등록(oModel을 뷰에 연결, selectedCustomer는 뷰에서 쓸 oModel의 별칭), this는 overview컨트롤러 getView는 해당 컨트롤러 연결되어있는 뷰
            var oModel = new JSONModel({});
            this.getView().setModel(oModel, "selectedCustomer");
        },

        //고객 테이블에서 행을 선택 시 이벤트
        onCustomerSelect: function (oEvent) {
            //getSource() : 이벤트 발생한 주체(customerTable) 가져옴
            //getSelectedItem() : 해당 테이블에서 클릭된 행 가져옴
            var oSelectedItem = oEvent.getSource().getSelectedItem();
            if (!oSelectedItem) {
                return;
            }

            //선택된 고객의 데이터 객체 가져오기
            //customer 모델은 manifest.json의 models 참고
            //getBindingContext() : 클릭한 행이 customer라는 모델과 어떤 데이터로 연결되어 있는지 bindingcontext 가져옴
            //getObject() : 가져온 bindingcontext의 실제 데이터 객체(JSON 객체)를 통째로 추출
            var oSelectedCustomerData = oSelectedItem.getBindingContext("customer").getObject();
            var sCustomerGuid = oSelectedCustomerData.CustomerGuid;

            //selectedCustomer 모델에 선택된 고객 데이터를 설정
            var oSelectedModel = this.getView().getModel("selectedCustomer");
            oSelectedModel.setData(oSelectedCustomerData);

            //예약(Booking) 모델에서 해당 고객(CustomerGuid)의 예약 정보만 필터링
            //byId("~") : id가 ~인 테이블 가져옴
            //bookingTable은 뷰의 테이블이고 this는 컨트롤러인데 this.byId("bookingTable")로 바로 접근 가능한가?
            //SAPUI5 프레임워크가 컨트롤러와 뷰를 1:1로 긴밀하게 연결(Lifecycle 관리)해주기 때문에 가능
            //애초 .byId는 컨트롤러의 기본 메서드임(추가적으로 this.getView().byId()도 가능)
            var oBookingTable = this.byId("bookingTable");
            //getBinding() : 해당 테이블 중 items와 데이터모델(booking)를 연결시켜주는 바인딩 객체 가져옴
            var oBinding = oBookingTable.getBinding("items");
            
            if (sCustomerGuid) {
                //FilterOperator.EQ : =의미, 즉 같은지 확인
                var oFilter = new Filter("CustomerGuid", FilterOperator.EQ, sCustomerGuid);
                //filter(~) 원래 filter 배열 객체만 가능, [oFilter]는 배열 규격으로 만든 것
                oBinding.filter([oFilter]); //데이터모델(booking)에 oFilter조건필터(객체) 적용
            }
        },

        //고객 이름 검색 이벤트
        onSearch: function (oEvent) {
            //enter 시 그 입력한 텍스트를 sQuery에 담음
            var sQuery = oEvent.getParameter("query");
            var oTable = this.byId("customerTable");
            var oBinding = oTable.getBinding("items");
            
            //검색 조건을 여러 개로 할 수 있음! 그래서 filter 객체는 배열로
            var aFilters = [];
            if (sQuery) {
                aFilters.push(new Filter("CustomerName", FilterOperator.Contains, sQuery));
            }
            /*
            // 만약 나중에 국가 조건도 추가하고 싶다면?
            if (sQuery) {
                aFilters.push(new Filter("Country", FilterOperator.EQ, sQuery));
            }
            */
            oBinding.filter(aFilters);
        }
    });
});