import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu, { NMenuProps } from '../components/NavMenu';
import { ApplicationState } from '../store';
import { connect } from 'react-redux';
import { actionCreators } from '../store/CurrentUser';

export class Layout extends React.PureComponent<{}, NMenuProps> {
  constructor() {
    super({})
  }
  render(dispatch: ) {
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

  }
}

export default connect(
  (state: ApplicationState) => state.currentUser,
  actionCreators
)(NavMenu);