import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Locale_translationCreateWithoutLocaleInput } from "../inputs/Locale_translationCreateWithoutLocaleInput";
import { Locale_translationWhereUniqueInput } from "../inputs/Locale_translationWhereUniqueInput";

@TypeGraphQL.InputType("Locale_translationCreateOrConnectWithoutLocaleInput", {})
export class Locale_translationCreateOrConnectWithoutLocaleInput {
  @TypeGraphQL.Field(_type => Locale_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Locale_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Locale_translationCreateWithoutLocaleInput, {
    nullable: false
  })
  create!: Locale_translationCreateWithoutLocaleInput;
}
