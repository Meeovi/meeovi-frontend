import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutApp_payment_methodInput } from "../inputs/AppCreateOrConnectWithoutApp_payment_methodInput";
import { AppCreateWithoutApp_payment_methodInput } from "../inputs/AppCreateWithoutApp_payment_methodInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateNestedOneWithoutApp_payment_methodInput", {})
export class AppCreateNestedOneWithoutApp_payment_methodInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutApp_payment_methodInput, {
    nullable: true
  })
  create?: AppCreateWithoutApp_payment_methodInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutApp_payment_methodInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutApp_payment_methodInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;
}
