
function Search(props) {
    const formInputClass = props.formInputClass;
    const valueOutput = props.valueOutput;

    return (
        <form className={formInputClass + " searchWrapper"}>
            <div className="input-group">
                <input type="search" className="form-control" onChange={valueOutput} placeholder="Suchbegriff" aria-label="Suchbegriff eingeben" aria-describedby="Suchschlitz" />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">suchen</button>
                </div>
            </div>
        </form>
    );
}

export default Search;
