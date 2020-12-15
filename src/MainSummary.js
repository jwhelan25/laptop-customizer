import React from 'react'
import SummaryOptions from './SummaryOptions'
import SummaryTotal from './SummaryTotal'

class MainSummary extends React.Component{

    render(){
        return(
            <section className="main__summary">
            <h2>Your cart</h2>
                <SummaryOptions selected={this.props.selected}/>
                <SummaryTotal selected={this.props.selected}/>
          </section>
        )
    }
}

export default MainSummary