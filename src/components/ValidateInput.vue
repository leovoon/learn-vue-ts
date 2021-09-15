<template>
    <div class="relative">
        <input
            class="p-2 border bg-gradient-6 opacity-60 placeholder-dark-400 rounded"
            v-bind="$attrs"
            :value="val"
            @input="updateInput"
            @blur="validateEmpty"
        />
            <span
                class="block text-red-500 text-xs"
                v-if="error"
            >at least type something?</span>
        <pre>
2 ways binding : {{ val }}
        </pre>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    props: {
        modalValue: String
    },
    inheritAttrs: false,
    setup(props, { emit }) {
        const val = ref(props.modalValue || '');
        const error = ref(false);
        const updateInput = (e: Event) => {
            val.value = (e.target as HTMLInputElement).value
            emit('update:modalValue', val.value)
        }
        const validateEmpty = () => { val.value.trim() === '' ?  error.value = true : error.value = false }
        return {
            val,
            updateInput,
            validateEmpty,
            error
        }
    }


})
</script>