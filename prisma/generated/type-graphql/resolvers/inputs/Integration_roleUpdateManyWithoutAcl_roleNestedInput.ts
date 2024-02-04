import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Integration_roleCreateManyAcl_roleInputEnvelope } from "../inputs/Integration_roleCreateManyAcl_roleInputEnvelope";
import { Integration_roleCreateOrConnectWithoutAcl_roleInput } from "../inputs/Integration_roleCreateOrConnectWithoutAcl_roleInput";
import { Integration_roleCreateWithoutAcl_roleInput } from "../inputs/Integration_roleCreateWithoutAcl_roleInput";
import { Integration_roleScalarWhereInput } from "../inputs/Integration_roleScalarWhereInput";
import { Integration_roleUpdateManyWithWhereWithoutAcl_roleInput } from "../inputs/Integration_roleUpdateManyWithWhereWithoutAcl_roleInput";
import { Integration_roleUpdateWithWhereUniqueWithoutAcl_roleInput } from "../inputs/Integration_roleUpdateWithWhereUniqueWithoutAcl_roleInput";
import { Integration_roleUpsertWithWhereUniqueWithoutAcl_roleInput } from "../inputs/Integration_roleUpsertWithWhereUniqueWithoutAcl_roleInput";
import { Integration_roleWhereUniqueInput } from "../inputs/Integration_roleWhereUniqueInput";

@TypeGraphQL.InputType("Integration_roleUpdateManyWithoutAcl_roleNestedInput", {})
export class Integration_roleUpdateManyWithoutAcl_roleNestedInput {
  @TypeGraphQL.Field(_type => [Integration_roleCreateWithoutAcl_roleInput], {
    nullable: true
  })
  create?: Integration_roleCreateWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleCreateOrConnectWithoutAcl_roleInput], {
    nullable: true
  })
  connectOrCreate?: Integration_roleCreateOrConnectWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleUpsertWithWhereUniqueWithoutAcl_roleInput], {
    nullable: true
  })
  upsert?: Integration_roleUpsertWithWhereUniqueWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => Integration_roleCreateManyAcl_roleInputEnvelope, {
    nullable: true
  })
  createMany?: Integration_roleCreateManyAcl_roleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleWhereUniqueInput], {
    nullable: true
  })
  set?: Integration_roleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Integration_roleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleWhereUniqueInput], {
    nullable: true
  })
  delete?: Integration_roleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleWhereUniqueInput], {
    nullable: true
  })
  connect?: Integration_roleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleUpdateWithWhereUniqueWithoutAcl_roleInput], {
    nullable: true
  })
  update?: Integration_roleUpdateWithWhereUniqueWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleUpdateManyWithWhereWithoutAcl_roleInput], {
    nullable: true
  })
  updateMany?: Integration_roleUpdateManyWithWhereWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Integration_roleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Integration_roleScalarWhereInput[] | undefined;
}
