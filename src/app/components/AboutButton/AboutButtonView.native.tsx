import React from 'react';
import { Button } from 'react-native';

import styles from '../../native/styles';

export default (props:any) =>
  // @ts-ignore
  <Button
    onPress={props.onClick}
    style={styles.button}
    title="About"/>;
