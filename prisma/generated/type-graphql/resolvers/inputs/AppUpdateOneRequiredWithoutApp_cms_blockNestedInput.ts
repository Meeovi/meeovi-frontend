import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutApp_cms_blockInput } from "../inputs/AppCreateOrConnectWithoutApp_cms_blockInput";
import { AppCreateWithoutApp_cms_blockInput } from "../inputs/AppCreateWithoutApp_cms_blockInput";
import { AppUpdateToOneWithWhereWithoutApp_cms_blockInput } from "../inputs/AppUpdateToOneWithWhereWithoutApp_cms_blockInput";
import { AppUpsertWithoutApp_cms_blockInput } from "../inputs/AppUpsertWithoutApp_cms_blockInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateOneRequiredWithoutApp_cms_blockNestedInput", {})
export class AppUpdateOneRequiredWithoutApp_cms_blockNestedInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutApp_cms_blockInput, {
    nullable: true
  })
  create?: AppCreateWithoutApp_cms_blockInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutApp_cms_blockInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutApp_cms_blockInput | undefined;

  @TypeGraphQL.Field(_type => AppUpsertWithoutApp_cms_blockInput, {
    nullable: true
  })
  upsert?: AppUpsertWithoutApp_cms_blockInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateToOneWithWhereWithoutApp_cms_blockInput, {
    nullable: true
  })
  update?: AppUpdateToOneWithWhereWithoutApp_cms_blockInput | undefined;
}
