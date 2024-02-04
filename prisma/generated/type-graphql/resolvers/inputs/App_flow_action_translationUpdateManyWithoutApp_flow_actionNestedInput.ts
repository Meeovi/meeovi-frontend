import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_action_translationCreateManyApp_flow_actionInputEnvelope } from "../inputs/App_flow_action_translationCreateManyApp_flow_actionInputEnvelope";
import { App_flow_action_translationCreateOrConnectWithoutApp_flow_actionInput } from "../inputs/App_flow_action_translationCreateOrConnectWithoutApp_flow_actionInput";
import { App_flow_action_translationCreateWithoutApp_flow_actionInput } from "../inputs/App_flow_action_translationCreateWithoutApp_flow_actionInput";
import { App_flow_action_translationScalarWhereInput } from "../inputs/App_flow_action_translationScalarWhereInput";
import { App_flow_action_translationUpdateManyWithWhereWithoutApp_flow_actionInput } from "../inputs/App_flow_action_translationUpdateManyWithWhereWithoutApp_flow_actionInput";
import { App_flow_action_translationUpdateWithWhereUniqueWithoutApp_flow_actionInput } from "../inputs/App_flow_action_translationUpdateWithWhereUniqueWithoutApp_flow_actionInput";
import { App_flow_action_translationUpsertWithWhereUniqueWithoutApp_flow_actionInput } from "../inputs/App_flow_action_translationUpsertWithWhereUniqueWithoutApp_flow_actionInput";
import { App_flow_action_translationWhereUniqueInput } from "../inputs/App_flow_action_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_action_translationUpdateManyWithoutApp_flow_actionNestedInput", {})
export class App_flow_action_translationUpdateManyWithoutApp_flow_actionNestedInput {
  @TypeGraphQL.Field(_type => [App_flow_action_translationCreateWithoutApp_flow_actionInput], {
    nullable: true
  })
  create?: App_flow_action_translationCreateWithoutApp_flow_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationCreateOrConnectWithoutApp_flow_actionInput], {
    nullable: true
  })
  connectOrCreate?: App_flow_action_translationCreateOrConnectWithoutApp_flow_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationUpsertWithWhereUniqueWithoutApp_flow_actionInput], {
    nullable: true
  })
  upsert?: App_flow_action_translationUpsertWithWhereUniqueWithoutApp_flow_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => App_flow_action_translationCreateManyApp_flow_actionInputEnvelope, {
    nullable: true
  })
  createMany?: App_flow_action_translationCreateManyApp_flow_actionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationWhereUniqueInput], {
    nullable: true
  })
  set?: App_flow_action_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_flow_action_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: App_flow_action_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: App_flow_action_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationUpdateWithWhereUniqueWithoutApp_flow_actionInput], {
    nullable: true
  })
  update?: App_flow_action_translationUpdateWithWhereUniqueWithoutApp_flow_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationUpdateManyWithWhereWithoutApp_flow_actionInput], {
    nullable: true
  })
  updateMany?: App_flow_action_translationUpdateManyWithWhereWithoutApp_flow_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_flow_action_translationScalarWhereInput[] | undefined;
}
