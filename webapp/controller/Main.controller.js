sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller ) {
        "use strict";

        return Controller.extend("prueba.preexamen.controller.Main", {
            onInit: function () {

            },

            onPress: function (oEvent){
                var ID = oEvent.getSource().getBindingContext().getProperty("CustomerID")
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("detail", {
                    customerID: ID
                })
            }
        });
    });
