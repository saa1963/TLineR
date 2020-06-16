import * as React from 'react';
import { connect } from 'react-redux';
import { Collapse, Container, Navbar, NavbarToggler, DropdownToggle, DropdownMenu, DropdownItem, Dropdown, Button, Badge } from 'reactstrap';
import './NavMenu.css';
import * as CurrentUserStore from '../store/CurrentUser';
import { ApplicationState } from '../store';

type CurrentUserProps =
  CurrentUserStore.CurrentUserState &
  typeof CurrentUserStore.actionCreators;
export type NMenuProps = { user: string }
type OnChangeUserType = (user: NMenuProps) => void
//type
interface NavmenuProps {
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
            <div className="mr-2"></div>
            <Button color="primary" className="mr-1" outline onClick={this.Register}>Регистрация</Button>
            <Button color="primary" outline onClick={this.Logon}>Вход</Button>
          </Container>
        </Navbar>
      </header>
    );
  }

  private Register = () => {
    alert('Reg')
  }

  private Logon = () => {
    this.props.OnChangeUser({user: 'Иванов'})
  }

  private toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
}


