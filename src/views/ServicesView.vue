<template>
  <div class="w-full flex justify-center pt-2">
    <div class="w-[75%] flex justify-center flex-col items-center">
      <div class="flex space-x-2 bg-warning p-4 m-2 rounded-md">
        <v-icon
          icon="mdi-alert"
          class="text-2xl self-center" />
        <p class="font-nunito">
          We offer services for gaming computers, laptops, gaming
          consoles(e.g. PS4 and XBOX) and hand-held gaming consoles(e.g. PSP).
          Please expand any of the sections below for a product you own to see
          each service offered and its pricing.
        </p>
      </div>
      <v-expansion-panels
        variant="popout"
        class="my-4 w-[75%]">
        <v-expansion-panel
          v-for="(service, index) in filteredServicesOffered"
          :key="index">
          <v-expansion-panel-title class="font-ubuntu">{{
            service.serviceName
          }}</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-table>
              <thead>
                <tr class="font-ubuntu">
                  <th class="text-left">Number</th>
                  <th class="text-left">Service</th>
                  <th class="text-left">Component</th>
                  <th class="text-left">Cost(Ksh)</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="font-nunito"
                  v-for="(serv, index) in service.options"
                  :key="index">
                  <td>{{ (index += 1) }}</td>
                  <td>{{ serv.action }}</td>
                  <td>{{ serv.component }}</td>
                  <td>{{ serv.cost }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script lang="js">
import useServicesComposable from "../composables/ServicesViewCompos.js"
export default {
    name: "ServicesView",
    setup() {
      const { filteredServicesOffered } = useServicesComposable();

      return {
        filteredServicesOffered
      }
    }
}
</script>
