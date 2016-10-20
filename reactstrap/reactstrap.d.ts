// Type definitions for reactstrap
// Project: https://github.com/reactstrap/reactstrap
// Definitions by: Kristoffer Dalby <https://github.com/kradalby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react/react.d.ts"/>


declare namespace Reactstrap {

    import React = __React;

    type tag = () => any | string;
    type stringOrNumberType = number | string;

    // <Alert />
    interface IAlertProps extends React.HTMLProps<Alert> {
        children?: React.ReactNode;
        className?: any;
        color?: string;
        isOpen?: boolean;
        toggle?: () => boolean;
        tag?: tag;
        transitionAppearTimeout?: number;
        transitionEnterTimeout?: number;
        transitionLeaveTimeout?: number;
    }
    type Alert = React.ClassicComponent<IAlertProps, {}>;
    var Alert: React.ClassicComponentClass<IAlertProps>;

    // <Breadcrumb />
    interface IBreadcrumbProps extends React.HTMLProps<Breadcrumb> {
        tag?: any;
        className?: any;
    }
    type Breadcrumb = React.ClassicComponent<IBreadcrumbProps, {}>;
    var Breadcrumb: React.ClassicComponentClass<IBreadcrumbProps>;

    // <BreadcrumbItem />
    interface IBreadcrumbItemProps extends React.HTMLProps<BreadcrumbItem> {
        tag?: tag;
        active?: boolean;
        className?: any;
    }
    type BreadcrumbItem = React.ClassicComponent<IBreadcrumbItemProps, {}>;
    var BreadcrumbItem: React.ClassicComponentClass<IBreadcrumbItemProps>;

    // <Button />
    interface IButtonProps extends React.HTMLProps<Button> {
        active?: boolean;
        block?: boolean;
        color?: string;
        disabled?: boolean;
        outline?: boolean;
        tag?: tag;
        onClick?: () => any;
        size?: any; // this should be a string, but is prevented by HTMLProps
        children?: React.ReactNode;
        className?: any;
    }
    type Button = React.ClassicComponent<IButtonProps, {}>;
    var Button: React.ClassicComponentClass<IButtonProps>;

    // <ButtonDropdown />
    interface IButtonDropdownProps extends React.HTMLProps<ButtonDropdown> {
        children?: React.ReactNode;
    }
    type ButtonDropdown = React.ClassicComponent<IButtonDropdownProps, {}>;
    var ButtonDropdown: React.ClassicComponentClass<IButtonDropdownProps>;

    // <ButtonGroup />
    interface IButtonGroupProps extends React.HTMLProps<ButtonGroup> {
        'aria-label'?: string;
        className?: string;
        role?: string;
        size?: any; // this should be a string, but is prevented by HTMLProps
        vertical?: boolean;
    }
    type ButtonGroup = React.ClassicComponent<IButtonGroupProps, {}>;
    var ButtonGroup: React.ClassicComponentClass<IButtonGroupProps>;

    // <ButtonToolbar />
    interface IButtonToolbarProps extends React.HTMLProps<ButtonToolbar> {
        'aria-label'?: string;
        className?: string;
        role?: string;
    }
    type ButtonToolbar = React.ClassicComponent<IButtonToolbarProps, {}>;
    var ButtonToolbar: React.ClassicComponentClass<IButtonToolbarProps>;

    // <Card />
    interface ICardProps extends React.HTMLProps<Card> {
        tag?: tag;
        inverse?: boolean;
        color?: string;
        block?: boolean;
        outline?: boolean;
        className?: any;
    }
    type Card = React.ClassicComponent<ICardProps, {}>;
    var Card: React.ClassicComponentClass<ICardProps>;

    // <CardBlock />
    interface ICardBlockProps extends React.HTMLProps<CardBlock> {
        tag?: tag;
        className?: any;
    }
    type CardBlock = React.ClassicComponent<ICardBlockProps, {}>;
    var CardBlock: React.ClassicComponentClass<ICardBlockProps>;

    // <CardColumns />
    interface ICardColumnsProps extends React.HTMLProps<CardColumns> {
        tag?: tag;
        className?: any;
    }
    type CardColumns = React.ClassicComponent<ICardColumnsProps, {}>;
    var CardColumns: React.ClassicComponentClass<ICardColumnsProps>;

