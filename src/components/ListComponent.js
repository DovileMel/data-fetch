import React from 'react';
import '../styles/style.scss';
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import PropTypes from 'prop-types';

const styles = {
  customWidth: {
    width: 200,
  },
};


// Since this component is simple and static, there's no parent container for it.
class ListComponent extends React.PureComponent {

  state = {
    value: 1
  };

  handleChange = (event, index, value) => {
    this.setState({ value });
  }

  displaySelectedValue = () => {
    const currentValue = this.props.payload[ this.state.value - 1 ];
    return (
      <div className="values-container">
        <span className="value-title"> ID:
          <span className="value">{currentValue.id}</span>
        </span>
        <Divider style={{marginTop: 20,  marginBottom: 20}}/>
        <span className="value-title"> Status:
          <span className="value">{currentValue.title}</span>
        </span>
      </div>
    )
  }

  render() {
    const payloadItems = this.props.payload;
    return (
      <div>
        <div className="menu-container">
          <DropDownMenu
            value={this.state.value}
            onChange={this.handleChange}
            style={styles.customWidth}
            autoWidth={false}
          >
            {payloadItems.map((item, index) => <MenuItem value={index + 1} primaryText={item.title} key={index}/>)}
          </DropDownMenu>
        </div>
        <div className="data-container">
          <span className="title">Selected value: </span>
          {this.displaySelectedValue()}</div>
      </div>
    )
  }
}

ListComponent.propTypes = {
  payload: PropTypes.array
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
)(ListComponent);
