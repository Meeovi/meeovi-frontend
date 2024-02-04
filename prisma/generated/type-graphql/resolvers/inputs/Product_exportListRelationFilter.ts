import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportWhereInput } from "../inputs/Product_exportWhereInput";

@TypeGraphQL.InputType("Product_exportListRelationFilter", {})
export class Product_exportListRelationFilter {
  @TypeGraphQL.Field(_type => Product_exportWhereInput, {
    nullable: true
  })
  every?: Product_exportWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_exportWhereInput, {
    nullable: true
  })
  some?: Product_exportWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_exportWhereInput, {
    nullable: true
  })
  none?: Product_exportWhereInput | undefined;
}
