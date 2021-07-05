import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';

export default class Subcateleven extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MainArray11: [],
      checkarrayeleven: [],
    };
  }
  componentDidMount = () => {
    const {MainArray10} = this.props.route.params;
    const {myid} = this.props.route.params;
    const {MainArray11, checkarrayeleven} = this.state;
    console.log(MainArray10, 'at subcateleven');
    // for (var i = 0; i < MainArray10[0].child.length; i++) {
    //   let id = MainArray10[0].child[i];

    //   console.log(id, 'id check');
    //   let newid = id.slice(0, 4) + 's' + id.slice(4, 40);
    let newid = myid;
    console.log(newid, 'check it at subcat five');
    let headers = {
      Authorization:
        'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MjUwNDk3OTQsImV4cCI6MTYyNTA1MzM5NCwiaXNzIjoiaHR0cHM6Ly9pY2RhY2Nlc3NtYW5hZ2VtZW50Lndoby5pbnQiLCJhdWQiOlsiaHR0cHM6Ly9pY2RhY2Nlc3NtYW5hZ2VtZW50Lndoby5pbnQvcmVzb3VyY2VzIiwiaWNkYXBpIl0sImNsaWVudF9pZCI6IjFiOGU5OTFkLTAwYzMtNGFjNS05OTFkLTc1MWVlZTllZTVjM18zMzQ0YmY3MC03ZmUwLTRkYzEtYWU0OS0xYzU4MDQxNmE4MmUiLCJzY29wZSI6WyJpY2RhcGlfYWNjZXNzIl19.X__nhpvcn1tvuONFp0kyx5Li8xuy_L74PvMPelrYRrm6S74LlCvZsQrbKrGZjJthq1___ucOqJisy7EC1bJWpdifuH9AI7l8vfJ0EOeLTpAi-3q1vwQFNW8VvRCPueXKU3A0EeLJ9T9SPks_o7jcTJGuUz6vk_a9qGxuZLnWxKCDU9C-vlvDTPBYR7AHeNVdDgQeKI6ot8hcXsD6YAJY4PwD-z5h5S2u9Cf6ZZFpHo2LDBR5sCiyyHSs91ywmkVTROxgqD1yVfesrBKK9ztfQh46Ok9o8I839KZoRy6jWK6CDuyqIiK2JHPbH2Sq1-3gqGJjhSqUqBxwa4B8jcUckg',
      'API-Version': 'v2',
      'Accept-Language': 'en',
      Accept: 'application/json',
    };
    let data = {};
    console.log(headers, 'at subcategoryfive page');
    actions
      .ondiseasesfive(newid, data, headers)
      .then(res => {
        console.log(res, 'response at subcategoryfive page by sahil');
        checkarrayeleven.push(res);

        this.setState({
          MainArray11: checkarrayeleven,
        });
      })
      .catch(err => {
        console.log(err, 'EROR');
      });
  };
  //   };
  //   onClickDiseasesFive = id => {
  //     const {MainArray11, checkarrayeleven} = this.state;
  //     const {navigation} = this.props;
  //     let myid = id.slice(0, 4) + 's' + id.slice(4, 40);
  //     console.log(myid, 'check it');
  //     navigation.navigate(navigationStrings.SUBCATTEN, {
  //       MainArray9: MainArray9,
  //       myid: myid,
  //     });
  //   };
  renderItem = ({item}) => {
    console.log(item, 'item in render item');
    return (
      <View>
        {/* <View style={styles.mainview}>
          <TouchableOpacity
            onPress={() => this.onClickDiseasesFive(item['@id'])}>
            <Text style={styles.headingtext}>{item['title']['@value']}</Text>
          </TouchableOpacity>
        </View> */}
        {/* <View style={styles.bodyview}>
          <Text style={styles.bodytext}>{item['title']['@value']}</Text>
        </View> */}
        <View>
          <Text>Sub cat eleven</Text>
        </View>

        {item['definition'] ? (
          <View style={styles.bodyview}>
            <Text style={styles.bodytext}>{item['definition']['@value']}</Text>
          </View>
        ) : (
          <View>
            <Text></Text>
          </View>
        )}

        {item['exclusion'] ? (
          <View style={styles.bodyview}>
            {item['exclusion'].map((value, index) => {
              return (
                <View>
                  <Text style={styles.bodytext}>
                    {item['exclusion'][index]['label']['@value']}
                  </Text>
                </View>
              );
            })}
          </View>
        ) : (
          <View>
            <Text></Text>
          </View>
        )}

        {item['inclusion'] ? (
          <View style={styles.bodyview}>
            {item['inclusion'].map((value, index) => {
              return (
                <View>
                  <Text style={styles.bodytext}>
                    {item['inclusion'][index]['label']['@value']}
                  </Text>
                </View>
              );
            })}
          </View>
        ) : (
          <View>
            <Text></Text>
          </View>
        )}
      </View>
    );
  };
  render() {
    const {MainArray11, checkarrayeleven} = this.state;
    console.log(MainArray11, 'at subcategory 5 page');
    return (
      <View>
        <TouchableOpacity
          onPress={this.onClickDiseasesThree}></TouchableOpacity>
        <View>
          <FlatList
            data={checkarrayeleven}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{}} />}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainview: {
    ...commonStyles.viewofcard,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingtext: {
    fontFamily: fontFamily.futuraHeavyBt,
    fontSize: 30,
  },
  bodyview: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    margin: 10,
  },
  bodytext: {
    fontFamily: fontFamily.semiBold,
  },
});
