import { CustomAPIError } from './custom-api';

export class ConflictError extends CustomAPIError {
    constructor(message: string) {
        super(message, 409);
    }
}
