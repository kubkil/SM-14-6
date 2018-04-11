const CounterTwo = React.createClass({
  getInitialState: function () {
    return {
      counter: 0
    };
  },

  increment: function () {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function () {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  render: function () {
    return React.createElement('div', { className: 'container' },
      React.createElement('button', { onClick: this.increment, className: 'button' }, 'Increment '),
      React.createElement('button', { onClick: this.decrement, className: 'button' }, 'Decrement '),
      React.createElement('p', { className: 'number' }, this.state.counter),
    );
  }

});

// const elementTwo = React.createElement(CounterTwo);
// ReactDOM.render(element, document.getElementById('app-two'));