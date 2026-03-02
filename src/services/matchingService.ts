import { Competency, CareerSuggestion } from '../types';
import { CAREER_DATABASE, COMPETENCIES } from '../constants';

export function identifyCompetenciesFromQuiz(quizScores: Record<string, number>): Competency[] {
  // Sort competencies by score descending
  const sortedIds = Object.entries(quizScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6) // Take top 6 competencies
    .map(entry => entry[0]);

  return COMPETENCIES.filter(c => sortedIds.includes(c.id));
}

export function getCareerSuggestions(selectedCompetencies: Competency[]): CareerSuggestion[] {
  const userCompIds = selectedCompetencies.map(c => c.id);
  const suggestions: CareerSuggestion[] = [];

  CAREER_DATABASE.forEach(area => {
    // Score roles in this area based on how many required competencies the user has
    const scoredRoles = area.roles.map(role => {
      const matchCount = role.requiredCompetencies.filter(rc => userCompIds.includes(rc)).length;
      return { ...role, matchCount };
    });

    // Filter roles where user has at least 1 matching competency (lenient for entry-level)
    const matchedRoles = scoredRoles
      .filter(r => r.matchCount >= 1)
      .sort((a, b) => b.matchCount - a.matchCount);

    if (matchedRoles.length > 0) {
      // Generate dynamic reasoning based on matched competencies
      const bestRole = matchedRoles[0];
      const matchedCompNames = selectedCompetencies
        .filter(c => bestRole.requiredCompetencies.includes(c.id))
        .map(c => c.name);
        
      let reasoning = '';
      if (matchedCompNames.length > 0) {
        reasoning = `Tu perfil encaja muy bien aquí gracias a tus habilidades en ${matchedCompNames.slice(0, 2).join(' y ')}. Estas cualidades son muy valoradas en este sector para realizar el trabajo con éxito.`;
      } else {
        reasoning = `Tus habilidades generales muestran potencial para desarrollarte en este sector con la formación adecuada.`;
      }

      suggestions.push({
        area: area.name,
        roles: matchedRoles.slice(0, 4).map(r => r.title),
        reasoning
      });
    }
  });

  // Sort areas by the highest number of matched roles, return top 4
  return suggestions
    .sort((a, b) => b.roles.length - a.roles.length)
    .slice(0, 4);
}
