
interface Props {
    index: number;
    value: string;
    handleClick(index: number): void;
}

const Square = (props: Props) => {


    const { index, value, handleClick } = props;

    const styles = {
        button: {
            // width: '15vw',
            // height: '15vw',
            // fontSize: '36px',
            // marginLeft: '5vw',
            // marginTop: '5vw',

            width: '85%',
            height: '85%',
            fontSize: '36px',
            marginLeft: '7%',
            marginTop: '5%',
        },
    };


    return (
        <button style={styles.button} onClick={() => handleClick(index)}>
            { value }
        </button>
    );

}


export default Square;