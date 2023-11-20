import TableData from '../data/data.json'

export const statusSort=(status)=>{
    let data=[];
    if(status==='Completed'){
        data = TableData.pendingUsers;
    }else{
        data = TableData.completedUsers;
    }
    return data;
}
