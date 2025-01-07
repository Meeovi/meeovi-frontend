<template>
    <div>
        <div id="ww_217f04fb5b512" v='1.3' loc='auto' a='{"t":"responsive","lang":"en","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'>More forecasts: <NuxtLink to="https://oneweather.org/melbourne/30_days/" id="ww_217f04fb5b512_u" target="_blank">30 days Melbourne weather</NuxtLink></div>
    </div>
</template>

<script setup>
    import {
        onMounted,
        ref
    } from 'vue'

    const widgetId = 'ww_217f04fb5b512'

    const loadExternalScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script')
            script.type = 'text/javascript';
            script.src = src
            script.async = true
            script.onload = resolve
            document.head.appendChild(script)
        })
    }

    onMounted(async () => {
        try {
            await loadExternalScript(`https://app3.weatherwidget.org/js/?id=${widgetId}`)
            // You may need a delay to allow the widget script to initialize
            setTimeout(() => {
                // Check if additional initialization is needed here
            }, 100)
        } catch (error) {
            console.error('Failed to load weather widget script:', error)
        }
    })

    const props = defineProps({
        category: {
            type: String,
            required: true,
        },
    });
</script>