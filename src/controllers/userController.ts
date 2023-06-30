import axios from 'axios';
import apiService from '../services/apiService';
import UserModel from '../model/userModel';
import { ToastifyClass } from "../utils/scripts/ToastifyClass";

const toastify = new ToastifyClass()

const UserController = {
    async validateUser(emailParam: string, passParam: string) {
        try {
            await apiService.get<UserModel[]>('users').then((users) => {
                users.map((user) => {
                    if (user.email == emailParam && user.password) {
                        toastify.success('Login realizado com sucesso')
                        window.location.href = '/dashboard';
                    }
                })
            })
        } catch (error) {
            throw new Error('Erro ao buscar usuários');
        }
    },

    async postUser(user: UserModel) {
        try {
            toastify.success('Registrado com sucesso')
            await apiService.post<UserModel>('users', user);
        } catch (error) {
            throw new Error('Erro ao criar usuário');
        }
    }
};


export default UserController;