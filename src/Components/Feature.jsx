import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/InventoryTracking.png';
import featureimage1 from '../images/DemandForecasting.png';
import featureimage2 from '../images/CostControl.png';

function Feature() {
    return (
        <div id='features'>
            <div className="a-container">
                <FeatureBox image={featureimage} title='Inventory Tracking' description=' Effective inventory management solutions provide real-time tracking of all items in stock.' />
                <FeatureBox image={featureimage1} title='Demand Forecasting' description='Inventory solutions use demand forecasting algorithms and analytics. ' />
                <FeatureBox image={featureimage2} title=' Cost Control' description='Inventory solutions optimize stock for cost and space efficiency.' />
            </div>


        </div>
    )
}

export default Feature;