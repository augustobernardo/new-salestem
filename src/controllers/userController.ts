import apiService from '../services/apiService';
import UserModel from '../models/userModel';
import { ToastifyClass } from "../utils/scripts/ToastifyClass";

const toastify = new ToastifyClass()

const UserController = {
    async validateUser(emailParam: string, passParam: string) {
        try {
            await apiService.get<UserModel[]>('users').then((users) => {
                users.map((user) => {
                    if (user.email == emailParam && user.password) {
                        window.location.href = '/dashboard';
                    }
                })
            })
        } catch (error) {
            toastify.error('Erro ao buscar usuários')
        }
    },

    async postUser(user: UserModel) {
        try {
            await apiService.post<UserModel>('users', user);
            toastify.success('Registrado com sucesso')
        } catch (error) {
            toastify.error('Erro ao registrar')
            console.log(error)
        }
    }
};


export default UserController;