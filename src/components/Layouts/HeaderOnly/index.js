import Header from '../components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>{children}</div>
        </div>
    );
}

export default HeaderOnly;
