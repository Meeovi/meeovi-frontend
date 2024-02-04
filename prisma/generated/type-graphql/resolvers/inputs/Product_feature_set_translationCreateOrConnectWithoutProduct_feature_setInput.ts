import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_set_translationCreateWithoutProduct_feature_setInput } from "../inputs/Product_feature_set_translationCreateWithoutProduct_feature_setInput";
import { Product_feature_set_translationWhereUniqueInput } from "../inputs/Product_feature_set_translationWhereUniqueInput";

@TypeGraphQL.InputType("Product_feature_set_translationCreateOrConnectWithoutProduct_feature_setInput", {})
export class Product_feature_set_translationCreateOrConnectWithoutProduct_feature_setInput {
  @TypeGraphQL.Field(_type => Product_feature_set_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_feature_set_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_feature_set_translationCreateWithoutProduct_feature_setInput, {
    nullable: false
  })
  create!: Product_feature_set_translationCreateWithoutProduct_feature_setInput;
}
