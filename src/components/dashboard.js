import React, { Component } from 'react';
import TabNav from './tabnav';

class Dashboard extends Component {

    constructor(props) {
      super(props);

      this.state = {
        tabs: [
          {
            title: 'Newsletter',
            active: false,
            component: <h4>hello there- newsletter</h4>
          },
          {
            title: 'Requests',
            active: false,
            component: <h4>hello there- requests</h4> 
          },
        ]
      }
    }

    render() {
      return (
          <TabNav tabs={this.state.tabs}/>
      )
    }
  }

  export default Dashboard;