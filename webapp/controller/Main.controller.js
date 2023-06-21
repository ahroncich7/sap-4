sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("prueba.preexamen.controller.Main", {
            onInit: function () {

            },

            onPress: function (oEvent) {
                var ID = oEvent.getSource().getBindingContext().getProperty("CustomerID")
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("detail", {
                    customerID: ID
                })
            },

            handleSearch: function (oEvent) {
                var filters = []
                var query = oEvent.getParameter("newValue");
                if (query && query.length > 0) {
                    filters.push(new Filter({
                        path: "ContactName",
                        operator: FilterOperator.Contains,
                        value1: query
                    }));
                }

                var list = this.getView().byId("list");
                var binding = list.getBinding("items");
                binding.filter(filters);
            }
        })
    });
