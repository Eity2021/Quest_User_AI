import mockData from "./mock-data.json";

interface SearchResult {
  found: boolean;
  answer: string;
}

export function searchKnowledgeBase(question: string): SearchResult {
  const normalizedQuestion = question.toLowerCase().trim();

  for (const conversation of mockData.conversations) {
    const normalizedStudent = conversation.student.toLowerCase();

    // Check for exact match or partial match with keywords
    if (
      normalizedStudent === normalizedQuestion ||
      normalizedStudent.includes(normalizedQuestion) ||
      normalizedQuestion.includes(normalizedStudent)
    ) {
      return {
        found: true,
        answer: conversation.agent,
      };
    }

    // Check for keyword matching (better search for similar questions)
    const questionWords = normalizedQuestion
      .split(/\s+/)
      .filter((w) => w.length > 2);
    const studentWords = normalizedStudent.split(/\s+/);

    const matchCount = questionWords.filter((word) =>
      studentWords.some((sWord) => sWord.includes(word) || word.includes(sWord))
    ).length;

    if (
      matchCount > 0 &&
      matchCount >= Math.max(1, questionWords.length * 0.5)
    ) {
      return {
        found: true,
        answer: conversation.agent,
      };
    }
  }

  return {
    found: false,
    answer:
      "I couldn't find a matching answer in my knowledge base. Please try asking in a different way or check the question format.",
  };
}
