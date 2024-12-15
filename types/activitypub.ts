// types/activitypub.ts
export interface ActivityPubPerson {
    "@context": string[];
    id: string;
    type: "Person";
    following: string;
    followers: string;
    inbox: string;
    outbox: string;
    preferredUsername: string;
    name: string;
  }
  