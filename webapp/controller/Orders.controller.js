sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
	Fragment,
	JSONModel) {
        "use strict";

        return Controller.extend("prueba.preexamen.controller.Orders", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("orders").attachMatched(this._onRouteMatched, this);
            },

            _onRouteMatched: function (oEvent) {

                var oArgs, oView;

                oArgs = oEvent.getParameter("arguments");

                oView = this.getView();

                oView.bindElement({

                    path: "/Customers('" + oArgs.customerID + "')",

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

            onOrderDetail: function (oEvent) {
                var oView = this.getView();
                var sPath = oEvent.getSource().getBindingContext().getPath();

                if (!this.byId("openDialog")) {
                    Fragment.load(
                        {
                            id: oView.getId(),
                            name: "prueba.preexamen.view.fragments.OrderDetail",
                            controller: this
                        }).then(
                            function (oDialog) {
                                oDialog.bindElement({
                                    path: sPath
                                  });
                                oView.addDependent(oDialog);
                                oDialog.open();
                            }
                        )
                } else {
                    this.byId("openDialog").bindElement({
                        path: sPath
                      });
                    this.byId("openDialog").open()
                }

            },

            onClose: function(){
                this.byId("openDialog").close()
            }



        });
    });
