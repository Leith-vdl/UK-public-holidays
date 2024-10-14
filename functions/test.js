export default async function handler(request) {
    const jsonResponse = {
        message: "Hello, Cloudflare Pages!",
        status: "success",
        timestamp: Date.now(),
    };

    returnnewResponse(JSON.stringify(jsonResponse), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}