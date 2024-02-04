import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_translationCreateManyLanguageInput } from "../inputs/Country_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Country_translationCreateManyLanguageInputEnvelope", {})
export class Country_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Country_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Country_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
