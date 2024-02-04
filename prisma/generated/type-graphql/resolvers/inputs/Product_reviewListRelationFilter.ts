import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewWhereInput } from "../inputs/Product_reviewWhereInput";

@TypeGraphQL.InputType("Product_reviewListRelationFilter", {})
export class Product_reviewListRelationFilter {
  @TypeGraphQL.Field(_type => Product_reviewWhereInput, {
    nullable: true
  })
  every?: Product_reviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_reviewWhereInput, {
    nullable: true
  })
  some?: Product_reviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_reviewWhereInput, {
    nullable: true
  })
  none?: Product_reviewWhereInput | undefined;
}
