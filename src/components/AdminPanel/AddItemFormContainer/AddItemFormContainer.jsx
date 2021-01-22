import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {setItem} from "../../../redux/actions/admin"
import AddItemForm from "./AddItemForm/AddItemForm"
import {v1 as uuidv1} from 'uuid'
import CheckAndSaveAddingItem from "./CheckAndSaveAddingItem/CheckAndSaveAddingItem"
import styles from './AddedItemFormContainer.module.css'
import {showAlert} from "../../../redux/actions/alert";

const AddItemFormContainer = ({...item}) => {
    const {items} = useSelector(state => state.booksReducer)
    const [activeMode, setActiveMode] = useState(false)
    const dispatch = useDispatch()
    const onSubmit = ({...formData}) => {
        let obj = {id: uuidv1(), ...formData, rating: 5}
        if (items.some(item => item.title.toLowerCase() === formData.title.toLowerCase()
            && item.author.toLowerCase() === formData.author.toLowerCase())) {
            dispatch(showAlert('Book is already exist', 'red', 10))
        }
        else {dispatch(setItem(obj))
        setActiveMode(true)}
    }
    return (
        <>
            {!activeMode
                ? <AddItemForm initialValues={item} onSubmit={onSubmit}/>
                : <div className={styles.checkAndSave}>
                    <CheckAndSaveAddingItem {...item} setActiveMode={setActiveMode}/>
                </div>
            }
        </>
    )
}

export default AddItemFormContainer