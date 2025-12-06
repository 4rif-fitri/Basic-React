import React from 'react'

const Testing = ({title,des}) => {
// const Testing = (props) => {
//   console.log({props});
//   let {title,des} = props
  
	return (
    <>
      <h1>Child {title}</h1>
      <p>Halo child {des}</p>
    </>
  );
};

export default Testing
