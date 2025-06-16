import styled from "styled-components";

const Wrapper = styled.section`
video{
object-fit: contain;
max-width: 100%;
height: auto;
display: block;
margin: 0 auto;
}

.section1{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 60%;
align-self: center;
margin: auto;
text-align: center;
}
.section2{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 95%;
align-self: center;
margin: auto;
text-align: center;
}
h1{
color: #ad844b;
font-size: 45px;
font-style: italic;
}
p{
color: #5d6e5e;
}
.carousel-container {
margin-top: 50px;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  padding: 2rem 0;
}

.carousel-track {
  display: flex;
  width: calc(200px * 6); /* 6 images * width */
  animation: scroll 5s linear infinite;
  gap: 80px;
}

.carousel-slide {
  flex: 0 0 auto;
  width: 200px;
  margin: 0 15px;
  border-radius: 10px;
  overflow: hidden;
}

.carousel-slide img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

`
export default Wrapper