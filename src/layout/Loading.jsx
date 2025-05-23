import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';

/* 필요 컴포넌트 */
import MoonLoader from 'react-spinners/MoonLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: rgba(255, 255, 255, 0.7);
  border-width: 10px;
`;

const Loading = props => {
    const [check, setCheck] = useState(false);

    useEffect(() => {
        setCheck(props.loading);
    }, [props]);

    return (
        check &&
        <div className='axios-loading' style={{ display: props.loading ? 'block' : 'none' }}>
            <div className='axios-loading-indicator'>
                <MoonLoader color='#36d7b7' loading={props.loading} css={override} size={60}/>
            </div>
        </div>
    );
};

export default Loading;