import type { EndpointErrorFxn, FailedResult, Result } from '@paima/sdk/mw-core';
export declare function getLobby(lobbyId: string): Promise<FailedResult | {
    success: true;
    data: Object;
}>;
export declare function getLobbyMap(lobbyId: string): Promise<FailedResult | {
    success: true;
    data: Object;
}>;
export declare function getLatestCreatedLobby(wallet?: string | null): Promise<FailedResult | {
    success: true;
    data: any;
}>;
export declare function isGameOver(lobby_id: string): Promise<FailedResult | {
    success: boolean;
    data: {
        isGameOver: any;
        current_round: any;
    };
}>;
export declare function getMoveForRound(lobby_id: string, round: number): Promise<FailedResult | {
    success: true;
    data: any;
}>;
export declare function getOpenLobbies(page?: number, count?: number, wallet?: string | null): Promise<FailedResult | {
    success: true;
    data: any[];
}>;
export declare function getMyGames(page?: number, count?: number, wallet?: string | null): Promise<FailedResult | {
    success: true;
    data: any[];
}>;
export declare function getLeaderBoard(wallet: string | null | undefined, type: 'latest' | 'wins' | 'played'): Promise<FailedResult | {
    success: true;
    data: any[];
}>;
export declare const queryEndpoints: {
    getLobby: typeof getLobby;
    isGameOver: typeof isGameOver;
    getLobbyMap: typeof getLobbyMap;
    getLatestCreatedLobby: typeof getLatestCreatedLobby;
    getOpenLobbies: typeof getOpenLobbies;
    getMyGames: typeof getMyGames;
    getMoveForRound: typeof getMoveForRound;
    getUserWallet: (wallet: string | null, errorFxn: EndpointErrorFxn) => Result<string>;
    getLeaderBoard: typeof getLeaderBoard;
};
