<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Departments" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <v-list-item prepend-icon="fas fa-compass-drafting" title="Meeovi Crafts" value="meeovi crafts"
                        href="/Departments/Crafts/crafts/"></v-list-item>
                    <v-list-item prepend-icon="fas fa-person-shelter" title="Meeovi Yardsale" value="meeovi yardsale"
                        href="/Departments/Yardsale/yardsale/"></v-list-item>
                    <v-list-item prepend-icon="fas fa-mattress-pillow" title="Meeovi Fabrics" value="meeovi fabrics"
                        href="/Departments/Fabrics/fabrics/"></v-list-item>
                    <v-list-item prepend-icon="fas fa-message" title="Meeovi Reviews" value="meeovi reviews"
                        href="/Departments/Reviews/reviews/">
                    </v-list-item>
                    <v-list-item prepend-icon="fas fa-newspaper" title="Meeovi News" value="meeovi reviews"
                        href="/Departments/News/News/"></v-list-item>
                    <v-list-item prepend-icon="fas fa-note-sticky" title="Meeovi Notes" value="meeovi Notes"
                        href="/Departments/Notes/Notes/"></v-list-item>
                    <v-list-item prepend-icon="fas fa-utensils" title="Meeovi Eats" value="meeovi Eats"
                        href="/Departments/Eats/"></v-list-item>
                    <v-list-item prepend-icon="fas fa-graduation-cap" title="Meeovi Learning" value="meeovi Learning"
                        href="/Departments/Learning/Learning/"></v-list-item>
                    <v-list-item prepend-icon="fas fa-tablet-button" title="Meeovi Appstore" value="meeovi appstore"
                        href="/Departments/Appstore/appstore"></v-list-item>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>

</script>