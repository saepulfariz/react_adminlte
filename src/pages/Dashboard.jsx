import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import { Helmet } from 'react-helmet';


import 'bootstrap/dist/css/bootstrap.css'
import 'admin-lte/dist/css/adminlte.css';

// import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
// import 'jquery/dist/jquery.js';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'admin-lte/dist/js/adminlte.min.js';
import { Outlet } from 'react-router-dom';
// import 'jquery';
// import 'admin-lte/plugins/jquery/jquery.min.js';
// import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';

const Dashboard = () => {
    // useEffect(() => {
    //     // Initialize AdminLTE
    //     window.$(document).ready(() => {
    //         window.$.AdminLTE.layout.activate();
    //     });
    // }, []);


    return (
        <div>
            <Helmet>
                <title>Dashboard - My AdminLTE</title>
            </Helmet>
            <div className="wrapper">
                <Navbar />
                <Sidebar />
                <Outlet />
                <Content />
            </div>
        </div>
    );
};

export default Dashboard;
