import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_translationWhereInput } from "../inputs/Product_translationWhereInput";

@TypeGraphQL.InputType("Product_translationListRelationFilter", {})
export class Product_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Product_translationWhereInput, {
    nullable: true
  })
  every?: Product_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_translationWhereInput, {
    nullable: true
  })
  some?: Product_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_translationWhereInput, {
    nullable: true
  })
  none?: Product_translationWhereInput | undefined;
}
