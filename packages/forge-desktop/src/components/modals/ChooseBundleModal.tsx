import React, { FunctionComponent, ReactNode } from 'react';
import { IComponentProps } from '../../utils/components';
import Split from '../layouts/Split';
import Card from '../cards/Card';
import Modal from '../layouts/Modal';
import { IToggle } from '../statefuls/Toggle';

interface IChooseBundleModalProps extends IComponentProps {
  children: (bag: IToggle) => ReactNode;
}

const ChooseBundleModal: FunctionComponent<IChooseBundleModalProps> = ({
  children,
}) => {
  const modal = (
    <Split modal={true}>
      <Card>LALALALA</Card>
      <Card>Hello world!</Card>
    </Split>
  );
  return <Modal component={modal}>{children}</Modal>;
};

export default ChooseBundleModal;
