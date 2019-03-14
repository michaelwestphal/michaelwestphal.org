import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

interface Skill {
  type: string;
  keywords: string;
}

interface History {
  startingDate: string;
  endingDate: string;
}

interface WorkPosition extends History {
  title: string;
}

interface WorkHistory extends History {
  company: string;
  shortDescription: string;
  positions: WorkPosition[];
}

interface Education extends History {
  institutionName: string;
  institutionLocation: string;
  degree: string;
}

interface Interest {
  name: string;
  details: string;
}

@Component({
  selector: 'mw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  skills: Skill[] = [
    {
      type: 'JavaScript',
      keywords: 'Angular, TypeScript, Node, React, AngularJS'
    },
    {
      type: 'Firebase',
      keywords:
        'Cloud Firestore, Authentication, Cloud Storage, Cloud Functions'
    },
    {
      type: 'Java',
      keywords: 'Spring Framework, JUnit 5, Maven, Scala, Groovy'
    },
    {
      type: 'SQL',
      keywords: 'Microsoft SQL Server, DB2, Stored Procedures'
    },
    {
      type: 'Tools',
      keywords:
        'Visual Studio Code, Bash, Git (Github, Bitbucket), IntelliJ/Webstorm, JIRA, Confluence'
    }
  ];

  workHistory: WorkHistory[] = [
    {
      company: 'Nelnet',
      shortDescription: 'Full-stack Java Web Developer',
      startingDate: 'February 2018',
      endingDate: 'Present',
      positions: [
        {
          title: 'IT Senior Front-End Developer',
          startingDate: 'February 2018',
          endingDate: 'Present'
        }
      ]
    },
    {
      company: 'Great Lakes Education Corporation and Affiliates',
      shortDescription: 'Full-stack Java Web Developer',
      startingDate: 'June 2005',
      endingDate: 'February 2018',
      positions: [
        {
          title: 'Lead Front-End Developer',
          startingDate: 'September 2017',
          endingDate: 'February 2018'
        },
        {
          title: 'Systems Analyst',
          startingDate: 'October 2015',
          endingDate: 'September 2017'
        },
        {
          title: 'Senior Programmer/Analyst',
          startingDate: 'May 2011',
          endingDate: 'October 2015'
        },
        {
          title: 'Programmer/Analyst',
          startingDate: 'May 2007',
          endingDate: 'May 2011'
        },
        {
          title: 'Programmer',
          startingDate: 'June 2005',
          endingDate: 'May 2007'
        }
      ]
    }
  ];

  education: Education[] = [
    {
      institutionName: 'University of Wisconsin',
      institutionLocation: 'Eau Claire',
      degree: 'Computer Science',
      startingDate: 'August 2002',
      endingDate: 'May 2005'
    }
  ];

  interests: Interest[] = [
    {
      name: 'Family man',
      details:
        'My wife and I have four young children age six and under. The two oldest are boys and the two youngest are girls.'
    },
    {
      name: 'Backpacking',
      details:
        'For about a decade straight I backpacked stretches of the Superior Hiking Trail and other similar places each fall with an old buddy of mine from university.'
    }
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
  }
}
