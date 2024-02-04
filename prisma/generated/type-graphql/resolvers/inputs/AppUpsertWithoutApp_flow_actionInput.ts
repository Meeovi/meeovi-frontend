import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_flow_actionInput } from "../inputs/AppCreateWithoutApp_flow_actionInput";
import { AppUpdateWithoutApp_flow_actionInput } from "../inputs/AppUpdateWithoutApp_flow_actionInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpsertWithoutApp_flow_actionInput", {})
export class AppUpsertWithoutApp_flow_actionInput {
  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_flow_actionInput, {
    nullable: false
  })
  update!: AppUpdateWithoutApp_flow_actionInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_flow_actionInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_flow_actionInput;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
