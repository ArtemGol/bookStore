import React from 'react'
import {Header, Icon, Segment} from 'semantic-ui-react'
import styles from './CartIsEmpty.module.css'

export const CartIsEmpty = () => (
    <Segment className={styles.container} placeholder>
        <Header icon>
            <Icon name='cart' />
            Your cart is empty, if you want to add book, please go to the store
        </Header>
    </Segment>
)