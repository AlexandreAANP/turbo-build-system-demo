import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { Session } from "@repo/models/metadata/session"; // Adjust the import path as necessary
export async function getSession(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);
    
    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!` };
};

app.http('getSession', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: getSession
});
