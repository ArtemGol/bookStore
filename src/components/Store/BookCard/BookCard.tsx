import React, {FC} from "react"
import {Card, Image, Icon, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {useDispatch, useSelector} from "react-redux"
import {addToCart} from "../../../redux/actions/cart"
import {showAlert} from "../../../redux/actions/alert"
import styles from './BookCard.module.css'
import {deleteBook, setItem} from "../../../redux/actions/admin"
import {setCurrentPage} from "../../../redux/actions/pagination"
import {ItemType} from "../../../Types/types";
import {AppStateType} from "../../../redux/reducers";

type BookCardType = {
    book: ItemType
    books: Array<ItemType>
    currentPage: number
    query: URLSearchParams
    history: any
    isAuth: boolean
}

export const BookCard: FC<BookCardType> = ({book, books, currentPage, query, history, isAuth}) => {
    const {id, title, author, image, price} = book
    const addedCount = useSelector((state: AppStateType) => state.cartReducer.items.reduce((count, book) => count + (book.id === id ? book.count : 0), 0))
    let dispatch = useDispatch()
    const addBook = () => {
        dispatch(addToCart(book))
        addedCount === 0 && dispatch(showAlert('Item added to cart', 'green', 1))
    }
    const deleteItem = () => {
        dispatch(deleteBook(id))
        dispatch(showAlert('Item was deleted', 'green', 5))
        if (books.length === 1) {
            dispatch(setCurrentPage(currentPage - 1))
            if (currentPage > 2) {
                query.set('page', String(currentPage - 1))
                history.push(`?${query.toString()}`)
            } else {
                query.delete('page')
                history.push(`?${query.toString()}`)
            }
        }
    }
    const editItem = () => {
        dispatch(setItem(book))
        history.push('/admin')
    }

    const onGoToItem = () => history.push(`/book/${id}`)

    return (
        <Card>
            <Image className={styles.image} onClick={onGoToItem} src={image} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name='rub'/>
                {price}
            </Card.Content>
            <Button onClick={addBook}>Add to Cart {addedCount > 0 && `(${addedCount})`}</Button>
            {isAuth &&
            <div className={styles.actionIcons}>
                <Icon onClick={editItem} className={styles.icon} name='edit' size='large'/>
                <Icon onClick={deleteItem} className={styles.icon} name='delete' size='large'/>
            </div>
            }
        </Card>
    )
}