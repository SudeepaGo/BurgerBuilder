import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <div>Current Price: <strong>${props.totalPrice.toFixed(2)}</strong></div>
        {controls.map(control =>
            <BuildControl key={control.label}
                label={control.label}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                disabled={props.disabledInfo[control.type]}
            />)}
        <button className={classes.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
)

export default buildControls;