import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map( ingKey => {
            return (
                <li key={ingKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
                </li>);
        });

    return (
        <Auxiliary>
            <h3>your order</h3>
            <p>a delicious burguer with the following ingredients</p>

            <ul>
                {ingredientSummary}
            </ul>

            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout ?</p>
            {/*<button>CANCEL</button>
            <button>CONTINUE</button> */}
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxiliary>
    );
};

export default orderSummary;