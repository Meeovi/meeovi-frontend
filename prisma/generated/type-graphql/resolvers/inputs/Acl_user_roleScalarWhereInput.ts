import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";

@TypeGraphQL.InputType("Acl_user_roleScalarWhereInput", {})
export class Acl_user_roleScalarWhereInput {
  @TypeGraphQL.Field(_type => [Acl_user_roleScalarWhereInput], {
    nullable: true
  })
  AND?: Acl_user_roleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleScalarWhereInput], {
    nullable: true
  })
  OR?: Acl_user_roleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleScalarWhereInput], {
    nullable: true
  })
  NOT?: Acl_user_roleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  user_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  acl_role_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
