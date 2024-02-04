import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_shipping_methodInput } from "../inputs/AppCreateWithoutApp_shipping_methodInput";
import { AppUpdateWithoutApp_shipping_methodInput } from "../inputs/AppUpdateWithoutApp_shipping_methodInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpsertWithoutApp_shipping_methodInput", {})
export class AppUpsertWithoutApp_shipping_methodInput {
  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_shipping_methodInput, {
    nullable: false
  })
  update!: AppUpdateWithoutApp_shipping_methodInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_shipping_methodInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_shipping_methodInput;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
