import TechnoItem from "../components/Technoitem";

export default function TechnoList(props){
    const {technos, handleDeleteTechno} = props;
    return(
        <div className="techno-list">
            <h1>All Techno</h1>
            <div>
                {
                    technos.map(techno =>(
                        <TechnoItem techno={techno} key={techno.technoid} handleDeleteTechno={handleDeleteTechno}/>
                    ))
                }    
            </div>
        </div>
    )
}