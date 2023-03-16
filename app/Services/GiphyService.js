import { appState } from "../AppState.js"

const giphyApi = new axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    timeout: 5000,
    params: {api_key: 'hDgLur41wN28VicphiDOK7mMGJZRupaP',
    rating: 'pg',
    limit: 6,
}
})


class GiphyService {

    async getNewGiphs(query) {
        const res = await giphyApi.get(`search?q=${query}`)
        console.log('from giphy service', res.data)
        appState.searchResults = res.data.data
        console.log(appState.searchResults);
    }

}


export const giphyService = new GiphyService()