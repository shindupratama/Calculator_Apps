import React, { Component } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import Screen from './Screen';
import {buttonPressed, changeText} from './actions';

const first = [7, 4, 1, 'C'];
const second = [8, 5, 2, 0];
const third = [9, 6, 3, '.'];
const fourth = ['/', '*', '+', '-', '='];

class Button extends Component {
    render () {
        return (
            <View style={{flex: 1}}>
                <Screen number={this.props.number}/>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', marginBottom: 20}}>
                    <FlatList
                        data={first}
                        renderItem={({item}) => { 
                            return (
                                <View style={{alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#e0e0e0', backgroundColor: '#e0e0e0', margin: 10}}>
                                    <TouchableOpacity>
                                        <View style={{margin: 10, backgroundColor: '#e0e0e0'}}>
                                            <Text style={{fontSize: 30}}>{item}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                        keyExtractor={item => item} />
                    <FlatList
                        data={second}
                        renderItem={({item}) => { 
                            return (
                                <View style={{alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#e0e0e0', backgroundColor: '#e0e0e0', margin: 10}}>
                                    <TouchableOpacity>
                                        <View style={{margin: 10, backgroundColor: '#e0e0e0'}}>
                                            <Text style={{fontSize: 30}}>{item}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                        keyExtractor={item => item} />
                    <FlatList
                        data={third}
                        renderItem={({item}) => { 
                            return (
                                <View style={{alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#e0e0e0', backgroundColor: '#e0e0e0', margin: 10}}>
                                    <TouchableOpacity>
                                        <View style={{margin: 10, backgroundColor: '#e0e0e0'}}>
                                            <Text style={{fontSize: 30}}>{item}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                        keyExtractor={item => item} />
                    <FlatList
                        data={fourth}
                        renderItem={({item}) => { 
                            return (
                                <View style={{alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 5, borderColor: '#e0e0e0', backgroundColor: '#e0e0e0', margin: 10}}>
                                    <TouchableOpacity>
                                        <View style={{margin: 8.4, backgroundColor: '#e0e0e0'}}>
                                            <Text style={{fontSize: 20}}>{item}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                        keyExtractor={item => item} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { 
        number: state.number,
        text: state.text
    };
};

export default connect(mapStateToProps, {buttonPressed, changeText})(Button);