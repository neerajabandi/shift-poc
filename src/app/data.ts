export const customerData: any =   {
    applicationId: "5627bcc4-1b17-434a-a805-d93295d94325",
    "name": "customersApp",
    "displayName": "Customers",
    "displayOrder": 50,
    "description": null,
    "iconName": "person",
    "route": "/customers",
    "isEnabled": true,
    "mobileEnabled": true,
    "manifest": {
        "runtimeInfo": {
            "moduleRoot": "customers",
            "exposes": "./Module",
            "exposedModuleName": "CustomersModule",
            "remoteFileName": "remoteEntry.js",
            "devRemoteUrl": "http://localhost:4202"
        },
        "installedTraits": [
            {
                "traitConfigurationId": "55c90e13-8d68-406e-b995-0b54dae5a40c"
            },
            {
                "traitConfigurationId": "7dd6e1c8-62c4-4779-84bf-3f963721796a"
            },
            {
                "traitConfigurationId": "1c1eefd2-964c-4495-99b3-267845f1492b"
            },
            {
                "traitConfigurationId": "2ef4ddea-1ee7-4137-9518-599fb5a6ace7"
            },
            {
                "traitConfigurationId": "2abb228c-5f2b-4076-978c-9d870fb14973"
            },
            {
                "traitConfigurationId": "fb9c00f9-308d-42a7-8208-0082a88036de"
            },
            {
                "traitConfigurationId": "3b148295-8817-4ed2-8ee6-0020bc694120"
            }
        ],
        "settings": [
            {
                "key": "details.navigation.items",
                "value": "Journey|Traits",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "listView.filter",
                "value": "{\"configuration\": {\"searchEnabled\":true,\"facets\":[{\"label\":\"Status\",\"category\":\"statusFilter\",\"fieldName\":\"statuses\",\"type\":\"list\",\"target\":\"panel\",\"valueType\":\"list\",\"allowMultiSelect\":true,\"isLocked\":false,\"isDefault\":false,\"options\":[{\"label\":\"New\",\"value\":\"New\",\"selected\":false},{\"label\":\"Active\",\"value\":\"Active\",\"selected\":false},{\"label\":\"Merged\",\"value\":\"Merged\",\"selected\":false},{\"label\":\"Lost\",\"value\":\"Lost\",\"selected\":false},{\"label\":\"Sold\",\"value\":\"Sold\",\"selected\":false},{\"label\":\"Installed\",\"value\":\"Installed\",\"selected\":false}],\"query\":null,\"queryTarget\":null,\"permission\":{\"type\":\"facet\",\"canAccess\":[\"*\"],\"restrict\":null}},{\"label\":\"Last Activity\",\"category\":\"lastActivityFilter\",\"fieldName\":\"dateRange\",\"type\":\"date\",\"target\":\"dateDropdown\",\"valueType\":\"obj\",\"allowMultiSelect\":false,\"isLocked\":true,\"isDefault\":true,\"options\":[{\"label\":\"Last 7 Days\",\"value\":7,\"selected\":false},{\"label\":\"Last 2 Weeks\",\"value\":14,\"selected\":false},{\"label\":\"Last Month\",\"value\":31,\"selected\":true},{\"label\":\"Last 90 Days\",\"value\":90,\"selected\":false}],\"query\":null,\"queryTarget\":null,\"permission\":{\"type\":\"facet\",\"canAccess\":[\"*\"],\"restrict\":null}},{\"label\":\"Dealers\",\"category\":\"retailerFilter\",\"fieldName\":\"retailerIds\",\"type\":\"list\",\"target\":\"panel\",\"valueType\":\"list\",\"allowMultiSelect\":true,\"isLocked\":false,\"isDefault\":false,\"options\":null,\"query\":\"query{getRetailers(skip:0, take:1000){items {id name displayName}}}\",\"queryTarget\":\"getRetailers\",\"permission\":{\"type\":\"facet\",\"canAccess\":[\"*\"],\"restrict\":[{\"role\":\"*\",\"instruct\":\"checkClaim\"}]}}]}}",
                "isOverridable": false,
                "isReadOnly": false
            },
            {
                "key": "listView.header",
                "value": "{\"configuration\":{\"heading\": \"Customers\",\"controls\":[{\"action\":\"new\",\"position\":1,\"label\":\"Customer\",\"enabled\":true,\"styleInfo\":{\"bgColor\":\"bg-blue-600\",\"textColor\":\"text-white\",\"border\":\"\"},\"iconInfo\":[{\"name\":\"plus\",\"size\":6}],\"hideAt\":\"md:hidden\",\"permission\": {\"type\":\"control\",\"canAccess\":[\"System Administrator\",\"System Contributor\",\"Conduit Admin\",\"Conduit Contributor\"],\"restrict\":[]}},{\"action\":\"layoutToggle\",\"position\":2,\"label\":null,\"enabled\":false,\"styleInfo\":{\"bgColor\":\"bg-white\",\"textColor\":\"text-gray-500\",\"border\":\"border border-gray-300\"},\"iconInfo\":[{\"name\":\"grid\",\"size\":6},{\"name\":\"bulletList\",\"size\":6}],\"hideAt\":\"md:hidden\",\"permission\": {\"type\":\"control\",\"canAccess\":[\"*\"],\"restrict\":[]}},{\"action\":\"export\",\"position\":3,\"label\":null,\"enabled\":true,\"styleInfo\":{\"bgColor\":\"bg-white\",\"textColor\":\"text-blue-600\",\"border\":\"border border-gray-300\"},\"iconInfo\":[{\"name\":\"download\",\"size\":6}],\"hideAt\":\"\",\"permission\": {\"type\":\"control\",\"canAccess\":[\"System Administrator\",\"System Contributor\",\"System Reader\",\"Conduit Admin\",\"Conduit Contributor\",\"Conduit Analyst\",\"Conduit Reader\"],\"restrict\":[]}}]}}",
                "isOverridable": false,
                "isReadOnly": false
            },
            {
                "key": "detailsView.tabtoolbar",
                "value": "{\"configuration\":{\"tabItems\":[{\"label\":\"Journey\",\"id\":\"journey\",\"enabled\":true,\"hiddenClass\":null,\"styleInfo\":null,\"iconInfo\":[],\"permission\":{\"type\":\"control\",\"canAccess\":[\"*\"],\"restrict\":[]}},{\"label\":\"Traits\",\"id\":\"traits\",\"enabled\":true,\"hiddenClass\":null,\"styleInfo\":null,\"iconInfo\":[],\"permission\":{\"type\":\"control\",\"canAccess\":[\"*\"],\"restrict\":[]}},{\"label\":\"Details\",\"id\":\"details\",\"enabled\":true,\"hiddenClass\":\"lg:hidden\",\"styleInfo\":null,\"iconInfo\":[],\"permission\":{\"type\":\"control\",\"canAccess\":[\"*\"],\"restrict\":[]}}]}}",
                "isOverridable": false,
                "isReadOnly": false
            },
            {
                "key": "customerForm.customerStatus",
                "value": "{\"lookups\":[{\"id\":\"new\",\"name\":\"New\",\"isDefault\":false},{\"id\":\"active\",\"name\":\"Active\",\"isDefault\":true},{\"id\":\"merged\",\"name\":\"Merged\",\"isDefault\":false},{\"id\":\"lost\",\"name\":\"Lost\",\"isDefault\":false},{\"id\":\"sold\",\"name\":\"Sold\",\"isDefault\":false},{\"id\":\"installed\",\"name\":\"Installed\",\"isDefault\":false}]}",
                "isOverridable": false,
                "isReadOnly": false
            },
            {
                "key": "processStatus.Active.backgroundColorClass",
                "value": "bg-green-100",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "processStatus.Active.textColorClass",
                "value": "text-green-600",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "processStatus.New.backgroundColorClass",
                "value": "bg-blue-100",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "processStatus.New.textColorClass",
                "value": "text-blue-600",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "processStatus.Lost.backgroundColorClass",
                "value": "bg-red-100",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "processStatus.Lost.textColorClass",
                "value": "text-red-600",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "processStatus.Merged.backgroundColorClass",
                "value": "bg-yellow-100",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "processStatus.Merged.textColorClass",
                "value": "text-yellow-600",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "processStatus.Sold.backgroundColorClass",
                "value": "bg-purple-100",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "processStatus.Sold.textColorClass",
                "value": "text-purple-600",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "processStatus.Installed.backgroundColorClass",
                "value": "bg-purple-100",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "processStatus.Installed.textColorClass",
                "value": "text-purple-600",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.installed.backgroundColorClass",
                "value": "bg-green-500",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.installed.borderColorClass",
                "value": null,
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.installed.iconName",
                "value": "currencyDollar",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.installed.textColorClass",
                "value": "text-white",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.sold.backgroundColorClass",
                "value": "bg-green-500",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.sold.borderColorClass",
                "value": null,
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.sold.iconName",
                "value": "currencyDollar",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.sold.textColorClass",
                "value": "text-white",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.lostSale.backgroundColorClass",
                "value": "bg-red-600",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.lostSale.borderColorClass",
                "value": null,
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.lostSale.iconName",
                "value": "lockOpen",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.lostSale.textColorClass",
                "value": "text-white",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.default.backgroundColorClass",
                "value": "bg-yellow-400",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.default.borderColorClass",
                "value": null,
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.default.iconName",
                "value": "eye",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.default.textColorClass",
                "value": "text-white",
                "isOverridable": true,
                "isReadOnly": false
            },
            {
                "key": "event.phoneCall.backgroundColorClass",
                "value": "bg-yellow-400",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "event.phoneCall.iconName",
                "value": "phone",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "event.phoneCall.textColorClass",
                "value": "text-white",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "event.email.backgroundColorClass",
                "value": "bg-yellow-400",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "event.email.iconName",
                "value": "email",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "event.email.textColorClass",
                "value": "text-white",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "event.digitalRetailingLead.backgroundColorClass",
                "value": "bg-blue-600",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "event.digitalRetailingLead.iconName",
                "value": "person",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "event.digitalRetailingLead.textColorClass",
                "value": "text-white",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "event.webSession.backgroundColorClass",
                "value": "bg-indigo-500",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "event.webSession.iconName",
                "value": "globe",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "event.webSession.textColorClass",
                "value": "text-white",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "activityCount.webSession.backgroundColorClass",
                "value": "bg-gray-100",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "activityCount.webSession.borderColorClass",
                "value": "border-gray-400",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "activityCount.webSession.iconName",
                "value": "globe",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "activityCount.webSession.textColorClass",
                "value": "text-white",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "activityCount.disposition.backgroundColorClass",
                "value": "bg-gray-100",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "activityCount.disposition.borderColorClass",
                "value": "border-gray-400",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "activityCount.disposition.iconName",
                "value": "globe",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "activityCount.disposition.textColorClass",
                "value": "text-white",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "activityCount.lead.backgroundColorClass",
                "value": "bg-gray-100",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "activityCount.lead.borderColorClass",
                "value": "border-gray-400",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "activityCount.lead.iconName",
                "value": "person",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "activityCount.lead.textColorClass",
                "value": "text-white",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "journey.attributeLabelLookup",
                "value": "{\"email.subject\":\"Subject\"}",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "journey.leadActivityTypeToStatusMap",
                "value": "{\"lost-sale\":\"Lost\",\"declined\":\"Lost\",\"sold\":\"Sold\",\"installed\":\"Installed\"}",
                "isOverridable": "true",
                "isReadOnly": "false"
            },
            {
                "key": "journey.leadActivityTypeToJourneyActivityTypeMap",
                "value": "{\"brand\":\"digitalRetailingLead\",\"organic\":\"digitalRetailingLead\",\"called-customer\":\"phoneCall\",\"customer-called\":\"phoneCall\",\"customer-emailed\":\"email\",\"declined\":\"lostSale\",\"emailed-customer\":\"email\",\"lost-sale\":\"lostSale\",\"sold\":\"sold\",\"installed\":\"installed\"}",
                "isOverridable": "true",
                "isReadOnly": "false"
            }
        ],
        "annotations": []
    }
}