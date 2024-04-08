
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';


const Event = () => {



    const [text, setText] = useState(''); // Estado para almacenar el texto ingresado

    const handleInputChange = (inputText) => {
      setText(inputText); // Actualiza el estado con el texto ingresado
    };
    const navigation = useNavigation();
    const handleSubmit = () => {
        // Aquí puedes realizar acciones con el texto ingresado, como enviarlo a un servidor o mostrarlo en la pantalla.
        console.log('Texto ingresado:', text);
        navigation.navigate("DetailsEvent", {data:{ nombre: "santis" }})
        };

      
    return(
    <View style={styles.eventContainer}>
        <View style={styles.event}>
            <Image
                source={require('./../assets/image_5_UMF.png')}
                style={styles.imEvent}
            />
        </View>
        <View style={{ flex:1, 
                        justifyContent: 'center', 
                        //alignItems: 'flex-start', 
                        marginBottom:5,
                        marginTop:5,
                        }}>
            <Text style={{fontWeight:'bold', color: '#1804FB'}}>  Ultra music festival</Text>
            
        </View>
        <View style={{flex:1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'flex-start' ,
                        marginTop: 0,
                        marginLeft:'0%' ,
                        marginBottom: 5,
                        paddingBottom: 0
                    }}>
                <Image
                    source={require('./../assets/icono_ubication.png')}
                    style={{flex:1, marginRight:5,
                        //width:40,
                        resizeMode: 'contain',
                       
                        
                        //marginLeft: 0,
                        
                        
                    }}
                />
                <Text style={{flex:2, marginBottom: 0,marginLeft: 0,fontWeight:'bold',
                                padding:0}}>Miami</Text>
                <Text style={{flex:6, paddingLeft:10}}>24 - 26 de Mar/2023</Text>
                <TouchableOpacity style={{flex:1,
                               
                                borderRadius:15,
                                backgroundColor:'#301ff8',
                                marginLeft: '10%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 0,
                                paddingHorizontal:50,
                                paddingVertical:5
                            }} onPress={handleSubmit}>
                    <Text style={{flex:1,width:65,color:'#fff'}}>See event</Text>
                </TouchableOpacity>
        </View>
        
        <View style={{
                flex:1,
                //backgroundColor:'yellow',
                //flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start',

            }}>
            
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    
    eventContainer: {
          
      flex:1,
      backgroundColor:'#96AADC',
      borderRadius:20,
      //alignItems: 'center',
      marginBottom:4,
      padding:'2%',
      //paddingBottom:'1%',  
      
  },
    event: {
       
      flex:5,
      
      borderRadius:10,
      //marginTop:20,
      //marginBottom:2,
      backgroundColor: '#96AADC',
      //alignItems: 'center',
      
  
    },
    imEvent: {
       
      width:'100%',
      //height:'100%',
      //resizeMode: 'contain',
    },
    
  
  });
  
  export default Event;