// Type definitions for reactstrap
// Project: https://github.com/reactstrap/reactstrap
// Definitions by: Kristoffer Dalby <https://github.com/kradalby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react/react.d.ts"/>


declare namespace Reactstrap {

    import React = __React;

    // <Button />
    interface IButtonProps extends React.HTMLProps<Button> {
        active: boolean;
        block: boolean;
        color: string;
        disabled: boolean;
        outline: boolean;
        tag: any;
        onClick: () => any;
        size: any; // this should be a string, but is prevented by HTMLProps
        children: any;
        className: any;
    }
    type Button = React.ClassicComponent<IButtonProps, {}>;
    var Button: React.ClassicComponentClass<IButtonProps>;

}

declare module "reactstrap" {
    export = Reactstrap;
}
