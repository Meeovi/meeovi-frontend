import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateManyLanguageInput } from "../inputs/Newsletter_recipientCreateManyLanguageInput";

@TypeGraphQL.InputType("Newsletter_recipientCreateManyLanguageInputEnvelope", {})
export class Newsletter_recipientCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Newsletter_recipientCreateManyLanguageInput], {
    nullable: false
  })
  data!: Newsletter_recipientCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
