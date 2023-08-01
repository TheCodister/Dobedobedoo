import { useState } from 'react';
import './content.css'
const Content = () => {
    const [plan, setPlan] = useState([]);
    const [text, setText] = useState('');
    const [maxId, setMaxId] = useState(1);
    const handleDelete = (id) => {
        setPlan((prevPlan) =>{
            return prevPlan.filter(plan => plan.id !== id);
        });
        if(maxId > 1){
            setMaxId((prevMaxId) => prevMaxId - 1);
        }
        else setMaxId(1);
    }
    const handleAdd = (text) => {
        if(text !== ''){
            setMaxId((prevMaxId) => prevMaxId + 1);
            setPlan((prevPlan) => {
            return[
                ...prevPlan,
                {content: text, id: maxId},
            ];
            })
        }
        setText('');
    }
    return ( 
        <div className="content">
            <div className="content-inputbox">
                    <input value = {text} onChange={(e) => setText(e.target.value)} onKeyDown={e => e.key === 'Enter' ? handleAdd(text):''} className='content-input' placeholder="What do you want to do"></input>
                    <h1 onClick={() => handleAdd(text)} className='content-button'>Add New Task</h1>
            </div>
            <div className='content-todolist'>
                <h1>Your list</h1>
                {
                    plan.map((plan) => {
                        return(
                        <div className='content-todolist-item'>
                            <h1>No.{plan.id}</h1>
                            <p>{plan.content}</p>
                            <h2 onClick={() => handleDelete(plan.id)}>Finish!</h2>
                        </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default Content;