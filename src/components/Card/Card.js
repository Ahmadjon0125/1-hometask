
import "./Card.css"

const Card = ({ img, name, population, region, capital }) => {

	return (
			<li key={name} className="card__item">
				<img src={img} alt={name} />
				<div className="card__body">
					<h1 className="card__title">{name}</h1>
					<p className="card__body-text" >Population:  <span className="card__body-title" > { population}</span></p>
					<p className="card__body-text" >Region:  <span className="card__body-title" > { region}</span></p>
					<p className="card__body-text" >Capital:  <span className="card__body-title" > { capital}</span></p>
				</div>
			</li>
		)
	}

	export default Card