export const checkIfEmpty = (value) => {
    return (!value || value === '');
}

export const logout = () => {
    localStorage.clear()
    document.location = '/';
}

export const redirectIfToken = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && 'token' in user){
      document.location = '/lead';
    }
}