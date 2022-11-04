import React, { useEffect, useState } from 'react';
import './home.css'

	const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
	const [imageIds, setImageIds] = useState();
    const loadImages = async () => {
        try {
            const res = await fetch('/api/images');
            const data = await res.json();
            setImageIds(data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        loadImages();
    }, []);

	return (
			<>
			<div id='main-page-body'>
				<h2 id='global-text'>Successful <span id='E-letter'>E</span> Business, Global Web!</h2>
				<div id="search-box">
				</div>
				<div class="container">
					<form id="form-search-button">
					<input id="input-search" type="search" placeholder="Search..."/>
					<button id="input-button" type="submit">Search</button>
					</form>
				</div>
			</div>
			<div>
			<h1 className="title">Your Images Gallery</h1>
			<div className="gallery">
				{imageIds &&
					imageIds.map((imageId, index) => (
						<Image
							key={index}
							cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
							publicId={imageId}
							width="300"
							crop="scale"
						/>
					))}
			</div>
		</div>
		</>
	)
}

export default Home
