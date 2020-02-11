import { createAction } from 'redux-act';
import { NEXT_MESSAGE, PREVIOUS_MESSAGE } from '../../constants/messages';

interface INextMessage {
    id: number
    message: string
}

interface IPrevMessage {
    id: number
    message: string
}

export const nextMessage = createAction<INextMessage>(NEXT_MESSAGE);
export const prevMessage = createAction<IPrevMessage>(PREVIOUS_MESSAGE);