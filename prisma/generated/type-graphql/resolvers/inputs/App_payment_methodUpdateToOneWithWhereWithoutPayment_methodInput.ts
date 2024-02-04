import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodUpdateWithoutPayment_methodInput } from "../inputs/App_payment_methodUpdateWithoutPayment_methodInput";
import { App_payment_methodWhereInput } from "../inputs/App_payment_methodWhereInput";

@TypeGraphQL.InputType("App_payment_methodUpdateToOneWithWhereWithoutPayment_methodInput", {})
export class App_payment_methodUpdateToOneWithWhereWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => App_payment_methodWhereInput, {
    nullable: true
  })
  where?: App_payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodUpdateWithoutPayment_methodInput, {
    nullable: false
  })
  data!: App_payment_methodUpdateWithoutPayment_methodInput;
}
