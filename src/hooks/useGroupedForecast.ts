import { useMemo } from 'react';

import type { Forecast } from '../types/weather.types';


function useGroupedForecast(list: Forecast[]) {

    return useMemo(() => {
        const grouped: Record<string, Forecast[]> = {};

        for (const entry of list) {
            const date = entry.dt_txt.split(' ')[0];

            if (!grouped[date]) {
                grouped[date] = [];
            }
            grouped[date].push(entry);
        }

        return grouped;
    }, [list]);
}

export default useGroupedForecast;
