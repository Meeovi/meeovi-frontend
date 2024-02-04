import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_flow_eventInput } from "../inputs/AppCreateWithoutApp_flow_eventInput";
import { AppUpdateWithoutApp_flow_eventInput } from "../inputs/AppUpdateWithoutApp_flow_eventInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpsertWithoutApp_flow_eventInput", {})
export class AppUpsertWithoutApp_flow_eventInput {
  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_flow_eventInput, {
    nullable: false
  })
  update!: AppUpdateWithoutApp_flow_eventInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_flow_eventInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_flow_eventInput;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
