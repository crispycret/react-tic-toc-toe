import Square from '../components/Square';

interface Props {
    board: string[];
    handleClick(index: number): void;
}

const Game = (props: Props) => {

    const { board, handleClick } = props;

    const styles = {
        board: {
            background: '#3736a3',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            height: '40vw',
            width: '40vw',
            margin: '20vw 20vw',
            overflow: 'hidden',
        },
    };

    return (
        <div style={styles.board}>
            {board.map((value, index) => (
                <Square 
                index={index}
                value={value}
                handleClick={handleClick}
                />
            ))}
        </div>
    );

}



export default Game;