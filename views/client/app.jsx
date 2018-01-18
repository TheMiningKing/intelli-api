const React = require('react');
const ReactDOM = require('react-dom');
const IntelSubmitForm = require('./intelSubmitForm.jsx');
const doneReact = require('../../lib/doneReact');

class ClientApp extends React.Component {
  render() {
    return <div id="main">
             <div className="header">
               <h1>Intelli API</h1>
             </div>
             <div className="content">
               <h2 className="content-subhead center">Deposit Intel Here</h2>
               <IntelSubmitForm />
             </div>
           </div>;
  }
}

ReactDOM.render(<ClientApp />, document.getElementById('root'));
