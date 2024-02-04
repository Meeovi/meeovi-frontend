import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_user_roleCreateManyAcl_roleInputEnvelope } from "../inputs/Acl_user_roleCreateManyAcl_roleInputEnvelope";
import { Acl_user_roleCreateOrConnectWithoutAcl_roleInput } from "../inputs/Acl_user_roleCreateOrConnectWithoutAcl_roleInput";
import { Acl_user_roleCreateWithoutAcl_roleInput } from "../inputs/Acl_user_roleCreateWithoutAcl_roleInput";
import { Acl_user_roleScalarWhereInput } from "../inputs/Acl_user_roleScalarWhereInput";
import { Acl_user_roleUpdateManyWithWhereWithoutAcl_roleInput } from "../inputs/Acl_user_roleUpdateManyWithWhereWithoutAcl_roleInput";
import { Acl_user_roleUpdateWithWhereUniqueWithoutAcl_roleInput } from "../inputs/Acl_user_roleUpdateWithWhereUniqueWithoutAcl_roleInput";
import { Acl_user_roleUpsertWithWhereUniqueWithoutAcl_roleInput } from "../inputs/Acl_user_roleUpsertWithWhereUniqueWithoutAcl_roleInput";
import { Acl_user_roleWhereUniqueInput } from "../inputs/Acl_user_roleWhereUniqueInput";

@TypeGraphQL.InputType("Acl_user_roleUpdateManyWithoutAcl_roleNestedInput", {})
export class Acl_user_roleUpdateManyWithoutAcl_roleNestedInput {
  @TypeGraphQL.Field(_type => [Acl_user_roleCreateWithoutAcl_roleInput], {
    nullable: true
  })
  create?: Acl_user_roleCreateWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleCreateOrConnectWithoutAcl_roleInput], {
    nullable: true
  })
  connectOrCreate?: Acl_user_roleCreateOrConnectWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleUpsertWithWhereUniqueWithoutAcl_roleInput], {
    nullable: true
  })
  upsert?: Acl_user_roleUpsertWithWhereUniqueWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => Acl_user_roleCreateManyAcl_roleInputEnvelope, {
    nullable: true
  })
  createMany?: Acl_user_roleCreateManyAcl_roleInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Acl_user_roleUpdateWithWhereUniqueWithoutAcl_roleInput], {
    nullable: true
  })
  update?: Acl_user_roleUpdateWithWhereUniqueWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleUpdateManyWithWhereWithoutAcl_roleInput], {
    nullable: true
  })
  updateMany?: Acl_user_roleUpdateManyWithWhereWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Acl_user_roleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Acl_user_roleScalarWhereInput[] | undefined;
}
