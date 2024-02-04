import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Product_cross_selling_translationScalarWhereInput", {})
export class Product_cross_selling_translationScalarWhereInput {
  @TypeGraphQL.Field(_type => [Product_cross_selling_translationScalarWhereInput], {
    nullable: true
  })
  AND?: Product_cross_selling_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationScalarWhereInput], {
    nullable: true
  })
  OR?: Product_cross_selling_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_translationScalarWhereInput], {
    nullable: true
  })
  NOT?: Product_cross_selling_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_cross_selling_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
