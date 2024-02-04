import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutApp_flow_actionInput } from "../inputs/AppUpdateWithoutApp_flow_actionInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpdateToOneWithWhereWithoutApp_flow_actionInput", {})
export class AppUpdateToOneWithWhereWithoutApp_flow_actionInput {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_flow_actionInput, {
    nullable: false
  })
  data!: AppUpdateWithoutApp_flow_actionInput;
}
