import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_user_roleCreateManyUserInputEnvelope } from "../inputs/Acl_user_roleCreateManyUserInputEnvelope";
import { Acl_user_roleCreateOrConnectWithoutUserInput } from "../inputs/Acl_user_roleCreateOrConnectWithoutUserInput";
import { Acl_user_roleCreateWithoutUserInput } from "../inputs/Acl_user_roleCreateWithoutUserInput";
import { Acl_user_roleScalarWhereInput } from "../inputs/Acl_user_roleScalarWhereInput";
import { Acl_user_roleUpdateManyWithWhereWithoutUserInput } from "../inputs/Acl_user_roleUpdateManyWithWhereWithoutUserInput";
import { Acl_user_roleUpdateWithWhereUniqueWithoutUserInput } from "../inputs/Acl_user_roleUpdateWithWhereUniqueWithoutUserInput";
import { Acl_user_roleUpsertWithWhereUniqueWithoutUserInput } from "../inputs/Acl_user_roleUpsertWithWhereUniqueWithoutUserInput";
import { Acl_user_roleWhereUniqueInput } from "../inputs/Acl_user_roleWhereUniqueInput";

@TypeGraphQL.InputType("Acl_user_roleUpdateManyWithoutUserNestedInput", {})
export class Acl_user_roleUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [Acl_user_roleCreateWithoutUserInput], {
    nullable: true
  })
  create?: Acl_user_roleCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: Acl_user_roleCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: Acl_user_roleUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => Acl_user_roleCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: Acl_user_roleCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleWhereUniqueInput], {
    nullable: true
  })
  set?: Acl_user_roleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Acl_user_roleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleWhereUniqueInput], {
    nullable: true
  })
  delete?: Acl_user_roleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleWhereUniqueInput], {
    nullable: true
  })
  connect?: Acl_user_roleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: Acl_user_roleUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: Acl_user_roleUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Acl_user_roleScalarWhereInput[] | undefined;
}
