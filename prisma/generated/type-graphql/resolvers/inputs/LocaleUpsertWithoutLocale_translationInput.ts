import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateWithoutLocale_translationInput } from "../inputs/LocaleCreateWithoutLocale_translationInput";
import { LocaleUpdateWithoutLocale_translationInput } from "../inputs/LocaleUpdateWithoutLocale_translationInput";
import { LocaleWhereInput } from "../inputs/LocaleWhereInput";

@TypeGraphQL.InputType("LocaleUpsertWithoutLocale_translationInput", {})
export class LocaleUpsertWithoutLocale_translationInput {
  @TypeGraphQL.Field(_type => LocaleUpdateWithoutLocale_translationInput, {
    nullable: false
  })
  update!: LocaleUpdateWithoutLocale_translationInput;

  @TypeGraphQL.Field(_type => LocaleCreateWithoutLocale_translationInput, {
    nullable: false
  })
  create!: LocaleCreateWithoutLocale_translationInput;

  @TypeGraphQL.Field(_type => LocaleWhereInput, {
    nullable: true
  })
  where?: LocaleWhereInput | undefined;
}
