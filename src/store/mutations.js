export default {
    'ADD_FILME' (state, new_filme) {
        state.filme = new_filme;
        state.filmes.push(state.filme)
    }
}