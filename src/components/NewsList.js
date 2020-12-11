import React from 'react';
import New from './New';

const NewsList = ({news}) => {
    return (
        <div className="row">
            {news.map(newReport => (
                <New />
            ))}
        </div>
    );
}

export default NewsList;