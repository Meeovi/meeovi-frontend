import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_setCreateWithoutProduct_feature_set_translationInput } from "../inputs/Product_feature_setCreateWithoutProduct_feature_set_translationInput";
import { Product_feature_setUpdateWithoutProduct_feature_set_translationInput } from "../inputs/Product_feature_setUpdateWithoutProduct_feature_set_translationInput";
import { Product_feature_setWhereInput } from "../inputs/Product_feature_setWhereInput";

@TypeGraphQL.InputType("Product_feature_setUpsertWithoutProduct_feature_set_translationInput", {})
export class Product_feature_setUpsertWithoutProduct_feature_set_translationInput {
  @TypeGraphQL.Field(_type => Product_feature_setUpdateWithoutProduct_feature_set_translationInput, {
    nullable: false
  })
  update!: Product_feature_setUpdateWithoutProduct_feature_set_translationInput;

  @TypeGraphQL.Field(_type => Product_feature_setCreateWithoutProduct_feature_set_translationInput, {
    nullable: false
  })
  create!: Product_feature_setCreateWithoutProduct_feature_set_translationInput;

  @TypeGraphQL.Field(_type => Product_feature_setWhereInput, {
    nullable: true
  })
  where?: Product_feature_setWhereInput | undefined;
}
