import CheckBox from '@react-native-community/checkbox';
import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontFamily} from '../../assets/fonts/Fonts';
import {ColourPalette} from '../../assets/styles/ColoursStyles';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      setSelection: false,
    };
  }

  renderRow = (item, index) => {
    let data = item.item;
    let title = data ? data.title : '';
    let description = data ? data.description : '';
    return (
      <View style={styles.itemContainer}>
        <CheckBox
          value={this.state.isSelected}
          onValueChange={this.state.setSelection}
          style={styles.checkbox}
        />
        <TouchableOpacity
          style={styles.textContainer}
          onPress={this.props.onPress}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            </View>
          </View>
          <View style={{marginTop: 15, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={styles.desc} numberOfLines={1}>
                {description}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {todoList} = this.props;
    return (
      <View style={styles.container}>
        {todoList.length === 0 && (
          <View style={styles.textView}>
            <Text style={styles.text}>{'Add a `TODO` to get started !'}</Text>
          </View>
        )}
        <FlatList
          contentContainerStyle={{paddingBottom: 50}}
          data={todoList}
          renderItem={this.renderRow}
          keyExtractor={item => item.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: FontFamily.AVENIR_MEDIUM,
    color: ColourPalette.primary,
  },
  itemContainer: {
    flex: 1,
    height: 90,
    shadowColor: ColourPalette.black,
    borderColor: ColourPalette.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    marginVertical: 10,
    padding: 15,
    marginHorizontal: 10,
    backgroundColor: ColourPalette.white,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    paddingLeft: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: FontFamily.AVENIR_MEDIUM,
  },
  desc: {
    fontSize: 15,
    fontFamily: FontFamily.AVENIR_MEDIUM,
  },
});

export default TodoList;
