import {useState} from 'react';
export default function TechnoAdd(props){
    
    const [techno,setTechno] = useState({
        technoname:'',
        technocategory:'',
        technodescription:''
    });

    const {handleAddTechno} = props;



    function handleSubmit(evt){
        evt.preventDefault();
        handleAddTechno(techno);
        setTechno({
            technoname:'',
            technocategory:'',
            technodescription:''
        });
    }

    function handleChange(evt){
        const {name,value} = evt.target;
        setTechno({...techno, [name]: value})
    }


    return(
        <div className="techno-add">
            <h1>Add a Techno</h1>
            <div>
                <form onSubmit={(evt) => handleSubmit(evt)}>

                    <div className="center">
                        <label htmlFor="technoname">Name : </label>
                        
                        <input type="text" name="technoname" id="technoname" value={techno.technoname} onChange={(evt)=> handleChange(evt)}/>

                    <br />
                    <br />
                    <br />
                        
                    <label htmlFor="technocategory">Category :</label>
                    
                    <select name="technocategory" id="technocategory" value={techno.technocategory} onChange={(evt)=> handleChange(evt)}>
                        <option value="">Select a category</option>
                        <option value="Front">Front</option>
                        <option value="Back">Back</option>
                        <option value="FullStack">FullStack</option>
                    </select>
                    
                    <br />
                    <br />
                    <br />
                    <label htmlFor="technodescription">description :</label>
                    
                    <textarea 
                        name="technodescription" 
                        id="technodescription" 
                        cols="30"
                        rows="10" value={techno.technodescription} onChange={(evt)=> handleChange(evt)}>
                    </textarea>


                    <br />
                    <br />
                    

                    <input type="submit" name="Add Techno" className="btn" />
                    </div>

                </form>
            </div>
        </div>
    )
}