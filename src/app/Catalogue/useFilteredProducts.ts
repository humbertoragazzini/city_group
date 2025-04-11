//@ts-nocheck
import { useMemo } from "react";

export function useFilteredProducts(products, wordToSearch, IDtoSearch, category, subcategory, order, isStockA) {
    return useMemo(() => {
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
                return item.category == category
            });
        }

        // if is any subcategory selected 
        if (subcategory && subcategory !== "" && subcategory !== "All") {
            tempProduct = tempProduct.filter((item) => {
                return item.subcategory == subcategory
            });
        }

        // if is any subcategory selected 
        tempProduct = tempProduct.filter((item) => {
            console.log("item", item.available)
            console.log("isStockA", isStockA)
            console.log((item.available === isStockA))
            return (item.available === isStockA)
        });

        // No filters active, return everything
        if (order) {
            return tempProduct.sort((a, b) => a.name.localeCompare(b.name));;
        } else {
            return tempProduct.sort((a, b) => b.name.localeCompare(a.name));;
        }
    }, [products, wordToSearch, IDtoSearch, category, subcategory, order]);
}
