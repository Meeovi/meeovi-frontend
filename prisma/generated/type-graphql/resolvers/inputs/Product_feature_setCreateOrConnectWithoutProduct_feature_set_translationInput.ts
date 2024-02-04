import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_setCreateWithoutProduct_feature_set_translationInput } from "../inputs/Product_feature_setCreateWithoutProduct_feature_set_translationInput";
import { Product_feature_setWhereUniqueInput } from "../inputs/Product_feature_setWhereUniqueInput";

@TypeGraphQL.InputType("Product_feature_setCreateOrConnectWithoutProduct_feature_set_translationInput", {})
export class Product_feature_setCreateOrConnectWithoutProduct_feature_set_translationInput {
  @TypeGraphQL.Field(_type => Product_feature_setWhereUniqueInput, {
    nullable: false
  })
  where!: Product_feature_setWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_feature_setCreateWithoutProduct_feature_set_translationInput, {
    nullable: false
  })
  create!: Product_feature_setCreateWithoutProduct_feature_set_translationInput;
}
