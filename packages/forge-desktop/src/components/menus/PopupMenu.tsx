import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import layouts from '../../styles/layouts';
import bgs from '../../styles/bgs';
import shadows from '../../styles/shadows';
import shapes from '../../styles/shapes';
import Toggle, { IToggleBag } from '../statefuls/Toggle';
import states from '../../styles/states';
import words from '../../styles/words';

const Container = styled('div')`
  position: relative;
`;

const Wrap = styled('div')`
  ${bgs.darkLighter}
  ${shadows.simple}
  ${shapes.simple}
  padding-left: 0;
  padding-right: 0;
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 10;
`;

interface IPopupMenuProps {
  children: ReactNode;
  items: ReactNode;
}

const PopupMenu: FunctionComponent<IPopupMenuProps> & {
  Item: FunctionComponent;
  List: FunctionComponent;
} = ({ children, items }) => {
  const Toggleable = ({ active, toggle }: IToggleBag) => {
    const onClick = () => toggle();
    return (
      <Container onClick={onClick}>
        {children}
        {active && <Wrap>{items}</Wrap>}
      </Container>
    );
  };
  return <Toggle>{Toggleable}</Toggle>;
};

PopupMenu.Item = styled('div').attrs({ borderless: 'true' })`
  ${bgs.darkLight}
  ${states.hovered(bgs.dark)}
  ${shapes.thin}
  ${layouts.rowsCenter}
  ${words.small}
  width: 200px;
`;

PopupMenu.List = styled('div')`
  ${layouts.columns}
`;

export default PopupMenu;
