import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateWithoutLocale_translationInput } from "../inputs/LocaleCreateWithoutLocale_translationInput";
import { LocaleWhereUniqueInput } from "../inputs/LocaleWhereUniqueInput";

@TypeGraphQL.InputType("LocaleCreateOrConnectWithoutLocale_translationInput", {})
export class LocaleCreateOrConnectWithoutLocale_translationInput {
  @TypeGraphQL.Field(_type => LocaleWhereUniqueInput, {
    nullable: false
  })
  where!: LocaleWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocaleCreateWithoutLocale_translationInput, {
    nullable: false
  })
  create!: LocaleCreateWithoutLocale_translationInput;
}
