// import React from "react";
// import {Text, View,StyleSheet} from 'react-native';


// class App extends React.Component {
//   render(){
//     return (
//       <View style={style.container}>
//         <Text style={style.baseText}>Mr bean</Text>
//         <Text style={[style.baseText, style.selectedText]}>Mr bean</Text>
//         <Text style={style.baseText}>Mr bean</Text>
//       </View>
//     )
//   }
// }

// const style = StyleSheet.create({
//   container: {
//     backgroundColor:"#ccc",
//     flex:1,
//     alignItems:"center",
//     flexDirection:"row",
//     padding:20,
//     justifyContent:"center", 
//   },
//   baseText: {
//     fontSize:10,
//     padding:20,
//     marginTop:25,
//     margin:15,
    
//     borderWidth:StyleSheet.hairlineWidth,

//   }, 
//   selectedText:{
//     alignSelf:"center",
//     backgroundColor:'red',
//     fontWeight:"bold",
//   }
// })

// export default App;

// import React from "react";
// import {Text, View,StyleSheet,Alert, TouchableOpacity} from 'react-native';
// import { Constants } from "expo";



// export default class App extends React.Component {
//   render(){
//     return (
//       <View style={style.container}>
        
//         <MyButton  myColor={"red"}   msg={"Mr Bean"}>Click Me 1</MyButton>  
//         <MyButton  myColor={"yellow"}   msg={"Jerry"}>Click Me 2</MyButton>
//         <MyButton  myColor={"blue"}   msg={"Hello How R U"}>Click Me 3</MyButton>
        
//       </View>
//     );
//   }
// }

// class MyButton extends React.Component {
//   render() {
//     // let myLabel = this.props.myLabel;
//     // let myColor = this.props.myColor;

//     let { children, myColor, msg} = this.props;
//       return (
//         <TouchableOpacity onPress={()=>{
//           Alert.alert(msg)
//         }}>
//         <Text style={[style.btn, {backgroundColor: myColor}]}>
//           {children}
//         </Text>

//       </TouchableOpacity>
          
//       )
//   }
// }

// const style = StyleSheet.create({
//   btn: {
//     padding:10,
//     margin:10,
//     borderWidth:1,
//     fontSize:30,
//   },



//   container: {
//     backgroundColor:"#ccc",
//     flex:1,
//     alignItems:"center",
//     justifyContent:"center",
    
//   },
 
// });


// import React from "react";
// import { Text, View, StyleSheet, Button } from "react-native";
// import { Constants } from "expo";



// export default class App extends React.Component{
//   render () {
//     return (
//       <View style={style.container}>
//         <Counter step={1} />
//         {/* <Counter step={10} />
//         <Counter step={-1} /> */}
        
//       </View>
//     );
//   }
// }


// class Counter extends React.Component {

  

//   state = {
//     count: 0
//   }
//   _inc() {
//     let { step } = this.props;
//     this.setState(oldState => ({ 
//       count: oldState.count  + step,
//       }
//     ));
//   }
//   _dec() {
//     let { step } = this.props;
//     this.setState(oldState => ({ 
//       count: oldState.count  - step,
//       }
//     ));
//   }
 
  


//   render() {
//       return (
//           <View style={style.container}>
//             <Button title='minus' onPress={()=>this._dec()}/>
//             <Text style={style.display}>
//               {this.state.count}
//             </Text>
//             <Button title='Plus' onPress={()=>this._inc()}/>
//           </View>
//       )
//   }
// }

// const style = StyleSheet.create({

//   display:{
//     margin: 20,
//     fontSize: 60,
//     fontWeight: "bold",

//   },

//   container: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "gray",
//    },
// })



// import React from "react";
// import { Text, View, StyleSheet } from "react-native";
// import { Constants } from "expo";
// import Calculator from "./components/calculator";

// export default class App extends React.Component{
//   render(){
//     return(
//       <View style={styles.container}>
//        <Calculator />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop:30,
//     backgroundColor: "gray",
//   }
// })

// import React from "react";
// import { View, Text, StyleSheet, TextInput, } from "react-native";
// import { Constants } from "expo";

// export default class App extends React.Component {

//   state = {
//     text: "Yolo"
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput style={styles.input} placeholder={"Type Here..."} value={this.state.text} onChangeText={(text)=>{this.setState({text})} } />

//         <Text style={styles.output}>{this.state.text}</Text>

