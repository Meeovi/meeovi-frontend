import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutApp_action_buttonInput } from "../inputs/AppCreateOrConnectWithoutApp_action_buttonInput";
import { AppCreateWithoutApp_action_buttonInput } from "../inputs/AppCreateWithoutApp_action_buttonInput";
import { AppUpdateToOneWithWhereWithoutApp_action_buttonInput } from "../inputs/AppUpdateToOneWithWhereWithoutApp_action_buttonInput";
import { AppUpsertWithoutApp_action_buttonInput } from "../inputs/AppUpsertWithoutApp_action_buttonInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateOneRequiredWithoutApp_action_buttonNestedInput", {})
export class AppUpdateOneRequiredWithoutApp_action_buttonNestedInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutApp_action_buttonInput, {
    nullable: true
  })
  create?: AppCreateWithoutApp_action_buttonInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutApp_action_buttonInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutApp_action_buttonInput | undefined;

  @TypeGraphQL.Field(_type => AppUpsertWithoutApp_action_buttonInput, {
    nullable: true
  })
  upsert?: AppUpsertWithoutApp_action_buttonInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateToOneWithWhereWithoutApp_action_buttonInput, {
    nullable: true
  })
  update?: AppUpdateToOneWithWhereWithoutApp_action_buttonInput | undefined;
}
