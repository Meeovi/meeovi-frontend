import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutApp_flow_actionInput } from "../inputs/AppCreateOrConnectWithoutApp_flow_actionInput";
import { AppCreateWithoutApp_flow_actionInput } from "../inputs/AppCreateWithoutApp_flow_actionInput";
import { AppUpdateToOneWithWhereWithoutApp_flow_actionInput } from "../inputs/AppUpdateToOneWithWhereWithoutApp_flow_actionInput";
import { AppUpsertWithoutApp_flow_actionInput } from "../inputs/AppUpsertWithoutApp_flow_actionInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateOneRequiredWithoutApp_flow_actionNestedInput", {})
export class AppUpdateOneRequiredWithoutApp_flow_actionNestedInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutApp_flow_actionInput, {
    nullable: true
  })
  create?: AppCreateWithoutApp_flow_actionInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutApp_flow_actionInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutApp_flow_actionInput | undefined;

  @TypeGraphQL.Field(_type => AppUpsertWithoutApp_flow_actionInput, {
    nullable: true
  })
  upsert?: AppUpsertWithoutApp_flow_actionInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateToOneWithWhereWithoutApp_flow_actionInput, {
    nullable: true
  })
  update?: AppUpdateToOneWithWhereWithoutApp_flow_actionInput | undefined;
}
