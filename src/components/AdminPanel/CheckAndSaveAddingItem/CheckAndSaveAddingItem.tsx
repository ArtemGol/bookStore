import React, {FC, useEffect} from 'react'
import {Button, Card, Icon, Image} from "semantic-ui-react"
import {addNewBook, editBook, setItem} from "../../../redux/actions/admin"
import {showAlert} from "../../../redux/actions/alert"
import {useDispatch} from "react-redux"
import {useHistory} from "react-router"
import {ItemType} from "../../../Types/types"

type CheckAndSaveAddingItemType = {
    items: Array<ItemType>
    item: ItemType | null
    setActiveMode: (mode: boolean) => void
}

export const CheckAndSaveAddingItem: FC<CheckAndSaveAddingItemType> = ({items, item, setActiveMode}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        !item && setActiveMode(false)
        //eslint-disable-next-line
    }, [item])

    const backToForm = () => {
        setActiveMode(false)
    }

    const AddBook = () => {
        if (items.some(o => item && (o.id === item.id))) {
            item && dispatch(editBook(item))
            dispatch(setItem(null))
            dispatch(showAlert('Book was edit', 'green', 15))
            history.goBack()
        } else {
            item && dispatch(addNewBook(item))
            dispatch(setItem(null))
            dispatch(showAlert('New item was added', 'green', 4))
        }
    }

    return (
        <Card>
            <div className='ui two buttons'>
                <Button onClick={backToForm}>
                    Change
                </Button>
                {items.some(o => item && (o.id === item.id))
                    ? <Button onClick={AddBook}>
                        Edit
                    </Button>
                    : <Button onClick={AddBook}>
                        Add
                    </Button>
                }
            </div>
            <Image src={item && item.image} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{item && item.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{item && item.author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name='rub'/>
                {item && item.price}
            </Card.Content>

        </Card>
    )
}