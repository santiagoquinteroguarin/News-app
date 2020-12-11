import React from 'react';
import New from './New';

const NewsList = ({news}) => {
    return (
        <div className="row">
            {news.map(newReport => (
                <New 
                    key={newReport.url}
                    newReport={newReport}
                />
            ))}
        </div>
    );
}

export default NewsList;