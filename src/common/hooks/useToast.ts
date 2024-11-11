import { useContext } from 'react';
import { ToastContext } from '../context/ToastContext/ToastContext'; // 导入 Toast 类型

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
