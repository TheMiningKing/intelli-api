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
    return <form id="intel-submit" className="pure-form pure-form-aligned" onSubmit={this.handleSubmit}>
             <fieldset>
               <div className="pure-control-group">
                 <label htmlFor="wallet">Intelli Wallet</label>
                 <input className="pure-g pure-u-1 pure-u-md-1-2"
                        name="wallet" type="text" placeholder="0x0000..." required="required"
                        value={this.state.wallet} onChange={this.handleInputChange} />
               </div>
               <div className="pure-control-group">
                 <label htmlFor="source">Source</label>
                 <input className="pure-g pure-u-1 pure-u-md-1-2"
                        name="source" type="url" placeholder="http://..." required="required"
                        value={this.state.source} onChange={this.handleInputChange} />
               </div>
               <div className="pure-controls">
                 <button type="submit" className="pure-button pure-button-primary">Submit</button>
               </div>
           </fieldset>
         </form>;
  }
}

module.exports = IntelSubmitForm;
