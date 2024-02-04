import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_categoryWhereInput } from "../inputs/Product_categoryWhereInput";

@TypeGraphQL.InputType("Product_categoryListRelationFilter", {})
export class Product_categoryListRelationFilter {
  @TypeGraphQL.Field(_type => Product_categoryWhereInput, {
    nullable: true
  })
  every?: Product_categoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_categoryWhereInput, {
    nullable: true
  })
  some?: Product_categoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_categoryWhereInput, {
    nullable: true
  })
  none?: Product_categoryWhereInput | undefined;
}
