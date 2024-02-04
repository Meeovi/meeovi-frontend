import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Product_streamRelationFilter } from "../inputs/Product_streamRelationFilter";
import { Product_stream_mappingWhereInput } from "../inputs/Product_stream_mappingWhereInput";
import { product_stream_mappingProduct_idProduct_version_idProduct_stream_idCompoundUniqueInput } from "../inputs/product_stream_mappingProduct_idProduct_version_idProduct_stream_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_stream_mappingWhereUniqueInput", {})
export class Product_stream_mappingWhereUniqueInput {
  @TypeGraphQL.Field(_type => product_stream_mappingProduct_idProduct_version_idProduct_stream_idCompoundUniqueInput, {
    nullable: true
  })
  product_id_product_version_id_product_stream_id?: product_stream_mappingProduct_idProduct_version_idProduct_stream_idCompoundUniqueInput | undefined;

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
