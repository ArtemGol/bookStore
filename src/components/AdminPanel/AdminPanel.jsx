import React from "react"
import AdminMenu from "./AdminMenu/AdminMenu"
import EditItem from "./EditItem/EditItem"
import Open from "./Open/Open"
import SaveItem from "./SaveItem/SaveItem"
import {Route, Switch} from "react-router-dom"
import AddItemFormContainer from "./AddItemFormContainer/AddItemFormContainer"
import {useSelector} from "react-redux";

const AdminPanel = () => {
    const {item} = useSelector(state => state.adminReducer)
    return (
        <div>
            <AdminMenu {...item} />
            <Switch>
                <Route exact path='/admin/' render={() => <AddItemFormContainer {...item}/>}/>
                <Route path='/admin/edit' render={() => <EditItem/>}/>
                <Route path='/admin/open' render={() => <Open/>}/>
                <Route path='/admin/save' render={() => <SaveItem/>}/>
                <Route path='/admin/*' render={() => <div><b>Error 404 not found</b></div>}/>
            </Switch>
        </div>
    )
}

export default AdminPanel