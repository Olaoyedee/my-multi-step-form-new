const active= document.querySelector('.active')
const roundBox = document.querySelectorAll('.round-box')
const personalInfo=document.querySelector('.personal-info')
const form = document.querySelector('#form')
const inputs = document.querySelectorAll('input')
const formStep1= document.querySelector('.form-step1')
const formStep2= document.querySelector('.form-step2')
const formStep3= document.querySelector('.form-step3')
const formStep4= document.querySelector('.form-step4')
const formStep5= document.querySelector('.form-step5')
const gotoPage2=document.querySelector('.gotoPage2')
const gotoPage3=document.querySelector('.gotoPage3')
const gotoPage4=document.querySelector('.gotoPage4')
const gotoPage5=document.querySelector('.gotoPage5')
const backArrow=document.querySelector('.back-arrow')
const backArrow2=document.querySelector('.back-arrow2')
const backArrow3=document.querySelector('.back-arrow3')
const names=document.querySelector('#name')

const email=document.querySelector('#email')
const Pnumber=document.querySelector('#phone-number')
const cards = document.querySelectorAll('.cards')
const circle1 = document.querySelector('.circle1')
const circle2 = document.querySelector('.circle2')
const inputCheck = document.querySelector('.input-check')



form.addEventListener('submit', submitForm)
inputCheck.addEventListener('click', slideRight)
backArrow.addEventListener('click', Previous1)
backArrow2.addEventListener('click', Previous2)
backArrow3.addEventListener('click', Previous3)


function submitForm(e){
   e.preventDefault()
   gotoPage2.addEventListener('click', turnPage1)
   gotoPage3.addEventListener('click', turnPage2)
   gotoPage3.addEventListener('click', turnPage3)
   gotoPage4.addEventListener('click', turnPage4)
   gotoPage5.addEventListener('click', turnPage5)
  
   
}



function turnPage1(){
  
   const active =document.querySelector('.active')
   const active2 =document.querySelector('.active2')
//    const form = document.querySelector('#form')
 
   
 
  

   const cards = document.querySelectorAll('.cards')
   let valid=true
    
   
   if(names.value.length <3 || /\d/.test(names.value)){
           gotoPage2.disabled=true
           inputs.forEach((input) => {
               input.style.borderColor = 'red'
               valid=false
           })
          
       }
   if(Pnumber.value.length < 10 || !/\d+$/.test(Pnumber.value)){
           gotoPage2.disabled=true
           console.log(Pnumber.value)
           inputs.forEach((input) => {
               input.style.borderColor = 'red'
           })
           valid=false
           
   }
   if(valid){
       formStep1.style.display='none'
       formStep2.style.display='block'
       active.classList.remove('active')
       active2.classList.add('active')
       gotoPage2.disabled=false
   }
   cards.forEach(x=>{
       
       x.addEventListener('click', cardSelector)
   })
   
  gotoPage3.disabled=true
             
         
              
              
         
      
}

function cardSelector(e){
   const cardSelect= document.querySelector('.card-select')
    e.currentTarget.classList.add('card-select')
    
   // cardSelect.classList.remove('card-select')
   cards.forEach(x=>{
       if(x.classList.contains('card-select')){
           x.classList.remove('card-select')
         
           e.currentTarget.classList.add('card-select')
           gotoPage3.disabled=false
       }
    
       
   })
   

  
  
  
}  

function slideRight(){
   const dollarYear = document.querySelector('.dollarperyear')
   const dollarYear1 = document.querySelector('.dollarperyear1')
   const dollarYear2 = document.querySelector('.dollarperyear2')
   const dollarMonth = document.querySelector('.dollarpermonth')
   const dollarMonth1 = document.querySelector('.dollarpermonth1')
   const dollarMonth2 = document.querySelector('.dollarpermonth2')
   const annual = document.querySelectorAll('.annual ')
  
   annual.forEach(x=>{
    x.classList.toggle('annualactive')

   })
 
   
  const pageWord = document.querySelectorAll('.hideword')
  
  
   dollarMonth.classList.toggle('hide')
   dollarMonth1.classList.toggle('hide')
   dollarMonth2.classList.toggle('hide')
   dollarYear.classList.toggle('reveal')
   dollarYear1.classList.toggle('reveal')
   dollarYear2.classList.toggle('reveal')
 
  
   
   pageWord.forEach(x=> {
       x.classList.toggle('showword')
      console.log(x)
   })

}
     
