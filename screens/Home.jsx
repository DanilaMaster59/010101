import axios from 'axios'
import React from 'react';
import {Alert, Text,FlatList,View, ActivityIndicator,RefreshControl,TouchableOpacity } from "react-native";
import {Post} from '../components/Post';


export const HomeScreen = ({navigation})=>{
const [isLoading,setIsLoading] = React.useState(true);
const [items,setItems]=React.useState([]);

const fetchPost = ()=>{

 setIsLoading(true) ;

axios.get('https://64ff13e0f8b9eeca9e298b7b.mockapi.io/news')
.then(({data})=>{
setItems(data);
})
.catch(err=>{
  console.log(err);
  Alert.alert('ошибка','не удалось получить статьи')
}).finally(() => {
setIsLoading(false);
})
}

React.useEffect(fetchPost,[]);

if (isLoading){
  return(
<View
style ={{
flex:1,
justifyContent: 'center',
alignItems: 'center',
}}>

  <ActivityIndicator size="large"/>
  <Text style={{marginTop:15}}> Загрузка... </Text>
</View>
  );
}

  return (
    <View>
      {/* <ActivityIndicator size={"large"}/> */}
      <FlatList
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPost}/>}
      data={items}
      renderItem={({item})=>( 
      <TouchableOpacity onPress={()=>navigation.navigate('FullPost',{id: item.id,title: item.title}) }>
        <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt}/>
      </TouchableOpacity>
      )} 
      
      />
     
    
    
    </View>
  );
}