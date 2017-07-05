import React, { Component } from 'react';

function Images(props){	

	var imageArray = [];
	props.images.map((images, index)=>{
    imageArray.push(
        <div key={index} className="col-sm-4">
            <img src={props.images[index]} width="300px" />
        </div>
        )
   	});

	return(
		<div>
			{imageArray}
		</div>
	)
}

export default Images;