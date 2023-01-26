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

export const downloadFile = (data, filename) => {
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
}