import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'react';

const propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Hello World',
};

const body = <div>hello</div>;

const reservationItem = (<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Spazz />{body}
</Foo>);

export default class PhoneCall extends React.Component {
  static methodsAreOk() {
    return true;
  }
  getInitialState(){

  }
  const defaultStyle = {
    color: 'red',
  }
  render() {
    return (
      <div className="phone-call">
        <h4 className="call-SID">
          {"Call SID: " + this.props.callSid}
        </h4>
        <h4 className="to-number">
          {"To: " + this.props.to}
        </h4>
        <h4 className="from-number">
          {"From: " + this.props.fromNumber}
        </h4>
        <h4 className="date-updated">
          {"Call Status: " + this.props.callStatus}
        </h4>
      </div>
    );
  }
};
PhoneCall.propTypes = propTypes;
PhoneCall.defaultProps = defaultProps;

ReactDOM.render(<PhoneCall callSid='123456789' to=' 19999999999' fromNumber=' 18888888888' callStatus='completed'/>, document.getElementById('phone-calls'));