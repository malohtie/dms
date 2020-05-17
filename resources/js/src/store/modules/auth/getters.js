export default {
    isLogged: state => !!state.user,
    isAdmin: state => state.user?.role === 'admin',
    role: state => state.user?.role,
    user: state => state.user
}
