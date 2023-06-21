sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller ) {
        "use strict";

        return Controller.extend("prueba.preexamen.controller.Detail", {
            onInit: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
  
                oRouter.getRoute("detail").attachMatched(this._onRouteMatched, this);
  
            },
  
            _onRouteMatched: function (oEvent) {
  
                var oArgs, oView;
  
                oArgs = oEvent.getParameter("arguments");
  
                oView = this.getView();
  
                oView.bindElement({
  
                    path: "/Customers('"+oArgs.customerID+"')",
  
                    events: {
  
                        dataRequested: function () {
  
                            oView.setBusy(true);
  
                        },
  
                        dataReceived: function () {
  
                            oView.setBusy(false);
  
                        }
  
                    }
  
                });
  
            },

            handleOrdersButton: function (oEvent) {
                var ID = oEvent.getSource().getBindingContext().getProperty("CustomerID")
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("orders", {
                    customerID: ID
                })
            }
        });
    });
