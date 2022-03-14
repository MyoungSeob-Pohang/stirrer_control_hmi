import './css/Reset.css';
import './css/App.css';
import Header from './components/Header';
import ReactFullpage from '@fullpage/react-fullpage';

export const Fullpage = () => (
    <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <p>Section 1</p>
                        <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
                    </div>
                    <div className="section">
                        <p>Section 2</p>
                    </div>
                    <div className="section">
                        <p>Section 3</p>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

function App() {
    return (
        <div className="App">
            <Fullpage />
            <Header />
        </div>
    );
}

export default App;
