class Forms {
    constructor(){
        this.forms = []
        this.init()

    }
    init(){
        this.findAllForms()
        this.addEvents()

    }
    findAllForms(){
        const forms = document.querySelectorAll('form')
        this.forms = [...forms] //spread synax

       
    }
    addEvents(){
        /*for (let i=0; i<this.forms.length; i++) {
            const form = this.forms[i];
            console.log(form);
        }
        
        for (const form of this.forms) {
            console.log(form);
        }*/
        for (const form of this.forms){
            // labiau preciziskas, bet daugiau darbo
            const inputs = form.querySelectorAll('input')
            const textareas = form.querySelectorAll('textarea')
            const allInputs = [...inputs,...textareas]
            // greitesnis ir paprastesnis
            //const allInputs = form.querySelectorAll('input, textarea')
            const submit = form.querySelector('.btn')
            submit.addEventListener('click', (event) => {
            event.preventDefault()
            //console.log(inputs)
            //console.log(textareas)
            //console.log(allInputs)
            for (const input of allInputs){
                console.log(input.value)
            }
        })
        }
    }

}

export { Forms }