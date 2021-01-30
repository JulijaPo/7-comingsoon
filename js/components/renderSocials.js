import {allowedSocialicons} from '../data/allowedSocialicons.js'
function renderSocials(selector,data){
    //input validation
if (typeof selector !== 'string' || selector === '') {
    console.error('Error: netinkamas secektorius')
    return false};
    if(!Array.isArray(data) || data.length === 0){
        console.error('Error:netinkamas data parametras')
        return false};


    //logic
    const DOM = document.querySelector(selector)
    if(!DOM){ 
        console.error('Error: nepavyko rasti elemento pagal pateikta selectoriu')
    return false}
    let HTML = ''
    for ( let i = 0; i < data.length; i++){
        const socialObjects = data[i] 
        //duomenu objecto validacija
if(typeof socialObjects !== 'object' || Array.isArray(socialObjects) || !socialObjects.href || !socialObjects.icon|| typeof socialObjects.href !=='string' || typeof socialObjects.icon !=='string' || !allowedSocialicons.includes(socialObjects.icon)){
    console.console.warn('warning: netinkamo formato objektas', socialObjects);
continue
}


        HTML += `<a href="&{socialObjects.href}" target="_blank" class="fa fa-&{socialObjects.icon}"></a>`
    }
     //post logic validation
    if(HTML === ''){
        console.error('Error: tarp pateiktu duomenu nera tinkamos informacijos')
    return false}
    //return result
    DOM.innerHTML = HTML
}
export { renderSocials }