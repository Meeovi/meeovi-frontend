import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleUpdateWithoutAcl_user_roleInput } from "../inputs/Acl_roleUpdateWithoutAcl_user_roleInput";
import { Acl_roleWhereInput } from "../inputs/Acl_roleWhereInput";

@TypeGraphQL.InputType("Acl_roleUpdateToOneWithWhereWithoutAcl_user_roleInput", {})
export class Acl_roleUpdateToOneWithWhereWithoutAcl_user_roleInput {
  @TypeGraphQL.Field(_type => Acl_roleWhereInput, {
    nullable: true
  })
  where?: Acl_roleWhereInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleUpdateWithoutAcl_user_roleInput, {
    nullable: false
  })
  data!: Acl_roleUpdateWithoutAcl_user_roleInput;
}
