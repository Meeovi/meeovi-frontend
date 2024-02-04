import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Product_stream_mappingScalarWhereInput", {})
export class Product_stream_mappingScalarWhereInput {
  @TypeGraphQL.Field(_type => [Product_stream_mappingScalarWhereInput], {
    nullable: true
  })
  AND?: Product_stream_mappingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingScalarWhereInput], {
    nullable: true
  })
  OR?: Product_stream_mappingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingScalarWhereInput], {
    nullable: true
  })
  NOT?: Product_stream_mappingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_stream_id?: BytesFilter | undefined;
}
