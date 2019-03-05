import React,{Component} from 'react';
import Header from '../Component/Header';
import Button from '../Component/Button';
import { Directory }  from '../Database/Database';

class AddSubscriber extends Component
{
	constructor(props)
	{
		super(props);
		this.state={
			Name:'',
			Phone:'',
			url:'/add'
		}
	}
 
    onChangeName = (event) =>
    {
    	const { Name, Phone } = this.state;
       this.setState({Name:event.target.value})
       if(!Name || !Phone || isNaN(Phone) )
    	{
    		this.setState({url:'/add'})
    	}
    	else
    	{
    		this.setState({url:'/'})
    	}
    }  

    onChangePhone = (event) =>
    {
    	const { Name, Phone } = this.state;
    	this.setState({Phone:event.target.value})
    	if(!Name || !Phone || isNaN(Phone) )
    	{
    		this.setState({url:'/add'})
    	}
    	else
    	{
    		this.setState({url:'/'})
    	}
    }


    onAddButton = () =>
    {
    	const { Name, Phone } = this.state;
         

        if(!Name || !Phone )
    	{
    		alert("Please Enter Name and Phone");
    	}

    	else if(isNaN(Phone))
    	{
    		alert("Phone is Not Number");
    	}
    	else
    	{
    		Directory.push({
    			key:(Number(Directory.length)-1),
    			Name:this.state.Name,
    			Phone: this.state.Phone
    		})
    	}
        
    }

	render()
	{
		return(
      <div>
        <Header headerText={'ADD SUBSCRIBER'}/>
        
        <div className='mt4 ml4'>
         <Button type={3} />
        </div>

        <div className=' ml3 mt4'>
          <div>
             <p className=' f4 gray mb0'>Name:</p>
             <input onChange={this.onChangeName} type='text'/>
          </div>

          <div className='mt3'>
             <p className=' f4 gray mb0'>Phone:</p>
             <input onChange={this.onChangePhone} type='text'/>
          </div>

        </div>


        <div className=' ml3 mt4'>
          <p className=' mt0 mb0 f3'>Subscriber to be added:</p>
          <div className='mb0'>
             <p className=' dib mb0 f4 gray mr3'>Name:</p>
             <p className='dib f4 gray mb0'>{this.state.Name}</p>
          </div>

          <div className='mt0'>
             <p className=' dib f4 gray mt0 mr3'>Phone:</p>
             <p className=' dib f4 gray mt0'>{this.state.Phone}</p>
          </div>


          <div className='mt3'>
            <Button type={4} action={this.onAddButton} url={this.state.url}/>
          </div>
      </div>
     </div> 

	);
	}
	
}

export default AddSubscriber;