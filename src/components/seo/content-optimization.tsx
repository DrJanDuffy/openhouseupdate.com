import { component$ } from '@builder.io/qwik';

export interface ContentSectionProps {
  title: string;
  children: any;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  id?: string;
}

export const ContentSection = component$<ContentSectionProps>(({
  title,
  children,
  level = 2,
  className = '',
  id,
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <section className={`content-section ${className}`} id={id}>
      <HeadingTag className="content-heading">
        {title}
      </HeadingTag>
      <div className="content-body">
        {children}
      </div>
    </section>
  );
});

export interface KeywordDensityProps {
  text: string;
  keywords: string[];
  maxDensity?: number;
}

export const KeywordDensity = component$<KeywordDensityProps>(({
  text,
  keywords,
  maxDensity = 3,
}) => {
  const calculateDensity = (keyword: string, text: string): number => {
    const words = text.toLowerCase().split(/\s+/);
    const keywordWords = keyword.toLowerCase().split(/\s+/);
    const totalWords = words.length;
    
    let keywordCount = 0;
    for (let i = 0; i <= words.length - keywordWords.length; i++) {
      const phrase = words.slice(i, i + keywordWords.length).join(' ');
      if (phrase === keyword.toLowerCase()) {
        keywordCount++;
      }
    }
    
    return (keywordCount / totalWords) * 100;
  };

  const densities = keywords.map(keyword => ({
    keyword,
    density: calculateDensity(keyword, text),
    status: calculateDensity(keyword, text) <= maxDensity ? 'good' : 'high'
  }));

  return (
    <div className="keyword-density-analysis">
      <h3>Keyword Density Analysis</h3>
      <ul>
        {densities.map(({ keyword, density, status }) => (
          <li key={keyword} className={`density-${status}`}>
            <strong>{keyword}:</strong> {density.toFixed(2)}% 
            {status === 'high' && (
              <span className="warning"> (Consider reducing)</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
});

export interface ReadabilityScoreProps {
  text: string;
}

export const ReadabilityScore = component$<ReadabilityScoreProps>(({ text }) => {
  const calculateReadability = (text: string) => {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = text.split(/\s+/).filter(w => w.length > 0);
    const syllables = words.reduce((total, word) => {
      return total + countSyllables(word);
    }, 0);

    const avgWordsPerSentence = words.length / sentences.length;
    const avgSyllablesPerWord = syllables / words.length;

    // Simplified Flesch Reading Ease Score
    const score = 206.835 - (1.015 * avgWordsPerSentence) - (84.6 * avgSyllablesPerWord);
    
    return {
      score: Math.max(0, Math.min(100, score)),
      level: getReadabilityLevel(score),
      avgWordsPerSentence: avgWordsPerSentence.toFixed(1),
      avgSyllablesPerWord: avgSyllablesPerWord.toFixed(2),
    };
  };

  const countSyllables = (word: string): number => {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;
    
    const vowels = 'aeiouy';
    let count = 0;
    let previousWasVowel = false;
    
    for (let i = 0; i < word.length; i++) {
      const isVowel = vowels.includes(word[i]);
      if (isVowel && !previousWasVowel) {
        count++;
      }
      previousWasVowel = isVowel;
    }
    
    // Handle silent 'e'
    if (word.endsWith('e')) count--;
    
    return Math.max(1, count);
  };

  const getReadabilityLevel = (score: number): string => {
    if (score >= 90) return 'Very Easy';
    if (score >= 80) return 'Easy';
    if (score >= 70) return 'Fairly Easy';
    if (score >= 60) return 'Standard';
    if (score >= 50) return 'Fairly Difficult';
    if (score >= 30) return 'Difficult';
    return 'Very Difficult';
  };

  const analysis = calculateReadability(text);

  return (
    <div className="readability-analysis">
      <h3>Readability Analysis</h3>
      <div className="readability-score">
        <strong>Flesch Reading Ease:</strong> {analysis.score.toFixed(1)} 
        <span className={`level ${analysis.level.toLowerCase().replace(' ', '-')}`}>
          ({analysis.level})
        </span>
      </div>
      <div className="readability-details">
        <p>Average words per sentence: {analysis.avgWordsPerSentence}</p>
        <p>Average syllables per word: {analysis.avgSyllablesPerWord}</p>
      </div>
    </div>
  );
});

export interface ContentOptimizationTipsProps {
  content: string;
  targetKeywords: string[];
}

export const ContentOptimizationTips = component$<ContentOptimizationTipsProps>(({
  content,
  targetKeywords,
}) => {
  const analyzeContent = (content: string, keywords: string[]) => {
    const tips = [];
    const wordCount = content.split(/\s+/).length;
    
    // Check word count
    if (wordCount < 300) {
      tips.push({
        type: 'warning',
        message: 'Content is too short. Aim for at least 300 words for better SEO.',
      });
    } else if (wordCount > 2000) {
      tips.push({
        type: 'info',
        message: 'Content is quite long. Consider breaking it into sections or multiple pages.',
      });
    }

    // Check keyword usage
    keywords.forEach(keyword => {
      const keywordCount = (content.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'g')) || []).length;
      if (keywordCount === 0) {
        tips.push({
          type: 'error',
          message: `Target keyword "${keyword}" not found in content.`,
        });
      } else if (keywordCount > 5) {
        tips.push({
          type: 'warning',
          message: `Keyword "${keyword}" appears ${keywordCount} times. Consider reducing to avoid keyword stuffing.`,
        });
      }
    });

    // Check headings
    const headingCount = (content.match(/<h[1-6][^>]*>/gi) || []).length;
    if (headingCount === 0) {
      tips.push({
        type: 'warning',
        message: 'No headings found. Add headings to improve content structure.',
      });
    }

    // Check internal links
    const internalLinks = (content.match(/href="[^"]*openhouseupdate\.com[^"]*"/gi) || []).length;
    if (internalLinks === 0) {
      tips.push({
        type: 'info',
        message: 'Consider adding internal links to related pages.',
      });
    }

    return tips;
  };

  const tips = analyzeContent(content, targetKeywords);

  if (tips.length === 0) {
    return (
      <div className="content-optimization-tips">
        <h3>Content Optimization</h3>
        <div className="success-message">
          ✅ Your content looks well-optimized!
        </div>
      </div>
    );
  }

  return (
    <div className="content-optimization-tips">
      <h3>Content Optimization Tips</h3>
      <ul className="optimization-tips">
        {tips.map((tip, index) => (
          <li key={index} className={`tip ${tip.type}`}>
            <span className="tip-icon">
              {tip.type === 'error' && '❌'}
              {tip.type === 'warning' && '⚠️'}
              {tip.type === 'info' && 'ℹ️'}
            </span>
            {tip.message}
          </li>
        ))}
      </ul>
    </div>
  );
});
