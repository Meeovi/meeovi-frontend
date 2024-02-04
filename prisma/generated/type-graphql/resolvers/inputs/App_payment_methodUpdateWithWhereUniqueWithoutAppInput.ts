import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodUpdateWithoutAppInput } from "../inputs/App_payment_methodUpdateWithoutAppInput";
import { App_payment_methodWhereUniqueInput } from "../inputs/App_payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_payment_methodUpdateWithWhereUniqueWithoutAppInput", {})
export class App_payment_methodUpdateWithWhereUniqueWithoutAppInput {
  @TypeGraphQL.Field(_type => App_payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: App_payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_payment_methodUpdateWithoutAppInput, {
    nullable: false
  })
  data!: App_payment_methodUpdateWithoutAppInput;
}
