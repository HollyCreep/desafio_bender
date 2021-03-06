import { shallowMount } from '@vue/test-utils'
import BenderEye from '@/components/bender/Eyes'

describe('BenderEye', () => {
    test('Verifica se o BenderEye é uma instância do Vue', () => {
        expect.assertions(1)
        const wrapper = shallowMount(BenderEye, {
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
        const wrapper = shallowMount(BenderEye, {
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
        const wrapper = shallowMount(BenderEye, {
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
        const wrapper = shallowMount(BenderEye, {
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
