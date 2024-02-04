import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_script_conditionInput } from "../inputs/AppCreateWithoutApp_script_conditionInput";
import { AppUpdateWithoutApp_script_conditionInput } from "../inputs/AppUpdateWithoutApp_script_conditionInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpsertWithoutApp_script_conditionInput", {})
export class AppUpsertWithoutApp_script_conditionInput {
  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_script_conditionInput, {
    nullable: false
  })
  update!: AppUpdateWithoutApp_script_conditionInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_script_conditionInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_script_conditionInput;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
