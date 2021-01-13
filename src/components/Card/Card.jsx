import React from 'react'
import {Button, Card, Icon, Image} from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart, removeOneProduct} from "../../redux/actions/cart";
import {Switch} from "react-router-dom";

const CardMainComponent = ({title, id, image, author, price}) => {
    let dispatch = useDispatch()
    let addedCount = useSelector(state => state.cartReducer.items.reduce((count, book) => count + (book.id === id ? book.count : 0), 0))
    let obj = {title, id, image, author, price}

    let deleteBook = () => {
        if (addedCount!==1) {
            dispatch(removeOneProduct(obj))
        }
        if (addedCount===1) {
            dispatch(removeFromCart(obj))
        }
    }
    const addBook = () => {
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
                <a>
                    <Icon name='rub'/>
                    {addedCount > 0 ? price * addedCount : price}({addedCount})
                </a>
            </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='red' onClick={deleteBook}>
                            Delete
                        </Button>
                        <Button basic color='green' onClick={addBook}>
                            Add
                        </Button>
                    </div>
                </Card.Content>
        </Card>

    )
}

export default CardMainComponent