    // <CardDeck />
    interface ICardDeckProps extends React.HTMLProps<CardDeck> {
        tag?: tag;
        className?: any;
        flex?: boolean;
    }
    type CardDeck = React.ClassicComponent<ICardDeckProps, {}>;
    var CardDeck: React.ClassicComponentClass<ICardDeckProps>;

    // <CardFooter />
    interface ICardFooterProps extends React.HTMLProps<CardFooter> {
        tag?: tag;
        className?: any;
    }
    type CardFooter = React.ClassicComponent<ICardFooterProps, {}>;
    var CardFooter: React.ClassicComponentClass<ICardFooterProps>;

    // <CardGroup />
    interface ICardGroupProps extends React.HTMLProps<CardGroup> {
        tag?: tag;
        className?: any;
    }
    type CardGroup = React.ClassicComponent<ICardGroupProps, {}>;
    var CardGroup: React.ClassicComponentClass<ICardGroupProps>;

    // <CardHeader />
    interface ICardHeaderProps extends React.HTMLProps<CardHeader> {
        tag?: tag;
        className?: any;
    }
    type CardHeader = React.ClassicComponent<ICardHeaderProps, {}>;
    var CardHeader: React.ClassicComponentClass<ICardHeaderProps>;

    // <CardImg />
    interface ICardImgProps extends React.HTMLProps<CardImg> {
        tag?: tag;
        className?: any;
        top?: boolean;
        bottom?: boolean;
    }
    type CardImg = React.ClassicComponent<ICardImgProps, {}>;
    var CardImg: React.ClassicComponentClass<ICardImgProps>;

    // <CardImgOverlay />
    interface ICardImgOverlayProps extends React.HTMLProps<CardImgOverlay> {
        tag?: tag;
        className?: any;
    }
    type CardImgOverlay = React.ClassicComponent<ICardImgOverlayProps, {}>;
    var CardImgOverlay: React.ClassicComponentClass<ICardImgOverlayProps>;

    // <CardLink />
    interface ICardLinkProps extends React.HTMLProps<CardLink> {
        tag?: tag;
        className?: any;
    }
    type CardLink = React.ClassicComponent<ICardLinkProps, {}>;
    var CardLink: React.ClassicComponentClass<ICardLinkProps>;

    // <CardSubtitle />
    interface ICardSubtitleProps extends React.HTMLProps<CardSubtitle> {
        tag?: tag;
        className?: any;
    }
    type CardSubtitle = React.ClassicComponent<ICardSubtitleProps, {}>;
    var CardSubtitle: React.ClassicComponentClass<ICardSubtitleProps>;

    // <CardText />
    interface ICardTextProps extends React.HTMLProps<CardText> {
        tag?: tag;
        className?: any;
    }
    type CardText = React.ClassicComponent<ICardTextProps, {}>;
    var CardText: React.ClassicComponentClass<ICardTextProps>;

    // <CardTitle />
    interface ICardTitleProps extends React.HTMLProps<CardTitle> {
        tag?: tag;
        className?: any;
    }
    type CardTitle = React.ClassicComponent<ICardTitleProps, {}>;
    var CardTitle: React.ClassicComponentClass<ICardTitleProps>;

    // <Col />
    type columnShape = {
        size?: stringOrNumberType;
        push?: stringOrNumberType;
        pull?: stringOrNumberType;
        offset?: stringOrNumberType;
    };
    type columnType = boolean | number | string | columnShape;

    interface IColProps extends React.HTMLProps<Col> {
        xs?: columnType;
        sm?: columnType;
        md?: columnType;
        lg?: columnType;
        xl?: columnType;
        className?: any;
    }
    type Col = React.ClassicComponent<IColProps, {}>;
    var Col: React.ClassicComponentClass<IColProps>;

    // <Container />
    interface IContainerProps extends React.HTMLProps<Container> {
        fluid?: boolean;
        className?: any;
    }
    type Container = React.ClassicComponent<IContainerProps, {}>;
    var Container: React.ClassicComponentClass<IContainerProps>;

