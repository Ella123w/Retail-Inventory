import React from 'react';

const tableOutput = (props) =>{
   return(
    <table className="table is-fullwidth">
        <thead>
           <tr>
               <th>{props.titleName}</th>
               <th>{props.titleQty}</th>
               <th>{props.titlePrice}</th>
           </tr>
        </thead>
        <tbody>
           <tr>
               <td></td>
           </tr>
        </tbody>
    </table>
   );
   
}

export default tableOutput;
