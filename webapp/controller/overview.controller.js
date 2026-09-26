//overview.view.xml의 controllerName 참고
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel"
], function (Controller, Filter, FilterOperator, JSONModel) {
    "use strict";

    return Controller.extend("sap.training.exc.controller.overview", {
        
        onInit: function () {
            // 선택된 고객 정보를 담을 빈 모델 생성 후 뷰에 등록
            var oModel = new JSONModel({});
            this.getView().setModel(oModel, "selectedCustomer");
        },

        // 고객 테이블에서 행을 선택했을 때 실행되는 이벤트
        onCustomerSelect: function (oEvent) {
            var oSelectedItem = oEvent.getSource().getSelectedItem();
            if (!oSelectedItem) {
                return;
            }

            // 1. 선택된 고객의 데이터 객체 가져오기
            var oSelectedCustomerData = oSelectedItem.getBindingContext("customer").getObject();
            var sCustomerGuid = oSelectedCustomerData.CustomerGuid;

            // 2. 'selectedCustomer' 모델에 선택된 고객 데이터를 설정
            var oSelectedModel = this.getView().getModel("selectedCustomer");
            oSelectedModel.setData(oSelectedCustomerData);

            // 3. 예약(Booking) 모델에서 해당 고객(CustomerGuid)의 예약 정보만 필터링
            var oBookingTable = this.byId("bookingTable");
            var oBinding = oBookingTable.getBinding("items");
            
            if (sCustomerGuid) {
                var oFilter = new Filter("CustomerGuid", FilterOperator.EQ, sCustomerGuid);
                oBinding.filter([oFilter]);
            }

            // 4. 예약 패널 자동으로 펼치기
            var oBookingPanel = this.byId("bookingPanel");
            oBookingPanel.setExpanded(true);
        },

        // 상단 검색 기능 (고객 이름 기준)
        onSearch: function (oEvent) {
            var sQuery = oEvent.getParameter("query");
            var oTable = this.byId("customerTable");
            var oBinding = oTable.getBinding("items");
            
            var aFilters = [];
            if (sQuery) {
                aFilters.push(new Filter("CustomerName", FilterOperator.Contains, sQuery));
            }
            oBinding.filter(aFilters);
        }

    });
});