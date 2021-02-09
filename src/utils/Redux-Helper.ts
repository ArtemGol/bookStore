import orderBy from "lodash/orderBy"
import {ItemType} from "../Types/types";

export const sortBy = (books: Array<ItemType>, filterBy: string) => {
    switch (filterBy) {
        case 'Price High':
            return orderBy(books, 'price', 'desc')
        case 'Price Low':
            return orderBy(books, 'price', 'asc')
        case 'Author':
            return orderBy(books, 'author', 'asc')
        case 'All':
        default:
            return books
    }
}