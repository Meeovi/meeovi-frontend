import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturer_translationWhereInput } from "../inputs/Product_manufacturer_translationWhereInput";

@TypeGraphQL.InputType("Product_manufacturer_translationListRelationFilter", {})
export class Product_manufacturer_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Product_manufacturer_translationWhereInput, {
    nullable: true
  })
  every?: Product_manufacturer_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationWhereInput, {
    nullable: true
  })
  some?: Product_manufacturer_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationWhereInput, {
    nullable: true
  })
  none?: Product_manufacturer_translationWhereInput | undefined;
}
