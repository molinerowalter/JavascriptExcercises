const { parseText } = require('./Index')  ; // importa la función

describe('It should return parsedText using the alphabet, a direction and a iteration number', ()=>{
    it('Cifrar texto hacia la izquierda con overflow', () => {
        const result = parseText('AaX', 'left', 5);
        expect(result).toBe('VvT'); // Ajusta según el comportamiento esperado
    });

    it('Cifrar texto hacia la derecha con overflow', () => {
        const result = parseText('ZwA', 'right', 3);
        expect(result).toBe('CzD'); // Ajusta según el comportamiento esperado
    });

    it('Cifrar texto hacia la derecha sin overflow', () => {
        const result = parseText('DeF', 'right', 3);
        expect(result).toBe('GhI'); // Ajusta según el comportamiento esperado
    });

    it('Cifrar texto hacia la izquierda sin overflow', () => {
        const result = parseText('DeF', 'left', 3);
        expect(result).toBe('AbC'); // Ajusta según el comportamiento esperado
    });
})