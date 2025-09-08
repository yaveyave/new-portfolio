import {MetadataRoute} from "next"


export default function sitemap(): MetadataRoute.Sitemap{
    return [
        {
            url:"https://oscaryave.dev",
            lastModified: new Date(),
        },
    ];
}