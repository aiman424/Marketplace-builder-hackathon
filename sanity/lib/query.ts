import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
    *[_type == "product"]{
    _id,
    name,
    category,
    price,
    description,
    dimensions,
    features,
    quantity,
    "imageUrl":image.asset->url
    }`)

    export const fourpro= defineQuery(`
        *[_type == "product"]{
        _id,
        name,
        category,
        description,
        dimensions,
        features,
        quantity,
        "imageUrl":image.asset->url
        }`
)