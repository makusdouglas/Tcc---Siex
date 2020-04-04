
import styled from 'styled-components';
import logo from '../../assets/logo-ufpa.png';


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  flex-direction: row;
  
  main{
    padding: 20px;
    margin-left: 30px;
    display: flex;
    border-radius: 20px;
    background: #e6f0ff;
    box-shadow : 0 0 14px 0 rgba(0, 0, 0, 0.2);
    flex-direction: column;
  }
  aside{    
    border-radius: 20px;
    background:#b3d1ff;
    box-shadow : 0 0 14px 0 rgba(0, 0, 0, 0.2);
    padding: 30px 30px;
    
  }

  @media (max-width: 1000px){
  
    flex-direction: column;
    

  main {
    width: 100%;  
    margin-left: 0;
    margin-top: 30px;
  }

  aside{
    display: flex;
    height: 80%;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

  }
  }
  @media(max-width: 894px){
    aside{
      flex-direction: column;
      align-items: center;
    }
  }

  `;
  export const Divisor = styled.div`    
  /* box-shadow : 0 0 14px 0 rgba(0, 0, 0, 0.05); */    
   @media (max-width: 1000px){
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
  }
  @media(max-width: 722px){
    display: list-item;
    flex-direction: column;
    margin:0px;
  }

    
  `;

export const ActionButton = styled.button`
width: 100%;
  border: 0;
  margin-top: 30px;
  background: #006699;
  border-radius: 4px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  cursor: pointer;


  @media (max-width: 1000px){
    margin-left: 8px;
  }
  @media(max-width: 722px){

    border-radius: 25px;
    margin-left: 0px;
    &+&{
    margin-top: 5px;
    }
  }
`;
export const Title = styled.div`

  padding: 0;
  img: {    
  /* border-ra:dius: 50%; */
  }

  span{
    font-size: 75px;  
    text-align: center;
    display: block;
    font-family: 'Bungee Shade', cursive;
    /* text-shadow: 1px 1px 2px #FFF; */
    color: #FFF;
  }
  
  
  
  /* background: #FFF url(${logo}) round ; */
  /* border-radius: 60px; */
  
  
  
  @media (max-width: 1000px){
    /* margin-right: 30px; */
    
  }
  @media(max-width: 894px){
    span{
    }

  }
`;
// CSS de ELEMENTOS DE MAIN
export const Card = styled.div`
padding: 10px;
margin:10px;
background-color: #fff;
border-radius: 10px;

h1{
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  color: #006699;
  border-bottom: 1px solid #444;
  margin-bottom:15px;
}
.showsParams{
  margin:10px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: left;
  
  
  p{
    padding: 8px 9px;
    border: 0.5px solid #000;
    border-radius: 20px;
    background-color: grey;
    font-size:18px;
    color: #FFF;
  }
  h6{
    margin-left: 5px;
    padding: 6px 9px;
    border: 0.5px solid #000;
    background-color: #006699;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    
    font-family: inherit;
    font-size:22px;
    color: #FFF;
  }
  
  
}


p{
  color: #999;
  font-size:16;
  font-family: Arial, Helvetica, sans-serif;
}
.folder{
      display: flex;
      flex:1;
      flex-direction: row;
      justify-content:space-between;
}

#textInfo{ 
  color: #ff6666;
  margin-bottom: 5px;
  text-align: center;
  font-size: 12px;
}
#textInfoSec{ 
  color: #53ff1a;
  margin-bottom: 5px;
  text-align: center;
  font-size: 12px;
}
.data{
  p+p{ margin-left: 5px;  }
  p{
    border: 0.5px solid #111;
    border-radius: 30px;
    padding: 5px 8px;
    background: #ff6666 linear-gradient(to right, rgba(0, 0, 0, 0.2), transparent);
    color: #111;
    font-size: 12px;
  }

}.data2{
  p+p{ margin-left: 5px;  }
  p{
    border: 0.5px solid #111;
    border-radius: 30px;
    padding: 5px 8px;
    background: #53ff1a linear-gradient(to right, rgba(0, 0, 0, 0.2), transparent);
    color: #111;
    font-size: 12px;
  }

}
#buttonVerMais{
  border: 0;
  background: #006699;
  border-radius: 4px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 400;
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  cursor: pointer;
}
`;