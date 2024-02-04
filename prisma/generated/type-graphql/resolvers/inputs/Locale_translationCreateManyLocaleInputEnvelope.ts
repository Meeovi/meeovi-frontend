import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Locale_translationCreateManyLocaleInput } from "../inputs/Locale_translationCreateManyLocaleInput";

@TypeGraphQL.InputType("Locale_translationCreateManyLocaleInputEnvelope", {})
export class Locale_translationCreateManyLocaleInputEnvelope {
  @TypeGraphQL.Field(_type => [Locale_translationCreateManyLocaleInput], {
    nullable: false
  })
  data!: Locale_translationCreateManyLocaleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
