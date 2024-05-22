function goBack() {
    window.history.back();
}

function updateCounts() {
    const text = document.getElementById('textInput').value;
    document.getElementById('characterCount').innerText = text.length;
    document.getElementById('wordCount').innerText = countWords(text);
    document.getElementById('lineCount').innerText = countLines(text);
    document.getElementById('sentenceCount').innerText = countSentences(text);
}

function countWords(text) {
    if (text.trim().length === 0) return 0;
    return text.trim().split(/\s+/).length;
}

function countLines(text) {
    if (text.length === 0) return 0;
    return text.split(/\n/).length;
}

function countSentences(text) {
    if (text.length === 0) return 0;
    return text.split(/[.!?]+/).filter(Boolean).length;
}