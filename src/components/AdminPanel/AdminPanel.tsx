import React, {FC, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {setItem} from "../../redux/actions/admin"
import {AddItemReduxForm} from "./AddItemForm/AddItemForm"
import {v1 as uuid} from 'uuid'
import {CheckAndSaveAddingItem} from "./CheckAndSaveAddingItem/CheckAndSaveAddingItem"
import styles from './AdminPanel.module.css'
import {showAlert} from "../../redux/actions/alert"
import {Redirect} from "react-router-dom"
import {AppStateType} from "../../redux/reducers"
import {ItemType} from "../../Types/types"

export type AdminFormValuesType = {
    author: string
    title: string
    image: string
    price: number | string
}

export const AdminPanel: FC = () => {
    const item = useSelector((state: AppStateType) => state.adminReducer.item)
    const items = useSelector((state: AppStateType) => state.booksReducer.items)
    const isAuth = useSelector((state: AppStateType) => state.authReducer.isAuth)
    const [activeMode, setActiveMode] = useState(false)
    const dispatch = useDispatch()

    const onSubmit = (formData: AdminFormValuesType) => {
        const {author, title, image, price} = formData
        if (!item && items.some((item) => item.title.toLowerCase() === formData.title.toLowerCase()
            && item.author.toLowerCase() === formData.author.toLowerCase())) {
            dispatch(showAlert('Book is already exist', 'red', 10))
        }
        else if (item) {
            const obj: ItemType = {id: item.id, author, title, image, price, rating: item.rating}
            dispatch(setItem(obj))
            setActiveMode(true)
        }
        else {
            const obj = {id: uuid(), author, title, image, price, rating: 5}
            dispatch(setItem(obj))
            setActiveMode(true)
        }
    }
    if(!isAuth){
        return <Redirect to={'/login'}/>
    }
    return (
        <>
            {!activeMode
                ? <AddItemReduxForm initialValues={item} item={item} onSubmit={onSubmit}/>
                : <div className={styles.checkAndSave}>
                    <CheckAndSaveAddingItem item={item} items={items} setActiveMode={setActiveMode}/>
                </div>
            }
        </>
    )
}