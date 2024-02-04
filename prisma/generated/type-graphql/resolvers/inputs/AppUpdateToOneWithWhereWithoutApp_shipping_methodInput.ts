import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutApp_shipping_methodInput } from "../inputs/AppUpdateWithoutApp_shipping_methodInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpdateToOneWithWhereWithoutApp_shipping_methodInput", {})
export class AppUpdateToOneWithWhereWithoutApp_shipping_methodInput {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_shipping_methodInput, {
    nullable: false
  })
  data!: AppUpdateWithoutApp_shipping_methodInput;
}
