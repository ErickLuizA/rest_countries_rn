import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { IconProps } from 'react-native-vector-icons/Icon'

interface IProps extends IconProps {}

export function Icon(props: IProps) {
  return <MaterialIcon {...props} size={props.size ?? 16} />
}
