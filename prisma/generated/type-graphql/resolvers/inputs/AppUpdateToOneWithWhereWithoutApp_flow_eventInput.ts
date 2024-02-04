import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutApp_flow_eventInput } from "../inputs/AppUpdateWithoutApp_flow_eventInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpdateToOneWithWhereWithoutApp_flow_eventInput", {})
export class AppUpdateToOneWithWhereWithoutApp_flow_eventInput {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_flow_eventInput, {
    nullable: false
  })
  data!: AppUpdateWithoutApp_flow_eventInput;
}
