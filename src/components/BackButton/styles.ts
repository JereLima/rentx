import { TouchableOpacity } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(BorderlessButton)`
    height: ${RFValue(48)}px;
    width: ${RFValue(48)}px;
    justify-content: center;
    align-items: center;
`;
