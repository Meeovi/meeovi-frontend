import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateManyIntegrationInput } from "../inputs/AppCreateManyIntegrationInput";

@TypeGraphQL.InputType("AppCreateManyIntegrationInputEnvelope", {})
export class AppCreateManyIntegrationInputEnvelope {
  @TypeGraphQL.Field(_type => [AppCreateManyIntegrationInput], {
    nullable: false
  })
  data!: AppCreateManyIntegrationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
