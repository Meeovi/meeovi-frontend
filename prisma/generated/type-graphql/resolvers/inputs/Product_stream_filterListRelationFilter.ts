import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_filterWhereInput } from "../inputs/Product_stream_filterWhereInput";

@TypeGraphQL.InputType("Product_stream_filterListRelationFilter", {})
export class Product_stream_filterListRelationFilter {
  @TypeGraphQL.Field(_type => Product_stream_filterWhereInput, {
    nullable: true
  })
  every?: Product_stream_filterWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterWhereInput, {
    nullable: true
  })
  some?: Product_stream_filterWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterWhereInput, {
    nullable: true
  })
  none?: Product_stream_filterWhereInput | undefined;
}
