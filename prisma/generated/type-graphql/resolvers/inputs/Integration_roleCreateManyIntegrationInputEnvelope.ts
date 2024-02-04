import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Integration_roleCreateManyIntegrationInput } from "../inputs/Integration_roleCreateManyIntegrationInput";

@TypeGraphQL.InputType("Integration_roleCreateManyIntegrationInputEnvelope", {})
export class Integration_roleCreateManyIntegrationInputEnvelope {
  @TypeGraphQL.Field(_type => [Integration_roleCreateManyIntegrationInput], {
    nullable: false
  })
  data!: Integration_roleCreateManyIntegrationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
