import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_user_roleCreateWithoutAcl_roleInput } from "../inputs/Acl_user_roleCreateWithoutAcl_roleInput";
import { Acl_user_roleWhereUniqueInput } from "../inputs/Acl_user_roleWhereUniqueInput";

@TypeGraphQL.InputType("Acl_user_roleCreateOrConnectWithoutAcl_roleInput", {})
export class Acl_user_roleCreateOrConnectWithoutAcl_roleInput {
  @TypeGraphQL.Field(_type => Acl_user_roleWhereUniqueInput, {
    nullable: false
  })
  where!: Acl_user_roleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Acl_user_roleCreateWithoutAcl_roleInput, {
    nullable: false
  })
  create!: Acl_user_roleCreateWithoutAcl_roleInput;
}
