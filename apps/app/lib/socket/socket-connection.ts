import { io, Socket } from 'socket.io-client';
import { RoadLane } from '../componenets/game/logic.game';

const SOCKER_HOST = 'https://wrongway-racer-api.spls.ae/';

export interface PlayerPayload {
  avatar: string;
  gamesPlayed: number;
  highestRank: number;
  name: string;
  rank: number;
  record: number;
  worstRecord: number;
}


interface ListenerEvents {
  newChatJoin: (player: PlayerPayload) => void;
  newEnemy: (location: RoadLane) => void;
  players: (players: PlayerPayload[]) => void;
  newChat: (player: string) => void;
}

export const socket: Socket<ListenerEvents, unknown> = io(SOCKER_HOST, {
  reconnectionDelay: 1500,
});

socket.on('connect', () => {
  console.debug('Socket connection established');
});

socket.on('disconnect', () => {
  console.debug('Socket connection terminated');
});
