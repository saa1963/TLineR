import * as React from 'react';
import { Collapse, Container, Navbar, NavbarToggler, DropdownToggle, DropdownMenu, DropdownItem, Dropdown, Button } from 'reactstrap';
import './NavMenu.css';

export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean, dropdownOpen: boolean }> {
  public state = {
    isOpen: false,
    dropdownOpen: false
  };

  public render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
            <Button className="nbutton mr-1" id="prev_page" color="primary" href="#">&lt;&lt;</Button>
            <Button className="nbutton mr-1" id="prev_period" color="primary">&lt;</Button>
            <Button className="nbutton mr-1" id="next_period" color="primary" href="#">&gt;</Button>
            <Button className="nbutton" id="next_page" color="primary" href="#">&gt;&gt;</Button>
            <NavbarToggler onClick={this.toggle} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row" isOpen={this.state.isOpen} navbar>
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
            <Container className="d-flex justify-content-end">
              <Button color="primary" className="mr-1" outline>Регистрация</Button>
              <Button color="primary" outline>Вход</Button>
            </Container>
            </Collapse>
        </Navbar>
      </header>
    );
  }

  private toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  private toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
}
