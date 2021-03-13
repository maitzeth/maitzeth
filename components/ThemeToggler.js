import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeContext";
import { device } from "../config";

const ThemeToggler = () => {
  const { activeTheme, themeToggler } = useTheme();

  return (
    <ButtonWrapper type="button" aria-label="Activate" onClick={themeToggler}>
      <ButtonInner theme={activeTheme} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  opacity: 0.65;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 0;
  appearance: none;
  margin-left: 20px;
  order: 2;

  &:hover {
    opacity: 1;
  }
`;

const ButtonInner = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${(props) =>
    props.theme === "light" ? "none" : "4px solid #cbd5e0"};
  background-color: ${(props) =>
    props.theme === "light" ? "none" : "#cbd5e0"};
  transform: ${(props) =>
    props.theme === "light" ? "scale(1)" : "scale(0.55)"};
  transition: all 0.45s ease;
  overflow: ${(props) => (props.theme === "light" ? "hidden" : "visible")};
  box-shadow: ${(props) =>
    props.theme === "light" ? "inset 8px -8px 0px 0px #1a202c" : "none"};

  &:before {
    content: "";
    position: absolute;
    right: -9px;
    top: -9px;
    height: 24px;
    width: 24px;
    border: ${(props) =>
      props.theme === "light" ? "none" : "2px solid #cbd5e0"};
    border-radius: 50%;
    transform: ${(props) =>
      props.theme === "light" ? "translate(0, 0)" : "translate(14px, -14px)"};
    opacity: ${(props) => (props.theme === "light" ? "1" : "0")};
    transition: transform 0.45s ease;
  }

  &:after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -23px 0 #cbd5e0, 0 23px 0 #cbd5e0, 23px 0 0 #cbd5e0,
      -23px 0 0 #cbd5e0, 15px 15px 0 #cbd5e0, -15px 15px 0 #cbd5e0,
      15px -15px 0 #cbd5e0, -15px -15px 0 #cbd5e0;
    transform: ${(props) =>
      props.theme === "light" ? "scale(0)" : "scale(1)"};
    transition: all 0.35s ease;
  }
`;

export default ThemeToggler;
