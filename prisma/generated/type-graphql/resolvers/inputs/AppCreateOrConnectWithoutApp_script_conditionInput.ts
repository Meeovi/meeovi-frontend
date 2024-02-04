import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_script_conditionInput } from "../inputs/AppCreateWithoutApp_script_conditionInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateOrConnectWithoutApp_script_conditionInput", {})
export class AppCreateOrConnectWithoutApp_script_conditionInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_script_conditionInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_script_conditionInput;
}
