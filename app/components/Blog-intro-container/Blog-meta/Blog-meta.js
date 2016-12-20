import React from 'react';
import './Blog-meta.css'

 const BlogMeta = ({metaInfo}) => {
     return (
         <div>
             <div>
                 <h2>{metaInfo.username}</h2>
             </div>
         </div>
     );
 };

 BlogMeta.propTypes = {
     metaInfo: React.PropTypes.object.isRequired
 };



 export default BlogMeta
