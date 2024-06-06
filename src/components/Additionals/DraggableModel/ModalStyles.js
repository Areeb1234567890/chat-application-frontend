import styled from "styled-components";

export const Container = styled.div`
  width: ${({ size }) => (!size ? "600px" : "100%")};
  height: ${({ size }) => (!size ? "500px" : "100%")};
  z-index: 100;
  background-color: #111b21;
  transition: ${({ size }) =>
    !size
      ? "  width 0.5s ease-in-out, height 0.5s ease-in-out"
      : "  width 0.5s ease-in-out, height 0.5s ease-in-out, transform 0.5s ease-in-out"};
  position: absolute;
  border-radius: 10px;
`;

export const Handle = styled.div`
  border-radius: 10px 10px 0 0;
  padding: 15px 30px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2a3942;
  cursor: ${({ size }) => (!size ? "move" : "")};
  h3 {
    font-family: Roboto;
    color: #dadada;
    font-weight: 500;
  }
  .imgDiv {
    user-select: none;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: #dadada33;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  padding: 20px;
  position: relative;
  .bg {
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background-image: url(${(props) => props.bg});
    background-size: contain;
    background-repeat: repeat;
    background-position: center;
    opacity: 0.1;
  }
`;

export const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  gap: 15px;
  .profileImage {
    transition: width 0.5s ease-in-out;
    width: ${({ size }) => (!size ? "230px" : "350px")};
    height: ${({ size }) => (!size ? "230px" : "350px")};
    border-radius: 50%;
    z-index: 1;
    transition: width 0.5s ease-in-out, height 0.5s ease-in-out;
    background-image: url(${(props) => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #2a3942;
    background-position: center;
  }
  .textCon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h2 {
    color: #dadada;
    font-weight: 600;
    font-family: Roboto;
    font-size: 25px;
  }
  h3 {
    color: #dadada;
    font-weight: 400;
    font-family: Roboto;
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  .button {
    height: 65px;
    width: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    img {
      height: 40px;
      width: 40px;
    }
  }
  .accept {
    background-color: #05ca5d;
    img {
      transform: rotate(-69deg);
    }
  }
  .decline {
    background-color: #f7392c;
    img {
      transform: rotate(45deg);
    }
  }
`;
