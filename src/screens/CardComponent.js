import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {List, ListItem} from 'react-native-elements'
import {
    Card,
    CardItem,
    Thumbnail,
    Body,
    Left,
    Right,
    Button,
    Icon
} from 'native-base';

class CardComponent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      dataSource: []
    }
  }
  // state = {
  //   data: []
  // };

///from: https://www.youtube.com/watch?v=IuYo009yc8w
  componentDidMount() {
    //this.fetchData();
    const url = 'https://randomuser.me/api/?results=10'
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
          dataSource: responseJson.results
        })
    })
    .catch((error) => {
      alert(error)
    })
  }
///from: https://www.youtube.com/watch?v=IuYo009yc8w
  // fetchData = async () => {
  //  const repsonse = await fetch('https://randomuser.me/api/?results=1');
  //  const json = await repsonse.json();
  //  this.setState({data: json.results});
  // }

  renderItem = ({item}) => {
    return (
      <View>
      <Image
      style={{width:100, height:100}}
      source={{uri: item.picture.thumbnail}}/>
        <View>
          <Text>
            {item.name.first}
          </Text>
          <Text>
            {item.name.last}
          </Text>
        </View>
    </View>
    )
    
  }

  render() {
    return (
      <Card>
          <CardItem>
              {/* <Left> */}
                  {/* <Thumbnail 
                  style={{height:150}}
                  source={require('../assets/me.jpg')}/> */}
                 


                  <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                  />






                    {/* <FlatList
                    
                    horizontal= {true}
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({item}) => 
                        <Text>
                        {`${item.name.first} ${item.name.last} `}
                        
                        </Text>}
                    /> */}
                  <Body>
                      
                  </Body>    
              {/* </Left> */}
          </CardItem>
          
          
      </Card>
      
    );
  }
}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  
    
}}
);

