import HeaderSearch from '../components/HeaderSearch';

function HeaderOnlyLayout({ children }) {
    return (
        <div>
            <div>
                <HeaderSearch />
            </div>
            <div>{children}</div>
        </div>
    );
}

export default HeaderOnlyLayout;
