interface ISubCategory {
    collectionName: string;
    collectionType: string;
    alias: string;
    categoryURL: string;
    productCount: number;
    categoryImageURL: string;
    collectionGuid: string;
    subCategories: any;
    parentCollectionGuid: any;
    collectionBannerImageName: string;
    descriptionText: string;
    bannerText: string;
    furtherDescriptionText: string;
    offerBannerImageName: string;
}

export interface ICategory {
    collectionName: string;
    collectionType: string;
    alias: string;
    categoryURL: string;
    productCount: number;
    categoryImageURL: string;
    collectionGuid: string;
    subCategories?: ISubCategory[];
    parentCollectionGuid: any;
    collectionBannerImageName: string;
    descriptionText: string;
    bannerText: string;
    furtherDescriptionText: string;
    offerBannerImageName?: string;
}

export interface ICategoryMenuResponse {
    statusCode: number;
    message: string;
    data: ICategory[];
    categorydata: any;
}