    // <Dropdown />
    interface IDropdownProps extends React.HTMLProps<Dropdown> {
        disabled?: boolean;
        dropup?: boolean;
        group?: boolean;
        isOpen?: boolean;
        size?: any; // this should be a string, but is prevented by HTMLProps
        tag?: tag;
        teather?: boolean | {};
        toggle?: () => boolean;
        children?: React.ReactNode;
        className?: any;
    }
    type Dropdown = React.ClassicComponent<IDropdownProps, {}>;
    var Dropdown: React.ClassicComponentClass<IDropdownProps>;

    // <DropdownItem />
    interface IDropdownItemProps extends React.HTMLProps<DropdownItem> {
        children?: React.ReactNode;
        disabled?: boolean;
        divider?: boolean;
        tag?: tag;
        header?: boolean;
        onClick?: () => any;
        className?: any;
    }
    type DropdownItem = React.ClassicComponent<IDropdownItemProps, {}>;
    var DropdownItem: React.ClassicComponentClass<IDropdownItemProps>;

    // <DropdownMenu />
    interface IDropdownMenuProps extends React.HTMLProps<DropdownMenu> {
        children: React.ReactNode;
        right?: boolean;
        className?: any;
    }
    type DropdownMenu = React.ClassicComponent<IDropdownMenuProps, {}>;
    var DropdownMenu: React.ClassicComponentClass<IDropdownMenuProps>;

    // <DropdownToggle />
    interface IDropdownToggleProps extends React.HTMLProps<DropdownToggle> {
        caret?: boolean;
        children?: React.ReactNode;
        className?: any;
        disabled?: boolean;
        onClick?: () => any;
        'data-toggle'?: string;
        'aria-haspopup'?: boolean;
        split: boolean;
        tag: tag;
    }
    type DropdownToggle = React.ClassicComponent<IDropdownToggleProps, {}>;
    var DropdownToggle: React.ClassicComponentClass<IDropdownToggleProps>;

    // <Fade />
    interface IFadeProps extends React.HTMLProps<Fade> {
        baseClass?: string;
        baseClassIn?: string;
        tag?: tag;
        className?: string;
        transitionAppearTimeout?: number;
        transitionEnterTimeout?: number;
        transitionLeaveTimeout?: number;
        transitionAppear?: boolean;
        transitionEnter?: boolean;
        transitionLeave?: boolean;
        onLeave?: () => any;
        onEnter?: () => any;
    }
    type Fade = React.ClassicComponent<IFadeProps, {}>;
    var Fade: React.ClassicComponentClass<IFadeProps>;

    // <Form />
    interface IFormProps extends React.HTMLProps<Form> {
        children?: React.ReactNode;
        inline?: boolean;
        tag?: tag;
        className?: string;
    }
    type Form = React.ClassicComponent<IFormProps, {}>;
    var Form: React.ClassicComponentClass<IFormProps>;

    // <FormFeedback />
    interface IFormFeedbackProps extends React.HTMLProps<FormFeedback> {
        children?: React.ReactNode;
        tag?: tag;
        className?: string;
    }
    type FormFeedback = React.ClassicComponent<IFormFeedbackProps, {}>;
    var FormFeedback: React.ClassicComponentClass<IFormFeedbackProps>;

    // <FormGroup />
    interface IFormGroupProps extends React.HTMLProps<FormGroup> {
        children?: React.ReactNode;
        row?: boolean;
        check?: boolean;
        disabled?: boolean;
        tag?: tag;
        color?: string;
        className?: string;
    }
    type FormGroup = React.ClassicComponent<IFormGroupProps, {}>;
    var FormGroup: React.ClassicComponentClass<IFormGroupProps>;

    // <FormText />
    interface IFormTextProps extends React.HTMLProps<FormText> {
        children?: React.ReactNode;
        inline?: boolean;
        tag?: tag;
        color?: string;
        className?: string;
    }
    type FormText = React.ClassicComponent<IFormTextProps, {}>;
    var FormText: React.ClassicComponentClass<IFormTextProps>;

    // <Input />
    interface IInputProps extends React.HTMLProps<Input> {
        children?: React.ReactNode;
        type?: string;
        size?: any; // this should be a string, but is prevented by HTMLProps
        static?: boolean;
        addon?: boolean;
        className?: string;
    }
    type Input = React.ClassicComponent<IInputProps, {}>;
    var Input: React.ClassicComponentClass<IInputProps>;

