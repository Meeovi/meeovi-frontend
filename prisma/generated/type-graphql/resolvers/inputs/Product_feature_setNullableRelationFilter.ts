import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_setWhereInput } from "../inputs/Product_feature_setWhereInput";

@TypeGraphQL.InputType("Product_feature_setNullableRelationFilter", {})
export class Product_feature_setNullableRelationFilter {
  @TypeGraphQL.Field(_type => Product_feature_setWhereInput, {
    nullable: true
  })
  is?: Product_feature_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setWhereInput, {
    nullable: true
  })
  isNot?: Product_feature_setWhereInput | undefined;
}
