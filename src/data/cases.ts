// Case studies, shared by the home page and the Design page. All three are placeholders until the stories are written:
// the current site's case studies are still "Accordion content goes here!".
import type { PillarId } from './site';

export interface CaseStudy {
	who: string;
	title: string;
	outcome: string;
	/** which pillars of the loop the work used */
	pillars: PillarId[];
	/** what the background photo should show */
	photo: string;
	mood: 'ember' | 'dusk' | 'clay' | 'sand';
	href?: string;
}

export const cases: CaseStudy[] = [
	{ who: 'Federal agency', title: '[Case study title]', outcome: '[One-sentence outcome: what changed for citizens, with a number if we have one.]', pillars: ['research', 'design'], photo: 'usability session in the Arlington lab', mood: 'ember' },
	{ who: 'Health system', title: '[Case study title]', outcome: '[One-sentence outcome: what changed for patients or staff.]', pillars: ['research', 'design', 'product'], photo: 'patient journey workshop', mood: 'clay' },
	{ who: 'Commercial', title: '[Case study title]', outcome: '[One-sentence outcome: what changed for customers.]', pillars: ['design', 'product'], photo: 'product team reviewing prototypes', mood: 'dusk' },
];
