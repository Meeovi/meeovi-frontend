import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Custom_field_setRelationFilter } from "../inputs/Custom_field_setRelationFilter";
import { Custom_field_set_relationWhereInput } from "../inputs/Custom_field_set_relationWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { custom_field_set_relationSet_idEntity_nameCompoundUniqueInput } from "../inputs/custom_field_set_relationSet_idEntity_nameCompoundUniqueInput";

@TypeGraphQL.InputType("Custom_field_set_relationWhereUniqueInput", {})
export class Custom_field_set_relationWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => custom_field_set_relationSet_idEntity_nameCompoundUniqueInput, {
    nullable: true
  })
  set_id_entity_name?: custom_field_set_relationSet_idEntity_nameCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationWhereInput], {
    nullable: true
  })
  AND?: Custom_field_set_relationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationWhereInput], {
    nullable: true
  })
  OR?: Custom_field_set_relationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationWhereInput], {
    nullable: true
  })
  NOT?: Custom_field_set_relationWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => Custom_field_setRelationFilter, {
    nullable: true
  })
  custom_field_set?: Custom_field_setRelationFilter | undefined;
}
