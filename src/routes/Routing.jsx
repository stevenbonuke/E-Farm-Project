import { Route } from 'react-router-dom';
import { Dashboard, Profile } from '../components/admin/index';

const Routing = () => {
return (
        <>
            <Route path="/admin" exact={true} name="Admin" />
            <Route path="/admin/dashboard" exact={true} name="Dashboard" element={<Dashboard />} />
            <Route path="/admin/profile" exact={true} name="Profile" element={<Profile />} />
        </>
    )
};

export default Routing;