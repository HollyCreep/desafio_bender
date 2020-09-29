import { shallowMount, createLocalVue } from '@vue/test-utils'
import BenderFace from '@/components/bender/Face'
import BenderEyes from '@/components/bender/Eyes'
import BenderMouth from '@/components/bender/Mouth'

const localVue = createLocalVue()
localVue.use(BenderEyes)
localVue.use(BenderMouth)

describe('BenderFace', () => {
    test('Verifica se o Face é uma instância do Vue', () => {
        expect.assertions(1)
        const wrapper = shallowMount(BenderFace, {
            localVue,
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

    test('Verifica humor normal', () => {
        expect.assertions(2)
        const wrapper = shallowMount(BenderFace, {
            localVue,
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
        expect(wrapper.vm.humor()).toBe('normal')
    })

    test('Verifica humor triste', () => {
        expect.assertions(2)
        const wrapper = shallowMount(BenderFace, {
            localVue,
            mocks: {
                $t: t => t,
                $store: {
                  getters: {
                    getBenderHumor: () => { return 'triste' },
                  },
                },
              },
        })
        expect(wrapper.vm).toBeTruthy()
        expect(wrapper.vm.humor()).toBe('triste')
    })

    test('Verifica humor alegre', () => {
        expect.assertions(2)
        const wrapper = shallowMount(BenderFace, {
            localVue,
            mocks: {
                $t: t => t,
                $store: {
                  getters: {
                    getBenderHumor: () => { return 'alegre' },
                  },
                },
              },
        })
        expect(wrapper.vm).toBeTruthy()
        expect(wrapper.vm.humor()).toBe('alegre')
    })
})
