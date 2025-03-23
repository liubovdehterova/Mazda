import React from 'react';
import {useViewMode} from "../Context/ViewModeContext";

function DisplayModeSwitch() {
    const { viewMode, toggleViewMode } = useViewMode();

    return (
        <div>
            <label>
                <input
                    type="radio"
                    value="cards"
                    checked={viewMode === 'cards'}
                    onChange={toggleViewMode}
                />
                Cards
            </label>
            <label>
                <input
                    type="radio"
                    value="table"
                    checked={viewMode === 'table'}
                    onChange={toggleViewMode}
                />
                Table
            </label>
        </div>
    );
}

export default DisplayModeSwitch;
