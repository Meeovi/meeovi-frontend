import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_feature_set_translationInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_feature_set_translationInput";
import { LanguageCreateWithoutProduct_feature_set_translationInput } from "../inputs/LanguageCreateWithoutProduct_feature_set_translationInput";
import { LanguageUpdateToOneWithWhereWithoutProduct_feature_set_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutProduct_feature_set_translationInput";
import { LanguageUpsertWithoutProduct_feature_set_translationInput } from "../inputs/LanguageUpsertWithoutProduct_feature_set_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutProduct_feature_set_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutProduct_feature_set_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_feature_set_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_feature_set_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_feature_set_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_feature_set_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutProduct_feature_set_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutProduct_feature_set_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutProduct_feature_set_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutProduct_feature_set_translationInput | undefined;
}