function turnPage2(e){
   const roundBox = document.querySelectorAll('.round-box')
   
   const active3 =document.querySelector('.active3')
   const active2 =document.querySelector('.active2')

   active2.classList.remove('active')
   active3.classList.add('active')
 
 
  
   let submitPage2 =e.currentTarget.parentElement
   // console.log(submitPage2)
  let stepCARD=submitPage2.parentElement
  const confirmSelectedCard= stepCARD.querySelectorAll('.cards')
  const annual = document.querySelectorAll('.annual ')
  annual.forEach(z=>{
   if(z.classList.contains('annualactive')){
       const totalinner = document.querySelector('.totalinner')
       const finalAmount =document.querySelector('.final_amount')
       let renderOneAmount = document.querySelector('.render-one-amount')
       let renderTwoAmount = document.querySelector('.render-two-amount')
       let renderThreeAmount = document.querySelector('.render-three-amount')
       
       let mo = document.querySelector('.mo')
       let mos = document.querySelector('.mos')
       let mon = document.querySelector('.mon')
       let h4mo= finalAmount.querySelector('.mo')
       
      for(let i=0; i<confirmSelectedCard.length; i++){
       const page3AmountInput = confirmSelectedCard[0].querySelector('.card-info')
       const page3AmountInput1 = confirmSelectedCard[1].querySelector('.card-info')
       const page3AmountInput2 = confirmSelectedCard[2].querySelector('.card-info')
       let heading =page3AmountInput.firstElementChild
       let heading1 =page3AmountInput1.firstElementChild
       let heading2 =page3AmountInput2.firstElementChild
       if(heading.nextElementSibling.classList.contains('hide')){
           renderOneAmount.textContent=10
           renderTwoAmount.textContent=10
           renderThreeAmount.textContent=20
           mo.textContent=`/yr`
           mon.textContent='/yr'
           mos.textContent='/yr'
           h4mo.textContent='/yr'
           totalinner.textContent='year'
           const page3Amountvalue= document.querySelectorAll('.amount')
           for(let j=0; j<page3Amountvalue.length; j++){
               page3Amountvalue[0].textContent='+$10/yr'
               page3Amountvalue[1].textContent ='+$10/yr'
               page3Amountvalue[2].textContent='+$20/yr'
           }
       }
       else{
           renderOneAmount.textContent=1
           renderTwoAmount.textContent=1
           renderThreeAmount.textContent=2
           mo.textContent='/mo'
           mos.textContent='/mo'
           mon.textContent='/mo'
           h4mo.textContent='/mo'
           totalinner.textContent='month'
           const page3Amountvalue= document.querySelectorAll('.amount')
           for(let j=0; j<page3Amountvalue.length; j++){
               page3Amountvalue[0].textContent='+1/mo'
               page3Amountvalue[1].textContent ='+1/mo'
               page3Amountvalue[2].textContent='+2/mo'
           }
       }
      }
   }
  })
  confirmSelectedCard.forEach(x=>{
   if(x.classList.contains('card-select')){
       
      
       annual.forEach(y=>{
          if(y.classList.contains('annualactive')) {
           const h3span = document.querySelector('.h3span')
           let h3spanParent=h3span.parentElement
           const amountInValue=document.querySelector('.amount-in-value')
           const cardSelectedInfo = x.querySelector('.card-info')
          
           let h3= cardSelectedInfo.firstElementChild
           
           if(h3.nextElementSibling.classList.contains('hide')){

               let Paragraph = h3.nextElementSibling
              let Paragraph2= Paragraph.nextElementSibling
              console.log(Paragraph2)
              h3spanParent.textContent=`${h3.textContent}(${y.textContent})`
              amountInValue.textContent= Paragraph2.textContent
              
               
           }
           else{
               let Paragraph = h3.nextElementSibling
               console.log(Paragraph)
               amountInValue.textContent=Paragraph.textContent
               h3spanParent.textContent=`${h3.textContent}(${y.textContent})`
           }
         
          }
       
          })
       
       
   }
  })
 
   //For selection from DOM
   formStep2.style.display='none'
   formStep3.style.display='block'

  





}
      

