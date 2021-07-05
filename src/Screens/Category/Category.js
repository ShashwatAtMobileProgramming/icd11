import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../Components/Header';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import {
  moderateVerticalScale,
  moderateScale,
} from '../../styles/responsiveSize';

import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

let count = 0;

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MainArray: ['Category'],
      MainUrlArray: [],
      FlatListItems: [' Certain infectious or parasitic diseases ','Neoplasms','Diseases of the blood or blood-forming organs',' Diseases of the immune system  ','Endocrine, nutritional or metabolic diseases', ' Mental, behavioural or neurodevelopmental disorders', 'Sleep-wake disorders', 'Diseases of the nervous system', 'Diseases of the visual system','Diseases of the ear or mastoid process','Diseases of the circulatory system', 'Diseases of the respiratory system', 'Diseases of the digestive system', ],
      FlatListItems1: [' Gastroenteritis or colitis of infectious origin   ',' Predominantly sexually transmitted infections  ','Mycobacterial diseases  ','Certain staphylococcal or streptococcal diseases   ','Pyogenic bacterial infections of the skin or subcutaneous tissues  ', ' Certain zoonotic bacterial diseases  ', 'Other bacterial diseases ', ' Human immunodeficiency virus disease', 'Viral infections of the central nervous system ','Non-viral and unspecified infections of the central nervous system  ','Dengue ', 'Certain arthropod-borne viral fevers  m', 'Certain zoonotic viral diseases  ', ],
      FlatListItems2: [' 	 Bacterial intestinal infections   ','Bacterial foodborne intoxications  ','Viral intestinal infections  ','Protozoal intestinal infections    ','	1A40 Gastroenteritis or colitis without specification of infectious agent  ', ' Intestinal fungal infections  ', ],
      FlatListItems3: ['Cholera',' Intestinal infection due to other Vibrio  ','Intestinal infections due to Shigella ' ],
      title:'',
    };
  }
  componentDidMount = () => {
    const {MainArray} = this.state;
    const {my_token} = this.props;
    console.log(my_token, 'access token at category page');

    // var axios = require('axios');
    // var qs = require('qs');
    // var data = qs.stringify({
    //   grant_type: 'client_credentials',
    //   scope: 'icdapi_access',
    // });
    // var config = {
    //   method: 'post',
    //   url: 'https://icdaccessmanagement.who.int/connect/token',
    //   headers: {
    //     Authorization:
    //       'Basic MWI4ZTk5MWQtMDBjMy00YWM1LTk5MWQtNzUxZWVlOWVlNWMzXzMzNDRiZjcwLTdmZTAtNGRjMS1hZTQ5LTFjNTgwNDE2YTgyZTpWaExEYTRNaW5RbnJSZzB1NTVERU9ycFlXaXJNM0ZRTUFYT1o2Vi8wRzBZPQ==',
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   data: data,
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(
    //       JSON.stringify(response.data, 'getting mytoken aggrandize'),
    //     );
    //     let my_token = response.data.access_token;
    //     console.log(my_token, 'my resultant token');
    //     AsyncStorage.setItem('usertoken', my_token);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // post token code
    const Authorization = 'Bearer' + ' ' + my_token;
    console.log(Authorization, 'check authorisation token');
    let headers = {
      // Authorization: Authorization,
      Authorization: Authorization,
      'API-Version': 'v2',
      'Accept-Language': 'en',
    };
    let data = {};
    console.log(headers, 'at category page');
    let mainurl = 'https://id.who.int/icd/entity/455013390';
    // let newurl = mainurl.slice(0, 4) + 's' + mainurl.slice(4, 40);
    console.log(mainurl, 'final url');
    actions
      .mainlistingdiseasescheck(mainurl, data, headers)
      .then(res => {
      //  console.log(res, 'response at category page by sahil');
        let newarray = res.child;
      //  console.log(newarray, 'check for array');

        let length1 = newarray.length;

        //console.log(length1);

        var data1 = res.child.map(function(item){
          return {
            key: item
            
          }
        });

        for(let i = 0; i<=length1; i++){
          console.log(i);

          let newurl = newarray[i].slice(0, 4) + 's' + newarray[i].slice(4, 18) + newarray[i].slice(18, 40);


          console.log(newurl);

          actions
          .mainlistingdiseasescheck(newurl, data, headers)
          .then(res => {

            this.state.MainArray.push(res.title['@value']);
            

        })
        .catch(err => {
          console.log(err, 'EROR');
        });

        this.setState({
         // MainArray: [newarray],
         MainUrlArray: [newarray]
        });

      }
    })
      .catch(err => {
        console.log(err, 'EROR');
      });
  };

  onNextPage = () => {
    const {navigation} = this.props;
    navigation.navigate(navigationStrings.BOOKMARKS);
  };
  onClickDiseases = () => {
    const {MainArray} = this.state;

    const {navigation} = this.props;
    //navigation.navigate(navigationStrings.SUBCATONE, {MainArray: MainArray});
  };
  
  clickEvent = (item) => {

    //const {MainArray} = this.state;
    const {my_token} = this.props;
    console.log(item, 'after click');

    // post token code
    const Authorization = 'Bearer' + ' ' + my_token;
   // console.log(Authorization, 'check authorisation token');
    let headers = {
      // Authorization: Authorization,
      Authorization: Authorization,
      'API-Version': 'v2',
      'Accept-Language': 'en',
    };
    let data = {};
   // console.log(headers, 'at category page');

    if(this.state.MainUrlArray.length > 0) {

    let url = this.state.MainUrlArray[item.key];

    console.log(this.state.MainUrlArray[item.key], 'SHahswattt here');

   // let urlend = url.slice(18,40);
   let urlend = '1435254666' ;
   

    let mainurl = 'https://id.who.int/icd/entity/' + urlend ;
    // let newurl = mainurl.slice(0, 4) + 's' + mainurl.slice(4, 40);
   // console.log(mainurl, 'final url');
    actions
      .mainlistingdiseasescheck(mainurl, data, headers)
      .then(res => {
        console.log(res, 'response at category page by sahil');
        let newarray = res.child;
    //    console.log(newarray, 'check for array');

        let length1 = newarray.length;

        //console.log(length1);
        this.setState({
         // MainArray: [],
         
        });

        for(let i = 0; i<length1; i++){
          console.log(i);

          let newurl = newarray[i].slice(0, 4) + 's' + newarray[i].slice(4, 18) + newarray[i].slice(18, 40);


          console.log(newurl);

          actions
          .mainlistingdiseasescheck(newurl, data, headers)
          .then(res => {

            this.state.MainArray.push(res.title['@value']);
           // this.state.MainArray.push(res.title['@value']);

        })
        .catch(err => {
          console.log(err, 'EROR');
        });

        this.setState({
         // MainArray: [newarray],
        });

      }
    })
      .catch(err => {
        console.log(err, 'EROR');
      });

  } 
}; 

lapsList() {

  return this.state.MainArray.map((data) => {
    return (
      <TouchableOpacity
      style={{justifyContent:'center',marginBottom:10, flexDirection:'row', backgroundColor: '#e3e3e3', padding:3, alignItems:'flex-start'}}
      
      >
      
      
<View style={{justifyContent:'center',marginBottom:10, flexDirection:'row', backgroundColor: '#e3e3e3', padding:3, alignItems:'flex-start'}}>
<Text style={{color:'black',padding:6, fontSize:17,width:Dimensions.get('window').width*0.9, alignSelf:'flex-end' }}
      onPress={ this.clickEvent(item) }
>

{data + '\n' } 
</Text>
<Icon name="chevron-right" size={23} color="#4d4d4d" />
</View>

</TouchableOpacity>
    )
  })

}

  

  renderItem = ({item}) => {
    console.log(item, 'item in render item');
    return (
   
      <TouchableOpacity
      style={{justifyContent:'center',marginBottom:10, flexDirection:'row', backgroundColor: '#e3e3e3', padding:3, alignItems:'flex-start'}}
      
      >
      
      
<View style={{justifyContent:'center',marginBottom:10, flexDirection:'row', backgroundColor: '#e3e3e3', padding:3, alignItems:'flex-start'}}>
<Text style={{color:'black',padding:6, fontSize:17,width:Dimensions.get('window').width*0.9, alignSelf:'flex-end' }}
    //  onPress={ this.clickEvent(item) }
>

{item + '\n' } 
</Text>
<Icon name="chevron-right" size={23} color="#4d4d4d" />
</View>

</TouchableOpacity>
    );
  };

  _renderMyList = ({item})=>(
         
       
    <View style={{justifyContent:'center',marginBottom:10, flexDirection:'row', backgroundColor: '#e3e3e3', padding:5, alignItems:'flex-start'}}>
    <Text style={{color:'black',padding:10, fontSize:17,width:Dimensions.get('window').width*0.9, alignSelf:'flex-end' }}
    onPress={ this.clickEvent(item) } 
    >
    
    {item}
    </Text>
    <Icon name="chevron-right" size={23} color="#4d4d4d" />
    </View>
    

    )

  render() {
    const {MainArray} = this.state;
    const {my_token} = this.props;
    console.log(my_token, 'access token at category page');
    // console.log(MainArray, 'at render');
    return (
     
      <View style={{ flex: 1, marginTop: 10 }}>


<View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: '#e4e3e4',
            borderTopColor: 'white',
            shadowColor: '#000',
            borderBottomColor: '#e4e3e4',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,

            elevation: 13,
          }}>
          <Text style={{fontSize: 30, fontFamily: fontFamily.futuraBtHeavy}}>
            ICD-11 Category
          </Text>
        </View>

{count >0? <View style={{marginBottom:10, flexDirection:'row', backgroundColor: 'white', padding:5, justifyContent:'flex-start', alignItems:'center' }}>
<Icon name="chevron-left" size={23} color="#0072fc" style={{padding:5,marginLeft:10}} onPress={ this.clickback} />

</View> : null }



{count == 3? <Text style={{color: "#292929",  fontSize: 25, marginLeft:10}}>Inclusions</Text>: <FlatList
style={{marginTop:0 , margin:7, borderRadius:10,  }}
data={this.state.MainArray}
renderItem={this.renderItem}
progressViewOffset={100}
keyExtractor={(item , index) => 'key' + index.toString() }
/> }
{count ==3? <Text style={{color: "#001ea6",  fontSize: 18, marginLeft:10, marginTop:30}}>Cholera Syndrome</Text>: null }


</View>
    );
  }
}

const mapStateToProps = state => {
  return {
    my_token: state.homereducers.my_token,
  };
};
export default connect(mapStateToProps)(Category);

const styles = StyleSheet.create({
  mainview: {
    ...commonStyles.viewofcard,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  headingtext: {
    fontFamily: fontFamily.futuraHeavyBt,
    fontSize: 30,
  },
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    padding:10,
    fontFamily: "Cochin"
  }
});

//  functional component
