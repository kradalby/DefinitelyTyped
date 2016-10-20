// ================================================================================
///<reference path="reactstrap.d.ts"/>
///<reference path="../react/react.d.ts"/>

// Imports
// --------------------------------------------------------------------------------
import * as React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';


export class ReactstrapTest extends Component<any, any> {
    public render() {
        return (
            <Button>Default</Button>
        )
    }
}