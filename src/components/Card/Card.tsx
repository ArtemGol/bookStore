import React, {FC, ReactText} from 'react'
import {Button, Card, Icon, Image} from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux"
import {addToCart, removeFromCart, removeOneProduct} from "../../redux/actions/cart"
import {showAlert} from "../../redux/actions/alert"
import {AppStateType} from "../../redux/reducers";

type CardMainComponentType = {
    title: string
    id: ReactText
    image: string
    author: string
    price: ReactText
    rating: number
}

export const CardMainComponent: FC<CardMainComponentType> = ({
                                                                 title,
                                                                 id,
                                                                 image,
                                                                 author,
                                                                 price,
                                                                 rating
                                                             }) => {
    let dispatch = useDispatch()
    let addedCount = useSelector((state: AppStateType) => state.cartReducer.items.reduce((count, book) => count + (book.id === id ? book.count : 0), 0))
    let items = useSelector((state: AppStateType) => state.cartReducer.items)
    let obj = {id, title, author, image, price, rating}

    const removeMinusOneBookFromCart = () => {
        if (addedCount !== 1) {
            dispatch(removeOneProduct(obj))
        }
        if (addedCount === 1) {
            dispatch(removeFromCart(obj))
            dispatch(showAlert('Item delete from cart', 'green', 2))
            if (items.length < 2) {
                dispatch(showAlert('Cart is clear', 'blue', 3))
            }
        }
    }
    const addPlusOneBookInCart = () => {
        dispatch(addToCart(obj))
    }
    return (
        <Card>
            <Image src={image} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name='rub'/>
                {addedCount > 0 ? Number(price) * addedCount : price}({addedCount})
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='red' onClick={removeMinusOneBookFromCart}>
                        Delete
                    </Button>
                    <Button basic color='green' onClick={addPlusOneBookInCart}>
                        Add
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}