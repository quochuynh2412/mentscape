import { Route, Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ isAuthed, isLoading, children}) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthed) {
        return <Navigate to='/login' />
    }

    return children;
}