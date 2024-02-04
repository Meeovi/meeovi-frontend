import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_visibilityWhereInput } from "../inputs/Product_visibilityWhereInput";

@TypeGraphQL.InputType("Product_visibilityListRelationFilter", {})
export class Product_visibilityListRelationFilter {
  @TypeGraphQL.Field(_type => Product_visibilityWhereInput, {
    nullable: true
  })
  every?: Product_visibilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_visibilityWhereInput, {
    nullable: true
  })
  some?: Product_visibilityWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_visibilityWhereInput, {
    nullable: true
  })
  none?: Product_visibilityWhereInput | undefined;
}
