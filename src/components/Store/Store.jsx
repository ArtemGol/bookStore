import Filter from "./Filter/Filter"
import {Card, Container} from "semantic-ui-react"
import BookCard from "./BookCard/BookCard"
import NotFound from "./NotFound/NotFound"
import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getBooks} from "../../redux/actions/books"
import Preloader from "../common/Preloader/Preloader"

const Store = () => {
    const {items: books, isReady, filterBy} = useSelector(state => state.booksReducer)

    const dispatch = useDispatch()
    useEffect(
        () => {
            books.length === 0 && dispatch(getBooks(books))
            //eslint-disable-next-line
        }, []
    )

    if (!isReady) {
        return <Preloader/>
    }
    return (
        <div>
            <Filter filterBy={filterBy}/>
            <br/>
            <Card.Group itemsPerRow={4}>
                {books && books.length > 0
                    ? books.map((book, i) =>
                        <BookCard key={i} {...book}/>)
                    : <Container>
                        <NotFound/>
                    </Container>
                }
            </Card.Group>
        </div>
    )
}

export default Store