//       </View>
      
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "gray",
//     paddingTop: 50,
//   },

//   input: {
//     fontSize: 30,
//     margin: 20,
//     padding: 20,
//   },

//   output: {
//     fontSize: 40,
//     margin: 20,
//   },
// })

// import React from "react";
// import { Text, View, StyleSheet } from "react-native";
// import { Constants } from "expo";

// import Map from "./components/Map";

// export default class App extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Map />
//             </View>

//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         paddingTop: 40,
//         backgroundColor: "gray",
//     },
// })




// import React, { useState } from "react";
// import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

// export default function App() {
//     const [data, setData] = useState([
//         {rollNo: 1, name: "umair"},
//         {rollNo: 2, name: "khattak"},
//         {rollNo: 3, name: "mr bean"},
//         {rollNo: 4, name: "jerry"},
//         {rollNo: 5, name: "zayan"},
//         {rollNo: 6, name: "arhan"},
//         {rollNo: 7, name: "shariq"},
//         {rollNo: 8, name: "khan"},

//     ]);

//     const handleClick = (oldRollNo) => {
//         setData(prevData => {
//             return prevData.filter((tempData) => {
//                 if(tempData.rollNo != oldRollNo) {
//                     return tempData;
//                 }
//             });
//         });

//     };


//     return (
//         <View style={styles.container}>

//             <FlatList
//                 KeyExtractor={item => item.rollNo}
//                 data={data}
//                 renderItem={({item}) =>{
//                 return (
//                    <TouchableOpacity onPress={() => handleClick(item.rollNo)}>
//                     <Text style={styles.customText}>{item.name}</Text>
//                    </TouchableOpacity> 
//                 );
//             }}
//             numColumns={2}
            
            // />


           {/* <ScrollView>
           {data.map((listData, index) => {
                return (
                    <View key={listData.id}>
                        <Text style={styles.customText}>{listData.name}</Text>
                    </View>
                );
            })}
            </ScrollView>  */}
        {/* </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },

    customText:{
        fontSize:20,
        textAlign: "center",
        backgroundColor: "pink",
        marginTop:35,
        marginBottom:10,
        marginHorizontal:30,
        padding:25,
    }
    
}); */}


// import React, {useEffect, useState} from "react";
// import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
// import { Axios } from "axios";

// import { albumPhotosurl } from "./src/utils/url";

// export default function App() {

//     const [postData, setPostData] = useState([]);

//     useEffect(() => {
//         fetchApiData();

//     }, []);

//     const fetchApiData = async () => {
//         try {
//             const response = await Axios.get(albumPhotosurl);
//             setPostData(response.data)
//         } catch (err) {

//         }
//     };
    

//     return (
//         <View style={styles.container}>

//             <ScrollView style={styles.scrollViewStyle}>

//             {postData.map((list, index) => {
//                 return (
//                     <View style={styles.cardContainer} key={list.id}>
//                 <Image
//                    source={{url: list.url}}
//                    style={styles.cardImage}
//                 />

//                 <Text style={styles.cardTextTitle}>{list.title}</Text>
//             </View>
//                 );
//             })}
//             </ScrollView>  
//         </View>
//     );      
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems: "center",

//     },
//     scrollViewStyle:{

//     },
//     cardContainer:{

//         marginVertical: 40,
//         paddingHorizontal:10,
//         borderRadius: 20,
//         shadowOffset:{
//             width:0,
//             height:0,
//         },
//         shadowOpacity: 1,
//         shadowRadius:8,
//         elevation: 8,

//     },
//     cardImage: {
//         height: 300,
//         width: "100%",
//         borderRadius:20,

//     },
//     cardTextTitle:{
//         marginVertical: 10,
         

//     },
// });

// const obj = {
    
//     albumId: 1,
//     id: 1,
//     title: "accusamus beatae ad facilis cum similique qui sunt",
//     url: "https://via.placeholder.com/600/92c952",
//     thumbnailUrl: "https://via.placeholder.com/150/92c952",
      
// };


// import React, {useState} from "react";
// import { View, Text } from "react-native";
// import { WebView } from 'react-native-webview';
// import * as Progress from 'react-native-progress';
// import Ionicos from "react-native-vector-icons/Ionicos";

// export default function Home() {

//     const [progress, setProgress] = useState(0);
//     const [isLoaded, setIsLoasded] = useState(false);


//     return (
//         <View style={{flex:1}}>