    // <InputGroup />
    interface IInputGroupProps extends React.HTMLProps<InputGroup> {
        tag?: tag;
        size?: any; // this should be a string, but is prevented by HTMLProps
        className?: any;
    }
    type InputGroup = React.ClassicComponent<IInputGroupProps, {}>;
    var InputGroup: React.ClassicComponentClass<IInputGroupProps>;

    // <InputGroupAddon />
    interface IInputGroupAddonProps extends React.HTMLProps<InputGroupAddon> {
        tag?: tag;
        className?: any;
    }
    type InputGroupAddon = React.ClassicComponent<IInputGroupAddonProps, {}>;
    var InputGroupAddon: React.ClassicComponentClass<IInputGroupAddonProps>;

    // <InputGroupButton />
    interface IInputGroupButtonProps extends React.HTMLProps<InputGroupButton> {
        tag?: tag;
        children?: React.ReactNode;
        groupClassName?: any;
        groupAttributes?: {};
        className?: any;
    }
    type InputGroupButton = React.ClassicComponent<IInputGroupButtonProps, {}>;
    var InputGroupButton: React.ClassicComponentClass<IInputGroupButtonProps>;

    // <Jumbotron />
    interface IJumbotronProps extends React.HTMLProps<Jumbotron> {
        tag?: tag;
        fluid?: boolean;
        className?: any;
    }
    type Jumbotron = React.ClassicComponent<IJumbotronProps, {}>;
    var Jumbotron: React.ClassicComponentClass<IJumbotronProps>;

    // <Label />
    interface ILabelProps extends React.HTMLProps<Label> {
        children?: React.ReactNode;
        hidden?: boolean;
        check?: boolean;
        inline?: boolean;
        disabled?: boolean;
        size?: any; // this should be a string, but is prevented by HTMLProps
        for?: string,
        tag?: tag;
        className?: string;
        xs?: columnType;
        sm?: columnType;
        md?: columnType;
        lg?: columnType;
        xl?: columnType;
    }
    type Label = React.ClassicComponent<ILabelProps, {}>;
    var Label: React.ClassicComponentClass<ILabelProps>;

    // <ListGroup />
    interface IListGroupProps extends React.HTMLProps<ListGroup> {
        tag?: tag;
        flush?: boolean;
        className?: any;
    }
    type ListGroup = React.ClassicComponent<IListGroupProps, {}>;
    var ListGroup: React.ClassicComponentClass<IListGroupProps>;

    // <Media />
    interface IMediaProps extends React.HTMLProps<Media> {
        body?: boolean;
        bottom?: boolean;
        children?: React.ReactNode;
        className?: string;
        heading?: boolean;
        left?: boolean;
        list?: any; // this should be a string, but is prevented by HTMLProps
        middle?: boolean;
        object?: boolean;
        right?: boolean;
        tag?: tag;
        top?: boolean;
    }
    type Media = React.ClassicComponent<IMediaProps, {}>;
    var Media: React.ClassicComponentClass<IMediaProps>;

    // <Modal />
    interface IModalProps extends React.HTMLProps<Modal> {
        isOpen?: boolean;
        size?: any; // this should be a string, but is prevented by HTMLProps
        toggle: () => boolean;
        keyboard?: boolean;
        backdrop?: boolean | 'static'
        onEnter?: () => any;
        onExit?: () => any;
        children?: React.ReactNode;
        className?: any;
    }
    type Modal = React.ClassicComponent<IModalProps, {}>;
    var Modal: React.ClassicComponentClass<IModalProps>;

    // <ModalBody />
    interface IModalBodyProps extends React.HTMLProps<ModalBody> {
        className?: string;
    }
    type ModalBody = React.ClassicComponent<IModalBodyProps, {}>;
    var ModalBody: React.ClassicComponentClass<IModalBodyProps>;

    // <ModalFooter />
    interface IModalFooterProps extends React.HTMLProps<ModalFooter> {
        className?: string;
    }
    type ModalFooter = React.ClassicComponent<IModalFooterProps, {}>;
    var ModalFooter: React.ClassicComponentClass<IModalFooterProps>;

    // <ModalHeader />
    interface IModalHeaderProps extends React.HTMLProps<ModalHeader> {
        toggle?: () => boolean;
        className?: any;
        children?: React.ReactNode;
    }
    type ModalHeader = React.ClassicComponent<IModalHeaderProps, {}>;
    var ModalHeader: React.ClassicComponentClass<IModalHeaderProps>;

