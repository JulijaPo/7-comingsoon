function clock(selector, deadline){ 
    //input validation
    if (typeof selector !== "string" ||
    selector === ''){
    console.error('Error: netinkamo formato selektoris')
    return false
    }
    if (typeof deadline !== "string" ||
    deadline === "" ||
    !isFinite((new Date(`2000-${deadline}`)).getTime())){
    console.error('Error: netinkamo formato data')
    return false
    }
    //logic

    const DOM = document.querySelector(selector)
    if(!DOM){
        console.error('Error: pagal pateikta selektoriu nepavyko rasti norimo Dom')
        return false
    }
    let allValueDOM = null

    let numbers = calcTime(deadline)
    const labels = ['days', 'hours', 'minutes', 'secodns']
    let HTML = ''
    for ( let i = 0; i< 4;i++){
        HTML += `<div class = 'time'>
        <div class = 'value'>${numberFormat(numbers[i])}</div>
        <div class = 'label'>${labels[i]}</div>
        </div>`
    }
    DOM.innerHTML = HTML
    allValueDOM = document.querySelectorAll(`${selector} .value`)
    setInterval(function(){
    numbers = calcTime(deadline)
    for(let i = 0; i<4;i++){
        allValueDOM[i].innerText = numberFormat(numbers[i])
    }
},1000)
}
function numberFormat(numbers){
    if(numbers < 10){
    return '0'+ numbers
}
 return numbers
}
function calcTime(deadline){
    const date = new Date()
    const now = Date.now()
    let year = date.getFullYear()
    let fullDeadline = `${year}-${deadline}`
    let fullDeadlineInMiliseconds = (new Date(fullDeadline)).getTime()
if(fullDeadlineInMiliseconds < now){
      year++
      fullDeadline = `${year}-${deadline}`
      fullDeadlineInMiliseconds = (new Date(fullDeadline)).getTime()
  }
  const diff = fullDeadlineInMiliseconds - now
  const seconds = Math.round(diff / 1000)
  const days = Math.floor(seconds / 60 / 60 / 24)
  let unusedSeconds = seconds - days * 60 * 60 * 24
  const hours = Math.floor(unusedSeconds / 60 / 60)
  unusedSeconds -= hours * 60 * 60
  const minutes = Math.floor(unusedSeconds / 60 )
  unusedSeconds -= minutes * 60 
return [days, hours, minutes, unusedSeconds]
}
export { clock }