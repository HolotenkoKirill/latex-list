
const languages = [
  { name: 'C#', link: null },
  { name: 'C', link: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
  { name: 'Python', link: 'https://en.wikipedia.org/wiki/Python_(programming_language)' },
  { name: 'JavaScript', link: 'https://en.wikipedia.org/wiki/JavaScript' },
  { name: 'Java', link: 'https://en.wikipedia.org/wiki/Java_(programming_language)' },
];

const begining = `
\\documentclass{article}

\\usepackage{hyperref}

\\begin{document}

\\section*{List of Programming Languages}

Programming languages play a crucial role in software development. They provide the syntax and semantics for creating computer programs. Here is a list of popular programming languages along with links to their Wikipedia pages:`;

const end = '\\end{document}';

const generateItem = (language) => !!language.link ? `  \\item \\href{${language.link}}{${language.name}}\n` : `  \\item {${language.name}}\n`

const generateLatexList = (languages) => {
  let latexCode = '\\begin{itemize}\n';

  languages.forEach(language => {
    latexCode += generateItem(language);
  });

  latexCode += '\\end{itemize}';
  return latexCode;
}

const latexList = generateLatexList(languages);
const fullDoc = `
${begining}
${generateLatexList(languages)}
${end}`;

document.getElementById('latexList').innerText = fullDoc;


