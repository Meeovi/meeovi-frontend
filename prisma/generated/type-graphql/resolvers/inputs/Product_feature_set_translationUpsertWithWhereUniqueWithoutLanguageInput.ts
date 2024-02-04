import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_set_translationCreateWithoutLanguageInput } from "../inputs/Product_feature_set_translationCreateWithoutLanguageInput";
import { Product_feature_set_translationUpdateWithoutLanguageInput } from "../inputs/Product_feature_set_translationUpdateWithoutLanguageInput";
import { Product_feature_set_translationWhereUniqueInput } from "../inputs/Product_feature_set_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_feature_set_translationUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Product_feature_set_translationUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_feature_set_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_feature_set_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_feature_set_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Product_feature_set_translationUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Product_feature_set_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Product_feature_set_translationCreateWithoutLanguageInput;
}
