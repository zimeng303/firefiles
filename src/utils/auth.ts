import Cookies from 'js-cookie';

const TookenKey = 'Admin-Tooken';

// 从cookie中获取tooken
export function getTooken() {
    return Cookies.get(TookenKey);
}

// 将tooken存储到cookie中
export function setTooken(tooken: string) {
    return Cookies.set(TookenKey, tooken);
}

// 删除cookie中的tooken
export function removeTooken() {
    return Cookies.remove(TookenKey);
}



