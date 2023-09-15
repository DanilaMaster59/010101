import styled from 'styled-components/native';

const PostView = styled.View`
flex-direction: row;
 padding: 15px;
border-bottom-width: 3px;
border-bottom-color: rgba(195, 171, 15, 0.4);
border-bottom-style: solid;
`

const PostImage = styled.Image`
width: 80px;
height: 120px;
border-radius: 60px;
margin-right: 12px;

`;
const PostTitle = styled.Text`
font-size: 23px;
font-weight: 700px;
`;


const PostDetails = styled.View`
flex: 1;
justify-content: center;

`;

const PostDate = styled.Text `
 font-size: 18px;
color: rgba(0,0,0,0.4);
margin-top:2px ;
`;

const truncateTitle = (str) =>{
if (str.length >= 65) {
  return str.substring(0,75)+'...';
}

return str;
}

export const Post = ({title,imageUrl,createdAt} )=>{
return  <PostView>
        <PostImage source={{ uri: imageUrl}} />
        <PostDetails>
          <PostTitle> {truncateTitle(title)} </PostTitle>
          <PostDate> {new Date(createdAt).toLocaleDateString()} </PostDate>

        </PostDetails>

      </PostView>





}