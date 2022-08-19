import Header from '../components/Header';

function HeaderOnlyLayout({ children }) {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>{children}</div>
        </div>
    );
}

export default HeaderOnlyLayout;
