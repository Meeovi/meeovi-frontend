import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutTax_provider_translationInput } from "../inputs/LanguageCreateOrConnectWithoutTax_provider_translationInput";
import { LanguageCreateWithoutTax_provider_translationInput } from "../inputs/LanguageCreateWithoutTax_provider_translationInput";
import { LanguageUpdateToOneWithWhereWithoutTax_provider_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutTax_provider_translationInput";
import { LanguageUpsertWithoutTax_provider_translationInput } from "../inputs/LanguageUpsertWithoutTax_provider_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutTax_provider_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutTax_provider_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutTax_provider_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutTax_provider_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutTax_provider_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutTax_provider_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutTax_provider_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutTax_provider_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutTax_provider_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutTax_provider_translationInput | undefined;
}
