import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_set_translationUpdateWithoutLanguageInput } from "../inputs/Product_feature_set_translationUpdateWithoutLanguageInput";
import { Product_feature_set_translationWhereUniqueInput } from "../inputs/Product_feature_set_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_feature_set_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Product_feature_set_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_feature_set_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_feature_set_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_feature_set_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Product_feature_set_translationUpdateWithoutLanguageInput;
}