let totalRealAmount = document.querySelector('.real-amount')

 let extractNumberSuccess

 function activateB(e){
     const inputPage3= formStep3.querySelectorAll('input') 
     const checkNextPageHeader= formStep4.querySelector('.amount-in-value')
     let sliceNextpageHeader= checkNextPageHeader.textContent
    
     let sliceArray=sliceNextpageHeader.split('')
     let extractNumber=[]
     sliceArray.filter(x=>{
         
         if(parseInt(x)===Number(x)){
            extractNumber.push(x)
           
            
         }
     })
     extractNumberSuccess= parseInt(extractNumber.join(''))
     
    
    
     let parentCheckBox= e.currentTarget.parentElement
 
         
        
     let parentParentsElement=parentCheckBox.parentElement
    
     const detailed =parentParentsElement.querySelector('.details')
     let detailedchild = detailed.firstElementChild.textContent
     let granny = parentParentsElement.parentElement
     let greatGranny = granny.parentElement
     const renderPackages=greatGranny.querySelector('.render-packages')
 
     let renderOne =renderPackages.firstElementChild
     let renderTwo =renderPackages.children[1]
     let renderThree =renderPackages.children[2]
  
   
     
    
     if(e.currentTarget.checked){
        
         if(e.currentTarget === inputPage3[0]){
             renderOne.style.display ='flex'
             renderOne.firstElementChild.textContent= detailedchild
             console.log(renderOne.firstElementChild.textContent)
             console.log(detailedchild)
             console.log(renderOne.firstElementChild)
              gotoPage4.disabled=false
         }
        
         if(e.currentTarget === inputPage3[1]){
             renderTwo.style.display ='flex'
             renderTwo.firstElementChild.textContent= detailedchild
             console.log(renderTwo.firstElementChild.textContent)
             console.log(detailedchild)
             console.log(renderTwo.firstElementChild)
              gotoPage4.disabled=false
         }
        
         if(e.currentTarget === inputPage3[2]){
             renderThree.style.display ='flex'
             renderThree.firstElementChild.textContent= detailedchild
             console.log(renderThree.firstElementChild.textContent)
             console.log(detailedchild)
             console.log(renderThree.firstElementChild)
              gotoPage4.disabled=false
         }
       
         
     }
     else{
         if(e.currentTarget === inputPage3[0]){
             renderOne.style.display ='none'
           
         }
         if(e.currentTarget === inputPage3[1]){
             renderTwo.style.display ='none'
           
         }
         if(e.currentTarget === inputPage3[2]){
             renderThree.style.display ='none'
           
         }
       
     }
     
 }
        
 function turnPage3(e){
   const roundBox = document.querySelectorAll('.round-box')

   const active2 =document.querySelector('.active2')
   const active3 =document.querySelector('.active3')

   active2.classList.remove('active')
   active3.classList.add('active')
   // const active3 =document.querySelector('.active3')
   // const active4 =document.querySelector('.active4')

   // active3.classList.remove('active')
   // active4.classList.remove('active')
   
 
   // const roundBox = document.querySelectorAll('.round-box')
   
   // roundBox.forEach(x=>{
   //     x.classList.remove('active')
   //     if(roundBox[3]){
   //         roundBox[3].classList.add('active')
   //     }
   // })
     const inputPage3= formStep3.querySelectorAll('input')               //INPUTS IN PAGE 3
     gotoPage4.disabled=true
     formStep3.style.display='block'
     formStep2.style.display='none'
    
   for(let f=0; f<inputPage3.length; f++){
     inputPage3[f].addEventListener('click', activateB)
   }
   
     
     
    
     
    
 }
 function turnPage4(){
   const active3 =document.querySelector('.active3')
   const active4 =document.querySelector('.active4')

   active3.classList.remove('active')
   active4.classList.add('active')
   
     const inputPage3= formStep3.querySelectorAll('input') 
     formStep4.style.display='block'
     formStep3.style.display=' none'
     console.log(extractNumberSuccess)
     const render1neAmount=formStep4.querySelector('.render-one-amount')
     const render2woAmount=formStep4.querySelector('.render-two-amount')
     const render3reAmount=formStep4.querySelector('.render-three-amount')
     const finalTotalAmount=formStep4.querySelector('.real-amount')
     let totalRender =0
     let totalRender1 =0
     let totalRender2 =0
     for(let x=0; x<inputPage3.length;x++){
         if(inputPage3[x].checked){
          
             if(inputPage3[x].checked && inputPage3[x]==inputPage3[0]){
                 totalRender1 = parseInt(render1neAmount.textContent)
                 console.log(totalRender1)
             }
           
             if(inputPage3[x].checked && inputPage3[x]==inputPage3[1]){
                 totalRender = parseInt(render2woAmount.textContent)
                 console.log(totalRender)
             }
             
             if(inputPage3[x].checked && inputPage3[x]==inputPage3[2]){
                 totalRender2 = parseInt(render3reAmount.textContent)
                 console.log(totalRender2)
             }
            
            
         }
       
     }
     finalTotalAmount.textContent= extractNumberSuccess + totalRender1 + totalRender+ totalRender2
  
     
 
    
   
}
function turnPage5(){
   formStep4.style.display='none'
   formStep5.style.display='grid'
   
}

function Previous1(){
   
   const active1 =document.querySelector('.active1')
   const active =document.querySelector('.active')
   const active2 =document.querySelector('.active2')

   active1.classList.add('active')
   active2.classList.remove('active')

   formStep1.style.display='block'
   formStep2.style.display='none'
}
function Previous2(){
   const active3 =document.querySelector('.active3')
   const active =document.querySelector('.active')
   const active2 =document.querySelector('.active2')

   active2.classList.add('active')
   active3.classList.remove('active')

   formStep2.style.display='block'
   formStep3.style.display='none'
}
function Previous3(){
   const active4 =document.querySelector('.active4')
   const active =document.querySelector('.active')
   const active3 =document.querySelector('.active3')

   active3.classList.add('active')
   active4.classList.remove('active')

   formStep3.style.display='block'
   formStep4.style.display='none'
}
      
      
  
   


   

     
       


 
  


 
   


  
  
 
       

    
      
      
      
   
     
 



















     
     
     
      

      



  
































































