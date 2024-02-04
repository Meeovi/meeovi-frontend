import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_eventCreateManyAppInputEnvelope } from "../inputs/App_flow_eventCreateManyAppInputEnvelope";
import { App_flow_eventCreateOrConnectWithoutAppInput } from "../inputs/App_flow_eventCreateOrConnectWithoutAppInput";
import { App_flow_eventCreateWithoutAppInput } from "../inputs/App_flow_eventCreateWithoutAppInput";
import { App_flow_eventScalarWhereInput } from "../inputs/App_flow_eventScalarWhereInput";
import { App_flow_eventUpdateManyWithWhereWithoutAppInput } from "../inputs/App_flow_eventUpdateManyWithWhereWithoutAppInput";
import { App_flow_eventUpdateWithWhereUniqueWithoutAppInput } from "../inputs/App_flow_eventUpdateWithWhereUniqueWithoutAppInput";
import { App_flow_eventUpsertWithWhereUniqueWithoutAppInput } from "../inputs/App_flow_eventUpsertWithWhereUniqueWithoutAppInput";
import { App_flow_eventWhereUniqueInput } from "../inputs/App_flow_eventWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_eventUpdateManyWithoutAppNestedInput", {})
export class App_flow_eventUpdateManyWithoutAppNestedInput {
  @TypeGraphQL.Field(_type => [App_flow_eventCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_flow_eventCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_eventCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_flow_eventCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_eventUpsertWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  upsert?: App_flow_eventUpsertWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_flow_eventCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_flow_eventCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_flow_eventWhereUniqueInput], {
    nullable: true
  })
  set?: App_flow_eventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_eventWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_flow_eventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_eventWhereUniqueInput], {
    nullable: true
  })
  delete?: App_flow_eventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_eventWhereUniqueInput], {
    nullable: true
  })
  connect?: App_flow_eventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_eventUpdateWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  update?: App_flow_eventUpdateWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_eventUpdateManyWithWhereWithoutAppInput], {
    nullable: true
  })
  updateMany?: App_flow_eventUpdateManyWithWhereWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_eventScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_flow_eventScalarWhereInput[] | undefined;
}
