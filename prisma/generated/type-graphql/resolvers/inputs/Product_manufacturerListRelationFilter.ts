import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerWhereInput } from "../inputs/Product_manufacturerWhereInput";

@TypeGraphQL.InputType("Product_manufacturerListRelationFilter", {})
export class Product_manufacturerListRelationFilter {
  @TypeGraphQL.Field(_type => Product_manufacturerWhereInput, {
    nullable: true
  })
  every?: Product_manufacturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerWhereInput, {
    nullable: true
  })
  some?: Product_manufacturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerWhereInput, {
    nullable: true
  })
  none?: Product_manufacturerWhereInput | undefined;
}