    // <Nav />
    interface INavProps extends React.HTMLProps<Nav> {
        inline?: boolean;
        disabled?: boolean;
        tabs?: boolean;
        pills?: boolean;
        stacked?: boolean;
        navbar?: boolean;
        tag?: tag;
        className?: any;
    }
    type Nav = React.ClassicComponent<INavProps, {}>;
    var Nav: React.ClassicComponentClass<INavProps>;

    // <NavDropdown />
    interface INavDropdownProps extends React.HTMLProps<NavDropdown> {
        children?: React.ReactNode;
        tag?: tag;
        className?: any;
    }
    type NavDropdown = React.ClassicComponent<INavDropdownProps, {}>;
    var NavDropdown: React.ClassicComponentClass<INavDropdownProps>;

    // <NavItem />
    interface INavItemProps extends React.HTMLProps<NavItem> {
        tag?: tag;
        className?: any;
    }
    type NavItem = React.ClassicComponent<INavItemProps, {}>;
    var NavItem: React.ClassicComponentClass<INavItemProps>;

    // <NavLink />
    interface INavLinkProps extends React.HTMLProps<NavLink> {
        tag?: tag;
        disabled?: boolean;
        active?: boolean;
        className?: any;
        onClick?: () => any;
        href?: any;
    }
    type NavLink = React.ClassicComponent<INavLinkProps, {}>;
    var NavLink: React.ClassicComponentClass<INavLinkProps>;

    // <Navbar />
    interface INavbarProps extends React.HTMLProps<Navbar> {
        light?: boolean;
        dark?: boolean;
        full?: boolean;
        fixed?: string;
        color?: string;
        role?: string;
        tag?: tag;
        className?: any;
    }
    type Navbar = React.ClassicComponent<INavbarProps, {}>;
    var Navbar: React.ClassicComponentClass<INavbarProps>;

    // <NavbarBrand />
    interface INavbarBrandProps extends React.HTMLProps<NavbarBrand> {
        tag?: tag;
        className?: any;
    }
    type NavbarBrand = React.ClassicComponent<INavbarBrandProps, {}>;
    var NavbarBrand: React.ClassicComponentClass<INavbarBrandProps>;

    // <NavbarToggler />
    interface INavbarTogglerProps extends React.HTMLProps<NavbarToggler> {
        tag?: tag;
        type?: string;
        className?: any;
        children?: React.ReactNode;
    }
    type NavbarToggler = React.ClassicComponent<INavbarTogglerProps, {}>;
    var NavbarToggler: React.ClassicComponentClass<INavbarTogglerProps>;

    // <Pagination />
    interface IPaginationProps extends React.HTMLProps<Pagination> {
        tag?: tag;
        size?: any; // this should be a string, but is prevented by HTMLProps
        className?: any;
        children?: React.ReactNode;
    }
    type Pagination = React.ClassicComponent<IPaginationProps, {}>;
    var Pagination: React.ClassicComponentClass<IPaginationProps>;

    // <PaginationItem />
    interface IPaginationItemProps extends React.HTMLProps<PaginationItem> {
        active?: boolean;
        children?: React.ReactNode;
        className?: string;
        disabled?: boolean;
        tag?: tag;
    }
    type PaginationItem = React.ClassicComponent<IPaginationItemProps, {}>;
    var PaginationItem: React.ClassicComponentClass<IPaginationItemProps>;

    // <PaginationLink />
    interface IPaginationLinkProps extends React.HTMLProps<PaginationLink> {
        'aria-label'?: string;
        children?: React.ReactNode;
        className?: string;
        next?: boolean;
        previous?: boolean;
        tag?: tag;
    }
    type PaginationLink = React.ClassicComponent<IPaginationLinkProps, {}>;
    var PaginationLink: React.ClassicComponentClass<IPaginationLinkProps>;

    // <Popover />
    type tetherAttachements =
        'top' |
        'bottom' |
        'left' |
        'right' |
        'top left' |
        'top center' |
        'top right' |
        'right top' |
        'right middle' |
        'right bottom' |
        'bottom right' |
        'bottom center' |
        'bottom left' |
        'left top' |
        'left middle' |
        'left bottom'

