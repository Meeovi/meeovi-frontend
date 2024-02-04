import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutShipping_method_translationInput } from "../inputs/LanguageCreateOrConnectWithoutShipping_method_translationInput";
import { LanguageCreateWithoutShipping_method_translationInput } from "../inputs/LanguageCreateWithoutShipping_method_translationInput";
import { LanguageUpdateToOneWithWhereWithoutShipping_method_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutShipping_method_translationInput";
import { LanguageUpsertWithoutShipping_method_translationInput } from "../inputs/LanguageUpsertWithoutShipping_method_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutShipping_method_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutShipping_method_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutShipping_method_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutShipping_method_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutShipping_method_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutShipping_method_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutShipping_method_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutShipping_method_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutShipping_method_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutShipping_method_translationInput | undefined;
}
