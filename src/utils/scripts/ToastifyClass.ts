import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

export class ToastifyClass {
    toast: any;

    success(descToast: string) {
        createToast(
            {
                title: "Sucesso!",
                description: descToast,
            },
            {
                position: "top-right",
                type: "success",
                showIcon: true,
            }
        );
    }

    error(descToast: string) {
        createToast(
            {
                title: "Erro!",
                description: descToast,
            },
            {
                position: "top-right",
                type: "danger",
                showIcon: true,
            }
        );
    }

    warning(descToast: string) {
        createToast(
            {
                title: "Atenção!",
                description: descToast,
            },
            {
                position: "top-right",
                type: "warning",
                showIcon: true,
            }
        );
    }

    info(descToast: string) {
        createToast(
            {
                title: "Informação!",
                description: descToast,
            },
            {
                position: "top-right",
                type: "info",
                showIcon: true,
            }
        );
    }
    
}
