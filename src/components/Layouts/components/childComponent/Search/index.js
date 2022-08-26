import classNames from 'classnames/bind';
import { useRef, useState } from 'react';

import styles from './Search.module.scss';
import images from '~/assets/img';

// import TrackItems from '../Tracks/TrackItems';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');

    // const [dataFetch, setDataFetch] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3000/tracks')
    //         .then((response) => response.json())
    //         .then((response) => {
    //             console.log(response.data);
    //             response.data.map((result) => <TrackItems key={result.id} data={result} />);
    //         })

    //         .catch((err) => console.error(err));
    // }, []);

    // (() => {
    //     dataFetch.map((result) => <TrackItems key={result.id} data={result} />);
    // })();

    // <TrackItems data={searchResult} />

    ////////

    // const dataEntries = Object.entries(searchResult);

    // dataEntries.forEach(([key, value]) => {
    //     console.log(key + value);
    // });

    //////////////////
    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    return (
        <div className={cx('search')}>
            <div className={cx('search-container')}>
                <div className={cx('search-content')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Artists, songs or podcasts"
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <div className={cx('search-icon')}>
                        <img src={images.search} alt="" />
                    </div>
                    <button className={cx('clear')} onClick={handleClear}>
                        <img src={images.clear} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Search;
