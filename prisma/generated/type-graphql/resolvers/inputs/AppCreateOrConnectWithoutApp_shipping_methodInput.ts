import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_shipping_methodInput } from "../inputs/AppCreateWithoutApp_shipping_methodInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateOrConnectWithoutApp_shipping_methodInput", {})
export class AppCreateOrConnectWithoutApp_shipping_methodInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_shipping_methodInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_shipping_methodInput;
}
