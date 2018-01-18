const React = require('react');
const ReactDOM = require('react-dom');
const doneReact = require('../../lib/doneReact');

class IntelSubmitForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      source: '',
      wallet: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Word up!');
  }

  render() {
    return <form id="intel-submit" onSubmit={this.handleSubmit}>
             <label>
               Intelli Wallet:
               <input type="text" name="wallet" value={this.state.wallet} onChange={this.handleInputChange} />
             </label>
             <label>
               Source:
               <input type="url" name="source" value={this.state.source} onChange={this.handleInputChange} />
             </label>
             <input type="submit" value="Submit" />
           </form>;
  }
}

module.exports = IntelSubmitForm;
