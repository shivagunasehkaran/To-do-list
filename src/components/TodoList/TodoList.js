import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  renderRow = (item, index) => {
    let data = item.item;
    let title = data ? data.title : '';
    let description = data ? data.description : '';
    return (
      <View style={styles.itemContainer}>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={this.props.onPress}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text style={styles.title}>{title}</Text>
              </View>
            </View>
            <View style={{marginTop: 15, flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text style={styles.desc}>{description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#0C0D0F',
        }}
      />
    );
  };

  render() {
    const {todoList} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={todoList}
          ItemSeparatorComponent={this.FlatListItemSeparator}
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
  },
  text: {
    fontSize: 30,
    fontFamily: 'Avenir-Medium',
  },
  itemContainer: {
    flex: 1,
    width: '90%',
    height: 100,
    shadowColor: '#000',
    borderColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    margin: 15,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Avenir-Medium',
  },
  desc: {
    fontSize: 20,
    fontFamily: 'Avenir-Medium',
  },
});

export default TodoList;
