import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutProduct_feature_set_translationInput } from "../inputs/LanguageCreateWithoutProduct_feature_set_translationInput";
import { LanguageUpdateWithoutProduct_feature_set_translationInput } from "../inputs/LanguageUpdateWithoutProduct_feature_set_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutProduct_feature_set_translationInput", {})
export class LanguageUpsertWithoutProduct_feature_set_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_feature_set_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutProduct_feature_set_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_feature_set_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutProduct_feature_set_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
