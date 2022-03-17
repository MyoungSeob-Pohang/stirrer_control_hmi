import Headers from '../components/Header';
import HeadTitle from '../components/HeadTitle';
import DataTable from '../components/DataTable';
import Menu3D from '../components/Menu3D';
import Rdrawer from '../components/Rdrawer';

const Menu1 = () => {
    return (
        <div className="Menu1">
            <Headers />
            <HeadTitle headText={'Menu1 Title'} />
            <Rdrawer />
            <Menu3D />
            <DataTable />
        </div>
    );
};
export default Menu1;
