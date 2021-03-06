import React from 'react'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import USCurrencyFormat from './USCurrencyFormat'
import FEATURES from './featureOptions'
import FeatureItem from './FeatureItem'

  class FeatureList extends React.Component{

    

    render(){
      const features = Object.keys(FEATURES).map((feature, idx) => {
        const featureHash = feature + '-' + idx
        
        const options = FEATURES[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item))
          return (
            <FeatureItem
                    key={itemHash}
                    itemHash={itemHash}
                    name={slugify(feature)}
                    checked={item.name === this.props.selected[feature].name}
                    updateFeature={this.props.updateFeature}
                    feature={feature}
                    item={item}
                    cost={USCurrencyFormat.format(item.cost)}
                />
          )
        })
    
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
      });

        return(
            <div>
                {features}
            </div>
        )
    }
  }

  export default FeatureList