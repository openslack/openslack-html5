import React from 'react';
import ReactDOM from 'react-dom';

class Comment extends React.Component{

    getInitialState() {
        return {data: []};
    }
    componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
}