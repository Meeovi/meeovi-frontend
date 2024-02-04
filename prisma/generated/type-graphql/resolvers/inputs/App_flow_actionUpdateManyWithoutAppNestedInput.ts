import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionCreateManyAppInputEnvelope } from "../inputs/App_flow_actionCreateManyAppInputEnvelope";
import { App_flow_actionCreateOrConnectWithoutAppInput } from "../inputs/App_flow_actionCreateOrConnectWithoutAppInput";
import { App_flow_actionCreateWithoutAppInput } from "../inputs/App_flow_actionCreateWithoutAppInput";
import { App_flow_actionScalarWhereInput } from "../inputs/App_flow_actionScalarWhereInput";
import { App_flow_actionUpdateManyWithWhereWithoutAppInput } from "../inputs/App_flow_actionUpdateManyWithWhereWithoutAppInput";
import { App_flow_actionUpdateWithWhereUniqueWithoutAppInput } from "../inputs/App_flow_actionUpdateWithWhereUniqueWithoutAppInput";
import { App_flow_actionUpsertWithWhereUniqueWithoutAppInput } from "../inputs/App_flow_actionUpsertWithWhereUniqueWithoutAppInput";
import { App_flow_actionWhereUniqueInput } from "../inputs/App_flow_actionWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_actionUpdateManyWithoutAppNestedInput", {})
export class App_flow_actionUpdateManyWithoutAppNestedInput {
  @TypeGraphQL.Field(_type => [App_flow_actionCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_flow_actionCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_flow_actionCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionUpsertWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  upsert?: App_flow_actionUpsertWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_flow_actionCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionWhereUniqueInput], {
    nullable: true
  })
  set?: App_flow_actionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_flow_actionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionWhereUniqueInput], {
    nullable: true
  })
  delete?: App_flow_actionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionWhereUniqueInput], {
    nullable: true
  })
  connect?: App_flow_actionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionUpdateWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  update?: App_flow_actionUpdateWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionUpdateManyWithWhereWithoutAppInput], {
    nullable: true
  })
  updateMany?: App_flow_actionUpdateManyWithWhereWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_flow_actionScalarWhereInput[] | undefined;
}
