export default function TechnoAdd(){
    return(
        <div className="techno-add">
            <h1>Add a Techno</h1>
            <div>
                <form>
                    <label htmlFor="techno-name">Name:</label>
                    <br />
                    <input type="text" name="techno-name" id="techno-name"/>
                    <br />
                    <label htmlFor="techno-category">Category:</label>
                    <br />
                    <select name="techno-category" id="techno-category">
                        <option value="">Select a category</option>
                        <option value="Front">Front</option>
                        <option value="Back">Back</option>
                        <option value="FullStack">FullStack</option>
                    </select>
                    <br />
                    <label htmlFor="techno-description">description:</label>
                    <br />
                    <textarea 
                        name="techno-description" 
                        id="techno-description" 
                        cols="30"
                        rows="10">
                    </textarea>
                    <br />
                    <input type="submit" name="Add Techno" />
                </form>
            </div>
        </div>
    )
}