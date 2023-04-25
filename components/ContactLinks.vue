<template >
    <div class="contact-links">
        <NuxtLink to="https://t.me/krolmic" target="_blank">
            <nuxt-icon name="telegram" class="contact-link-icon" />
        </NuxtLink>
        <NuxtLink to="https://wa.me/4917671940780" target="_blank">
            <nuxt-icon name="whatsapp" class="contact-link-icon" />
        </NuxtLink>
        <NuxtLink to="mailto:hello@krolmic.dev" target="_blank">
            <nuxt-icon name="envelope" class="contact-link-icon" />
        </NuxtLink>
    </div>
</template>

<style>
.contact-links {
    display: flex;
    justify-content: center;
}

.contact-links .contact-link-icon {
    margin-left: 20px;
    margin-right: 20px;
}

.contact-links .contact-link-icon svg {
    width: 4rem;
    height: 4rem;
}
</style>