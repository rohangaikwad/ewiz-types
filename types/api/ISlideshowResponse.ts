interface Resources {
    "SlideShow.SlideShowName": string;
    "SlideShow.SlideShowTypeSlideShowType": string;
    "SlideShow.Active": string;
    "SlideShow.SlideDelayTime": string;
    "SlideShow.SlideEffectTime": string;
    "SlideShow.Height": string;
    "SlideShow.OverlayFontSize": string;
    "SlideShow.OverlayForeColor": string;
    "SlideShow.OverlayBGColor": string;
    "SlideShow.OverLayPosition": string;
    "SlideShow.ErrorFontsize": string;
    "SlideShow.ErrorOverlayheight": string;
    "SlideShow.HeIsOverLayTextight": string;
    "SlideShow.ShowPagination": string;
}

interface ISlideShowImage {
    slideShowImageGuid?: string;
    imageName: string;
    navigateUrl?: string;
    displayOrder?: number;
    isNewWindow?: boolean;
    altText: string;
    overlayText?: string;
    imageURL: string;
}

export interface ISlideShowDetails {
    slideShowGuid?: string;
    slideShowName?: string;
    slideShowTypeGuid?: string;
    slideDelayTime?: number;
    slideEffectTime?: number;
    showPagination?: boolean;
    isOverLayText?: boolean;
    height?: number;
    items?: number;
    margin?: number;
    loop?: boolean;
    center?: boolean;
    stagePadding?: number;
    nav?: boolean;
    rewind?: boolean;
    dots?: boolean;
    lazyload?: boolean;
    autoplay?: boolean;
    autoplayTimeout?: number;
    autoplayHoverPause?: boolean;
    autoWidth?: boolean;
    slideShowImages: ISlideShowImage[];
    resources?: Resources;
}

interface Data {
    resources: Resources;
    slideShowDetails: ISlideShowDetails;
}

export interface ISlideshowResponse {
    statusCode: string;
    message: string;
    data: Data | null;
}