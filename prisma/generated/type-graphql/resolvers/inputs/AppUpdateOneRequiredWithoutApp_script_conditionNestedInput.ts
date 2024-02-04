import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutApp_script_conditionInput } from "../inputs/AppCreateOrConnectWithoutApp_script_conditionInput";
import { AppCreateWithoutApp_script_conditionInput } from "../inputs/AppCreateWithoutApp_script_conditionInput";
import { AppUpdateToOneWithWhereWithoutApp_script_conditionInput } from "../inputs/AppUpdateToOneWithWhereWithoutApp_script_conditionInput";
import { AppUpsertWithoutApp_script_conditionInput } from "../inputs/AppUpsertWithoutApp_script_conditionInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateOneRequiredWithoutApp_script_conditionNestedInput", {})
export class AppUpdateOneRequiredWithoutApp_script_conditionNestedInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutApp_script_conditionInput, {
    nullable: true
  })
  create?: AppCreateWithoutApp_script_conditionInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutApp_script_conditionInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutApp_script_conditionInput | undefined;

  @TypeGraphQL.Field(_type => AppUpsertWithoutApp_script_conditionInput, {
    nullable: true
  })
  upsert?: AppUpsertWithoutApp_script_conditionInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateToOneWithWhereWithoutApp_script_conditionInput, {
    nullable: true
  })
  update?: AppUpdateToOneWithWhereWithoutApp_script_conditionInput | undefined;
}
