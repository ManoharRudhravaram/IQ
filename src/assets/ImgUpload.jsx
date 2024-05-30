import React, { useState } from 'react';

function ImgUpload() {
  const [img, setImg] = useState('');
  const [arr,setArr]=useState([]);

  function imageUpload(e) {
    const file = e.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      
      reader.readAsDataURL(file);
      
      reader.onloadend = () => {
        setImg(reader.result);
      };
    }
  }

  console.log(img);
  function addImg(){
    setArr((pre)=>{
      return [...pre,img]
    })
  }

  console.log(arr);
  return (
    <div>
      <input type="file" onChange={imageUpload} />
      <button onClick={addImg}>Submit</button>
      <div style={{display:'grid',gridTemplateColumns:'auto auto auto'}}>
      {
        arr.length>0 && arr.map((img,i)=> <img key={i} src={img} style={{height:'12rem',width:'15rem'}}/> )
      }
      </div>
    </div>
  );
}

export default ImgUpload;
