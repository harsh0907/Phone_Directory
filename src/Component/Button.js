import React,{ Component } from 'react';
import './Button.css';
import { Link } from "react-router-dom/";

class Button extends Component
{
	onDeleteAction = () =>
	{
		this.props.action(this.props.user);
	}
	render()
	{
		const { type, action } = this.props
		if(type === 1 )
			{
				return(
					
			     <Link onClick = {action} to="/add" className='dib tc no-underline  colo pointer '>
                   <p
                      
                      className='ma3 mr4 ml4 f4 white'>ADD
                   </p>
                  </Link> 
                
					)
			}
			else if(type === 2 )
			{
				return(
				 
					<div onClick = {this.onDeleteAction}  className='dib tc pl4 pr4 bg-pink pointer'>
                      <p
                        className='black'>DELETE
                      </p>
                   </div> 
                  
				)
			}
			if(type === 4 )
			{
				return(
					
			     <Link onClick = {action} to={`${this.props.url}`} className='dib tc no-underline  colo pointer '>
                   <p 
                      
                      className='ma3 mr4 ml4 f4 white'>ADD
                   </p>
                  </Link> 
                
					)
			}
			else
			{
				return(
		
                    <Link onClick = {action} to="/"   className='dib tc no-underline  pointer '>
                      <p
                        
                        className='ma3 mr4 ml4 f3 black'>BACK
                      </p>
                   </Link> 
           
	
					)
			}
		}
	}

export default Button;