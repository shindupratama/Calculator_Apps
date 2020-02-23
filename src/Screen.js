import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Screen = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
                <Text>{props.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Screen;