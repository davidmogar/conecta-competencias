import { Competency, CareerSuggestion, RoleMatch } from '../types';
import { CAREER_DATABASE, COMPETENCIES } from '../constants';

export function identifyCompetenciesFromQuiz(quizScores: Record<string, number>): Competency[] {
  // Sort competencies by score descending
  const sortedIds = Object.entries(quizScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6) // Take top 6 competencies
    .map(entry => entry[0]);

  return COMPETENCIES.filter(c => sortedIds.includes(c.id));
}

export function getCareerSuggestions(selectedCompetencies: Competency[], allAptitudeIds?: string[]): CareerSuggestion[] {
  // Use allAptitudeIds if provided (quiz mode), otherwise use selectedCompetencies (manual mode)
  const availableCompIds = allAptitudeIds || selectedCompetencies.map(c => c.id);
  const suggestions: CareerSuggestion[] = [];

  CAREER_DATABASE.forEach(area => {
    // Score each role in this area
    const roleMatches: RoleMatch[] = area.roles.map(role => {
      const matchingIds = role.requiredCompetencies.filter(rc => availableCompIds.includes(rc));
      const missingIds = role.requiredCompetencies.filter(rc => !availableCompIds.includes(rc));
      
      const matchScore = Math.round((matchingIds.length / role.requiredCompetencies.length) * 100);
      
      // Helper to get names, handling potentially missing competencies in the master list
      const getNames = (ids: string[]) => ids.map(id => {
        const comp = COMPETENCIES.find(c => c.id === id);
        return comp ? comp.name : id.replace(/_/g, ' ');
      });

      return {
        title: role.title,
        matchScore,
        matchingCompetencies: getNames(matchingIds),
        missingCompetencies: getNames(missingIds)
      };
    });

    // Filter roles with at least some match
    const filteredRoleMatches = roleMatches
      .filter(rm => rm.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore);

    if (filteredRoleMatches.length > 0) {
      const bestRole = filteredRoleMatches[0];
      const overallMatchScore = bestRole.matchScore;
      
      let reasoning = '';
      if (bestRole.matchingCompetencies.length > 0) {
        reasoning = `Tu perfil encaja muy bien en el área de ${area.name} gracias a tus habilidades en ${bestRole.matchingCompetencies.slice(0, 2).join(' y ')}.`;
      } else {
        reasoning = `Tus habilidades generales muestran potencial para desarrollarte en ${area.name} con la formación adecuada.`;
      }

      suggestions.push({
        area: area.name,
        description: area.description,
        roles: filteredRoleMatches.slice(0, 4),
        reasoning,
        overallMatchScore
      });
    }
  });

  // Sort areas by overall match score descending, return top 4
  return suggestions
    .sort((a, b) => b.overallMatchScore - a.overallMatchScore)
    .slice(0, 4);
}
