import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <div>
      <MyUl>
        <MyLi>홈</MyLi>
        <MyLi>글쓰기</MyLi>
        <MyLi>로그아웃</MyLi>
      </MyUl>
    </div>
  );
}

const MyLi = styled.li`
  color: green;
  font-size: 30px;
  list-style-type: none;
`;

const MyUl = styled.ul`
  display: flex;
`;

export default Header;
