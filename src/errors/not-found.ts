import { CustomAPIError } from './custom-api';

export class NotFoundError extends CustomAPIError {
    constructor(message: string) {
        super(message, 404);
    }
}
