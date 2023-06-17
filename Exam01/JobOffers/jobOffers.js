class JobOffers {
    jobCandidates = [];
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        
    }

    jobApplication(candidates) {
        candidates.forEach(candidate => {
            const [name, education, yearsExperience] = candidate.split("-");
            const existingCandidate = this.jobCandidates.find(c => c.name === name);

            if (existingCandidate) {
                if (parseInt(yearsExperience) > existingCandidate.yearsExperience) {
                    existingCandidate.yearsExperience = parseInt(yearsExperience);
                }
            } else {
                this.jobCandidates.push({
                    name,
                    education,
                    yearsExperience: parseInt(yearsExperience)
                });
            }
        });

        const addedCandidates = this.jobCandidates.map(candidate => candidate.name).join(", ");
        return `You successfully added candidates: ${addedCandidates}.`;
    }

    jobOffer(chosenPerson) {
        const [name, minimalExperience] = chosenPerson.split("-");
        const candidate = this.jobCandidates.find(c => c.name === name);

        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (parseInt(minimalExperience) > candidate.yearsExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }

        candidate.yearsExperience = "hired";
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        const candidate = this.jobCandidates.find(c => c.name === name);

        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        let salary = 40;
        if (candidate.education === "Bachelor") {
            salary = 50;
        } else if (candidate.education === "Master") {
            salary = 60;
        }

        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $${salary},000 per year!`;
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!");
        }

        const sortedCandidates = this.jobCandidates
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(candidate => `${candidate.name}-${candidate.yearsExperience}`);

        return `Candidates list:\n${sortedCandidates.join("\n")}`;
    }
}
let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.salaryBonus("Peter Parker"));
