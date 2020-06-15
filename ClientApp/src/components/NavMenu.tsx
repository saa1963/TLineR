import * as React from 'react';
import { connect } from 'react-redux';
import { Collapse, Container, Navbar, NavbarToggler, DropdownToggle, DropdownMenu, DropdownItem, Dropdown, Button, Badge } from 'reactstrap';
import './NavMenu.css';
import * as CurrentUserStore from '../store/CurrentUser';

type CurrentUserProps =
  CurrentUserStore.CurrentUserState &
  typeof CurrentUserStore.actionCreators;

type OnChangeUserType = (user: string) => void

interface NavmenuProps {
  User: string
  OnChangeUser: OnChangeUserType
}

export default class NavMenu extends React.PureComponent<NavmenuProps, { dropdownOpen: boolean }> {
  constructor(props: NavmenuProps) {
    super(props)
    this.state = {dropdownOpen: false}
  }
  
  public render() {
    return (
      <header>
        <Navbar className="navbar-expand navbar-toggleable border-bottom box-shadow mb-3" light>
          <Container className="justify-content-start">
            <Button className="nbutton mr-1" id="prev_page" color="primary" href="#">&lt;&lt;</Button>
            <Button className="nbutton mr-1" id="prev_period" color="primary">&lt;</Button>
            <Button className="nbutton mr-1" id="next_period" color="primary" href="#">&gt;</Button>
            <Button className="nbutton" id="next_page" color="primary" href="#">&gt;&gt;</Button>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
              <DropdownToggle nav caret>
                Линия времени
                </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Новая</DropdownItem>
                <DropdownItem>Загрузить</DropdownItem>
                <DropdownItem>Загрузить файл</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Container>
          <Container fluid className="justify-content-end">
            <div className="mr-2">{this.props.User}</div>
            <Button color="primary" className="mr-1" outline onClick={this.Register}>Регистрация</Button>
            <Button color="primary" outline onClick={this.Logon}>{this.EnterLeave}</Button>
          </Container>
        </Navbar>
      </header>
    );
  }

  private get EnterLeave(): string {
    if (!this.IsLogon) {
      return 'Вход'
    } else {
      return 'Выход'
    }
  }

  private get IsLogon(): boolean {
    return this.props.User !== ''
  }

  private Register = () => {
    alert('Reg')
  }

  private Logon = () => {
    const logon = () => 'Иванов'
    if (!this.IsLogon) {
      this.props.OnChangeUser(logon())
    } else {
      this.props.OnChangeUser('')
    }
  }

  private toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
}
