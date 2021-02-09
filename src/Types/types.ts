export type CartItemType = {
    id: number | string
    count: number
    product: ItemType
}

export type ItemType = {
    id: string | number
    title: string
    author: string
    image: string
    price: number | string
    rating: number
}

export type AlertType = {
    visible: boolean
    payload: AlertPayloadType
}

export type AlertPayloadType = {
    text: string
    color: string
    id: number
}

