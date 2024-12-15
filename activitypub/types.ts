// activitypub/types.ts
interface ActivityPubActor {
    "@context": string[];
    id: string;
    type: "Person" | "Service";
    following: string;
    followers: string;
    inbox: string;
    outbox: string;
    preferredUsername: string;
    name: string;
    summary: string;
    url: string;
    publicKey: {
      id: string;
      owner: string;
      publicKeyPem: string;
    };
  }
  