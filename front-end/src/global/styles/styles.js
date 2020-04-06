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

`;
export const DivUserUcess = styled.div`
  margin-right: 0px;
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  
  
  
  a{
  text-decoration: none;
  margin-left: 10px;
  font-size: 22px;  
  color: #0057ff;
}
svg{
  color: #0057ff; 
}
`;
export const DivLink = styled.div`
  align-items: flex-end;
  padding: 5px 15px;
  border-radius: 25px;
  margin-right: 25px;
  border: 1px solid #fff;
  background: #fff;
  box-shadow : 0 0 19px 0 rgba(0, 0, 0, 0.4);


  

   
`;

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  max-width: 1200px;
  /* min-width: 650px; */
  background: #fff; 
  
  flex-direction: row;
   
  /* padding: 60px 30px; */
  box-shadow : 0 0 14px 0 rgba(0, 0, 0, 0.2);

  
  main{
    padding: 20px;
    margin-left: 280px;
    display: flex;
    
    
    flex-direction: column;
  } 

  @media (max-width: 1000px){
    margin-top: 0;
    
  
    flex-direction: column;
    

  main {
    width: 100%;  
    margin-left: 0;
    margin-top: 190px;
    border-radius: 20px;
  }

  
  }
  

  `;

export const Side = styled.aside`
    position: fixed;
    height: 100%;
    width: 280px;

    flex:1; 
    box-shadow : 0 0 14px 0 rgba(0, 0, 0, 0.2);
    padding: 5px 5px;
    background: #fff;
    
    /* border: 1px solid #ccc; */
    /* box-shadow:  -1px 1px #ccc,
         -2px 2px #ccc,
         -3px 3px #ccc,
         -4px 4px #ccc,
         -5px 5px #ccc; */
  a{
  text-decoration: none;
  border: 0;
  margin: 0;
  margin-top: 10px;
  
  border-radius: 4px;
  padding: 15px 5px;
  font-size: 22px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  color: #0057ff;
  cursor: pointer;
  :hover{
    width: 280px;
    color: #fff;
    background: #4169E1;
    box-shadow : 0 0 14px 0 rgba(0, 0, 0, 0.2);
  }


  @media (max-width: 1000px){
    margin-left: 8px;
    :hover{
      width: auto;
    }

  }
  @media(max-width: 722px){
    font-size: 18;
    
    
  }
  }  
/* fecha <a/> */
    
    
    @media (max-width: 1000px){
    position: fixed;
    margin-top: 100px;
    border-radius: 0px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    display: flex;
    flex: 1;   
    width: 100%;
    height: 80px;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-evenly;

  
    }
    @media(max-width: 894px){
    
      flex-direction: column;
      align-items: stretch;   
    }
    
`;
export const Divisor = styled.div`    
  /* box-shadow : 0 0 14px 0 rgba(0, 0, 0, 0.05); */
  display: flex;
  /* flex: 1; */
  flex-direction: column;
  justify-content: space-between;    
   @media (max-width: 1000px){
    a{
      width: auto;
    }
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
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
    
    margin-left: 20px;
    font-size: 40px;  
    text-align: center;
    
    font-family: 'Bungee Shade', cursive;
    /* text-shadow: 1px 1px 2px #FFF; */
    color: #fff;
   
  @media (max-width: 1000px){
    /* margin-right: 30px; */    
  }
  @media(max-width: 894px){
  }
`;
