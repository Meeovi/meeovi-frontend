<template>
    <div>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" stacked prepend-icon="fas fa-plus" text="Create A Space" size="150" variant="flat" style="height: 321px; margin-top: 27px;"></v-btn>
            </template>
            <v-card>
                <form @submit.prevent="createGroupAndRefresh">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Space</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="name" id="spaceName" label="Space Name*" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="type" label="What type of space is this?" :items="typeItems"></v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="status" label="Is this space public or private?" :items="statusItems"></v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="description" label="Description" id="spaceDescription">
                                    </v-textarea>
                                </v-col>
                                <v-col cols="6">
                                    <v-file-input @change="onFileChange('cover', $event)" clearable density="compact"
                                        prepend-icon="fas fa-image" accept="image/*" label="Image for Banner"
                                        variant="solo-inverted"></v-file-input>
                                </v-col>
                                <v-col cols="6">
                                    <v-file-input @change="onFileChange('avatar', $event)" clearable density="compact"
                                        prepend-icon="fas fa-image" accept="image/*" label="Image for Avatar"
                                        variant="solo-inverted"></v-file-input>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Close
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="text" type="submit" @click="dialog = false">
                            Create Space
                        </v-btn>
                    </v-card-actions>
                    <div v-if="errorMessage">{{ errorMessage }}</div>
                    <div v-if="successMessage">{{ successMessage }}</div>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                apiUrl: process.env.API_URL,
                wordpressToken: process.env.WORDPRESS_TOKEN
            }
        }
    }
</script>

<script setup>
import { ref } from 'vue';
import { useApolloClient } from '@vue/apollo-composable';
import { useRoute, useRouter } from 'vue-router';
import gql from 'graphql-tag';

const route = useRoute();
const router = useRouter();
//const id = ref('');

const content = ref('');
const image = ref('');
const media = ref('');
const reactions = ref('');

const { client: apolloClient } = useApolloClient();

// Create Mutation
const CREATE_ACTIVITY = gql`
  mutation MyMutation($content: String!) {
    createGroup(input: {content: $content, type: ACTIVITY_UPDATE}) {
    activity {
      content
      date
      status
      title
      type
    }
  }
}
`;

const createGroup = async () => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: CREATE_ACTIVITY,
      variables: {
        content: content.value,
        //id: id.value,
      },
    });
    console.log('Group created:', data.createGroup.activity);
  } catch (error) {
    console.error('Error updating activity:', error);
  }
};

const createGroupAndRefresh = async () => {
  await createGroup();
  router.go(0);  // Refresh the current route
};
</script>