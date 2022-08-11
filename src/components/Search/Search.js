import "../Search/Search.css"



const Search = ({setValue, setSelect}) => {

	return(
		<div className="search">
			<div className="container">
				<div className="search__inner">
					<input className="search__input" onKeyUp={(evt) =>{
						if(evt.code === "Enter") {
							setValue(evt.target.value)
							console.log(setValue);
						}
						}} type = "text" placeholder="Search for a country…">
					</input>
					
					<select className="search__select" onChange={evt => setSelect(evt.target.value)} defaultValue="">
						<option  disabled value="">Filter by Region</option>
						<option value="Europe">Europe</option>
						<option value="America">America</option>
						<option value="Asia">Asia</option>
						<option value="Africa">Africa</option>
					</select>
					</div>
			</div>
		</div>
	)
}

export default Search