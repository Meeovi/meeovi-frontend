import { defineNuxtPlugin } from '#app'
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
//import 'datatables.net-dt/css/jquery.dataTables.css';

DataTable.use(DataTablesCore);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(DataTable);
});