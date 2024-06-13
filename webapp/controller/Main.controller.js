sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
	"sap/m/MessageToast"
],
function (Controller, JSONModel, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("fioritask01.controller.Main", {
        c_count : [] ,

        onInit: function () {
            var oModel = new JSONModel({
                items: [
                    { key: "1", text: "Product ID" },
                    { key: "2", text: "Product Name" },
                    { key: "3", text: "Quantity Per Unit" },
                    { key: "4", text: "SupplierID" },
                    { key: "5", text: "CategoryID" },
                    { key: "6", text: "UnitPrice" },
                    { key: "7", text: "UnitsInStock" },
                    { key: "8", text: "UnitsOnOrder" },
                    { key: "9", text: "ReorderLevel" },
                    { key: "10", text: "Discontinued" }
                ]
            });
            this.getView().setModel(oModel);
        },

        
    //         onPress : function(oEvent)  {

    //             var oTable = this.getView().byId("table");
    //             var oComboBox = this.getView().byId("columnSelect");

    //             var ocolumn = oTable.getColumns().filter(function(column){
    //                 return column.getid() === "columnid";
    //             })[0];

    //             if(ocolumn == oComboBox){
    //                 ocolumn.setVisible(false);
    //             }


    //             // var sSelectedColumnKey = oEvent.getParameter("selectedItem").getKey();
    //             // oTable.getColumns().forEach(function(oColumn) {
    //             //     // If the column key matches the selected key, hide the column.
    //             //     if (oColumn.getId() === sSelectedColumnKey) {
    //             //         oColumn.setVisible(false);
    //         }
    
    //     });
    // });
        onPress: function() {
            var oComboBox = this.getView().byId("columnSelect");
            var sSelectedKey = oComboBox.getSelectedKey();
            // Now you can use the selected key
            // MessageBox.show("Selected key: " + sSelectedKey);

            var oTable = this.getView().byId("table");
            // var aColumnIds = oTable.getColumns().map(function(oColumn) {
            //     return oColumn.getId();
            // });
            // MessageBox.show(aColumnIds);
            
            
            // if (aColumnIds.includes(sSelectedKey)) {
            //     MessageBox.show("The selected key matches a column ID.");
            // } else {
            //     MessageBox.show("The selected key does not match any column ID.");
            // }

            // if (sSelectedKey === aColumnIds) {
            //     aColumnIds.setVisible(false);
            // }
            this.c_count.push(sSelectedKey);
            // MessageBox.show("hi" + this.c_count);
            var row_count = sSelectedKey - 1 ;
            oTable.getColumns()[row_count].setVisible(false);
            
        },
        resetbutton: function () {
            
            var oTable = this.getView().byId("table");
            for(var i = 0; i < 10; i++) {
                oTable.getColumns()[i].setVisible(true);
            //     oTable.getColumns()[i].setVisible(true);
            }
        }
    });
});