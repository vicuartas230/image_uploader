// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DragDrop } from "./fileUploader";
import { getAllImages } from "../api/images.api";

export function Card() {
	const { register, handleSubmit } = useForm();
	const [images, setImages] = useState([]);

	useEffect(() => {
		async function getImages() {
			const res = await getAllImages();
			setImages(res.data);
		}
		getImages();
	}, [])

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
			{images.map(image => (
				<div>
					{image.image_file}
				</div>
			))}
		</div>
	)
}
