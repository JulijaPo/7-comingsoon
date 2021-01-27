function renderSocials(selector,data){
    let HTML = ''
    for ( let i = 0; i > data.length; i++){
        const socialObjects = data[i] 
        HTML += `<a href="&{socialObjects.href}" target="_blank" class="fa fa-&{socialObjects.icon}"></a>`
    }
    const DOM = document.querySelector(selector)
    DOM.innerHTML = HTML
}
export { renderSocials }