//             <View>
//                 <Text>Title</Text>

//                 <View>
//                     <Ionicos name="arrow-back"/>
//                     <Ionicos name="arrow-forward"/>

//                 </View>
//             </View>




//             {!isLoaded ? (
//                 <Progress.Bar progress={0.3} width={null} />
//             ) : null}
            
//             <WebView
//                 source={{ uri: 'https://reactnative.dev/' }}
//                 style={{ marginTop: 30 }}
//                 onError={event => {
//                     alert("Webview Error : ${event.nativeEvent.description}");
//                 }}
//                 onLoadProgress={event => setProgress(event.nativeEvent.progress)}
//                 onLoadEnd={() => setIsLoasded(true)}
//             />
//         </View>    
        
//     );
// }




// import React, {useEffect, useState} from "react";
// import { View, Text, Dimensions } from "react-native";



// export default function Home() {
//     const [ isRotate, setIsRotate ] = useState(false);
//     useEffect(() => {
//         Dimensions.addEventListener("change", () => {
//             const orientation = isPotrait();
//             setIsRotate(orientation)

//         });
//         return () => {};
//     }, []);

//     const isPotrait = () => {
//         const { height, width } = Dimensions.get("screen");
//         return height > width ? false : true;
//     }

//     return (
//         <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "black", flex: 1, flexDirection: isRotate ? "row" : "column"}}>
//           <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "red", flex: 1, width: "100%",}}>
//             <Text>Jerry</Text>
//           </View>
//           <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "yellow", flex: 1, width: "100%",}}>
//             <Text>Mr bean</Text>
//           </View>
//           <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "blue", flex: 1, width: "100%",}}>
//             <Text>umair</Text>
//           </View>
//         </View>
//     )
// }

// import React, {useEffect, useState} from "react";
// import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
// import Ionicon from "react-native-vector-icons/Ionicons";
// import FontAwesome from "react-native-vector-icons/FontAwesome";

// export default function Home() {
//     const [ isPasswordVisible, setPasswordVisible ] = useState(false)
//     return (
//         <View style={styles.container}>
//             <View style={styles.inputBoxContainer}>
            
//                 <FontAwesome name="user" size={25} />
//                 <TextInput style={styles.inputBox} placeholder="Enter your Name" />
//             </View> 

//             <View style={styles.inputBoxContainer}>
//                 <Ionicon name="mail" size={25} />
//                 <TextInput style={styles.inputBox} placeholder="Enter your Email" />
//             </View>

//             <View style={styles.inputBoxContainer}>
//                 <FontAwesome name="lock" size={25} />
//                 <TextInput style={styles.inputBox} placeholder="Enter your Password" secureTextEntry={isPasswordVisible ? false : true} />
//                 <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)} >
//                     <FontAwesome name={isPasswordVisible ? "eye-slash" : "eye"} size={25} />
//                 </TouchableOpacity>
//                 {/* <FontAwesome name="eye-slash" size={25} /> */}
//             </View>

//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//     },
//     inputBoxContainer: {
//         // backgroundColor: "red",
        
//         padding:10,
//         alignItems: "center",
//         flexDirection: "row",
//         borderWidth: 1,
//         width: "90%",
//         marginTop: 30,
//         borderRadius: 20,
//         paddingHorizontal: 10,
//     },
//     inputBox: {
//         marginHorizontal:10,
//         flex:1,
        
//     },
// });







// import { View, Text, TouchableOpacity } from 'react-native';
// import React from 'react'; 

// import DocumentPicker from 'react-native-document-picker'
// export default function Home() {
//     const handleFilePicker = async () => {
//     try {
//         DocumentPicker.pick().then((setResult)=>{
//             console.log(setResult);
//           });
        
//     } catch (err) {
//         console.log(err);
//     }
// };

//   return (
//     <View style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
//         <Text>This is current component</Text>
//       <TouchableOpacity
//        onPress={() =>handleFilePicker()}
//         style={{backgroundColor: "blue", paddingHorizontal: 20, paddingVertical: 15,}}> 
//         <Text style={{color: "white"}}>Select Document</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }



//image picker
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, Image } from 'react-native';
// import * as ImagePicker from "expo-image-picker";

// export default function App() {
//    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
//    const[ image, setImage ] = useState(null);

//    useEffect(() => {
//     (async () => {
//         const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
//         setHasGalleryPermission(galleryStatus.status === "granted");

//     })();
//    }, []);

