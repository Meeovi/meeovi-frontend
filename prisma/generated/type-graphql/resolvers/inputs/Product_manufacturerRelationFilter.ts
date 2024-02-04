import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerWhereInput } from "../inputs/Product_manufacturerWhereInput";

@TypeGraphQL.InputType("Product_manufacturerRelationFilter", {})
export class Product_manufacturerRelationFilter {
  @TypeGraphQL.Field(_type => Product_manufacturerWhereInput, {
    nullable: true
  })
  is?: Product_manufacturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerWhereInput, {
    nullable: true
  })
  isNot?: Product_manufacturerWhereInput | undefined;
}
