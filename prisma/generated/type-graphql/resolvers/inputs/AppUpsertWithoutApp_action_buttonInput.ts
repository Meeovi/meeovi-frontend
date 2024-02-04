import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_action_buttonInput } from "../inputs/AppCreateWithoutApp_action_buttonInput";
import { AppUpdateWithoutApp_action_buttonInput } from "../inputs/AppUpdateWithoutApp_action_buttonInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpsertWithoutApp_action_buttonInput", {})
export class AppUpsertWithoutApp_action_buttonInput {
  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_action_buttonInput, {
    nullable: false
  })
  update!: AppUpdateWithoutApp_action_buttonInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_action_buttonInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_action_buttonInput;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
