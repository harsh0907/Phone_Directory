import React from 'react';

const Header = ({headerText}) =>
{
	return(
	   <div className=' h3 tc bg-black'>
	     <h2 className=' ma0 pt3 white'>{headerText}</h2>
	   </div>
		);
}

export default Header;