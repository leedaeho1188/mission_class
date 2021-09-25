import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import swal from "sweetalert";
import heic2any from "heic2any";
import {setTeacherImgPreview} from '../redux/modules/class';

const TeacherImgUpload = (props) => {
  const dispatch = useDispatch();
  const fileInput = React.useRef();
  const image = useSelector((state) => state.class.teacherImg? state.class.teacherImg:"https://jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png");

  const selectFile = (e) => {
    const reader = new FileReader();
    let file = fileInput.current.files[0]
    // console.log(file)

    if(!file){
      return
    }

    if(file.name.split('.')[1] === 'heic'){
      let blob = fileInput.current.files[0];
      // blob에다가 변환 시키고 싶은 file값을 value로 놓는다.
			// toType에다가는 heic를 변환시키고싶은 이미지 타입을 넣는다.
      heic2any({blob : blob, toType : "image/jpeg"})
      .then(function (resultBlob) {
        //file에 새로운 파일 데이터를 씌웁니다.
        file = new File([resultBlob], file.name.split('.')[0]+".jpg",{type:"image/jpeg", lastModified:new Date().getTime()});
        props.setTeacherImg(file)
        reader.readAsDataURL(file);
        reader.onloadend = () => {
        dispatch(setTeacherImgPreview(reader.result))
    }
      })
      .catch(function (x){
        console.log(x)
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
      props.setTeacherImg(file)
        reader.readAsDataURL(file);
        reader.onloadend = () => {
        dispatch(setTeacherImgPreview(reader.result))
      }
    }
  }

  return(
    <ImageLabel style={{backgroundImage:`url(${image})`}} >
        <ImageIcon src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-camera-512.png" />
        <input id={"file-input"} style={{ display: 'none' }} type="file" name="imageFile"
          onChange={selectFile} ref={fileInput}/>
    </ImageLabel>  
  )

}

const ImageLabel = styled.label`
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 75px;
  background-position: center;
  background-size: cover;
  cursor:pointer;
  position: relative;
  border: solid 0.1px #000000;
  box-shadow: 0px 5px 10px #00000029;
  margin: auto;
  `

const ImageIcon = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 90px;
  right: 4px;
  border-radius: 30px;
  background: white;
  padding: 3px;
  cursor: pointer;
  box-shadow: 0px 0px 6px #00000029;

`;

export default TeacherImgUpload;
