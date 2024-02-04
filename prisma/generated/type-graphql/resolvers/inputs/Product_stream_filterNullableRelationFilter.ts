import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_filterWhereInput } from "../inputs/Product_stream_filterWhereInput";

@TypeGraphQL.InputType("Product_stream_filterNullableRelationFilter", {})
export class Product_stream_filterNullableRelationFilter {
  @TypeGraphQL.Field(_type => Product_stream_filterWhereInput, {
    nullable: true
  })
  is?: Product_stream_filterWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterWhereInput, {
    nullable: true
  })
  isNot?: Product_stream_filterWhereInput | undefined;
}
