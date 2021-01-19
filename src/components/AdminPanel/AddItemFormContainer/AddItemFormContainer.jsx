import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setItem} from "../../../redux/actions/admin"
import AddItemForm from "./AddItemForm/AddItemForm"
import {v1 as uuidv1} from 'uuid'
import CheckAndSaveAddingItem from "./CheckAndSaveAddingItem/CheckAndSaveAddingItem"
import styles from './AddedItemFormContainer.module.css'

const AddItemFormContainer = ({...item}) => {
    const [activeMode, setActiveMode] = useState(false)
    const dispatch = useDispatch()
    const onSubmit = ({title, author, image, price}) => {
        let obj = {id: uuidv1(), title, author, image, price : Number(price), rating: 5}
        console.log(obj)
        dispatch(setItem(obj))
        setActiveMode(true)
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