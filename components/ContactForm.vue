<template>
    <div>
        <form @submit.prevent="submitForm">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="form.name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email" required>
            <label for="message">Message:</label>
            <textarea id="message" v-model="form.message" required></textarea>
            <button type="submit">Submit</button>
        </form>
        <hr />
        <div v-if="success" class="success-message">Success message</div>
        <div v-if="error" class="error-message">Error message</div>
    </div>
</template>
  
<script setup lang="ts">
import type { Message } from '~/types'
const { create } = useStrapi()

const form = reactive({
    name: '',
    email: '',
    message: ''
})
let success = ref(false)
let error = ref(false)

const submitForm = async () => {
    try {
        await create<Message>('messages', { name: form.name, email: form.email, message: form.message })
        success.value = true
    } catch (_) {
        error.value = true
    } finally {
        form.name = '';
        form.email = '';
        form.message = '';
    }
}
</script>