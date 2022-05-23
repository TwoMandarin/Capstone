import '../css/Room.css';
import {React,useState} from 'react';
import { Link,withRouter } from "react-router-dom";
import P from "../image/p.png"
import S from "../image/s.png"

function RoomCircle(props) {
    var roomtype;

    if(props.type==="프로젝트")
        roomtype="p"
    else roomtype="s"

    const imagestyle = {
             height:80,
             width:80,
             marginLeft:120
    };


    return (
        <label>
            <Link to={{
                pathname:`/roomenter/${props.id}`,
                state:`${props.id}`
                }}
                style={{ textDecoration: 'none' }}>
                <div id="circle">
                {
                    props.type === "프로젝트"
                    ? <p id="project">프로젝트</p>
                    : <p id="study">스터디</p>
                    }

                    <h5 id="title">{props.title}</h5>

                    <p id="explan">프로젝트 설명 불러오기 할거얌 나는 바보야 안녕 </p>
                </div>
            </Link>
        </label>


    );
}
export default withRouter(RoomCircle);
