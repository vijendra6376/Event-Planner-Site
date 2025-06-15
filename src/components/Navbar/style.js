import styled, { keyframes } from "styled-components";

// Fade-in animation for mobile menu
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.section`
  /* === Navbar Base Styling === */
  .Navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 2rem; /* Reduced padding */
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(230, 220, 200, 0.5);
  height: 70px; /* Optional: fix navbar height */
}

.Left .logo {
  width: 110px; /* Shrink logo slightly */
  height: auto;
  filter: drop-shadow(0 0 1px #d6b179);
}


  /* === Menu Items (Desktop) === */
  .Right {
    display: flex;
    gap: 32px;
    list-style: none;
    margin: 0;
    padding: 0;
    color: #a67938;
    font-size: 15.5px;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .Right li {
    cursor: pointer;
    position: relative;
    transition: color 0.3s ease;
  }

  .Right li::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    background: #b38639;
    bottom: -4px;
    left: 0;
    transition: width 0.3s ease;
  }

  .Right li:hover {
    color: #9c6c2a;
  }

  .Right li:hover::after {
    width: 100%;
  }

  /* === Hamburger Menu Button === */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    padding: 0.5rem;
    transition: transform 0.3s ease;
  }

  .hamburger:hover {
    transform: scale(1.05);
  }

  .hamburger .bar {
    width: 26px;
    height: 3px;
    background-color: #b38639;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  /* === Responsive Styling === */
  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }

    .Right {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba(250, 246, 235, 0.98);
      flex-direction: column;
      align-items: center;
      display: none;
      padding: 1rem 0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
      border-top: 1px solid #e0d6c1;
      animation: ${fadeIn} 0.3s ease;
    }

    .Right.active {
      display: flex;
    }

    .Right li {
      padding: 0.8rem 0;
      width: 100%;
      text-align: center;
      font-size: 17px;
    }
  }
`;

export default Wrapper;
