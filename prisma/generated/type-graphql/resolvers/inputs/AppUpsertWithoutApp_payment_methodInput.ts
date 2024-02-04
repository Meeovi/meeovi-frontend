import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_payment_methodInput } from "../inputs/AppCreateWithoutApp_payment_methodInput";
import { AppUpdateWithoutApp_payment_methodInput } from "../inputs/AppUpdateWithoutApp_payment_methodInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpsertWithoutApp_payment_methodInput", {})
export class AppUpsertWithoutApp_payment_methodInput {
  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_payment_methodInput, {
    nullable: false
  })
  update!: AppUpdateWithoutApp_payment_methodInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_payment_methodInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_payment_methodInput;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
