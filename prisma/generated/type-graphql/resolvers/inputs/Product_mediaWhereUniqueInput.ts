import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MediaRelationFilter } from "../inputs/MediaRelationFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Product_mediaWhereInput } from "../inputs/Product_mediaWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { product_mediaIdVersion_idCompoundUniqueInput } from "../inputs/product_mediaIdVersion_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_mediaWhereUniqueInput", {})
export class Product_mediaWhereUniqueInput {
  @TypeGraphQL.Field(_type => product_mediaIdVersion_idCompoundUniqueInput, {
    nullable: true
  })
  id_version_id?: product_mediaIdVersion_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaWhereInput], {
    nullable: true
  })
  AND?: Product_mediaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaWhereInput], {
    nullable: true
  })
  OR?: Product_mediaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_mediaWhereInput], {
    nullable: true
  })
  NOT?: Product_mediaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  position?: IntFilter | undefined;

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
  media_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => MediaRelationFilter, {
    nullable: true
  })
  media?: MediaRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;
}
