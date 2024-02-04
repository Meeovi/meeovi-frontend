import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleCreateWithoutAcl_user_roleInput } from "../inputs/Acl_roleCreateWithoutAcl_user_roleInput";
import { Acl_roleUpdateWithoutAcl_user_roleInput } from "../inputs/Acl_roleUpdateWithoutAcl_user_roleInput";
import { Acl_roleWhereInput } from "../inputs/Acl_roleWhereInput";

@TypeGraphQL.InputType("Acl_roleUpsertWithoutAcl_user_roleInput", {})
export class Acl_roleUpsertWithoutAcl_user_roleInput {
  @TypeGraphQL.Field(_type => Acl_roleUpdateWithoutAcl_user_roleInput, {
    nullable: false
  })
  update!: Acl_roleUpdateWithoutAcl_user_roleInput;

  @TypeGraphQL.Field(_type => Acl_roleCreateWithoutAcl_user_roleInput, {
    nullable: false
  })
  create!: Acl_roleCreateWithoutAcl_user_roleInput;

  @TypeGraphQL.Field(_type => Acl_roleWhereInput, {
    nullable: true
  })
  where?: Acl_roleWhereInput | undefined;
}
