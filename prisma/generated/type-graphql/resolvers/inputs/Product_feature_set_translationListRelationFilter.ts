import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_set_translationWhereInput } from "../inputs/Product_feature_set_translationWhereInput";

@TypeGraphQL.InputType("Product_feature_set_translationListRelationFilter", {})
export class Product_feature_set_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Product_feature_set_translationWhereInput, {
    nullable: true
  })
  every?: Product_feature_set_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_set_translationWhereInput, {
    nullable: true
  })
  some?: Product_feature_set_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_set_translationWhereInput, {
    nullable: true
  })
  none?: Product_feature_set_translationWhereInput | undefined;
}
