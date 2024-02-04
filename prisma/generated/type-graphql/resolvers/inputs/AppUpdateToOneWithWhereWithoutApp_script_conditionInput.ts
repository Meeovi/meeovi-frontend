import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutApp_script_conditionInput } from "../inputs/AppUpdateWithoutApp_script_conditionInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpdateToOneWithWhereWithoutApp_script_conditionInput", {})
export class AppUpdateToOneWithWhereWithoutApp_script_conditionInput {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_script_conditionInput, {
    nullable: false
  })
  data!: AppUpdateWithoutApp_script_conditionInput;
}
