import React from "react";
import axios from "axios";
import { View } from "react-native";
import styled from "styled-components/native";
import { Loading } from "../components/Loading";

const PostImage = styled.Image`
    border-radius: 10px;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
`;

const PostText = styled.Text`
    font-size: 18px;
    line-height: 24px;

`

export const FullPostScreen = ({route,navigation})=> {
    const [isLoading,setIsLoading] = React.useState(true);
const [data,setData]=React.useState([]);
const  {id,title}= route.params;


React.useEffect(()=>{
navigation.setOptions({
title
    });
axios.get('https://64ff13e0f8b9eeca9e298b7b.mockapi.io/news/'+ id)
.then(({data})=>{
setData(data);
})
.catch(err=>{
  console.log(err);
  Alert.alert('Oшибка','не удалось получить статью')
}).finally(() => {
setIsLoading(false);
});

if (isLoading){
  return

<Loading/>;

}

},[]);
return(
    <View style={{padding: 20}}>
<PostImage source={{uri:data.imageUrl}}/>
  <PostText>
    {data.text}
  </PostText>
    </View>
);

};

