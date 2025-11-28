import React, { Component } from 'react';
import { Badge, Stack } from 'react-bootstrap';


class Title extends Component {
    render() {
        return (
            <Stack gap={2} direction="horizontal">
                <h2>{this.props.name}</h2>
            </Stack>
        )
    }
}

export default Title;