    interface IPopoverProps extends React.HTMLProps<Popover> {
        target: string;
        isOpen?: boolean;
        tether?: {};
        tetherRef?: () => any;
        className?: string;
        toggle?: () => boolean;
        placement?: tetherAttachements;
    }
    type Popover = React.ClassicComponent<IPopoverProps, {}>;
    var Popover: React.ClassicComponentClass<IPopoverProps>;

    // <PopoverContent />
    interface IPopoverContentProps extends React.HTMLProps<PopoverContent> {
        tag?: tag;
        className?: any;
    }
    type PopoverContent = React.ClassicComponent<IPopoverContentProps, {}>;
    var PopoverContent: React.ClassicComponentClass<IPopoverContentProps>;

    // <PopoverTitle />
    interface IPopoverTitleProps extends React.HTMLProps<PopoverTitle> {
        tag?: tag;
        className?: any;
    }
    type PopoverTitle = React.ClassicComponent<IPopoverTitleProps, {}>;
    var PopoverTitle: React.ClassicComponentClass<IPopoverTitleProps>;

    // <Progress />
    interface IProgressProps extends React.HTMLProps<Progress> {
        tag?: string;
        value?: any; // this should be a string, but is prevented by HTMLProps
        max?: string | number;
        animated?: boolean;
        striped?: boolean;
        color?: string;
        className?: any;
    }
    type Progress = React.ClassicComponent<IProgressProps, {}>;
    var Progress: React.ClassicComponentClass<IProgressProps>;

    // <Row />
    interface IRowProps extends React.HTMLProps<Row> {
        tag?: tag;
        className?: any;
    }
    type Row = React.ClassicComponent<IRowProps, {}>;
    var Row: React.ClassicComponentClass<IRowProps>;

    // <TabContent />
    interface ITabContentProps extends React.HTMLProps<TabContent> {
        children?: React.ReactNode;
        activeTab?: any;
        className?: string;
    }
    type TabContent = React.ClassicComponent<ITabContentProps, {}>;
    var TabContent: React.ClassicComponentClass<ITabContentProps>;

    // <TabPane />
    interface ITabPaneProps extends React.HTMLProps<TabPane> {
        children?: React.ReactNode;
        className?: string;
        tabId?: any;
    }
    type TabPane = React.ClassicComponent<ITabPaneProps, {}>;
    var TabPane: React.ClassicComponentClass<ITabPaneProps>;

    // <Table />
    interface ITableProps extends React.HTMLProps<Table> {
        className?: any;
        size?: any; // this should be a string, but is prevented by HTMLProps
        bordered?: boolean;
        striped?: boolean;
        inverse?: boolean;
        hover?: boolean;
        reflow?: boolean;
        responsive?: boolean;
        tag?: tag;
    }
    type Table = React.ClassicComponent<ITableProps, {}>;
    var Table: React.ClassicComponentClass<ITableProps>;

    // <Tag />
    interface ITagProps extends React.HTMLProps<Tag> {
        color?: string;
        pill?: boolean;
        tag?: tag;
        children?: React.ReactNode;
        className?: any;
    }
    type Tag = React.ClassicComponent<ITagProps, {}>;
    var Tag: React.ClassicComponentClass<ITagProps>;

    // <TetherContent />
    interface ITetherContentProps extends React.HTMLProps<TetherContent> {
        children: React.ReactNode;
        arrow?: string;
        disabled?: boolean;
        isOpen: boolean;
        toggle: () => boolean;
        tether: {};
        tetherRef?: () => any;
        style?: any; // this should be a string, but is prevented by HTMLProps
    }
    type TetherContent = React.ClassicComponent<ITetherContentProps, {}>;
    var TetherContent: React.ClassicComponentClass<ITetherContentProps>;

    // <Tooltip />
    interface ITooltipProps extends React.HTMLProps<Tooltip> {
        placement?: tetherAttachements;
        target: string;
        isOpen?: boolean;
        disabled?: boolean;
        tether?: {};
        tetherRef?: () => any;
        classNames?: string;
        toggle?: () => boolean;
        autohide?: boolean;
        delay?: number | { show: number, hide: number }
    }
    type Tooltip = React.ClassicComponent<ITooltipProps, {}>;
    var Tooltip: React.ClassicComponentClass<ITooltipProps>;
}

declare module "reactstrap" {
    export = Reactstrap;
}
