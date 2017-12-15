
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
    setChecked: function(event) {
      console.log('setChecked()');
      /*this.setState({
          new_name: event.target.value,
          items: this.state.name
      });*/
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
    render: function() {
      const tasks = this.state.checklist.tasks;
      const taskList = tasks.map((task) => <li>{task.name}</li>  );
      return (
      <div class="checklist">
        <div>
          <h1>{this.state.checklist.name}: Items: {this.state.checklist.tasks.length}</h1>   
          <input type="text" placeholder="enter new checklist name" onChange={this.saveName}/>
          <button type="button" onClick={this.rename}>rename</button>
        </div>
        <div>
          <input type="text" placeholder="description" onChange={this.newTask}/>
          <button type="button" onClick={this.addTask}>add task</button>
          <input type="checkbox" id="item" name="checkmark" value="itemX" onClick={this.setChecked}/>
        </div>  
        <div>
          <ul>{ taskList }</ul>
        </div>
   
      </div>
      )
    }
  });


  ReactDOM.render(
    <Checklist />,
    document.getElementById('app')
  );
