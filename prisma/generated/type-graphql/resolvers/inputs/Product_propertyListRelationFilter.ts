import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_propertyWhereInput } from "../inputs/Product_propertyWhereInput";

@TypeGraphQL.InputType("Product_propertyListRelationFilter", {})
export class Product_propertyListRelationFilter {
  @TypeGraphQL.Field(_type => Product_propertyWhereInput, {
    nullable: true
  })
  every?: Product_propertyWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_propertyWhereInput, {
    nullable: true
  })
  some?: Product_propertyWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_propertyWhereInput, {
    nullable: true
  })
  none?: Product_propertyWhereInput | undefined;
}
