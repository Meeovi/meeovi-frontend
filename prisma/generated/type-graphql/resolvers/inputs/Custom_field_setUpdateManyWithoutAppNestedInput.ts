import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setCreateManyAppInputEnvelope } from "../inputs/Custom_field_setCreateManyAppInputEnvelope";
import { Custom_field_setCreateOrConnectWithoutAppInput } from "../inputs/Custom_field_setCreateOrConnectWithoutAppInput";
import { Custom_field_setCreateWithoutAppInput } from "../inputs/Custom_field_setCreateWithoutAppInput";
import { Custom_field_setScalarWhereInput } from "../inputs/Custom_field_setScalarWhereInput";
import { Custom_field_setUpdateManyWithWhereWithoutAppInput } from "../inputs/Custom_field_setUpdateManyWithWhereWithoutAppInput";
import { Custom_field_setUpdateWithWhereUniqueWithoutAppInput } from "../inputs/Custom_field_setUpdateWithWhereUniqueWithoutAppInput";
import { Custom_field_setUpsertWithWhereUniqueWithoutAppInput } from "../inputs/Custom_field_setUpsertWithWhereUniqueWithoutAppInput";
import { Custom_field_setWhereUniqueInput } from "../inputs/Custom_field_setWhereUniqueInput";

@TypeGraphQL.InputType("Custom_field_setUpdateManyWithoutAppNestedInput", {})
export class Custom_field_setUpdateManyWithoutAppNestedInput {
  @TypeGraphQL.Field(_type => [Custom_field_setCreateWithoutAppInput], {
    nullable: true
  })
  create?: Custom_field_setCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: Custom_field_setCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setUpsertWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  upsert?: Custom_field_setUpsertWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: Custom_field_setCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setWhereUniqueInput], {
    nullable: true
  })
  set?: Custom_field_setWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Custom_field_setWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setWhereUniqueInput], {
    nullable: true
  })
  delete?: Custom_field_setWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setWhereUniqueInput], {
    nullable: true
  })
  connect?: Custom_field_setWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setUpdateWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  update?: Custom_field_setUpdateWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setUpdateManyWithWhereWithoutAppInput], {
    nullable: true
  })
  updateMany?: Custom_field_setUpdateManyWithWhereWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Custom_field_setScalarWhereInput[] | undefined;
}
