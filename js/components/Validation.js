class Validation {
    static isValidName(name){
        //ne tuscias tekstas
        if (!Validation.isNonEmtyText(name)){
            return 'Vardas turi buti ne tuscias'
        }
        //nei prekyje nei gale nera tarpu
        if (!Validation.noSpacesAround(name)){
            return 'nei prekyje nei gale negali buti tarpu'
        }
         //negali buti daugiau nei vienas zodis
         if (!Validation. isSingleWord(name)){
            return 'negali buti daugiau nei vienas zodis'
         }
       
        //pirma raide didzioji
        if (!Validation.isFirstLetterUpperCase(name)){
            return 'Pirma raide turi buti didzioji'
        }
        
        //visos likusios tik mazosios
        if (!Validation.isLowercaseButFirst(name)){
            return 'visos likusios tik mazosios'
        }

        //tik abeceles raides (galimybe nurodyti kokios abeceles yra priimtinos)
        if (!Validation.textContainsOnlyEnglishAlphabet(name)){
            return 'tik english'
        }
        return true
    }

    static isValidEmail(email){
        //ne tuscias textas
        if (!Validation.isNonEmtyText(email)){
            return 'Email turi buti ne tuscias'
        }
        //nei prekyje nei gale nera tarpu
        if (!Validation.noSpacesAround(email)){
            return 'nei prekyje nei gale negali buti tarpu'
        }
        // tik vienas @ simb
        if (!Validation.textContainsOnlyOneLetter(email, '@')){
            return 'tik vienas @ simb'
        }
        //preis @ (lokali dalis)ne tuscias textas

        //uz @ (domeno dalis)ne tuscias textas
        return true
    }

    static isValidText(text){
     //ne tuscias textas
     if (!Validation.isNonEmtyText(text)){
        return 'Meesage turi buti ne tuscias'
    }
        return true
    }

    static isNonEmtyText (text) {
        if (typeof text !== 'string' ||
        text === ''){
            return false
        }
        return true
    } 
    static isSingleWord (text) {
        if (text.includes(' ')){
            return false // return !text.includes(' ')
        }
        return true
    } 

    static isFirstLetterUpperCase (text) {
            return text[0] === text[0].toUpperCase()
    } 

    static noSpacesAround (text) {
            return  text === text.trim()
    } 
    static isLowercaseButFirst (text) {
        const rest = text.slice(1)
        return  rest === rest.toLowerCase()
    } 
    static textContainsOnlyOneLetter (text, letter, count = 1) {
        let letterCount = 0
       // for (let symbol of text){
        //    if(symbol === letter) {
        //        letterCount++
         //   }
        //}
        letterCount = text.split('').filter(symbol => symbol === letter).length
        return  letterCount === count
    } 
    static textContainsOnlyEnglishAlphabet (text) {
        return  text.match(/[^A-z]/g) === null
    }
        
}
export{ Validation}