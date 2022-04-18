import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import HomeCom from '../../components/home/Home';



let isMobile = false;
enquireScreen((b) => {
    isMobile = b;
});

const Home = ({ dispatch, products }) => {
    const [isFirstScreen, setIsFirstScreen] = useState(true)
    const [isSMobile, setIsSMobile] = useState(isMobile)


    useEffect(() => {
        enquireScreen((b) => {
            setIsSMobile(!!b)
        });
    }, [])

    return (
        <div>
            <HomeCom dispatch={dispatch} />
            <DocumentTitle title="小土豆 - 用心创造世界" key="title" />,
        </div>
    );

}

export default connect(({ products }) => ({
    products,
}))(Home);