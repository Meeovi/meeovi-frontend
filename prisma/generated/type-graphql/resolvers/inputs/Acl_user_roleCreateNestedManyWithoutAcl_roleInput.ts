import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_user_roleCreateManyAcl_roleInputEnvelope } from "../inputs/Acl_user_roleCreateManyAcl_roleInputEnvelope";
import { Acl_user_roleCreateOrConnectWithoutAcl_roleInput } from "../inputs/Acl_user_roleCreateOrConnectWithoutAcl_roleInput";
import { Acl_user_roleCreateWithoutAcl_roleInput } from "../inputs/Acl_user_roleCreateWithoutAcl_roleInput";
import { Acl_user_roleWhereUniqueInput } from "../inputs/Acl_user_roleWhereUniqueInput";

@TypeGraphQL.InputType("Acl_user_roleCreateNestedManyWithoutAcl_roleInput", {})
export class Acl_user_roleCreateNestedManyWithoutAcl_roleInput {
  @TypeGraphQL.Field(_type => [Acl_user_roleCreateWithoutAcl_roleInput], {
    nullable: true
  })
  create?: Acl_user_roleCreateWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleCreateOrConnectWithoutAcl_roleInput], {
    nullable: true
  })
  connectOrCreate?: Acl_user_roleCreateOrConnectWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => Acl_user_roleCreateManyAcl_roleInputEnvelope, {
    nullable: true
  })
  createMany?: Acl_user_roleCreateManyAcl_roleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleWhereUniqueInput], {
    nullable: true
  })
  connect?: Acl_user_roleWhereUniqueInput[] | undefined;
}
