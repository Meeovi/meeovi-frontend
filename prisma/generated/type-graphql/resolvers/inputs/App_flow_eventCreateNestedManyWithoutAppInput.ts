import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_eventCreateManyAppInputEnvelope } from "../inputs/App_flow_eventCreateManyAppInputEnvelope";
import { App_flow_eventCreateOrConnectWithoutAppInput } from "../inputs/App_flow_eventCreateOrConnectWithoutAppInput";
import { App_flow_eventCreateWithoutAppInput } from "../inputs/App_flow_eventCreateWithoutAppInput";
import { App_flow_eventWhereUniqueInput } from "../inputs/App_flow_eventWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_eventCreateNestedManyWithoutAppInput", {})
export class App_flow_eventCreateNestedManyWithoutAppInput {
  @TypeGraphQL.Field(_type => [App_flow_eventCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_flow_eventCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_eventCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_flow_eventCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_flow_eventCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_flow_eventCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_flow_eventWhereUniqueInput], {
    nullable: true
  })
  connect?: App_flow_eventWhereUniqueInput[] | undefined;
}
