
var Greeting = React.createClass({
    setGreeting: function() {
      this.setState({
          name: this.state.new_name
      });
    },
    getInitialState: function() {
      return {
        name: 'enter your name'
      }
    },
    setName: function(event) {
      this.setState({
          new_name: event.target.value.toLowerCase(),
          name: this.state.name
      });
      /*this.setState({
          name: event.target.value.toLowerCase()
      });*/
    },
    render: function() {
      return (
        <div class="my-component">
          <h1>Hello, {this.state.name}</h1>
          <input type="text" placeholder="Name" onChange={this.setName}/>

           <button type="button" onClick={this.setGreeting}>submit</button>
        </div>
      )
    }
  });


  ReactDOM.render(
    <Greeting />,
    document.getElementById('app')
  );
