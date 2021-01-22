import Filter from "./Filter/Filter"
import {Card, Container} from "semantic-ui-react"
import BookCard from "./BookCard/BookCard"
import NotFound from "./NotFound/NotFound"
import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getBooks} from "../../redux/actions/books"
import Preloader from "../common/Preloader/Preloader"
import Paginator from "../common/Paginator/Paginator"

const Store = () => {
    const {isReady, filterBy, totalBooksCount, pageSize, currentPage} = useSelector(state => state.booksReducer)

    const FirstPageItem = (currentPage - 1) * pageSize
    const LastPageItem = currentPage * pageSize

    const books = useSelector(state => state.booksReducer.items.slice(FirstPageItem, LastPageItem))

    const dispatch = useDispatch()
    useEffect(
        () => {
            books.length === 0 && dispatch(getBooks(books))
            //eslint-disable-next-line
        }, [])

    if (!isReady) {
        return <Preloader/>
    }
    return (
        <div>
            <Filter filterBy={filterBy}/>
            {totalBooksCount > pageSize
                ? <Paginator totalItemsCount={totalBooksCount} pageSize={pageSize} currentPage={currentPage}/>
                : ''
            }
            <br/> <br/>
            <Card.Group itemsPerRow={4}>
                {books && books.length > 0
                    ? books.map((book, i) =>
                        <BookCard key={i} book={book} books={books} currentPage={currentPage}/>)
                    : <Container>
                        <NotFound/>
                    </Container>
                }
            </Card.Group>
        </div>
    )
}

export default Store