//    const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [4,3],
//         quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled){
//         setImage(result.uri);
//     }
//    };

//    if (hasGalleryPermission === false){
//     return <Text>No access to internal Storage</Text>
//    }


//     return (
//         <View style={{flex: 1, justifyContent: "center",  }}>
//             <Button title="Pick Image" onPress={() => pickImage()} style={{margintop: 30, }} />
//             {image && <Image source= {{uri: image}} style={{flex:1/2}} />}
        
//         </View>
//     );
// }




//QR code
// import { View, Text, Button, TextInput } from 'react-native'
// import React, { useState } from 'react'
// import QRCode from 'react-native-qrcode-svg';

// export default function App() {
//     const [qrCodeText, setQrCodeText] = useState("");
//   return (
//     <View style={{flex: 1, backgroundColor: "black"}}>
//         <View style={{alignItems: "center", marginTop: 50}}>
//             <TextInput placeholder="Enter Your Data" style={{borderWidth: 1, backgroundColor: "white", width: "80%", padding:15}} onChangeText={text => setQrCodeText(text)} value={qrCodeText} />

//         </View>

//         <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
//             <QRCode value={qrCodeText ? qrCodeText : "https://www.google.com/"} size={250}  /> 
//         </View>
      
//     </View>
//   )
// }


// Fetch API Data

// import { View, Text, Image, StatusBar, ScrollView, StyleSheet } from 'react-native';

// import Axios from 'axios';


// // import Api Url
//  import { ablumphotourl } from './src/utils/url';
// import React,  { useEffect , useState } from 'react';

// export default function Hello() {

//   const [postData, setpostData] = useState([]);

//   useEffect(() => {
//      fetchApiData();
//   }, []);

//   const fetchApiData = async () => {
//     try{
//       const response = await Axios.get(ablumphotourl);
      
//       setpostData(response.data);
//     } catch(err){
//       console.log(err);
//     }
//   };
  
//   return (
//     <View style= {ApiStyle.mainContainer}>
//       <StatusBar backgroundColor={'blue'} />
//       <ScrollView style={ApiStyle.ScrollViewStyle}>
//         {/* Card start*/}
//         {postData.map((list, index) =>{
//           return(
//             <View style={ApiStyle.cardContainer} key={list.id}>
//       <Image source={{ uri: list.url }} style={ApiStyle.cardImage} />
//       <Text style={ApiStyle.CardTitle}>{list.title}</Text>
//       </View>

//           )
//         })}
          
      
        
//       </ScrollView>     
//     </View>
//   )
// }

// const ApiStyle = StyleSheet.create({
//     mainContainer: {
//     flex: 1,
//     alignItems:'center'
//     },
//     cardContainer: {
//      width:'95%',
      
//       marginVertical:5,
//       paddingVertical: 20,
//       paddingHorizontal:20,
//       borderRadius:20,
//       shadowOffset:{
//         width:0,
//         height:0,
//       },
//       shadowOpacity:1,
//       shadowRadius:0,
//       elevation:5,
  
//     },
//     cardImage:{
//       height:300,
//       width: '100%',
//       borderRadius:20,
      
//     },
//     CardTitle:{
//       color:'blue',
//       fontSize:18,
//       textAlign:'center'
//     },
//     ScrollViewStyle:{
  
//     }
//   });


// import { View, Text, Button } from 'react-native'
// import React from 'react';
// const App = () => {
//   let data = 100;
//   const fruit = () => {
//     data = 20;
//     console.warn("function called")
//   }
  
//   return (
//     <View>
//       <Text style={{fontSize: 30}}>{data}</Text>
//       <Button title='On Press' onPress={() => fruit("Hey Mr Bean")} color={"green"} />
//       <Button title='On Press 2' onPress={fruit} color={"green"} />
//     </View>
//   );
// };

// export default App;

//Props
// import { View, Text, Button } from 'react-native'
// import React, {useState} from 'react'
// import { Use } from 'react-native-svg'

// const App = () => {
//   const [name, setName] = useState("jerry")

//   return (
//     <View>
//       <Text style={{fontSize: 30, marginTop: 30}}>Props in React native</Text>
//       <Button title='Update Props' onPress={() => setName("mr bean")} />
//       <User name={name} age={24} />
//     </View>
//   );
// };

