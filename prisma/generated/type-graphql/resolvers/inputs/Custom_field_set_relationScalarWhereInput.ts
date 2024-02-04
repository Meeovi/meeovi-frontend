import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Custom_field_set_relationScalarWhereInput", {})
export class Custom_field_set_relationScalarWhereInput {
  @TypeGraphQL.Field(_type => [Custom_field_set_relationScalarWhereInput], {
    nullable: true
  })
  AND?: Custom_field_set_relationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationScalarWhereInput], {
    nullable: true
  })
  OR?: Custom_field_set_relationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationScalarWhereInput], {
    nullable: true
  })
  NOT?: Custom_field_set_relationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  set_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  entity_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
