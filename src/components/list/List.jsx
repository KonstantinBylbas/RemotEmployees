import { useState } from 'react';
import './List.scss';

export default function List({ head, body }) {

    const [isOpenList, setIsOpenList] = useState(false);

    return (
        <div className={`list ${isOpenList ? 'open' : ''} `} onClick={() => setIsOpenList(!isOpenList)}>
            <p className='head'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#75E169" />
                </svg>
                {head}

                <span className='arrow top'></span>
                <span className='arrow bottom'></span>
            </p>
            <p className='body'>
                {body}
            </p>
        </div>
    )
}