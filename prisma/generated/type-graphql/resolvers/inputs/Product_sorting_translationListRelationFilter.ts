import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sorting_translationWhereInput } from "../inputs/Product_sorting_translationWhereInput";

@TypeGraphQL.InputType("Product_sorting_translationListRelationFilter", {})
export class Product_sorting_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Product_sorting_translationWhereInput, {
    nullable: true
  })
  every?: Product_sorting_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_sorting_translationWhereInput, {
    nullable: true
  })
  some?: Product_sorting_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_sorting_translationWhereInput, {
    nullable: true
  })
  none?: Product_sorting_translationWhereInput | undefined;
}
