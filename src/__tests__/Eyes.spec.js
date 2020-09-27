import { mount } from '@vue/test-utils'
import BenderEye from '@/components/bender/Eyes'

describe('BenderEye', () => {
    test('Verifica se o APP é uma instância do Vue', () => {
        const wrapper = mount(BenderEye, {
            propsData: {
                msg: 'Hello world',
            },
        })
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
