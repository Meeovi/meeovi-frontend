import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleCreateOrConnectWithoutAcl_user_roleInput } from "../inputs/Acl_roleCreateOrConnectWithoutAcl_user_roleInput";
import { Acl_roleCreateWithoutAcl_user_roleInput } from "../inputs/Acl_roleCreateWithoutAcl_user_roleInput";
import { Acl_roleWhereUniqueInput } from "../inputs/Acl_roleWhereUniqueInput";

@TypeGraphQL.InputType("Acl_roleCreateNestedOneWithoutAcl_user_roleInput", {})
export class Acl_roleCreateNestedOneWithoutAcl_user_roleInput {
  @TypeGraphQL.Field(_type => Acl_roleCreateWithoutAcl_user_roleInput, {
    nullable: true
  })
  create?: Acl_roleCreateWithoutAcl_user_roleInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleCreateOrConnectWithoutAcl_user_roleInput, {
    nullable: true
  })
  connectOrCreate?: Acl_roleCreateOrConnectWithoutAcl_user_roleInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleWhereUniqueInput, {
    nullable: true
  })
  connect?: Acl_roleWhereUniqueInput | undefined;
}
