import router from '../../router';
import { useAuth } from '../../store/authStore';

export default class HomeController {

    public verifyUser = () => {
        const auth = useAuth();

        if (!auth.getToken()) {
            router.push('/');
            return;
        }

        localStorage.setItem('email', auth.getEmail() as string);
        localStorage.setItem('password', auth.getPassword() as string);
        localStorage.setItem('token', auth.getToken() as string);
    }

    public allSideMenu = () => {
        const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
    
        allSideMenu.forEach(item => {
            const li = item.parentElement as HTMLElement;
    
            item.addEventListener('click', function () {
                allSideMenu.forEach(i => {
                    const liParent = i.parentElement as HTMLElement;
                    liParent.classList.remove('active');
                    
                })
                li.classList.add('active');
            })
        });
    }

    public menuBar = () => {
        const menuBar = document.querySelector('#content nav .bx.bx-menu') as HTMLElement;
        const sidebar = document.getElementById('sidebar') as HTMLElement;
    
        menuBar.addEventListener('click', function () {
            sidebar.classList.toggle('hide');
        })
    }

    public switchMode = () => {
        const switchMode = document.getElementById('switch-mode') as HTMLInputElement;
    
        switchMode.addEventListener('change', function () {
            if (this.checked) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
    
            if (document.body.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        })
    }

    public verifyMode = () => {
        const switchMode = document.getElementById('switch-mode') as HTMLInputElement;
        const getTheme = localStorage.getItem('theme');
    
        if (getTheme && getTheme === 'dark') {
            document.body.classList.add('dark');
            switchMode.checked = true;
        } else {
            document.body.classList.remove('dark');
            switchMode.checked = false;
        }
    }

}