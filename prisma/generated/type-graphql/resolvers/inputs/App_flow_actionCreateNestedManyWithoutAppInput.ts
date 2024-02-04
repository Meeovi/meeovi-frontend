import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionCreateManyAppInputEnvelope } from "../inputs/App_flow_actionCreateManyAppInputEnvelope";
import { App_flow_actionCreateOrConnectWithoutAppInput } from "../inputs/App_flow_actionCreateOrConnectWithoutAppInput";
import { App_flow_actionCreateWithoutAppInput } from "../inputs/App_flow_actionCreateWithoutAppInput";
import { App_flow_actionWhereUniqueInput } from "../inputs/App_flow_actionWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_actionCreateNestedManyWithoutAppInput", {})
export class App_flow_actionCreateNestedManyWithoutAppInput {
  @TypeGraphQL.Field(_type => [App_flow_actionCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_flow_actionCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_flow_actionCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_flow_actionCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionWhereUniqueInput], {
    nullable: true
  })
  connect?: App_flow_actionWhereUniqueInput[] | undefined;
}
