import React, {SyntheticEvent, useState} from 'react'
import {Button, Grid, Icon, Image, Rating, Segment} from "semantic-ui-react"
import style from './Book.module.css'
import {useHistory, useParams} from "react-router"
import {useDispatch, useSelector} from "react-redux"
import {Redirect} from "react-router"
import {addToCart} from "../../redux/actions/cart"
import {showAlert} from "../../redux/actions/alert"
import {AppStateType} from "../../redux/reducers"


export const Book = () => {
    const dispatch = useDispatch()
    const {bookId}: {bookId: string} = useParams()
    const item = useSelector((state: AppStateType) => state.booksReducer.items.find(item => String(item.id) === bookId))
    const addedCount = useSelector((state: AppStateType) => state.cartReducer.items.reduce((count, book) => count + (item && book.id === item.id ? book.count : 0), 0))
    const history = useHistory()

    const onGoBack = () => {
        history.goBack()
    }

    const onGoToCard = () => {
        history.push('/cart')
    }

    const addBook = () => {
        item && dispatch(addToCart(item))
        dispatch(showAlert('Item added to cart', 'green', 1))
    }
    const [rating, setRating] = useState(item && item.rating)

    const onSetRating = (e: SyntheticEvent, {rating}: any) => {
        setRating(item && (rating + item.rating) / 2)
    }

    if (!item) {
        return <Redirect to={'/store'}/>
    }
    return (
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column width={6}>
                    <Image src={item.image} size='large' rounded/>
                </Grid.Column>
                <Grid.Column>
                    <Segment raised className={style.book}>
                        Title:
                        <div>{item.title}</div>
                        Author:
                        <div>{item.author}</div>
                        Price:
                        <div>
                            {item.price}
                            <Icon name='rub'/>
                        </div>
                        Rating:
                        <div><Rating maxRating={5}
                                     rating={rating}
                                     icon='star'
                                     size='huge'
                                     onRate={onSetRating}/></div>
                    </Segment>
                    <div className={style.buttons}>
                        {addedCount > 0
                            ? <Button color='blue' size='massive' className={style.button} onClick={onGoToCard}>
                                Chek Out
                            </Button>
                            : <Button color='green' size='massive' className={style.button} onClick={addBook}>
                            Buy now!
                            </Button>
                        }
                        <Button size='massive' className={style.button} onClick={onGoBack}>
                            Back to store
                        </Button>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}