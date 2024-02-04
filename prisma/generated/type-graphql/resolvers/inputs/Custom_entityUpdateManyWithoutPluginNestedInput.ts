import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityCreateManyPluginInputEnvelope } from "../inputs/Custom_entityCreateManyPluginInputEnvelope";
import { Custom_entityCreateOrConnectWithoutPluginInput } from "../inputs/Custom_entityCreateOrConnectWithoutPluginInput";
import { Custom_entityCreateWithoutPluginInput } from "../inputs/Custom_entityCreateWithoutPluginInput";
import { Custom_entityScalarWhereInput } from "../inputs/Custom_entityScalarWhereInput";
import { Custom_entityUpdateManyWithWhereWithoutPluginInput } from "../inputs/Custom_entityUpdateManyWithWhereWithoutPluginInput";
import { Custom_entityUpdateWithWhereUniqueWithoutPluginInput } from "../inputs/Custom_entityUpdateWithWhereUniqueWithoutPluginInput";
import { Custom_entityUpsertWithWhereUniqueWithoutPluginInput } from "../inputs/Custom_entityUpsertWithWhereUniqueWithoutPluginInput";
import { Custom_entityWhereUniqueInput } from "../inputs/Custom_entityWhereUniqueInput";

@TypeGraphQL.InputType("Custom_entityUpdateManyWithoutPluginNestedInput", {})
export class Custom_entityUpdateManyWithoutPluginNestedInput {
  @TypeGraphQL.Field(_type => [Custom_entityCreateWithoutPluginInput], {
    nullable: true
  })
  create?: Custom_entityCreateWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityCreateOrConnectWithoutPluginInput], {
    nullable: true
  })
  connectOrCreate?: Custom_entityCreateOrConnectWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityUpsertWithWhereUniqueWithoutPluginInput], {
    nullable: true
  })
  upsert?: Custom_entityUpsertWithWhereUniqueWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => Custom_entityCreateManyPluginInputEnvelope, {
    nullable: true
  })
  createMany?: Custom_entityCreateManyPluginInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Custom_entityUpdateWithWhereUniqueWithoutPluginInput], {
    nullable: true
  })
  update?: Custom_entityUpdateWithWhereUniqueWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityUpdateManyWithWhereWithoutPluginInput], {
    nullable: true
  })
  updateMany?: Custom_entityUpdateManyWithWhereWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Custom_entityScalarWhereInput[] | undefined;
}
