let logado = localStorage.getItem('logado');

LoginUsuario_render({
    logado: logado, 
    usuario: localStorage.getItem('usuario'),
    onLogin: (usuario) => {
        logado = true;
        localStorage.setItem('logado', true);
        localStorage.setItem('usuario', usuario);
    },
    onLogout: () => {
        logado = false;
        localStorage.removeItem('logado', false);
        localStorage.removeItem('usuario');
    }
});