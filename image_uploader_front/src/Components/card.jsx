import { Link } from "react-router-dom";

export function Card() {
	return (
		<div>
			<h1>Upload your image</h1>
			<p>File should be Jpeg, PNG, ...</p>
			<div></div>
			<p>Or</p>
			<Link to='uploadingImage'>Choose a file</Link>
		</div>
	)
}
