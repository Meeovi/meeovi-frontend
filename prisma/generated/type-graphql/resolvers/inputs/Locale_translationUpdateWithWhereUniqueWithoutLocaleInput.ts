import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Locale_translationUpdateWithoutLocaleInput } from "../inputs/Locale_translationUpdateWithoutLocaleInput";
import { Locale_translationWhereUniqueInput } from "../inputs/Locale_translationWhereUniqueInput";

@TypeGraphQL.InputType("Locale_translationUpdateWithWhereUniqueWithoutLocaleInput", {})
export class Locale_translationUpdateWithWhereUniqueWithoutLocaleInput {
  @TypeGraphQL.Field(_type => Locale_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Locale_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Locale_translationUpdateWithoutLocaleInput, {
    nullable: false
  })
  data!: Locale_translationUpdateWithoutLocaleInput;
}
