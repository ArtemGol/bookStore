import React from "react"
import {Card, Container} from "semantic-ui-react"
import {CardMainComponent} from "./Card"
import {useSelector} from "react-redux"
import {ProviderLayout} from "../common/Layout/layout"
import {CartIsEmpty} from "./CartIsEmpty/CartIsEmpty"
import {AppStateType} from "../../redux/reducers"

export const CartContainer = () => {
    // const items = useSelector(state => uniqBy(state.cartReducer.items, o => o.id)) удаляет одинаковые id и возвращает 1
    const items = useSelector((state: AppStateType) => state.cartReducer.items)
    return (
        <ProviderLayout hasHeader={true}>
            <Card.Group itemsPerRow={5}>
                {items.length > 0
                    ? items.map((book, i) =>
                        <CardMainComponent key={i + 1} {...book.product}/>)
                    : <Container>
                        <CartIsEmpty/>
                    </Container>
                }
            </Card.Group>
        </ProviderLayout>
    )
}