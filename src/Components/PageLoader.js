import React from 'react';
import { PropagateLoader } from 'react-spinners';

const PageLoader = (props) => {
    return ( 
        <>
        <div className="app">
          <PropagateLoader color={"#64c2cb"}  loading={props.loading} size={25} margin={7}/>
        </div>
      </>
     );
}
 
export default PageLoader;