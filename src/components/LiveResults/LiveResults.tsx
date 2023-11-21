import { LiveResultBlock, LiveResultsContainer } from "./styles";

export const LiveResult: React.FC = () => {
    return(
        <LiveResultsContainer>
            <LiveResultBlock>
                <p>Fulano Ciclano X</p>
                <p>Ciclano Fulano</p>
            </LiveResultBlock>
        </LiveResultsContainer>

    )
}

export default LiveResult;