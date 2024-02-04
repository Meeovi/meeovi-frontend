import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_flow_eventInput } from "../inputs/AppCreateWithoutApp_flow_eventInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateOrConnectWithoutApp_flow_eventInput", {})
export class AppCreateOrConnectWithoutApp_flow_eventInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_flow_eventInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_flow_eventInput;
}
