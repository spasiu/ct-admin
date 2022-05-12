import * as Apollo from "@apollo/client";
import { useMemo } from "react";

export const useProductTypeAhead = (query: (baseOptions?: any) => Apollo.QueryResult ) => {

    const {data: productMetadata} = query();

    return useMemo(() => {
        const productOptions = {
        year: Array<string>(),
        subcategory: Array<string>(),
        manufacturer: Array<string>(),
        brand: Array<string>(),
        series: Array<string>(),
        parallel: Array<string>(),
        insert: Array<string>(),
        memorabilia: Array<string>()
        };
        if (productMetadata) {
            const objects = productMetadata.Products ? productMetadata.Products : productMetadata.Hits;
            objects.forEach((product:any) => {
            productOptions.year.push(product.year);
            productOptions.manufacturer.push(product.manufacturer);
            productOptions.brand.push(product.brand);
            if (product.subcategory) productOptions.subcategory.push(product.subcategory);
            if (product.series) productOptions.series.push(product.series);
            if (product.parallel) productOptions.parallel.push(product.parallel);
            if (product.insert) productOptions.insert.push(product.insert);
            if (product.memorabilia) productOptions.memorabilia.push(product.memorabilia);
        })

        // dedupe arrays
        Object.entries(productOptions).forEach(entry => {
            productOptions[entry[0] as keyof typeof productOptions] = Array.from(new Set(entry[1]));
        })
        }
        return productOptions;
    }, [productMetadata]) 

}