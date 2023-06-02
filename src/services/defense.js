import axios from 'axios';

export default class Defense {

    static getDefenses() {
        return axios
            .get('http://thanos.icmc.usp.br:4567/api/v1/defesas')
            .then(response => response.data)
            .catch(error => error)
    }
}
