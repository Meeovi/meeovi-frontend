import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutApp_translationInput } from "../inputs/AppCreateOrConnectWithoutApp_translationInput";
import { AppCreateWithoutApp_translationInput } from "../inputs/AppCreateWithoutApp_translationInput";
import { AppUpdateToOneWithWhereWithoutApp_translationInput } from "../inputs/AppUpdateToOneWithWhereWithoutApp_translationInput";
import { AppUpsertWithoutApp_translationInput } from "../inputs/AppUpsertWithoutApp_translationInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateOneRequiredWithoutApp_translationNestedInput", {})
export class AppUpdateOneRequiredWithoutApp_translationNestedInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutApp_translationInput, {
    nullable: true
  })
  create?: AppCreateWithoutApp_translationInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutApp_translationInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutApp_translationInput | undefined;

  @TypeGraphQL.Field(_type => AppUpsertWithoutApp_translationInput, {
    nullable: true
  })
  upsert?: AppUpsertWithoutApp_translationInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateToOneWithWhereWithoutApp_translationInput, {
    nullable: true
  })
  update?: AppUpdateToOneWithWhereWithoutApp_translationInput | undefined;
}
