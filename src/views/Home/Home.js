import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import { ColourPalette } from '../../assets/styles/ColoursStyles';
import TodoList from '../../components/TodoList/TodoList';
import {styles} from './Home.style';
class Home extends Component {
  // navigate to add screen
  goToAddScreen = () => {
    this.props.navigation.push('Add');
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: ColourPalette.gray}}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar translucent barStyle="light-content" />
          <View style={styles.container}>
            <TodoList todoList={this.props.todo} />
            <TouchableOpacity
              style={styles.button}
              onPress={this.goToAddScreen}>
              <Text style={styles.text}>{'ADD'}</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo.todoDetails,
});

export default connect(mapStateToProps)(Home);
