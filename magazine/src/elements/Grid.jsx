import { useIsFocusVisible } from '@mui/material';
import styled from 'styled-components';

const Grid = (props) => {
  const {
    is_flex,
    flex,
    maxwidth,
    width,
    margin,
    padding,
    bg,
    children,
    center,
    _onClick,
    border,
    height,
    display,
  } = props;

  const styles = {
    is_flex: is_flex,
    flex: flex,
    maxwidth: maxwidth,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    border: border,
    height: height,
    display: display,
  };
  return (
    <>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  flex: false,
  width: '100%',
  height: '100%',
  padding: false,
  margin: false,
  bg: false,
  maxwidth: false,
  center: false,
  _onClick: () => {},
  border: false,
};

const GridBox = styled.div`
  max-width: ${(props) => props.maxwidth};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')};
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : ''};
  ${(props) => (props.flex ? `display: flex; align-items: center;` : '')};
  ${(props) => (props.center ? `text-align: center;` : '')};
  border: ${(props) => props.border};
`;

export default Grid;
