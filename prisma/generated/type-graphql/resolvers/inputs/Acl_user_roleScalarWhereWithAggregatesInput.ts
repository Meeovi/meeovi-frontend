import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";

@TypeGraphQL.InputType("Acl_user_roleScalarWhereWithAggregatesInput", {})
export class Acl_user_roleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Acl_user_roleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Acl_user_roleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Acl_user_roleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Acl_user_roleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  user_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  acl_role_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
