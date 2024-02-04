import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutCurrency_translationInput } from "../inputs/LanguageCreateOrConnectWithoutCurrency_translationInput";
import { LanguageCreateWithoutCurrency_translationInput } from "../inputs/LanguageCreateWithoutCurrency_translationInput";
import { LanguageUpdateToOneWithWhereWithoutCurrency_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutCurrency_translationInput";
import { LanguageUpsertWithoutCurrency_translationInput } from "../inputs/LanguageUpsertWithoutCurrency_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutCurrency_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutCurrency_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutCurrency_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutCurrency_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutCurrency_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutCurrency_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutCurrency_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutCurrency_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutCurrency_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutCurrency_translationInput | undefined;
}
