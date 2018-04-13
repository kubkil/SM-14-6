const CounterOne = React.createClass({

  getDefaultProps() {
    console.log('Initialization phase. In getDefaultProps method we can set up a default prop for the component, which can be overridden later.');
  },

  getInitialState: function () {
    console.log('Initialization phase. In getInitialState method an initial state of a component was set.');
    return {
      counter: 0
    }
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
    console.log('Mounting phase. render method was invoked and element was created.');
    return React.createElement('div', { className: 'container' },
      React.createElement('button', { onClick: this.increment, className: 'button' }, 'Increment '),
      React.createElement('button', { onClick: this.decrement, className: 'button' }, 'Decrement '),
      React.createElement('p', { className: 'number' }, this.state.counter),
    );
  },

  componentWillMount() {
    console.log('Mounting phase. componentWillMount method was invoked only once, before render.');
  },

  componentDidMount() {
    console.log('Mounting phase. componentDidMount method was invoked - the component has been inserted into the DOM. Best place to fetch data, load libraries that need access to the DOM and make API calls.');
  },

  componentWillReceiveProps() {
    console.log('Update phase. componentWillReceiveProps method was invoked - a button has been clicked and new props were sent.');
  },

  shouldComponentUpdate() {
    console.log('Update phase. shouldComponentUpdate was invoked. We can use it to verify whether new props have been sent. If not, we can avoid rendering an element and all of its children.');
    return true;
    // return true;
    /* czy zapis poniżej działa na zasadzie if, else if, else?
    shouldComponentUpdate(nextProps, nextState) {
      if (this.props.color !== nextProps.color) {
        return true;
      }
      if (this.state.count !== nextState.count) {
        return true;
      }
      return false;
    }
    */
  },

  componentWillUpdate() {
    console.log('Update phase. componentWillUpdate method was invoked because shouldComponentUpdate returned true. We can perform preparations for an upcoming render.')
  },

  componentDidUpdate() {
    console.log('Update phase. componentDidUpdate method was invoked after re-render. We can use it to perform operations on DOM after the data has been updated - similar to componentDidMount.')
  },

  componentWillUnmount() {
    console.log('Unmounting phase. componentWillUnmount method was invoked before the component was removed from the DOM. We can use it to clean up DOM elements created in componentDidMount or DidUpdate.')
  }


});

// const elementOne = React.createElement(CounterOne);
// ReactDOM.render(element, document.getElementById('app-one'));