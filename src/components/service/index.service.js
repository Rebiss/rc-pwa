import axios from 'axios'
import {URL, OPTION} from '../config/index.cfg.js'

export const Data = async (query) => {
    const {data} = await axios.get(URL, OPTION(query) )

    return data
}