import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Product_streamRelationFilter } from "../inputs/Product_streamRelationFilter";

@TypeGraphQL.InputType("Product_stream_mappingWhereInput", {})
export class Product_stream_mappingWhereInput {
  @TypeGraphQL.Field(_type => [Product_stream_mappingWhereInput], {
    nullable: true
  })
  AND?: Product_stream_mappingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingWhereInput], {
    nullable: true
  })
  OR?: Product_stream_mappingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_stream_mappingWhereInput], {
    nullable: true
  })
  NOT?: Product_stream_mappingWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_streamRelationFilter, {
    nullable: true
  })
  product_stream?: Product_streamRelationFilter | undefined;
}
