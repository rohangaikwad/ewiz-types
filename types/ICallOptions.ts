export interface IHeaders {
    LanguageGuid?: string;
    WebsiteGuid?: string;
    WebsiteURL?: string;
    Accept?: string;
    Authorization?: string;
    SiteCssVersion?: string;
    contentType: string;
}

export interface ICallOptions {
    url: string;
    type: "GET" | "POST" | "HEAD" | "PUT" | "DELETE";
    headers: IHeaders;
    /** Convert the object to a string using JSON.stringify() before passing it to data */
    data?: string;
    isAsync: boolean;
    MicroserviceName: "SaaS_Configuration_Microservice" | "SaaS_GlobalElements_Microservice" | "SaaS_ReviewManagement_Microservice" | "SaaS_Product_Microservice" | "SaaS_HTMLConfigurator_Microservice" | "SaaS_VirtualSample_Microservice" | "SaaS_Users_Microservice" | "SaaS_User_Microservice" | "SaaS_Basket_Microservice" | "SaaS_Order_Microservice" | "SaaS_Analytics_Microservice" | "SaaS_Catalog_Microservice" | "SaaS_Freight_Microservice" | "SaaS_ERPIntegration_Microservice" | "SaaS_ProductImportExport_Microservice" | "SaaS_Product_GlobalElements_Microservice" | "SaaS_ProductListing_Microservice" | "SaaS_ProductAdmin_Microservice" | "SaaS_ProductDetails_Microservice";
    OnSuccess: (response: any) => void;
    OnError: (response: any) => void;
}