const React = require('react');
const ReactDOM = require('react-dom');
const IntelSubmitForm = require('./intelSubmitForm.jsx');
const doneReact = require('../../lib/doneReact');

class ClientApp extends React.Component {
  render() {
    return <section>
             <h2>Deposit Intel Here:</h2>
             <IntelSubmitForm />
           </section>;
  }
}

ReactDOM.render(<ClientApp />, document.getElementById('root'));
