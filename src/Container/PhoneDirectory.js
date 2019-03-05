import React from 'react';
import Header from '../Component/Header';
import Button from '../Component/Button';
import List from '../Database/List';


const PhoneDirectory = () =>
{
    return(
       <div>
         <Header headerText={'PHONE DIRECTORY'}/>
         <div className='mt4 ml4'>
           <Button type={1} />
         </div>


         <div className='mt4 mb3 ml4'>
            <h3 className=' dib w-40 f3 gray'>Name</h3>
            <h3 className=' dib w-40 f3 gray'>Phone</h3>
         </div>

         <div >
            <List />
         </div>

       </div>
	 );
	
}

export default PhoneDirectory;