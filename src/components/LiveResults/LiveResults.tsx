import { LiveResultBlock, LiveResultsContainer } from "./styles";

const mockTournament = {
    name: "Torneio dos Amigos",
    phase: "Round of 16",
    date: "16/10/2024"
}

export const LiveResult: React.FC = () => {
    return(
        <LiveResultsContainer>
            <LiveResultBlock>
                <p className="phase">{mockTournament.phase}</p>
                <div className="main-content">
                    <h3 className="main-content__title">{mockTournament.name}</h3>
                    <p className="main-content__subtitle">{mockTournament.date}</p>
                </div>
            </LiveResultBlock>
        </LiveResultsContainer>

    )
}

export default LiveResult;