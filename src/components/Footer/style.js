import styled from "styled-components";

const Wrapper = styled.div`
  /* ===== Full Page Layout ===== */
  .page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content {
    flex: 1;
  }

  /* ===== Footer Styling ===== */
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(168, 129, 61);
    height: 70px;
    padding: 0 20px;
    margin-top: auto;
    position: relative;
  }

  /* ===== Center Icons in Footer ===== */
  .center-icons {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 20px;
  }

  .instagram,
  .linkedin {
    color: white;
    font-size: 20px;
  }

  /* ===== Floating Popup Styling ===== */
  .floating-popup-wrapper {
    position: relative;
  }

  .floating-popup {
    position: absolute;
    bottom: 70px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .circle-btn {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    border: none;
    background-color: #25d366;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease;
  }

  .circle-btn:hover {
    transform: scale(1.1);
  }

  /* ===== Responsive Styling for Mobile ===== */
  @media (max-width: 600px) {
    .footer {
      flex-direction: column;
      height: auto;
      padding: 10px;
      bottom: 0;
    }

    .center-icons {
      position: static;
      transform: none;
      justify-content: center;
      margin-top: 8px;
    }

    .floating-popup {
      bottom: 80px;
      right: 10px;
    }
  }
`;

export default Wrapper;
