import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodCreateWithoutPayment_methodInput } from "../inputs/App_payment_methodCreateWithoutPayment_methodInput";
import { App_payment_methodWhereUniqueInput } from "../inputs/App_payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_payment_methodCreateOrConnectWithoutPayment_methodInput", {})
export class App_payment_methodCreateOrConnectWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => App_payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: App_payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_payment_methodCreateWithoutPayment_methodInput, {
    nullable: false
  })
  create!: App_payment_methodCreateWithoutPayment_methodInput;
}
