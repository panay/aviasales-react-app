import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Item } from "../../components/item";
import { fetchTickets } from "../../store/actions/tickets.action";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchTickets());
  }

  render() {
    const { tickets } = this.props.getState();

    return (
      <div className="list">
        {tickets && tickets.tickets.map(ticket => <Item {...ticket} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets
});

export default connect(mapStateToProps, { fetchTickets })(List);
