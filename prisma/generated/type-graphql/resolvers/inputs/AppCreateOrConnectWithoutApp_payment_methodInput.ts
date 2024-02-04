import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_payment_methodInput } from "../inputs/AppCreateWithoutApp_payment_methodInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateOrConnectWithoutApp_payment_methodInput", {})
export class AppCreateOrConnectWithoutApp_payment_methodInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_payment_methodInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_payment_methodInput;
}
