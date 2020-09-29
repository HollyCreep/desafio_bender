import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/App'
import Vuetify from 'vuetify'
import VueRouter from '@/router.js'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('App', () => {
    let vuetify
    beforeEach(() => {
        vuetify = new Vuetify()
      })
    test('Verifica se o APP é uma instância do Vue', () => {
        expect.assertions(1)
        const wrapper = shallowMount(App, {
            localVue,
            vuetify,
          })
        expect(wrapper.vm).toBeTruthy()
    })
})
