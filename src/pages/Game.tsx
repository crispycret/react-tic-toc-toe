import Square from '../components/Square';

interface Props {
    board: string[];
    handleClick(index: number): void;
}

const Game = (props: Props) => {

    const { board, handleClick } = props;

    const styles = {
        board: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            width: '40vw',
        }
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