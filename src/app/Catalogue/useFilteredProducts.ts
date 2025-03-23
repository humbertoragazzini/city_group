//@ts-nocheck
import { useMemo } from "react";

export function useFilteredProducts(products, wordToSearch, IDtoSearch, category) {
    return useMemo(() => {
        console.log(wordToSearch)
        console.log(IDtoSearch)
        console.log(category)
        let tempProduct = products;
        // If there's an ID to search, filter by it
        if (IDtoSearch && IDtoSearch !== "") {
            tempProduct = tempProduct.filter(p => p.id == IDtoSearch);
        }

        // If there's a search word, filter by it
        if (wordToSearch && wordToSearch.trim() !== "") {
            const searchWords = wordToSearch.toLowerCase().split(" ");
            tempProduct = tempProduct.filter((item) => {
                const lowerItemWords = item.name.toLowerCase().split(" ");
                return searchWords.some(searchWord =>
                    lowerItemWords.some(itemWord => itemWord.includes(searchWord))
                );
            });
        }

        // if is any category selected 
        if (category && category !== "" && category !== "All") {
            tempProduct = tempProduct.filter((item) => {
                return item.type == category
            });
        }
        // No filters active, return everything
        return tempProduct;
    }, [products, wordToSearch, IDtoSearch]);
}
