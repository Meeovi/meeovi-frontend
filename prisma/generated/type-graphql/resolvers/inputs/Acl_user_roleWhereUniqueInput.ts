import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleRelationFilter } from "../inputs/Acl_roleRelationFilter";
import { Acl_user_roleWhereInput } from "../inputs/Acl_user_roleWhereInput";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { acl_user_roleUser_idAcl_role_idCompoundUniqueInput } from "../inputs/acl_user_roleUser_idAcl_role_idCompoundUniqueInput";

@TypeGraphQL.InputType("Acl_user_roleWhereUniqueInput", {})
export class Acl_user_roleWhereUniqueInput {
  @TypeGraphQL.Field(_type => acl_user_roleUser_idAcl_role_idCompoundUniqueInput, {
    nullable: true
  })
  user_id_acl_role_id?: acl_user_roleUser_idAcl_role_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleWhereInput], {
    nullable: true
  })
  AND?: Acl_user_roleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleWhereInput], {
    nullable: true
  })
  OR?: Acl_user_roleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleWhereInput], {
    nullable: true
  })
  NOT?: Acl_user_roleWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => Acl_roleRelationFilter, {
    nullable: true
  })
  acl_role?: Acl_roleRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
