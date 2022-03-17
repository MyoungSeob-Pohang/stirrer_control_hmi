import DatePicker from '../components/DatePicker';
import Headers from '../components/Header';
import HeadTitle from '../components/HeadTitle';
import MenuChart from '../components/MenuChart';
import Rdrawer from '../components/Rdrawer';

const Menu2 = () => {
    return (
        <div className="Menu2">
            <Headers />
            <HeadTitle headText={'Menu2 Title'} />
            <DatePicker />
            <MenuChart />
        </div>
    );
};
export default Menu2;
