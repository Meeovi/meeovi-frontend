import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleUpdateWithoutLocale_translationInput } from "../inputs/LocaleUpdateWithoutLocale_translationInput";
import { LocaleWhereInput } from "../inputs/LocaleWhereInput";

@TypeGraphQL.InputType("LocaleUpdateToOneWithWhereWithoutLocale_translationInput", {})
export class LocaleUpdateToOneWithWhereWithoutLocale_translationInput {
  @TypeGraphQL.Field(_type => LocaleWhereInput, {
    nullable: true
  })
  where?: LocaleWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocaleUpdateWithoutLocale_translationInput, {
    nullable: false
  })
  data!: LocaleUpdateWithoutLocale_translationInput;
}
