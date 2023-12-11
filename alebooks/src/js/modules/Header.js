import { module as BaseModule } from 'modujs';

export default class MenuModule extends BaseModule {
    constructor(m) {
        super(m);
    }

    init() {
        const menuItems = Array.from(document.querySelectorAll('.menu-item-has-children'));

        if (!menuItems.length) return;

        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', event => {
                event.stopPropagation();

                const submenuList = menuItem.querySelector('.am-submenu-list');
                const submenuIcon = menuItem.querySelector('.am-submenu-icon');
                const submenuToggle = menuItem.querySelector('.am-submenu-toggle');

                const allSubmenuLists = Array.from(document.querySelectorAll('.am-submenu-list'));
                const allSubmenuIcons = Array.from(document.querySelectorAll('.am-submenu-icon'));
                const allSubmenuToggles = Array.from(document.querySelectorAll('.am-submenu-toggle'));

                allSubmenuLists.forEach(item => item !== submenuList && item.classList.remove('submenu-show'));
                allSubmenuIcons.forEach(item => item !== submenuIcon && item.classList.remove('alt-image'));
                allSubmenuToggles.forEach(item => item !== submenuToggle && item.classList.remove('active'));

                if (submenuList.classList.contains('submenu-show')) {
                    submenuList.classList.remove('submenu-show');
                    submenuIcon.classList.remove('alt-image');
                    submenuToggle.classList.remove('active');
                } else {
                    allSubmenuLists.forEach(item => item !== submenuList && item.classList.remove('submenu-show'));
                    allSubmenuIcons.forEach(item => item !== submenuIcon && item.classList.remove('alt-image'));
                    allSubmenuToggles.forEach(item => item !== submenuToggle && item.classList.remove('active'));

                    submenuList.classList.add('submenu-show');
                    submenuIcon.classList.add('alt-image');
                    submenuToggle.classList.add('active');
                }
            });
        });

        document.addEventListener('click', () => {
            const allSubmenuLists = Array.from(document.querySelectorAll('.am-submenu-list'));
            const allSubmenuIcons = Array.from(document.querySelectorAll('.am-submenu-icon'));
            const allSubmenuToggles = Array.from(document.querySelectorAll('.am-submenu-toggle'));

            allSubmenuLists.forEach(item => item.classList.remove('submenu-show'));
            allSubmenuIcons.forEach(item => item.classList.remove('alt-image'));
            allSubmenuToggles.forEach(item => item.classList.remove('active'));
        });
    }
}
