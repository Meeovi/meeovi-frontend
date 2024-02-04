import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_action_buttonInput } from "../inputs/AppCreateWithoutApp_action_buttonInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateOrConnectWithoutApp_action_buttonInput", {})
export class AppCreateOrConnectWithoutApp_action_buttonInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_action_buttonInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_action_buttonInput;
}
