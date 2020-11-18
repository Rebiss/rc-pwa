export const URL = `https://api.openweathermap.org/data/2.5/weather`,
    OPTION = query => {
    return {
        params: {
            q: query,
            units: 'metric',
            APPID: `f33a484cf794d08d0148764789aaba32`
        }
    }
}