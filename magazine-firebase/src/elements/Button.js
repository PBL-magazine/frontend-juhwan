import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const {
    text,
    _onClick,
    is_float,
    children,
    margin,
    width,
    padding,
    borderRadius,
    _disabled,
  } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    borderRadius: borderRadius,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick} disabled={_disabled}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: '100%',
  padding: '12px 0px',
  borderRadius: false,
  _disabled: false,
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #095f99;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;

  &:disabled {
    color: #bbb;
    background-color: #393966;
    cursor: default;
  }
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #343434;
  color: #ffffff;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 50px;
  right: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: #004e89;
  }
`;

export default Button;
