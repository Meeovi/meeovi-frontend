import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_translationWhereInput } from "../inputs/Product_cross_selling_translationWhereInput";

@TypeGraphQL.InputType("Product_cross_selling_translationListRelationFilter", {})
export class Product_cross_selling_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Product_cross_selling_translationWhereInput, {
    nullable: true
  })
  every?: Product_cross_selling_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationWhereInput, {
    nullable: true
  })
  some?: Product_cross_selling_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationWhereInput, {
    nullable: true
  })
  none?: Product_cross_selling_translationWhereInput | undefined;
}
