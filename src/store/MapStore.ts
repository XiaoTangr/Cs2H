import { MapDO } from "@/DBA/DO/MapDO";
import MapDTO from "@/DBA/DTO/MapDTO";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useMapStore = defineStore("MapStore", () => {
    const data = ref<MapDO[]>([]);
    const modifedData = ref<MapDO[]>([]);
    const isInitialized = ref(false);
    const isDataupdated = computed(() => {
        return JSON.stringify(data.value) !== JSON.stringify(modifedData.value);
    })


    const fetchData = async () => {
        if (!isInitialized.value) {
            const res = await MapDTO.queryAll();
            if (res) {
                const nonNullData = res.filter((item): item is MapDO[] => item !== null);
                if (nonNullData.length > 0) {
                    data.value = nonNullData.flat();
                    modifedData.value = JSON.parse((JSON.stringify(data.value)))
                }
            }
            isInitialized.value = true;
        }
    };



    return { data, modifedData, isDataupdated, fetchData };
});
