import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";

@TypeGraphQL.InputType("Mail_templateScalarWhereInput", {})
export class Mail_templateScalarWhereInput {
  @TypeGraphQL.Field(_type => [Mail_templateScalarWhereInput], {
    nullable: true
  })
  AND?: Mail_templateScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateScalarWhereInput], {
    nullable: true
  })
  OR?: Mail_templateScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateScalarWhereInput], {
    nullable: true
  })
  NOT?: Mail_templateScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  mail_template_type_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  system_default?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
