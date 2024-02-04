import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamWhereInput } from "../inputs/Product_streamWhereInput";

@TypeGraphQL.InputType("Product_streamNullableRelationFilter", {})
export class Product_streamNullableRelationFilter {
  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  is?: Product_streamWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  isNot?: Product_streamWhereInput | undefined;
}
