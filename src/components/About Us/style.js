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
  .founder-detial{
  color: #555;
  font-size: 19px;
  }
.founder-heading{
margin-bottom: -10px;
font-weight: bold;
font-size: 30px
}
.journey {
  display: flex;
  flex-direction: column;
  align-items: center;         /* Horizontally center content */
  justify-content: center;     /* Vertically center if height is set */
  text-align: center;
  padding: 40px 40px;          /* Top-bottom and left-right padding */
  max-width: 800px;
  margin: 0 auto;  
  margin-top: 60px;   
  margin-bottom: -50px;         /* Center the whole block */
}

.heading {
 font-size: 10px
  font-weight: bold;
 font-size: 40px;
  color: #b38639;
}

.journey-detial {
 
  color: #555;
  line-height: 1.6;
  font-size: 18px;
}

 .vision-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 40px;
  gap: 20px; /* space between lines and text */
}

.vision {
  padding: 12px 20px;
  background-color: #b38639;
  color: white;
  font-size: 25px;
  text-align: center;
  max-width: 550px;
  font-weight: 500;
}

.vision-line {
  flex: 1;
  height: 1px;
  background-color: #b38639;
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
      .heading {
    font-size:;
  }

  .journey-detial {
    font-size: ;
  }
     .vision-container {
    flex-direction: column;
    gap: 10px;
  }

  .vision-line {
    width: 60%;
    height: 1px;
  
  }
`

export default Wrapper