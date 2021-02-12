import {Filter} from "./Filter/Filter"
import {Button, Card, Container} from "semantic-ui-react"
import {BookCard} from "./BookCard/BookCard"
import {NotFound} from "./NotFound/NotFound"
import React, {FC, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getBooks} from "../../redux/actions/books"
import {Preloader} from "../common/Preloader/Preloader"
import {Paginator} from "../common/Paginator/Paginator"
import {useQuery} from "../../hooks/hooks"
import {useHistory} from "react-router"
import {setCurrentPage} from "../../redux/actions/pagination"
import styles from './Store.module.css'
import {ProviderLayout} from "../common/Layout/layout"
import {AppStateType} from "../../redux/reducers"

export const Store: FC = () => {
    const {isReady, filterBy, totalBooksCount, pageSize, currentPage} = useSelector((state: AppStateType) => state.booksReducer)
    const {isAuth} = useSelector((state: AppStateType) => state.authReducer)

    const FirstPageItem = (currentPage - 1) * pageSize
    const LastPageItem = currentPage * pageSize

    const books = useSelector((state: AppStateType) => state.booksReducer.items.slice(FirstPageItem, LastPageItem))

    const query: URLSearchParams = useQuery()
    const history = useHistory()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCurrentPage(Number(query.get('page')) || 1))
        books.length === 0 && dispatch(getBooks())
        //eslint-disable-next-line
    }, [])

    if (!isReady) {
        return <Preloader/>
    }

    const onAddBook = () => history.push('/admin')
    return (
        <ProviderLayout hasHeader={true}>
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
            {isAuth &&
            <Button className={styles.button}
                    floated='right'
                    size={'large'}
                    onClick={onAddBook}>
                Add new book
            </Button>
            }
            <div className={styles.bookCard}>
                <Card.Group itemsPerRow={4}>
                    {books && books.length > 0
                        ? books.map((book, i) =>
                            <BookCard currentPage={currentPage}
                                      key={i}
                                      book={book}
                                      books={books}
                                      query={query}
                                      history={history}
                                      isAuth={isAuth}/>)
                        : <Container>
                            <NotFound/>
                        </Container>
                    }
                </Card.Group>
            </div>
        </ProviderLayout>
    )
}