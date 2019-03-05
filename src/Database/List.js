import React, { Component } from 'react';
import { Directory } from './Database';
import Button from '../Component/Button';

class List extends Component
{
    constructor()
    {
    	super();
    	this.state={
    		DirectoryList:''
    	}
    }


    onDeleteButton = (event) =>
    {
       Directory.splice(Directory, 1);

       this.setState({ DirectoryList : 
          Directory.map((user,i) =>
	  {
		return(
             <div className='ml4' key={i}>
                 <p className=' f4 dib w-40 '>{Directory[i].Name}</p>
                 <p className=' f4 dib w-40  '>{Directory[i].Phone}</p>
                 <Button type={2}  user={i} action={this.onDeleteButton} />
             </div>
			)})
       })
    }

    componentWillMount()
    {
    	this.setState({DirectoryList:
              Directory.map((user,i) =>
	  {
	  	this.setState({user1:i})
		return(
             <div className='ml4' key={i}>
                 <p className=' f4 dib w-40 '>{Directory[i].Name}</p>
                 <p className=' f4 dib w-40  '>{Directory[i].Phone}</p>
                 <Button type={2}  user={i} action={this.onDeleteButton} />
             </div>
			)}
		
	      )

    	})

    }

    render()
    {
    	return (
		 <div>
		    {this.state.DirectoryList}
		 </div> 
		)
    }
	
	

}


export default List;