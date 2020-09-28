import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import BenderEye from '@/components/bender/Eyes'
import store from './store'

Vue.use(store)
describe('BenderEye', () => {
    test('Verifica se o APP é uma instância do Vue', () => {
        const wrapper = shallowMount(BenderEye, {
        })
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
