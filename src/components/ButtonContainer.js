import React from 'react';
import '../styles/style.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListComponent from './ListComponent';
import PropTypes from 'prop-types';

const style = {
  margin: 12,
};

class ButtonContainer extends React.PureComponent {

  handleClick = () => {
    const { actions } = this.props;
    actions.getDataArr();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="content">
          <h1 className="alt-header">WELCOME</h1>
          <RaisedButton
            label="Get data"
            primary={true}
            style={style}
            onClick={this.handleClick}
          />
          {this.props.count > 0 ? <ListComponent/> : null}
        </div>
      </MuiThemeProvider>
    )
  }
}

ButtonContainer.propTypes = {
  count: PropTypes.number
};

const stateToProps = ({ mainRd }) => ({
  ...mainRd
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}
export default connect(
  stateToProps,
  mapDispatchToProps
)(ButtonContainer);
