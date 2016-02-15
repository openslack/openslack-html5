import React from 'react';
import ReactDOM from 'react-dom';
import PhoneCall from './PhoneCall.jsx';

const socket = io();

class PhoneCallBox extends React.Component {

  constructor() {
    super();
    this.state = {phoneCalls: []}
    socket.on('call progress event', (newCallState) => this.handleStateChange(newCallState));
  }

  handleStateChange(newCallState) {

    let isNewCall = true;
    let phoneCalls = this.state.phoneCalls.map((call) => {
      if (call.callSid === newCallState.callSid) {
        // This is the updated phone call.
        isNewCall = false;
        return newCallState;
      } else {
        // This is an unchanged phone call.
        return call;
      }
    });

    if(isNewCall) {
      phoneCalls.push(newCallState);
    }

    this.setState({phoneCalls});
  }

  render() {
    let phoneCalls = this.state.phoneCalls.map((call) => {
      return <li> <PhoneCall to={call.to} fromNumber={call.fromNumber} callSid={call.callSid} callStatus={call.callStatus}/> </li>
    });

    return (
      <div className="phoneCallBox">
        <h1>Phone calls</h1>
        <div className="phoneCallList">
          {phoneCalls}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<PhoneCallBox/>, document.getElementById('phone-calls'));