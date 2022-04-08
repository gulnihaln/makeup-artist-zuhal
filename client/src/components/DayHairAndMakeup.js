import "./styles/DayHairAndMakeup.css";

export default function DayHairAndMakeup() {
	return (
		<>
			<section className="day-hair-and-makeup">
				<article className="intro-container">
					<img
						className="intro-img"
						src="http://localhost:5000/uploads/commercial/day1.jpg"
						alt="xxxx"
					/>
					<p className="p-intro">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						voluptas atque iure.
					</p>
				</article>
				<article className="middle-container">
					<article className="middle-article">
						<h2 className="h2-middle">
							<span className="first-letter">L</span>
							<span>orem ipsum dolor sit amet.</span>
						</h2>
						<p className="p-middle">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
							debitis incidunt sequi quisquam cum fuga rem ipsum aperiam nisi
							accusamus natus magni placeat quis eaque libero dolore ab
							dignissimos ea in, fugiat delectus.
						</p>
					</article>
					<img
						className="middle-img"
						src="http://localhost:5000/uploads/commercial/image1.jpg"
						alt="xxxx"
					/>
				</article>
				<article className="final-container">
					<img
						className="final-img"
						src="http://localhost:5000/uploads/commercial/image2.jpg"
						alt="xxxx"
					/>
					<p className="p-final">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						voluptas atque iure.
					</p>
				</article>
			</section>
		</>
	);
}
