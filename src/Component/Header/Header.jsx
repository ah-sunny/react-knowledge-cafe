import profile from '../../assets/image/profile.png';

const Header = () => {
    return (
        <header className=' flex justify-between border-b-4 text-6xl font-bold p-4 '>
            <h1 >Knowledge cafe</h1>
            <img src={profile} alt="" />

        </header>
    );
};

export default Header;