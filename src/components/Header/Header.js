import React from "react";
import {useSelector} from "react-redux";

import css from './header.module.css'

const Header = () => {
    const {rates} = useSelector(state => state.currencyReduce)



    return (
        <>
            {rates&&
                <div className={css.container}>
                    <div className={css.currencyDiv}>
                        <div>USD</div>/
                        {(1 * rates['UAH'] / rates['USD']).toFixed(2)}
                    </div>

                    <div className={css.currencyDiv}>
                        <div>EUR</div>/
                        {(1 * rates['UAH'] / rates['EUR']).toFixed(2)}
                    </div>
                </div>
            }

        </>
    );
};

export {Header};
