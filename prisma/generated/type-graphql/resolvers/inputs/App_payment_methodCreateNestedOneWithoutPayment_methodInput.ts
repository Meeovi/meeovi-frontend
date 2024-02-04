import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodCreateOrConnectWithoutPayment_methodInput } from "../inputs/App_payment_methodCreateOrConnectWithoutPayment_methodInput";
import { App_payment_methodCreateWithoutPayment_methodInput } from "../inputs/App_payment_methodCreateWithoutPayment_methodInput";
import { App_payment_methodWhereUniqueInput } from "../inputs/App_payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_payment_methodCreateNestedOneWithoutPayment_methodInput", {})
export class App_payment_methodCreateNestedOneWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => App_payment_methodCreateWithoutPayment_methodInput, {
    nullable: true
  })
  create?: App_payment_methodCreateWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodCreateOrConnectWithoutPayment_methodInput, {
    nullable: true
  })
  connectOrCreate?: App_payment_methodCreateOrConnectWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodWhereUniqueInput, {
    nullable: true
  })
  connect?: App_payment_methodWhereUniqueInput | undefined;
}
