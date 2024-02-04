import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleCreateWithoutAcl_user_roleInput } from "../inputs/Acl_roleCreateWithoutAcl_user_roleInput";
import { Acl_roleWhereUniqueInput } from "../inputs/Acl_roleWhereUniqueInput";

@TypeGraphQL.InputType("Acl_roleCreateOrConnectWithoutAcl_user_roleInput", {})
export class Acl_roleCreateOrConnectWithoutAcl_user_roleInput {
  @TypeGraphQL.Field(_type => Acl_roleWhereUniqueInput, {
    nullable: false
  })
  where!: Acl_roleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Acl_roleCreateWithoutAcl_user_roleInput, {
    nullable: false
  })
  create!: Acl_roleCreateWithoutAcl_user_roleInput;
}
