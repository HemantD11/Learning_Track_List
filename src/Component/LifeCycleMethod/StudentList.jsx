import React,{Component} from 'react'

class StudentList extends Component{
    constructor(props){
        super(props);
        this.state={
            student:[],
            name:'Hemant',
            age:22
        }
    }
    componentDidMount(){
        fetch('https://cms.analyttica.com/testimonials').then(res=>res.json()).then(data=>this.setState({student:data}))
    }
    // static getDerivedStateFromProps(props,state){
    //     return {name:props.color}
    // }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(props,state){
        console.log('prevProps '+props.color);
        console.log('prevState '+state.name);
    }
    componentDidUpdate(props,state){
        console.log('curProps '+props.color);
        console.log('curState '+state.name);
    }
    componentWillUnmount(){
        return alert('Are You Sure')
    }
    render(){
        return(<>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({name:'Ram'})}>Click</button>
            <table>
                <thead>
                    <tr>
                        <th>SNO.</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                   
                        {
                            this.state.student.map(d=>{
                                return  <tr>
                                    <td>{d.id}</td>
                                    <td>{d.Title}</td>
                                    <td>{d.Description}</td>
                                </tr>
                            })
                        }
                    
                </tbody>
            </table>
            </>
        )
        
    }
}

export default StudentList