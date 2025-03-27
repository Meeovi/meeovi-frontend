<template>
    <div>
        <v-row>
            <v-col cols="12">
                <section data-bs-version="5.1" class="header5 cid-ueXph5BkCt mbr-fullscreen mbr-parallax-background"
                    id="header5-9k" :style="`background-image: url(${department?.image?.filename_disk})`">
                    <div class="mbr-overlay" style="opacity: 0.1; background-color: rgb(255, 255, 255);"></div>

                    <div class="container">
                        <div class="row justify-content-end">
                            <div class="col-12 col-lg-7">
                                <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-3 display-1" id="dateTime">
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    import {
        onMounted,
        onUnmounted
    } from 'vue';
    const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: department
  } = await useAsyncData('department', () => {
    return $directus.request($readItem('departments', '68', {
      fields: ['*', '*', '*']
    }))
  })

    let intervalId;

    const updateDateTime = () => {
        const months = [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];
        const date = new Date();
        const monthName = months[date.getMonth()];
        const formattedDate = date.toLocaleString();

        const dateTimeElement = document.getElementById("dateTime");
        if (dateTimeElement) {
            dateTimeElement.innerHTML = `${monthName} ${formattedDate}`;
        }
    };

    onMounted(() => {
        updateDateTime(); // Initial update
        intervalId = setInterval(updateDateTime, 1000);
    });

    onUnmounted(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
    });

    const props = defineProps({
        category: {
            type: String,
            required: true,
        },
    });
    const {
        category
    } = props;
</script>