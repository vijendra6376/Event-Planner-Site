import styled from "styled-components";

const Wrapper = styled.div`
  .image {
    width: 100%;
    object-fit: contain;
    height: auto;
  }

  .latest-blog {
    font-family: "Great Vibes", Sans-serif;
    font-size: 50px;
    font-weight: 500;
    font-style: italic;
    text-decoration: none;
    -webkit-text-stroke-color: #000;
    stroke: #000;
    color: #b38739;
    text-align: center;
    margin: 40px;
  }
  .card {
    width: 18rem;
  }

  .custom-btn {
    background-color: #b38739;
    border-color: #b38739;
  }

  .container {
    border-color: #b38739;
  }
`;

export default Wrapper;
