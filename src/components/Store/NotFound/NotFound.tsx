import React from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'

export const NotFound = () => (
    <Segment placeholder>
        <Header icon>
            <Icon name='search' />
            We don't have any books matching your query. <br/>
            Please try to find something else. Sorry for the inconvenience.
        </Header>
    </Segment>
)