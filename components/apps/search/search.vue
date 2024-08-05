<template>
  <div>
    <ais-instant-search
        :search-client="searchClient"
        :index-name="`${indexName}`"
      >
        <ais-configure :hits-per-page.camel="8" />
        <div class="search-panel">
          <div class="search-panel__filters">
            <ais-panel>
              <template v-slot:header>type</template>
              <ais-refinement-list attribute="type" />
            </ais-panel>

            <ais-panel>
              <template v-slot:header>actors</template>
              <ais-refinement-list searchable attribute="actors" />
            </ais-panel>
          </div>

          <div class="search-panel__results">
            <div class="searchbox">
              <ais-search-box placeholder="" />
            </div>
            <ais-hits>
              <template v-slot:item="{ item, index }">
                <article>
                  <h1>
                    <ais-highlight attribute="title" :hit="item" />
                  </h1>
                  <p>
                    <ais-snippet :hit="item" attribute="plot" />
                  </p>
                </article>
              </template>
            </ais-hits>

            <div class="pagination">
              <ais-pagination />
            </div>
          </div>
        </div>
      </ais-instant-search>
    <!--<v-text-field id="mainSearch" density="compact" variant="solo" label="Search Meeovi" append-inner-icon="fas fa-search" single-line
        hide-details @input="fetchSearchResults"></v-text-field>-->
  </div>
</template>

<script setup>
import Client from '@searchkit/instantsearch-client'
import Searchkit from "searchkit"
import { useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();

const elastiConfig = {
  connection: {
    host: config.searchHost,
    // if you are authenticating with api key
    // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-api-key
    //apiKey: ''
    // if you are authenticating with username/password
    // https://www.searchkit.co/docs/guides/setup-elasticsearch#connecting-with-usernamepassword
    //auth: {
    //  username: "",
    //  password: ""
    //},
  },
  search_settings: {
    highlight_attributes: ['title'],
    search_attributes: [{ field: 'title', weight: 3 }, 'actors', 'plot'],
    result_attributes: ['title', 'actors', 'poster', 'plot'],
    facet_attributes: [
      'type',
      { attribute: 'actors', field: 'actors.keyword', type: 'string' }
    ],
    sorting: {
      default: {
        field: '_score',
        order: 'desc'
      },
      _rated_desc: {
        field: 'rated',
        order: 'desc'
      }
    },
    snippet_attributes: ['plot'],
    query_rules: []
  }
}

const searchkitClient = new Searchkit(elastiConfig)
const searchClient = Client(searchkitClient);

const indexName = config.indexName
</script>