import {describe, expect, test} from '@jest/globals';
import { ErrorMessages } from '../errorMessage.enum'
import { Matemagica } from './matemagica'



describe('Operation two numbers', () => {
    test('should be sum two numbers', () => {
        const matemagica = new Matemagica()
        matemagica.setX(1)
        matemagica.setY(2)

        expect(matemagica.getSum()).toBe(3)
    })

    test('should be sub two numbers', () => {
        const matemagica = new Matemagica()
        matemagica.setX(2)
        matemagica.setY(1)

        expect(matemagica.getSub()).toBe(1)
    })

    test('should be div two numbers', () => {
        const matemagica = new Matemagica()
        matemagica.setX(2)
        matemagica.setY(1)

        expect(matemagica.getDiv()).toBe(2)
    })

    test('should be vez two numbers', () => {
        const matemagica = new Matemagica()
        matemagica.setX(2)
        matemagica.setY(1)

        expect(matemagica.getVez()).toBe(2)
    })

    test('Deve retornar um erro, string + number', () => {
        const matemagica = new Matemagica()
        // @ts-ignore
        expect(matemagica.setX('erro')).toBe(ErrorMessages.INVALID_OPERATION)
        // @ts-ignore
        expect(matemagica.setY('erro2')).toBe(ErrorMessages.INVALID_OPERATION)
    })
})