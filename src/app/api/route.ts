import { searchKnowledgeBase } from "@/lib/search-knowledge-base";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return Response.json({ error: "Invalid message" }, { status: 400 });
    }

    const result = searchKnowledgeBase(message);

    return Response.json({
      success: true,
      answer: result.answer,
      found: result.found,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
