import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UploadImage } from './Pages/uploadImagePage';
import { UploadingImage } from './Pages/imageUploadingPage';
import { UploadedImage } from './Pages/imageUploadedPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
					<Route path='/' element={<Navigate to='/uploadImages' />} />
					<Route path='/uploadImages' element={<UploadImage />} />
					<Route path='/uploadingImage' element={<UploadingImage />} />
					<Route path='/imageUploaded' element={<UploadedImage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
