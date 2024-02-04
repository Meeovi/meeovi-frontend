import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateOrConnectWithoutLocale_translationInput } from "../inputs/LocaleCreateOrConnectWithoutLocale_translationInput";
import { LocaleCreateWithoutLocale_translationInput } from "../inputs/LocaleCreateWithoutLocale_translationInput";
import { LocaleUpdateToOneWithWhereWithoutLocale_translationInput } from "../inputs/LocaleUpdateToOneWithWhereWithoutLocale_translationInput";
import { LocaleUpsertWithoutLocale_translationInput } from "../inputs/LocaleUpsertWithoutLocale_translationInput";
import { LocaleWhereUniqueInput } from "../inputs/LocaleWhereUniqueInput";

@TypeGraphQL.InputType("LocaleUpdateOneRequiredWithoutLocale_translationNestedInput", {})
export class LocaleUpdateOneRequiredWithoutLocale_translationNestedInput {
  @TypeGraphQL.Field(_type => LocaleCreateWithoutLocale_translationInput, {
    nullable: true
  })
  create?: LocaleCreateWithoutLocale_translationInput | undefined;

  @TypeGraphQL.Field(_type => LocaleCreateOrConnectWithoutLocale_translationInput, {
    nullable: true
  })
  connectOrCreate?: LocaleCreateOrConnectWithoutLocale_translationInput | undefined;

  @TypeGraphQL.Field(_type => LocaleUpsertWithoutLocale_translationInput, {
    nullable: true
  })
  upsert?: LocaleUpsertWithoutLocale_translationInput | undefined;

  @TypeGraphQL.Field(_type => LocaleWhereUniqueInput, {
    nullable: true
  })
  connect?: LocaleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocaleUpdateToOneWithWhereWithoutLocale_translationInput, {
    nullable: true
  })
  update?: LocaleUpdateToOneWithWhereWithoutLocale_translationInput | undefined;
}
