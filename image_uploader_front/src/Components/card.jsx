// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DragDrop } from "./fileUploader";

export function Card() {
	const { register, handleSubmit } = useForm();
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Upload your image</h1>
				<p>File should be Jpeg, PNG, ...</p>
				<DragDrop />
				<p>Or</p>
				<input
					type="file"
					accept="image/*"
					{ ...register('image', { required: true }) }
				/>
				{/* <button to='/uploadingImage'>Choose a file</button> */}
			</form>
		</div>
	)
}
