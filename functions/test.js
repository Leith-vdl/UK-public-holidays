export default async function handler(request) {
    const jsonResponse = {
        message: "Hello, Cloudflare Pages!",
        status: "success",
        timestamp: Date.now(),
    };

    return new Response(JSON.stringify(jsonResponse), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}