import React, {useEffect} from 'react'
import {Button, Card, Icon, Image} from "semantic-ui-react";

const CheckAndSaveAddingItem = ({image, title, author, price, setActiveMode}) => {
    useEffect(() => {
        image === undefined && setActiveMode(false)
        //eslint-disable-next-line
    }, [image])
    const backToForm = () => {
        setActiveMode(false)
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
                <a href='##'>
                    <Icon name='rub'/>
                    {price}
                </a>
            </Card.Content>
            <Button onClick={backToForm}>Change the data</Button>
        </Card>
    )
}

export default CheckAndSaveAddingItem