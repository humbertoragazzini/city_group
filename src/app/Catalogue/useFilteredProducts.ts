//@ts-nocheck
import { useMemo } from "react";

export function useFilteredProducts(products, wordToSearch, IDtoSearch, category) {
    return useMemo(() => {
        // If there's an ID to search, filter by it
        if (IDtoSearch && IDtoSearch !== "") {
            return products.filter(p => p.id == IDtoSearch);
        }

        // If there's a search word, filter by it
        if (wordToSearch && wordToSearch.trim() !== "") {
            const searchWords = wordToSearch.toLowerCase().split(" ");
            return products.filter((item) => {
                const lowerItemWords = item.name.toLowerCase().split(" ");
                return searchWords.some(searchWord =>
                    lowerItemWords.some(itemWord => itemWord.includes(searchWord))
                );
            });
        }

        // if is any category selected 
        if (category && category !== "" && category !== "All") {
            return products.filter((item) => {
                return item.type == category
            });
        }
        // No filters active, return everything
        return products;
    }, [products, wordToSearch, IDtoSearch]);
}
