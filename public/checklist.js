
	const ESCAPE_KEY = 27;
	const ENTER_KEY = 13;

var Checklist = React.createClass({
    addTask: function() {
      console.log('addTask()');
      const checklist = this.state.checklist;
      const taskName = this.state.new_task;
      checklist.tasks.push({name: taskName, done: false});
      this.setState({checklist: checklist});
    },
    getInitialState: function() {
      return {
        checklist: {
          name:  'New Checklist',
          tasks: [],
        }
      }
    },
    saveName: function(event) {
      console.log('saveName()');
      this.state.new_name = event.target.value;
      this.setState({
          new_name: event.target.value,
          items: this.state.name
      });
    },
    newTask: function(event) {
      console.log('newTask()');
      this.state.new_task = event.target.value;
    },
    rename: function(event) {
      console.log('rename()');
      var new_name = this.state.new_name;
      var checklist = this.state.checklist;
      checklist.name = new_name;
      this.setState({
          checklist: checklist
      });
    },
    handleEnterKey: function(target) {
      console.log('handleEnterKey()');
      if(target.charCode === ENTER_KEY){
        this.addTask(); 
      }
    },
    render: function() {
      return (
      <div class="checklist">
        <div>
          <h1 onClick={this.editName} class="jumbotron">{this.props.name}:</h1> <h1> Items: {this.state.checklist.tasks.length}</h1>   
        </div>
        <div>
          <input type="text" placeholder="enter new task" onChange={this.newTask} onKeyPress={this.handleEnterKey}/>

        </div>  
        <div>
        <TaskList  tasks={this.state.checklist.tasks}/>
      </div>
   
      </div>
      )
    }
  });



  var TaskList = React.createClass({

    render: function() {
      const rows = [];
      this.props.tasks.forEach((task) => {
          rows.push(
            <Task
              name={task.name}
              done={task.done}/>
          );
      });
      return (<ul>{rows}</ul>  );
    }

  });



  var Task = React.createClass({
    toggleDone: function(event) {
      console.log('toggleDone() done: ' + this.state.done);
      const toggled =  (! this.state.done);
      this.setState({
          done: toggled,
          name: this.props.name
      });
    },
    getInitialState: function () {
      //console.log('toggleDone() done: ' + this.state.done);
			return {name: this.props.name,  done: false};
		},
    render: function() {

      var checkedStyle = {
        marginLeft: '-20px',
        paddingLeft: '20px',
        fontSize: '32px',
        color: '#333',
        backgroundColor: '#F99',
        fontWeight:'bold'
      };

      var uncheckedStyle = {
        marginLeft: '-20px',
        paddingLeft: '20px',
        fontSize: '32px',
        color: '#333',
        backgroundColor: '#FFF',
        fontWeight:'bold'
      };

      const name = this.props.name;
      const isDone = this.state.done;
      if (isDone) {
        return (<li  style={checkedStyle} onClick={this.toggleDone}> <div class="completedTask" > {name} </div> </li> );
      } else {
        return (<li  style={uncheckedStyle} onClick={this.toggleDone}> <div class="completedTask" > {name} </div> </li> );
      }
      
    }
  });

  ReactDOM.render(
    <Checklist name="my checklist"/>,
    document.getElementById('app')
  );
