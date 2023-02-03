import { Action } from "@remix-run/router";



export let reducer=(state=false,Action)=>{
    switch(Action.type){
        case 'login':
            return (!Action.data);
        default:
            return state
    }
}

export let isOpen=(state=false,Action)=>{
    switch(Action.type){
        case 'isOpen':
            return (Action.data);
        default:
            return state
    }
}


export let trackList= (state=[],Action)=>{
    switch(Action.type){
        case 'trackList':
            return Action.data
        default:
            return state
    }
}

export let Enroll=(state=0,Action)=>{
    switch(Action.type){
        case 'selectedCareer':
            return Action.data
        default:
            return state
    }
    
}

export let Courses=(state={},Action)=>{
    switch(Action.type){
        case 'courses':
            return Action.data
        default:
            return state
    }
}
export let courseDetail=(state=[],Action)=>{
    switch(Action.type){
        case 'coursedetail':
            return Action.data
        default:
            return state
    }
}

