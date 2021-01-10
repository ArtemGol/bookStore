import orderBy from "lodash/orderBy"

export const sortBy = (books, filterBy) => {
    switch (filterBy) {
        case 'Price High':
            return orderBy(books, 'price', 'desc')
        case 'Price Low':
            return orderBy(books, 'price', 'asc')
        case 'Author':
            return orderBy(books, 'author', 'desk')
        case 'All':
        default:
            return books
    }
}