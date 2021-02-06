
function Search(props) {
    const formInputClass = props.formInputClass;

    return (
        <form className={formInputClass + " searchWrapper"}>
            <div className="input-group">
                <input type="search" className="form-control" onChange={props.valueOutput} placeholder="Suchbegriff" aria-label="Suchbegriff eingeben" aria-describedby="Suchschlitz" />
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="button">suchen</button>
                </div>
            </div>
        </form>
    );
}

export default Search;
