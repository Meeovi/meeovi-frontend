import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_buttonCreateManyAppInputEnvelope } from "../inputs/App_action_buttonCreateManyAppInputEnvelope";
import { App_action_buttonCreateOrConnectWithoutAppInput } from "../inputs/App_action_buttonCreateOrConnectWithoutAppInput";
import { App_action_buttonCreateWithoutAppInput } from "../inputs/App_action_buttonCreateWithoutAppInput";
import { App_action_buttonScalarWhereInput } from "../inputs/App_action_buttonScalarWhereInput";
import { App_action_buttonUpdateManyWithWhereWithoutAppInput } from "../inputs/App_action_buttonUpdateManyWithWhereWithoutAppInput";
import { App_action_buttonUpdateWithWhereUniqueWithoutAppInput } from "../inputs/App_action_buttonUpdateWithWhereUniqueWithoutAppInput";
import { App_action_buttonUpsertWithWhereUniqueWithoutAppInput } from "../inputs/App_action_buttonUpsertWithWhereUniqueWithoutAppInput";
import { App_action_buttonWhereUniqueInput } from "../inputs/App_action_buttonWhereUniqueInput";

@TypeGraphQL.InputType("App_action_buttonUpdateManyWithoutAppNestedInput", {})
export class App_action_buttonUpdateManyWithoutAppNestedInput {
  @TypeGraphQL.Field(_type => [App_action_buttonCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_action_buttonCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_action_buttonCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonUpsertWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  upsert?: App_action_buttonUpsertWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_action_buttonCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_action_buttonCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonWhereUniqueInput], {
    nullable: true
  })
  set?: App_action_buttonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_action_buttonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonWhereUniqueInput], {
    nullable: true
  })
  delete?: App_action_buttonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonWhereUniqueInput], {
    nullable: true
  })
  connect?: App_action_buttonWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonUpdateWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  update?: App_action_buttonUpdateWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonUpdateManyWithWhereWithoutAppInput], {
    nullable: true
  })
  updateMany?: App_action_buttonUpdateManyWithWhereWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_action_buttonScalarWhereInput[] | undefined;
}
