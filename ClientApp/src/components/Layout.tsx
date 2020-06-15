import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

interface LayoutState {
  user: string
}

export class Layout extends React.PureComponent<{}, LayoutState> {
  constructor() {
    super({})
    this.state = {user: ''}
  }
  render() {
    return (
    <React.Fragment>
        <NavMenu User={this.state.user} OnChangeUser={this.OnChangeUser.bind(this)} />
        <Container>
            {this.props.children}
        </Container>
      </React.Fragment>
      )
  }

  private OnChangeUser(p_user: string) {
    this.setState({ user: p_user })
  }
}
