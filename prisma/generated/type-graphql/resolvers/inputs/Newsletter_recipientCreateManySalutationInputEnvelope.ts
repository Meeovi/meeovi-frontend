import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateManySalutationInput } from "../inputs/Newsletter_recipientCreateManySalutationInput";

@TypeGraphQL.InputType("Newsletter_recipientCreateManySalutationInputEnvelope", {})
export class Newsletter_recipientCreateManySalutationInputEnvelope {
  @TypeGraphQL.Field(_type => [Newsletter_recipientCreateManySalutationInput], {
    nullable: false
  })
  data!: Newsletter_recipientCreateManySalutationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
