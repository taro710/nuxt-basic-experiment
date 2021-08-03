import { computed, reactive, InjectionKey } from '@nuxtjs/composition-api';

export const useCounter = () => {
  const state = reactive({
    count: 0,
  });

  const count = computed(() => state.count);

  const increment = () => state.count++;

  const decrement = () => state.count--;

  return {
    state,
    count,
    increment,
    decrement,
  };
};

export type CounterStore = ReturnType<typeof useCounter>;
export const CounterKey: InjectionKey<CounterStore> = Symbol('CounterStore');
