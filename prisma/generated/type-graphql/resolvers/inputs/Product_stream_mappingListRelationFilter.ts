import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_mappingWhereInput } from "../inputs/Product_stream_mappingWhereInput";

@TypeGraphQL.InputType("Product_stream_mappingListRelationFilter", {})
export class Product_stream_mappingListRelationFilter {
  @TypeGraphQL.Field(_type => Product_stream_mappingWhereInput, {
    nullable: true
  })
  every?: Product_stream_mappingWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingWhereInput, {
    nullable: true
  })
  some?: Product_stream_mappingWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingWhereInput, {
    nullable: true
  })
  none?: Product_stream_mappingWhereInput | undefined;
}
