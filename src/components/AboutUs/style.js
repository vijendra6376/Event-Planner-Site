import styled from "styled-components"

const Wrapper = styled.div`
  .upper-about {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
  }

  .image {
    height: 550px;
    max-width: 600px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .about {
    background-color: rgb(220, 203, 172);
    padding: 1rem;
    border-radius: 10px;
    max-width: 400px;
    // height: 500px;
    color: #2f2f2f;
    margin-left: -50px;
  }

  .about h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #3e2d27;
  }

  .about p {
    line-height: 1.6;
    font-size: 1.1rem;
    text-align: justify;
  }

  .founder{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin: 150px;
  }

  .profile{
  border-radius: 50%;
  height: 200px;
  width: 200px;
  }

  .about-founder{
  font-size: 19px;
  }

  @media (max-width: 768px) {
    .upper-about {
      flex-direction: column;
    }

    .about {
      width: 100%;
    }

    .image {
      width: 100%;
    }
  }
`

export default Wrapper