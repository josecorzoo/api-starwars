class Starship {

    static index(then, error){
        axios.get('/starship')
        .then((response) => then(response))
        .catch((response) => error(response));
    }

    static store(item, then, error){
        axios.post('/starship', item)
        .then((response) => then(response))
        .catch((response) => error(response));
    }

    static show(id, then, error){
        axios.get('/starship/' + id)
        .then((response) => then(response))
        .catch((response) => error(response));
    }

    static update(item, then, error){
        axios.put('/starship/' + item.id, item)
        .then((response) => then(response))
        .catch((response) => error(response));
    }

    static destroy(id, then, error){
        axios.delete('/starship/' + id)
        .then((response) => then(response))
        .catch((response) => error(response));
    }

}

export default Starship;
