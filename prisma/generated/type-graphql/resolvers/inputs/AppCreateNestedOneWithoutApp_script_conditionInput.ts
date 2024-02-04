import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutApp_script_conditionInput } from "../inputs/AppCreateOrConnectWithoutApp_script_conditionInput";
import { AppCreateWithoutApp_script_conditionInput } from "../inputs/AppCreateWithoutApp_script_conditionInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateNestedOneWithoutApp_script_conditionInput", {})
export class AppCreateNestedOneWithoutApp_script_conditionInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutApp_script_conditionInput, {
    nullable: true
  })
  create?: AppCreateWithoutApp_script_conditionInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutApp_script_conditionInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutApp_script_conditionInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;
}
