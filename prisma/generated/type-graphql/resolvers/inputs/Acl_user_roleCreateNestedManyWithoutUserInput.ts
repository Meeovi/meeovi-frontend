import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_user_roleCreateManyUserInputEnvelope } from "../inputs/Acl_user_roleCreateManyUserInputEnvelope";
import { Acl_user_roleCreateOrConnectWithoutUserInput } from "../inputs/Acl_user_roleCreateOrConnectWithoutUserInput";
import { Acl_user_roleCreateWithoutUserInput } from "../inputs/Acl_user_roleCreateWithoutUserInput";
import { Acl_user_roleWhereUniqueInput } from "../inputs/Acl_user_roleWhereUniqueInput";

@TypeGraphQL.InputType("Acl_user_roleCreateNestedManyWithoutUserInput", {})
export class Acl_user_roleCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [Acl_user_roleCreateWithoutUserInput], {
    nullable: true
  })
  create?: Acl_user_roleCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: Acl_user_roleCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => Acl_user_roleCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: Acl_user_roleCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleWhereUniqueInput], {
    nullable: true
  })
  connect?: Acl_user_roleWhereUniqueInput[] | undefined;
}
