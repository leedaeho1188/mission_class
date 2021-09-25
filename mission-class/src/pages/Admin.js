import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {api as adminActions} from '../redux/modules/admin';
import {lightColor} from '../shared/color'

const Admin = () => {
  const dispatch = useDispatch();
  const adminRequest_list = useSelector((state) => state.admin.adminRequest);
  const classRequest_list = useSelector((state) => state.admin.classRequest);
  const accept_list = useSelector((state) => state.admin.accept);
  
  React.useEffect(() => {
    dispatch(adminActions.getAdminApply());
    dispatch(adminActions.getAdminAccept());
    dispatch(adminActions.getClassRequest());
    
  },[])

  return(
    <React.Fragment>
      <AdminContainer>
        <AdminBox>
          <AdminRequestBox>
            <AdminHeader>
              교육 대기 리스트
            </AdminHeader>
            <AdminBody>
              {classRequest_list.map((r)=>{
                return(
                  <AdminReq key={r.id} >
                    <ReqClass>{r.classTitle}</ReqClass>
                    <div style={{display: "flex"}} >
                      <AcceptBtn onClick={() => {
                        dispatch(adminActions.acceptClassApply(r.classId))
                      }} >수락</AcceptBtn>
                      <DenyBtn onClick={() => {
                        dispatch(adminActions.denyClassApply(r.classId))
                      }}>거절</DenyBtn>
                    </div>
                  </AdminReq>
                )
              })}
            </AdminBody>
          </AdminRequestBox>
          <AdminRequestBox>
            <AdminHeader>
              단체 대기 리스트
            </AdminHeader>
            <AdminBody>
              {adminRequest_list.map((r)=>{
                return(
                  <AdminReq key={r.id}>
                    <ReqPlace>{r.classPlace}</ReqPlace>
                    <div style={{display: "flex"}} >
                      <AcceptBtn onClick={() => {
                        dispatch(adminActions.acceptAdminApply(r.userId))
                      }} >수락</AcceptBtn>
                      <DenyBtn onClick={() => {
                        dispatch(adminActions.denyAdminApply(r.userId))
                      }}>거절</DenyBtn>
                    </div>
                  </AdminReq>
                )
              })}
            </AdminBody>
          </AdminRequestBox>
          <AdminAcceptBox>
            <AdminHeader>단체 승인 리스트</AdminHeader>
            <AdminBody>
              {accept_list.map((r) => {
                return(
                  <AdminReq key={r.id} >
                    <ReqPlace>{r.classPlace}</ReqPlace>
                    <div style={{display:"flex"}} >
                      <div>관리자 : {r.name}</div>
                      <div></div>
                    </div>
                  </AdminReq>
                )
              })}
            </AdminBody>
          </AdminAcceptBox>
          
        </AdminBox>
      </AdminContainer>
    </React.Fragment>
  )

}

const AdminContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const AdminBox = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 60px;
  flex-direction: column;
  box-sizing: border-box;
`

const AdminRequestBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
`

const AdminAcceptBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
`

const AdminHeader = styled.div`
  display: flex;
  font-size: 17px;
  font-weight: bold;
  margin-top: 20px;
`

const AdminBody = styled.div`
  display: flex;
  flex-direction: column;
`

const AdminReq = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px
`

const ReqPlace = styled.div`

`

const ReqClass = styled.div`



`

const AcceptBtn = styled.div`
  padding: 10px 12px;
  text-align: center;
  border-radius: 5px;
  background-color: ${lightColor};
  margin-right: 10px;
`

const DenyBtn = styled.div`
  padding: 10px 12px;
  text-align: center;
  border-radius: 5px;
  background-color: #757575;
`

export default Admin;