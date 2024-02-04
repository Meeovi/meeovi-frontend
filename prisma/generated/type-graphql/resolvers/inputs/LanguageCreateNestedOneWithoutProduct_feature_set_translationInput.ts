import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_feature_set_translationInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_feature_set_translationInput";
import { LanguageCreateWithoutProduct_feature_set_translationInput } from "../inputs/LanguageCreateWithoutProduct_feature_set_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutProduct_feature_set_translationInput", {})
export class LanguageCreateNestedOneWithoutProduct_feature_set_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_feature_set_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_feature_set_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_feature_set_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_feature_set_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
