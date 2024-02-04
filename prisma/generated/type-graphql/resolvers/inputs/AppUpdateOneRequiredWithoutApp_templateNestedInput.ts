import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutApp_templateInput } from "../inputs/AppCreateOrConnectWithoutApp_templateInput";
import { AppCreateWithoutApp_templateInput } from "../inputs/AppCreateWithoutApp_templateInput";
import { AppUpdateToOneWithWhereWithoutApp_templateInput } from "../inputs/AppUpdateToOneWithWhereWithoutApp_templateInput";
import { AppUpsertWithoutApp_templateInput } from "../inputs/AppUpsertWithoutApp_templateInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateOneRequiredWithoutApp_templateNestedInput", {})
export class AppUpdateOneRequiredWithoutApp_templateNestedInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutApp_templateInput, {
    nullable: true
  })
  create?: AppCreateWithoutApp_templateInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutApp_templateInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutApp_templateInput | undefined;

  @TypeGraphQL.Field(_type => AppUpsertWithoutApp_templateInput, {
    nullable: true
  })
  upsert?: AppUpsertWithoutApp_templateInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateToOneWithWhereWithoutApp_templateInput, {
    nullable: true
  })
  update?: AppUpdateToOneWithWhereWithoutApp_templateInput | undefined;
}
