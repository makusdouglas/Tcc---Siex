
import styled from 'styled-components';
import {Container, Side } from '../../global/styles/styles';

// CSS de ELEMENTOS DE MAIN
export const Card = styled.div`
padding: 10px;
margin:10px;
background-color: #fff;
border-radius: 10px;
border: 1px solid #ccc;
/* box-shadow : 0 0 19px 0 rgba(0, 0, 0, 0.2); */
h1{
  font-family: 'Comic Neue', Helvetica, sans-serif;
  font-size: 26px;
  color: #111111;
  border-bottom: 1px solid #444;
  margin-bottom:15px;
}
#desc{
  text-indent: 15px;
  text-align: justify;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  color: #999;
}
.showsParams{
  margin:10px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: left;
  align-items: center;

        
  
  
  
  p{
    font-weight: bold;
    color: #444;
  }
  h6{
    margin-left: 10px;
    background-color: #fff;    
    font-family: Arial, Helvetica, sans-serif;
    font-size:18px;
    color: #0057ff;
  }
  @media (max-width: 560px){
    p{
      font-size: 14px;
    }
    h6{
      font-size: 16px;
    }
  }
  
  
}



.folder{
      display: flex;
      flex:1;
      flex-direction: row;
      justify-content:space-between;
      padding: 10px;
      /* background: #6495ED; */
      
      @media (max-width: 560px){
        flex-direction: column;
        .alignColunm{
          margin-bottom: 8px;
        }

      }

}
.alignColunm{
  padding: 5px 0px;
  /* border: 1px solid #ccc ; */
  border-radius: 4px;
  
}

#textInfo{ 
  color: #0057ff;
  margin-bottom: 2px;
  text-align: center;
  font-size: 12px;
}
#textInfoSec{ 
  color: #0057ff;
  margin-bottom: 5px;
  text-align: center;
  font-size: 12px;
}
.data{
  display: flex;
      flex:1;
      flex-direction: row;
      justify-content:space-between;
      padding: 0px 4px;
  p+p{ margin-left: 5px;  }
  p{
    color: #111;
    font-size: 12px;
  }

}.data2{
  display: flex;
      flex:1;
      flex-direction: row;
      justify-content:space-between;
      padding: 0px 4px;
  p+p{ margin-left: 5px;  }
  p{
    color: #111;
    font-size: 12px;
  }

}
#buttonVerMais{
  border: 0;
  margin: 0;
  background: #0057ff;
  border-radius: 25px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  
}
`;

export const EditedContainer = styled(Container)`
margin-top: 0px;   
    flex-direction: column;
    align-items: center;
  

  main {
    width: 100%;  
    margin-left: 0px;
    margin-left: 0px;
    margin-top: 190px;
    border-radius: 20px;
  }

`;
export const AsideEdited = styled(Side)`
  position: fixed;
    margin-top: 100px;
    border-radius: 0px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    display: flex;
    flex: 0;   
    width: 50%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-around; */

    

    div{
    display: flex;
    flex: 1;
    flex-direction: row;
    margin: 10px 10px;
    padding: 10px 5px;
    
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    :hover{
      
      width: auto;
    }
    a{
      display: flex;
      flex: 0;
      margin: 0px;
      padding: 2px 5px;
          min-width: auto;
          width: auto;
          
        }

    }

`;


export const InputDiv = styled.div`

`;
