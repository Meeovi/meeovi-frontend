import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityCreateManyAppInputEnvelope } from "../inputs/Custom_entityCreateManyAppInputEnvelope";
import { Custom_entityCreateOrConnectWithoutAppInput } from "../inputs/Custom_entityCreateOrConnectWithoutAppInput";
import { Custom_entityCreateWithoutAppInput } from "../inputs/Custom_entityCreateWithoutAppInput";
import { Custom_entityScalarWhereInput } from "../inputs/Custom_entityScalarWhereInput";
import { Custom_entityUpdateManyWithWhereWithoutAppInput } from "../inputs/Custom_entityUpdateManyWithWhereWithoutAppInput";
import { Custom_entityUpdateWithWhereUniqueWithoutAppInput } from "../inputs/Custom_entityUpdateWithWhereUniqueWithoutAppInput";
import { Custom_entityUpsertWithWhereUniqueWithoutAppInput } from "../inputs/Custom_entityUpsertWithWhereUniqueWithoutAppInput";
import { Custom_entityWhereUniqueInput } from "../inputs/Custom_entityWhereUniqueInput";

@TypeGraphQL.InputType("Custom_entityUpdateManyWithoutAppNestedInput", {})
export class Custom_entityUpdateManyWithoutAppNestedInput {
  @TypeGraphQL.Field(_type => [Custom_entityCreateWithoutAppInput], {
    nullable: true
  })
  create?: Custom_entityCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: Custom_entityCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityUpsertWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  upsert?: Custom_entityUpsertWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => Custom_entityCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: Custom_entityCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityWhereUniqueInput], {
    nullable: true
  })
  set?: Custom_entityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Custom_entityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityWhereUniqueInput], {
    nullable: true
  })
  delete?: Custom_entityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityWhereUniqueInput], {
    nullable: true
  })
  connect?: Custom_entityWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityUpdateWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  update?: Custom_entityUpdateWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityUpdateManyWithWhereWithoutAppInput], {
    nullable: true
  })
  updateMany?: Custom_entityUpdateManyWithWhereWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Custom_entityScalarWhereInput[] | undefined;
}
