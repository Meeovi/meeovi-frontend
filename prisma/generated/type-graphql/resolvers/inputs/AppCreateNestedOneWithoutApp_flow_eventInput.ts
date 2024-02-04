import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutApp_flow_eventInput } from "../inputs/AppCreateOrConnectWithoutApp_flow_eventInput";
import { AppCreateWithoutApp_flow_eventInput } from "../inputs/AppCreateWithoutApp_flow_eventInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateNestedOneWithoutApp_flow_eventInput", {})
export class AppCreateNestedOneWithoutApp_flow_eventInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutApp_flow_eventInput, {
    nullable: true
  })
  create?: AppCreateWithoutApp_flow_eventInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutApp_flow_eventInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutApp_flow_eventInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;
}
