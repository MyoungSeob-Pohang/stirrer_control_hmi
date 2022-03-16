import { Suspense } from 'react';
import Headers from '../components/Header';
import HeadTitle from '../components/HeadTitle';
import Menu3D from '../components/Menu3D';
import DataTable from '../components/DataTable';

const Menu1 = () => {
    return (
        <div className="Menu1">
            <Headers />
            <HeadTitle headText={'Menu1 Title'} />
            <Suspense fallback={null}>
                <Menu3D />
            </Suspense>
            <DataTable />
        </div>
    );
};
export default Menu1;
