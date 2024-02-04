import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_translationWhereInput } from "../inputs/Product_stream_translationWhereInput";

@TypeGraphQL.InputType("Product_stream_translationListRelationFilter", {})
export class Product_stream_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Product_stream_translationWhereInput, {
    nullable: true
  })
  every?: Product_stream_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_translationWhereInput, {
    nullable: true
  })
  some?: Product_stream_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_translationWhereInput, {
    nullable: true
  })
  none?: Product_stream_translationWhereInput | undefined;
}
