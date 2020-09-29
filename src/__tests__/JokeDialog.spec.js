import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import JokeDialog from '@/components/core/JokeDialog'

const localVue = createLocalVue()
describe('JokeDialog', () => {
    let vuetify
    beforeEach(() => {
        vuetify = new Vuetify()
      })

    test('Verifica se o JokeDialog é uma instância do Vue', () => {
        expect.assertions(1)
        const wrapper = shallowMount(JokeDialog, {
            mocks: {
                $t: t => t,
                $store: {
                  getters: {
                    getBenderHumor: () => { return 'normal' },
                  },
                },
              },
        })
        expect(wrapper.vm).toBeTruthy()
    })

    test('Verificase encontrou uma nova piada', () => {
        expect.assertions(2)
        const wrapper = shallowMount(JokeDialog, {
            localVue,
            vuetify,
            mocks: {
                $t: t => t,
                $store: {
                  getters: {
                    getCurrentJoke: () => { return 'E o bambu ?' },
                  },
                },
              },
        })
        expect(wrapper.vm).toBeTruthy()
        expect(wrapper.vm.joke()).not.toHaveLength(0)
    })

    test('Verifica se a assistente esta falando e se o botão esta disabled e o nelson oculto', () => {
        expect.assertions(3)
        const wrapper = shallowMount(JokeDialog, {
            mocks: {
                $t: t => t,
                $store: {
                  getters: {
                    getBenderIsSpeaking: () => { return true },
                    isNelsonShowing: () => { return false },
                  },
                },
              },
        })
        console.log('button', wrapper.find('.v-btn'))
        expect(wrapper.vm).toBeTruthy()
        expect(wrapper.vm.speaking()).toBeTruthy()
        expect(wrapper.vm.nelson()).toBeFalsy()
    })
})
