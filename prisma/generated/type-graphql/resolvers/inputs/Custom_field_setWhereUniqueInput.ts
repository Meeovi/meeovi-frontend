import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppNullableRelationFilter } from "../inputs/AppNullableRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { Custom_fieldListRelationFilter } from "../inputs/Custom_fieldListRelationFilter";
import { Custom_field_setWhereInput } from "../inputs/Custom_field_setWhereInput";
import { Custom_field_set_relationListRelationFilter } from "../inputs/Custom_field_set_relationListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Product_custom_field_setListRelationFilter } from "../inputs/Product_custom_field_setListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Custom_field_setWhereUniqueInput", {})
export class Custom_field_setWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setWhereInput], {
    nullable: true
  })
  AND?: Custom_field_setWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setWhereInput], {
    nullable: true
  })
  OR?: Custom_field_setWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setWhereInput], {
    nullable: true
  })
  NOT?: Custom_field_setWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  config?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  app_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  global?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldListRelationFilter, {
    nullable: true
  })
  custom_field?: Custom_fieldListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AppNullableRelationFilter, {
    nullable: true
  })
  app?: AppNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Custom_field_set_relationListRelationFilter, {
    nullable: true
  })
  custom_field_set_relation?: Custom_field_set_relationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_custom_field_setListRelationFilter, {
    nullable: true
  })
  product_custom_field_set?: Product_custom_field_setListRelationFilter | undefined;
}
