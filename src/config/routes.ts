const routesConfig = {
    home: '/',
    description: '/description',
    profile: '/profile/account',
    profile_bank: '/profile/banks',
    profile_address: '/profile/address',
    profile_friends: '/profile/friends',
    profile_chats: '/profile/chats/:id?',
    profile_chat: '/profile/chats',
    profile_change_password: '/profile/change_password',
    profile_buy: '/profile/buys',
    profile_noti: '/profile/notifycation',
    profile_voucher: '/profile/vouchers',
    profile_user: '/profile/user/:id',
    login: '/login',
    register: '/register',
    accessories: '/accessories',
    cat: '/cat',
    dog: '/dog',
    contact: '/contact',
    news: '/news',
    food: '/food',
    search: '/search',
    categories: '/cartegories',
    orders: '/carts/orders',
    shop: '/shop',
    detail: '/product/:name/:id',
    newsDetail: 'news/detail/:id',
    notFound: '/:pathMatch(.*)*',
};

export default routesConfig;
