import { mount } from '@vue/test-utils'
import App from '@/App'

describe('App', () => {
    test('Verifica se o APP é uma instância do Vue', () => {
        const wrapper = mount(App, {
            propsData: {
                msg: 'Hello world',
            },
        })
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
