import React from 'react';
import styled  from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setPreview } from '../redux/modules/class';
import swal from "sweetalert";
import heic2any from 'heic2any';

const ClassImgUpload = (props) => {

  const dispatch = useDispatch();
  const preview = useSelector((state) => state.class.preview? state.class.preview : "data:image/jpeg;base64,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");
  const fileInput = React.useRef();



  const selectFile = (e) => {
    const reader = new FileReader();
    let file = fileInput.current.files[0]
    console.log(file)
    if(!file){
      props.setImage(false);
      dispatch(setPreview(null));
      return;
    }
    if(file.name.split('.')[1] === 'heic'){
      let blob = fileInput.current.files[0];
      // blob에다가 변환 시키고 싶은 file값을 value로 놓는다.
			// toType에다가는 heic를 변환시키고싶은 이미지 타입을 넣는다.
      heic2any({blob : blob, toType : "image/jpeg"})
      .then(function (resultBlob) {
        //file에 새로운 파일 데이터를 씌웁니다.
        file = new File([resultBlob], file.name.split('.')[0]+".jpg",{type:"image/jpeg", lastModified:new Date().getTime()});
        props.setImage(file)
        reader.readAsDataURL(file);
        reader.onloadend = () => {
        dispatch(setPreview(reader.result))
    }
      })
      .catch(function (error){
        console.log(error)
      })
    } else{
      const type = file.type.split('/')
      if (type[0] !=="image"){
        swal({
          title: "업로드에 실패하였습니다.",
          text: "이미지만 업로드 할 수 있습니다.",
          icon: "error"
        })
        return
      }
      props.setImage(file)
        reader.readAsDataURL(file);
        reader.onloadend = () => {
        dispatch(setPreview(reader.result))
      }
    }
  }

  return(
    <React.Fragment>
      <ImageLabel style={{backgroundImage:`url(${preview})`}} >
        <input type="file" style={{ display: 'none' }} name="classImgFile" onChange={selectFile} ref={fileInput} ></input>
      </ImageLabel>
    </React.Fragment>
  )
}

const ImageLabel = styled.label`
  display: block;
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 5%;
  background-position: center;
  background-size: cover;
  cursor:pointer;
  object-fit:cover;
`

export default ClassImgUpload;
