import React from 'react'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import USCurrencyFormat from './USCurrencyFormat'
import FEATURES from './featureOptions'

  class FeatureList extends React.Component{

    

    render(){
      const features = Object.keys(FEATURES).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        
        const options = FEATURES[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === this.props.selected[feature].name}
                onChange={e => this.props.updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
        });
    
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