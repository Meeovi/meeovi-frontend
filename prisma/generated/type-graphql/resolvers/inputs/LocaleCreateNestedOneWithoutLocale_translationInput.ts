import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateOrConnectWithoutLocale_translationInput } from "../inputs/LocaleCreateOrConnectWithoutLocale_translationInput";
import { LocaleCreateWithoutLocale_translationInput } from "../inputs/LocaleCreateWithoutLocale_translationInput";
import { LocaleWhereUniqueInput } from "../inputs/LocaleWhereUniqueInput";

@TypeGraphQL.InputType("LocaleCreateNestedOneWithoutLocale_translationInput", {})
export class LocaleCreateNestedOneWithoutLocale_translationInput {
  @TypeGraphQL.Field(_type => LocaleCreateWithoutLocale_translationInput, {
    nullable: true
  })
  create?: LocaleCreateWithoutLocale_translationInput | undefined;

  @TypeGraphQL.Field(_type => LocaleCreateOrConnectWithoutLocale_translationInput, {
    nullable: true
  })
  connectOrCreate?: LocaleCreateOrConnectWithoutLocale_translationInput | undefined;

  @TypeGraphQL.Field(_type => LocaleWhereUniqueInput, {
    nullable: true
  })
  connect?: LocaleWhereUniqueInput | undefined;
}
