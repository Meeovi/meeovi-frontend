import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Locale_translationCreateManyLanguageInput } from "../inputs/Locale_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Locale_translationCreateManyLanguageInputEnvelope", {})
export class Locale_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Locale_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Locale_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
