import Filter from "./Filter/Filter"
import {Card, Container} from "semantic-ui-react"
import BookCard from "./BookCard/BookCard"
import NotFound from "./NotFound/NotFound"
import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getBooks} from "../../redux/actions/books"
import Preloader from "../common/Preloader/Preloader"
import Paginator from "../common/Paginator/Paginator"
import {useQuery} from "../../hooks/hooks"
import {useHistory} from "react-router"
import {setCurrentPage} from "../../redux/actions/pagination"

const Store = () => {
    const {isReady, filterBy, totalBooksCount, pageSize, currentPage} = useSelector(state => state.booksReducer)

    const FirstPageItem = (currentPage - 1) * pageSize
    const LastPageItem = currentPage * pageSize

    const books = useSelector(state => state.booksReducer.items.slice(FirstPageItem, LastPageItem))

    const query = useQuery()
    const history = useHistory()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCurrentPage(query.get('page') || currentPage))
        books.length === 0 && dispatch(getBooks(books))
        //eslint-disable-next-line
    }, [])

    if (!isReady) {
        return <Preloader/>
    }
    return (
        <div>
            <Filter filterBy={filterBy}
                    query={query}
                    history={history}/>
            {totalBooksCount > pageSize
                ? <Paginator totalItemsCount={totalBooksCount}
                             pageSize={pageSize}
                             currentPage={currentPage}
                             query={query}
                             history={history}/>
                : ''
            }
            <br/> <br/>
            <Card.Group itemsPerRow={4}>
                {books && books.length > 0
                    ? books.map((book, i) =>
                        <BookCard currentPage={currentPage}
                                  key={i}
                                  book={book}
                                  books={books}
                                  query={query}
                                  history={history}/>)
                    : <Container>
                        <NotFound/>
                    </Container>
                }
            </Card.Group>
        </div>
    )
}

export default Store