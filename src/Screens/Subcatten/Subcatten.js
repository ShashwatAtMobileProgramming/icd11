import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../Components/Header';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';

class Subcatten extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MainArray10: [],
      checkarrayten: [],
    };
  }
  componentDidMount = () => {
    const {MainArray9} = this.props.route.params;
    const {myid} = this.props.route.params;
    const {my_token} = this.props;
    console.log(my_token, 'access token at subcatone page');
    const {MainArray10} = this.state;
    const {checkarrayten} = this.state;
    console.log(MainArray9, 'at subcatten');
    // for (var i = 0; i < MainArray5[0].child.length; i++) {
    //   let id = MainArray5[0].child[i];

    //   console.log(id, 'id check');
    //   let newid = id.slice(0, 4) + 's' + id.slice(4, 40);
    let newid = myid;
    console.log(newid, 'check it at subcat ten');
    const Authorization = 'Bearer' + ' ' + my_token;
    console.log(Authorization, 'check authorisation token');
    let headers = {
      Authorization: Authorization,
      'API-Version': 'v2',
      'Accept-Language': 'en',
      Accept: 'application/json',
    };
    let data = {};
    console.log(headers, 'at subcategoryfive page');
    actions
      .mainlistingdiseasescheck(newid, data, headers)
      .then(res => {
        console.log(res, 'response at subcategory eight page by sahil');

        checkarrayten.push(res);
        console.log(checkarrayten, 'aaaaaaaaaaaaaaa');
        this.setState({
          MainArray10: checkarrayten,
        });
      })
      .catch(err => {
        console.log(err, 'EROR');
      });
  };

  onClickDiseasesThree = id => {
    const {MainArray10} = this.state;
    const {navigation} = this.props;
    let myid = id.slice(0, 4) + 's' + id.slice(4, 40);
    console.log(myid, 'check it');
    navigation.navigate(navigationStrings.SUBCATELEVEN, {
      MainArray10: MainArray10,
      myid: myid,
    });
  };
  renderItem = ({item}) => {
    console.log(item, 'item in render item');
    return (
      <View>
        {/* <View style={styles.mainview}>
          <TouchableOpacity
            onPress={() => this.onClickDiseasesThree(item['@id'])}>
            <Text style={styles.headingtext}>{item['title']['@value']}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bodyview}>
          <Text style={styles.bodytext}>{item['title']['@value']}</Text>
        </View>
        <View>
          <Text>Sub cat ten</Text>
        </View> */}

        <View style={styles.mainview}>
          {/* onPress={() => this.onClickDiseasesThree(item['@id'])}> */}
          <Text style={styles.headingtext}>{item['title']['@value']}</Text>
        </View>
        <View>{/* <Text>subcat ten</Text> */}</View>
        <View style={styles.subheadingview}>
          <Text style={styles.subheadingtext}>Description</Text>
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
        <View style={styles.subheadingview}>
          <Text style={styles.subheadingtext}>Exclusions</Text>
        </View>
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
    const {MainArray10} = this.state;
    const {checkarrayten} = this.state;
    console.log(MainArray10, 'at subcategory 6 page');
    return (
      <View>
        <View>
          <Header />
        </View>
        <TouchableOpacity
          onPress={this.onClickDiseasesThree}></TouchableOpacity>
        <View>
          <FlatList
            data={checkarrayten}
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
const mapStateToProps = state => {
  return {
    my_token: state.homereducers.my_token,
  };
};
export default connect(mapStateToProps)(Subcatten);
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
    marginTop: 20,
    margin: 10,
  },
  bodytext: {
    fontFamily: fontFamily.semiBold,
    marginLeft: 'auto',
    margin: 5,
    backgroundColor: '#fef8e8',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  subheadingtext: {
    fontSize: 30,
    fontFamily: fontFamily.regular,
  },
  subheadingview: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff3d9',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    margin: 10,
  },
});
