import Head from "./components/Header/Header"
import Search from "./components/Search/Search"
import Card from "./components/Card/Card";
import "./app.css"
import { useEffect, useState } from "react";



function App() {

	const [value, setValue] = useState("")
	const [data, setData] = useState([])
	const [select, setSelect] = useState("")
	

	useEffect(() =>{
		if(value.length) {
			fetch(`https://restcountries.com/v3.1/name/${value}`)
			.then(res => res.json())
			.then(data => setData(data))
			.catch(err => console.log(err))
		}else
		if(select.length) {
			fetch(`https://restcountries.com/v3.1/region/${select}`)
			.then(res => res.json())
			.then(data => setData(data))
			.catch(err => console.log(err))
		}
		else
		{
			fetch("https://restcountries.com/v3.1/all")
			.then(res => res.json())
			.then(data => setData(data))
			.catch(err => console.log(err))
		}
		
	}, [value, select])

	

  return (
    <div className="App">
			<Head />
			<Search setValue={setValue} setSelect={setSelect}/>
			{data.length && (
				<div className="container">
					<ul className="card__list">
						{data.map(e =>
							<Card key={e.name.common} img={e.flags.png} name={e.name.common} population={e.population} region={e.region} capital={e.capital} />)}
					</ul>
				</div>
			)}
    </div>
  );
}

export default App;
