import React, { Component } from 'react';
class Counter extends Component {
    state  = {
        count: 0,
        // imagUrl: 'https:/picsum.photos/200'
        // tags: ['tag1', 'tag2', 'tag3']
        tags: []
    };

    styles = {
        fontSize: '50px',
        fontWeight: 'bold'
    }


    renderTags(){
        if (this.state.tags.length === 0) return <p> There no tags!</p>;
        return <ul>
        { this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
    </ul>
    }            
    render() { 
        let classes = this.getBadgeClasses();
        
        return (
            <div>
                {/* <img src={this.state.imagUrl} alt=''/>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <span>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button> */}
           
                { this.renderTags()}
            </div>

        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;