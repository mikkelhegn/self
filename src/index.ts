import { HandleRequest, HttpRequest, HttpResponse} from "@fermyon/spin-sdk"

const encoder = new TextEncoder()

export const handleRequest: HandleRequest = async function(request: HttpRequest): Promise<HttpResponse> {
    const reply = await fetch("/hello")
    const replyText = await reply.text()
    return {
      status: 200,
        headers: { "foo": "bar" },
      body: encoder.encode(replyText).buffer
    }
}
