import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutApp_action_buttonInput } from "../inputs/AppUpdateWithoutApp_action_buttonInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpdateToOneWithWhereWithoutApp_action_buttonInput", {})
export class AppUpdateToOneWithWhereWithoutApp_action_buttonInput {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_action_buttonInput, {
    nullable: false
  })
  data!: AppUpdateWithoutApp_action_buttonInput;
}
