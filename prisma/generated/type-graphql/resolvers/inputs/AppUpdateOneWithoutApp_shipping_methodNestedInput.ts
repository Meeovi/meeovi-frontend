import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutApp_shipping_methodInput } from "../inputs/AppCreateOrConnectWithoutApp_shipping_methodInput";
import { AppCreateWithoutApp_shipping_methodInput } from "../inputs/AppCreateWithoutApp_shipping_methodInput";
import { AppUpdateToOneWithWhereWithoutApp_shipping_methodInput } from "../inputs/AppUpdateToOneWithWhereWithoutApp_shipping_methodInput";
import { AppUpsertWithoutApp_shipping_methodInput } from "../inputs/AppUpsertWithoutApp_shipping_methodInput";
import { AppWhereInput } from "../inputs/AppWhereInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateOneWithoutApp_shipping_methodNestedInput", {})
export class AppUpdateOneWithoutApp_shipping_methodNestedInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutApp_shipping_methodInput, {
    nullable: true
  })
  create?: AppCreateWithoutApp_shipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutApp_shipping_methodInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutApp_shipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => AppUpsertWithoutApp_shipping_methodInput, {
    nullable: true
  })
  upsert?: AppUpsertWithoutApp_shipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  disconnect?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  delete?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateToOneWithWhereWithoutApp_shipping_methodInput, {
    nullable: true
  })
  update?: AppUpdateToOneWithWhereWithoutApp_shipping_methodInput | undefined;
}
