import styled from 'styled-components';


export const BigContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* justify-items: center; */
  font-family: 'Roboto', sans-serif;
`;

export const MenuSup = styled.div`
margin: 0;
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
position: fixed;
padding: 0px;
top: 0px;
right: 0px;
left: 0px;

height: 100px;
width: 100%;
background: #0057ff;
box-shadow : 0 0 14px 0 rgba(0, 0, 0, 0.4);

@media (max-width:386px) {
  position: fixed;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 120px;
  justify-content: start;
  span{
    font-size: 50px;
  }
  div{
    font-size: 24px;
    margin: 0px;
    margin-top: 5px;
    justify-content: center;
  }
  
}

`;
export const DivUserAcess = styled.div`
  margin-left: 5px;
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  
  
  
  
`;
export const DivLink = styled.div`
  a{
  border: 0;
  text-decoration: none;
  margin-left: 10px;
  font-size: 18px;  
  color: #0057ff;      
  align-items: baseline;
  padding: 5px 8px;
  border-radius: 25px;
  margin-right: 5px;
  
  background: #fff;
  box-shadow : 0 0 19px 0 rgba(0, 0, 0, 0.4);
  :hover{
    color: #fff;
    background: #3377ff;
    svg{
      color: #fff;
    }
  }
  }
  svg{
    font-size: 16px;
    margin-right: 5px;
    color: #111;
  }
  

@media (max-width: 490px){
  a{
    font-size: 16px;
    margin-left:5px;
  }
  }
`;

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex: 1;
  max-width: 1000px;
  
  
  flex-direction: row;
   

  
  main{
    
    padding: 20px;
    margin-left: 230px;
    display: flex;
    flex: 1;
    background: #fff;   
    flex-direction: column;
  } 

  @media (max-width: 1000px){ 
    margin-top: 0px;   
    flex-direction: column;
    align-items: center;
  

  main {
    width: auto;  
    margin-left: 0px;
    margin-left: 0px;
    margin-top: 190px;
    border-radius: 20px;
  }  
  }
  @media (max-width:386px){
    main{
      margin-top: 180px;
    }
  } 

  `;

export const Side = styled.aside`
    position: fixed;
    height: 100%;
    width: 230px;
    display: flex;     
    flex-direction: column;
    
    box-shadow : 0 0 14px 0 rgba(0, 0, 0, 0.2);
    padding: 5px 5px;
    background: #fff;

    @media (max-width: 1000px){
      
    position: fixed;
    margin-top: 100px;
    border-radius: 0px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    display: flex;
    flex: 1;   
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

  
    }
    @media(max-width: 386px){
      margin-top: 120px;
    }
    
`;
export const Divisor = styled.div`    
  /* box-shadow : 0 0 14px 0 rgba(0, 0, 0, 0.05); */
  display: flex;
  flex-direction: column;
  
    padding: 0px 0px;
    a{ 
  display: flex;
  flex: 1;
  
  text-decoration: none;
  border: 0;
  margin: 0;
  margin-top: 10px;
  
  border-radius: 4px;
  padding: 15px 5px;
  font-size: 22px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  background: #fff;
  color: #0057ff;
  cursor: pointer;
  :hover{
    svg{
      color: #fff;
    }
    width: 235px;
    color: #fff;
    background: #4169E1;
    box-shadow : 5px 5px 14px 5px  #ccc;
  }


  @media (max-width: 1000px){
    margin: 0px;
    padding: 5px 5px;
    :hover{
      
      width: auto;
    }

  }
  @media(max-width: 722px){
    font-size: 18;
    
    
    }
  }

  a{    
    align-items: center;
    svg{
        margin-right: 5px;
        color: #000;
        font-size: 18px;

      }
  }    
   @media (max-width: 1000px){
    a{
      width: auto;
      
    }
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media(max-width: 894px){
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
  }
  @media(max-width: 722px){
    display: flex;
    flex: 1;
    flex-direction: row;
   justify-content: space-between;
  }

    
  `;
export const Title = styled.span`
    
    margin-left: 10px;
    font-size: 40px;  
    text-align: center;
    
    font-family: 'Bungee Shade', cursive;
    /* text-shadow: 1px 1px 2px #FFF; */
    color: #fff;
   
  @media (max-width: 1000px){
    /* margin-right: 30px; */    
  }
  @media(max-width: 560px){
    font-size: 30px;
  }
`;
