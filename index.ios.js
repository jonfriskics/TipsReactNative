/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  Modal,
  Alert,
  Image,
  ScrollView,
  Button,
  View,
  StatusBar
} from 'react-native';

class Toolbar extends Component {

  render() {
    console.log(this.props);
    return (
      <View style={styles.hoveringView}>
        <TouchableHighlight style={this.props.styles.middleToolbarItem}>
          <Text>{this.props.currentPage} of 62</Text>
        </TouchableHighlight>
        <TouchableHighlight style={this.props.styles.rightToolbarItem}>
          <Text>Share</Text>
        </TouchableHighlight>
      </View>
    );
  }

}

class TipView extends Component {

  renderButton() {
    return (
      <TouchableHighlight onPress={this._onPressButton.bind(this)}>
        <Text>Like</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={this.props.styles.viewInScrollView}>
        <Image style={this.props.styles.imageSize} source={require('./images/tip1.png')} />
        <Text style={this.props.styles.tipTitle}>
          Quickly respond to a notification
        </Text>
        <Text style={this.props.styles.tipBody}>
          Slide a notification up to dismiss it, or pull it down to reveal actions you can take.  For example, with an iMessage, pull down and you can reply right there.
        </Text>
        {this.renderButton()}
      </View>
    );
  }

  _onPressButton(e) {
    console.log(e);
    Alert.alert('title','message',[{text:'OK', onPress: () => console.log('ok')}]);
  }

}

class TipsReactNative extends Component {

  constructor() {
    super();
    
    this.state = {
      currentPage: 1
    };
  }

  render() { 
    return (
      <View>
        <StatusBar hidden={true} />
        <ScrollView automaticallyAdjustContentInsets={false} 
                    horizontal={true} 
                    pagingEnabled={true}
                    scrollEventThrottle={0}
                    onScroll={this._scrollHappened.bind(this)}>
          <TipView styles={styles} page={0} />
          <TipView styles={styles} page={1} />
          <TipView styles={styles} page={2} />
          <TipView styles={styles} page={3} />
        </ScrollView>
        <Toolbar styles={styles} currentPage={this.state.currentPage}/>
      </View>
    );
  }

  _scrollHappened(t) {
    console.table(t);
    console.log(t.nativeEvent);
    let currentPage = this.state.currentPage;
    this.setState({currentPage: currentPage + 1});
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  viewInScrollView: {
    alignItems: 'center',
    width: 375,
    height: 667,
  },
  tipTitle: {
    fontSize: 28,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    margin: 0,
    padding: 0,
    textAlign: 'left',
  },
  hoveringView: {
    width: 375,
    height: 49,
    backgroundColor: '#ff0000',
    position: 'absolute',
    bottom: 0,
  },
  leftToolbarItem: {
    width: 44,
    height: 44,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  rightToolbarItem: {
    width: 44,
    height: 44,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  middleToolbarItem: {
    width: 100,
    height: 44,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  }
});

AppRegistry.registerComponent('TipsReactNative', () => TipsReactNative);
