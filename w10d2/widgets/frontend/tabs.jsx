import React from 'react';

class Headers extends React.Component {
    render() {
        const selected = this.props.selectedTab;
        const headers = this.props.panes.map((pane, idx) => {
            const title = pane.title;
            const cName = idx === selected ? 'active' : '';
            return(
                <li
                    key={idx}
                    className={cName}
                    onClick={() => this.props.onTabChosen(idx)}>
                    {title}
                </li>
            );
        });
        return(
            <ul className="tab-header">
                {headers}
            </ul>
        );
    }

}


class Tabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 0
        };
        
        this.selectTab = this.selectTab.bind(this)
    }

    selectTab(num) {
        this.setState({selectedTab: num })
    }
    
    render() {
        const pane = this.props.panes[this.state.selectedTab];
        return (
            <div>
                <h1>Tabs</h1>
                <div className="tabs">
                    <Headers 
                        selectedTab={this.state.selectedTab}
                        onTabChosen={this.selectTab}
                        panes={this.props.panes}>
                    </Headers>
                    <div className='tab-content'>
                        <article>{pane.content}</article>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tabs;