// const User=(props) => {
//   return (
//     <View style={{backgroundColor: "gray", padding: 5, marginTop: 20}}>
//       <Text style={{fontSize:30, }}>Name: {props.name}</Text>
//       <Text style={{fontSize: 30, marginTop: 20}}>Age: {props.age}</Text>
//     </View>
//   );
// }

// export default App;



//arry

// import { View, Text, SafeAreaView } from 'react-native'
// import React from 'react'
// import JsFunctions from './src/JsFunctions';

// class App extends React.Component{
//   render() {
//     return(
//       <SafeAreaView>
//         < JsFunctions />
//       </SafeAreaView>
//     )
//   }
// }

// export default App;


// import React, {useState} from "react";
// import { View, Text, StyleSheet, TextInput, Button } from "react-native";
// import { Table, Row, Rows } from 'react-native-table-component';



// export default function Tabb() {
//   let [array,setArray]=useState([])
//   let [inputdata,setInputdata]=useState({name:"",number:""})

//   const GfGApp = () => {
//     const header = ['heading 1', 'heading 2', 'heading 3']


//     array && array.map(
//       (item,i)=>{
//         return(
//           <tr>
//             <td>{item.name}</td>
//             <td>{item.number}</td>
//             <td><button>Update</button></td>
//             <td><button>Delete</button></td>
//           </tr>
//         )
//       }
//     )


//   function data(a){
//     setInputdata({...inputdata,[e.target.name]:e.target.value})
//   }

//   let {name,number}=inputdata;
//   function addinputdata(){
//     setArray([...array,{name,number}])
//     // console.log(inputdata)
//     setInputdata({name:"",number:""})
//   }
//   // console.log(array,"total array")
//   return (
//     <View style={{ marginTop: 200 }}>
//       <TextInput  value={inputdata.name || ""} name="name" autoComplete="off" placeholder="Enter Name" onChangeText={(data)=>{this.setState({data})} } />
//       <TextInput  value={inputdata.number || ""} name="number" autoComplete="off" placeholder="Enter Number" onChangeText={(data)=>{this.setState({data})} } />
      
      
//       <Button  title="Add data" onClick={addinputdata} />

     
//             <Text style={{ fontSize: 18 }}>
//                 GeeksforGeeks React Native Table</Text>
//             <Table borderStyle={{ borderWidth: 2, 
//                 borderColor: '#c8e1ff' }}>
//                 <Row data={header} />
//                 <Rows data={data} />
//             </Table>

//         </View>


// )

//             }}



//Array list

import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Dimensions, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
    const [ inputBoxValue, setInputBoxValue ] = useState("");
    const [ storageDataList, setStorageDataList ] = useState([]);

    useEffect(() => {
        async function tempFunction() {
            await getItemList();
        }
        tempFunction();
        return () => {

        }
    }, []);

    const addItemToList = async () => {
        try {

            storageDataList.push(inputBoxValue);

            const output = JSON.stringify(storageDataList);


            await AsyncStorage.setItem("itemList", output);
            setInputBoxValue("");

            // await getItemList("");
            alert("Data Is Added");

        } catch (err) {

        }
    };

    const getItemList = async() => {
        try {
            const data= await AsyncStorage.getItem("itemList");
            const output = JSON.parse(data)
            setStorageDataList(output);
        } catch (err) {
            
        }
    };

    const handleDelete = (deleteingitem) => {
      const newitmes = storageDataList.filter((item)=> item !== deleteingitem);
      setStorageDataList(newitmes);

    }




    return (
        <View style={styles.container}>
            <TextInput style={styles.inputBox} value={inputBoxValue} placeholder="Enter Data" onChangeText={value => setInputBoxValue(value)} />
            
            <TouchableOpacity style={styles.addButton} onPress={() => addItemToList()}>
                <Text style={{color: "white"}}>Add</Text>
            </TouchableOpacity>

            <View style={styles.list}>
                <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 30}}>Array List</Text>
                {storageDataList.map((item, index) => {
                    return <Text style={{marginVertical: 10}}>{item}<Button title="Delete" onPress={() => handleDelete(item)} /></Text>;
                })}
            </View>
        </View>
    );
}

const {width} = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputBox: {
        borderWidth: 2,
        borderColor: "black",
        marginVertical: 10,
        marginHorizontal: 8,
        marginTop: 50,
        padding: 20,
    },

    addButton: {
        width: width - 20,
        backgroundColor: "gray",
        marginHorizontal: 10,
        alignItems: "center",
        padding: 10,

    },
    list: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

