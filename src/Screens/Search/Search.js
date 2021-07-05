import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Searchbar } from 'react-native-paper';


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



export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      MainArray: ['ICD Category'],
      MainUrlArray: [''],
      FlatListItems: [' Certain infectious or parasitic diseases ','Neoplasms','Diseases of the blood or blood-forming organs',' Diseases of the immune system  ','Endocrine, nutritional or metabolic diseases', ' Mental, behavioural or neurodevelopmental disorders', 'Sleep-wake disorders', 'Diseases of the nervous system', 'Diseases of the visual system','Diseases of the ear or mastoid process','Diseases of the circulatory system', 'Diseases of the respiratory system', 'Diseases of the digestive system', ],
      FlatListItems1: [' Gastroenteritis or colitis of infectious origin   ',' Predominantly sexually transmitted infections  ','Mycobacterial diseases  ','Certain staphylococcal or streptococcal diseases   ','Pyogenic bacterial infections of the skin or subcutaneous tissues  ', ' Certain zoonotic bacterial diseases  ', 'Other bacterial diseases ', ' Human immunodeficiency virus disease', 'Viral infections of the central nervous system ','Non-viral and unspecified infections of the central nervous system  ','Dengue ', 'Certain arthropod-borne viral fevers  m', 'Certain zoonotic viral diseases  ', ],
      FlatListItems2: [' 	 Bacterial intestinal infections   ','Bacterial foodborne intoxications  ','Viral intestinal infections  ','Protozoal intestinal infections    ','	1A40 Gastroenteritis or colitis without specification of infectious agent  ', ' Intestinal fungal infections  ', ],
      FlatListItems3: ['Cholera',' Intestinal infection due to other Vibrio  ','Intestinal infections due to Shigella ' ],
      title:'',
      search:''
    };
  }

  renderItem = ({item}) => {
    console.log(item, 'item in render item');
    return (
   
      <TouchableOpacity
      style={{justifyContent:'center',marginBottom:10, flexDirection:'row', backgroundColor: '#e3e3e3', padding:3, alignItems:'flex-start'}}
      onPress={ this.clickEvent(item.key) } 
      >
      
      
<View style={{justifyContent:'center',marginBottom:10, flexDirection:'row', backgroundColor: '#e3e3e3', padding:3, alignItems:'flex-start'}}>
<Text style={{color:'black',padding:6, fontSize:17,width:Dimensions.get('window').width*0.9, alignSelf:'flex-end' }}
 
>

{item + '\n' } 
</Text>
<Icon name="chevron-right" size={23} color="#4d4d4d" />
</View>

</TouchableOpacity>
    );
  };

  updateSearch = (text) => {

    const {MainArray} = this.state;
    const {my_token} = this.props;
    console.log(item, 'after click');
  
  
    // post token code
    const Authorization = 'Bearer' + ' ' + my_token;
    console.log(Authorization, 'check authorisation token');
    let headers = {
      // Authorization: Authorization,
      Authorization: Authorization,
      'API-Version': 'v2',
      'Accept-Language': 'en',
    };
    let data = {
      q:text
    };
    console.log(headers, 'at category page');
  
    if(this.state.MainUrlArray.length > 1) {
  
    let url = this.state.MainUrlArray[item];
  
    console.log(this.state.MainUrlArray, 'SHahswattt here');
  
    let urlend = url.slice(18,40);
  
    let mainurl = 'https://id.who.int/icd/entity/search' + urlend;
    // let newurl = mainurl.slice(0, 4) + 's' + mainurl.slice(4, 40);
    console.log(mainurl, 'final url');
    actions
      .mainlistingdiseasescheckSearch(mainurl, data, headers)
      .then(res => {
        console.log(res, 'response at category page by sahil');
        let newarray = res.child;
        console.log(newarray, 'check for array');
  
        let length1 = newarray.length;
  
        //console.log(length1);
        this.setState({
          MainArray: [],
         
        });
  
        for(let i = 0; i<=length1; i++){
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
  
  
   renderItem = ({item}) => {
      console.log(item, 'item in render item');
      return (
     
        <TouchableOpacity
        style={{justifyContent:'center',marginBottom:10, flexDirection:'row', backgroundColor: '#e3e3e3', padding:3, alignItems:'flex-start'}}
        onPress={ this.clickEvent(item.key) } 
        >
        
        
  <View style={{justifyContent:'center',marginBottom:10, flexDirection:'row', backgroundColor: '#e3e3e3', padding:3, alignItems:'flex-start'}}>
  <Text style={{color:'black',padding:6, fontSize:17,width:Dimensions.get('window').width*0.9, alignSelf:'flex-end' }}
   
  >
  
  {item + '\n' } 
  </Text>
  <Icon name="chevron-right" size={23} color="#4d4d4d" />
  </View>
  
  </TouchableOpacity>
      );
    };
  

  render() {

    const { search } = this.state;

    return (
      <View>
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
            Search
          </Text>
        </View>
        <Searchbar
      placeholder="Search"
      style={{marginTop:20}}
      onChangeText={this.updateSearch}
      value={search}  
    />


      </View>
    );
  }
}
