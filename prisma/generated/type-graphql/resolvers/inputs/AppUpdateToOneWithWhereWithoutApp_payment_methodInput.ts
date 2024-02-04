import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutApp_payment_methodInput } from "../inputs/AppUpdateWithoutApp_payment_methodInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpdateToOneWithWhereWithoutApp_payment_methodInput", {})
export class AppUpdateToOneWithWhereWithoutApp_payment_methodInput {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_payment_methodInput, {
    nullable: false
  })
  data!: AppUpdateWithoutApp_payment_methodInput;
}
