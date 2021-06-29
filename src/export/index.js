import React from 'react';
import exportSurveys from '../firestore/survey';

class ExportComponent extends React.Component {

    handleClick = () => {
        var a = exportSurveys();
        console.log(a);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Export to cvs
            </button>
        );
    }
}

export default ExportComponent;