//Given a text chain, a direction and a number of itereations, replace every char (keeping uppercase when needed) with the resultant char of applying
// that number of iterations over the alphabet 

const ALPH = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,y,x,z'

function parseText(text, direction, quantity) {
    const ALPH_ARR = ALPH.split(',')

    return text.split('').map(char => {
        const charPositionInAlphabet = ALPH_ARR.findIndex(alph_char => char === alph_char || char === alph_char.toUpperCase())
        const isMinus = ALPH_ARR[charPositionInAlphabet] === char;

        if (direction === 'left') {
            let charToReturn;
            if (charPositionInAlphabet >= quantity) {
                charToReturn = ALPH_ARR[charPositionInAlphabet-quantity]
            } else {
                const overflow = Math.abs(charPositionInAlphabet-quantity)
                charToReturn = ALPH_ARR[ALPH_ARR.length-overflow]
            }

            if (!isMinus) {
                return charToReturn.toUpperCase()
            } 

            return charToReturn
        } else {
            let charToReturn;
            if (ALPH_ARR.length >= charPositionInAlphabet + quantity) {
                charToReturn = ALPH_ARR[charPositionInAlphabet+quantity]
            } else {
                const overflow = Math.abs(ALPH_ARR.length-2-charPositionInAlphabet+quantity)
                charToReturn = ALPH_ARR[overflow]
            }

            if (!isMinus) {
                return charToReturn.toUpperCase()
            }

            return charToReturn
        }
    }).join('')
}

module.exports = { parseText }