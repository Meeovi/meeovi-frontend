import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodCreateOrConnectWithoutPayment_methodInput } from "../inputs/App_payment_methodCreateOrConnectWithoutPayment_methodInput";
import { App_payment_methodCreateWithoutPayment_methodInput } from "../inputs/App_payment_methodCreateWithoutPayment_methodInput";
import { App_payment_methodUpdateToOneWithWhereWithoutPayment_methodInput } from "../inputs/App_payment_methodUpdateToOneWithWhereWithoutPayment_methodInput";
import { App_payment_methodUpsertWithoutPayment_methodInput } from "../inputs/App_payment_methodUpsertWithoutPayment_methodInput";
import { App_payment_methodWhereInput } from "../inputs/App_payment_methodWhereInput";
import { App_payment_methodWhereUniqueInput } from "../inputs/App_payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_payment_methodUpdateOneWithoutPayment_methodNestedInput", {})
export class App_payment_methodUpdateOneWithoutPayment_methodNestedInput {
  @TypeGraphQL.Field(_type => App_payment_methodCreateWithoutPayment_methodInput, {
    nullable: true
  })
  create?: App_payment_methodCreateWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodCreateOrConnectWithoutPayment_methodInput, {
    nullable: true
  })
  connectOrCreate?: App_payment_methodCreateOrConnectWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodUpsertWithoutPayment_methodInput, {
    nullable: true
  })
  upsert?: App_payment_methodUpsertWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodWhereInput, {
    nullable: true
  })
  disconnect?: App_payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodWhereInput, {
    nullable: true
  })
  delete?: App_payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodWhereUniqueInput, {
    nullable: true
  })
  connect?: App_payment_methodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodUpdateToOneWithWhereWithoutPayment_methodInput, {
    nullable: true
  })
  update?: App_payment_methodUpdateToOneWithWhereWithoutPayment_methodInput | undefined;
}
