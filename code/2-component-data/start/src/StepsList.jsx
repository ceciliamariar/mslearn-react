import React from 'react';

function StepsList(props) {
    const stepsListItems = props.steps.map((step, index) => {
        return (
            <li key={index}>
                { step }
            </li>
        );
    });

    return (
        <ol>
            { stepsListItems }
        </ol>
    );
}

export default StepsList;