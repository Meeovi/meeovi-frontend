import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_tagWhereInput } from "../inputs/Product_tagWhereInput";

@TypeGraphQL.InputType("Product_tagListRelationFilter", {})
export class Product_tagListRelationFilter {
  @TypeGraphQL.Field(_type => Product_tagWhereInput, {
    nullable: true
  })
  every?: Product_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_tagWhereInput, {
    nullable: true
  })
  some?: Product_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_tagWhereInput, {
    nullable: true
  })
  none?: Product_tagWhereInput | undefined;
}
