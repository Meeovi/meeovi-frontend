<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create a Space
                </v-btn>
            </template>
            <v-card>
                <form method="post" @submit.prevent="createGroup">
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
                                    <div v-for="(spaces, index) in data?.groups?.nodes" :key="index">
                                        <v-select v-model="type" label="What type of group is this?"
                                            v-for="(items, index) in spaces?.types?.nodes" :key="index"
                                            :items="[`${items?.name}`]"></v-select>
                                    </div>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="status" label="Is this group public or private?"
                                        v-for="(spaces, index) in data?.groups?.nodes" :key="index"
                                        :items="[`${spaces?.status}`]"></v-select>
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
                            Save
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
            }
        }
    }
</script>

<script setup>
import { ref } from 'vue'
const name = ref('');
const description = ref('');
const status = ref('');
const attachmentCover = ref('');
const attachmentAvatar = ref('');

const CREATE_SPACE = gql`
  mutation CreateGroup($name: String!, $description: String!, $status: PUBLIC, $types: DEFAULT) {
    createGroup(input: {
      name: $name,
      description: $description,
      status: $status
      type: $type
    }) {
    group {
      description
      id
      name
      status
      types {
        nodes {
          name
        }
      }
      attachmentAvatar {
        full
      }
      attachmentCover {
        full
      }
    }
  }
}
`;

const { mutate } = useMutation(CREATE_SPACE);

const createGroup = async () => {
  const variables = {
    name: name.value,
    description: description.value,
    attachmentCover: attachmentCover.value,
    attachmentAvatar: attachmentAvatar.value,
    status: "PUBLIC", // Ensure this is the correct enum value
    type: "DEFAULT" // Ensure this is the correct enum value
  };

  console.log('Variables:', variables); // Debugging: Log variables to ensure they are correct

  try {
    const result = await mutate({ variables });
    console.log('Space created:', result.data.createActivity.activity);
  } catch (error) {
    console.error('Error creating space:', error);
  }
};

    const query = gql `
  query GetGroupTypes {
    groups {
    nodes {
      creator {
        avatar {
          url
        }
        username
      }
      description
      id
      lastActivity
      name
      slug
      status
      totalMemberCount
      dateCreated
      attachmentCover {
        full
      }
      types {
        nodes {
          name
        }
      }
    }
  }
}
`

    const {
        data
    } = useAsyncQuery(query);
</script>