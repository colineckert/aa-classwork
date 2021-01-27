import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 0,
            tabs: []
        }
        this.selectTab = this.selectTab.bind(this)
    }

    selectTab(e) {
        debugger
        this.setState({selectedTab: e.target.innerText })
    }
    
    render() {
        return (
            <div>
                <h1>Tabs</h1>
                <div className="tabs">
                    <h1 onClick={this.selectTab}>1</h1>
                    <h1 onClick={this.selectTab}>2</h1>
                    <h1 onClick={this.selectTab}>3</h1>
                    <div className="tab-info">
                    <TabInfo tabs={this.state.tabs}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tabs;