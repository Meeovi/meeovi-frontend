import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_state_translationCreateManyLanguageInput } from "../inputs/Country_state_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Country_state_translationCreateManyLanguageInputEnvelope", {})
export class Country_state_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Country_state_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Country_state_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
