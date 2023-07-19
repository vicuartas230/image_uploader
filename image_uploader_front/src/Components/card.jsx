// import { button } from "react-router-dom";
import { useForm } from "react-hook-form";

export function Card() {
	const { register } = useForm();
	return (
		<div>
			<form action="">
				<h1>Upload your image</h1>
				<p>File should be Jpeg, PNG, ...</p>
				<input
					type="image"
					placeholder="Drag & Drop your image here"
					src="../../../uploads"
					alt="" />
				<p>Or</p>
				<button to='/uploadingImage'>Choose a file</button>
			</form>
		</div>
	)
}
