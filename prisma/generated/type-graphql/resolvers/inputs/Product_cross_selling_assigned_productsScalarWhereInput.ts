import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("Product_cross_selling_assigned_productsScalarWhereInput", {})
export class Product_cross_selling_assigned_productsScalarWhereInput {
  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsScalarWhereInput], {
    nullable: true
  })
  AND?: Product_cross_selling_assigned_productsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsScalarWhereInput], {
    nullable: true
  })
  OR?: Product_cross_selling_assigned_productsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsScalarWhereInput], {
    nullable: true
  })
  NOT?: Product_cross_selling_assigned_productsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  cross_selling_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
