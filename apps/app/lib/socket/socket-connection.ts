import { io, Socket } from 'socket.io-client';

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

type EnemySpawnedPayload = 'right' | 'left' | ' center';

interface ListenerEvents {
  newChatJoin: (player: PlayerPayload) => void;
  newEnemy: (location: EnemySpawnedPayload) => void;
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
