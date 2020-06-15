import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu, { NMenuProps } from './NavMenu';

export class Layout extends React.PureComponent<{}, NMenuProps> {
  constructor() {
    super({})
    this.state = {user: ''}
  }
  render() {
    return (
    <React.Fragment>
        <NavMenu OnChangeUser={this.OnChangeUser} />
        <Container>
            {this.props.children}
        </Container>
      </React.Fragment>
      )
  }

  private OnChangeUser(p_user: NMenuProps) {
    this.setState(p_user)
    alert(p_user.user)
  }
}
