const counter = React.createElement('div', {},
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter),
  React.createElement(Counter)
);
ReactDOM.render(counter, document.getElementById('app'));