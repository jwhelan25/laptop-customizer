import React from 'react'

import FeatureList from './FeatureList'

class MainForm extends React.Component{

    render(){

        return(
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <FeatureList features={this.props.features} 
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
            />
          </form>
        )
    }
}

export default MainForm