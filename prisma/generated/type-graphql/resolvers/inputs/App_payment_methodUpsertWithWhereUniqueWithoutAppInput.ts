import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodCreateWithoutAppInput } from "../inputs/App_payment_methodCreateWithoutAppInput";
import { App_payment_methodUpdateWithoutAppInput } from "../inputs/App_payment_methodUpdateWithoutAppInput";
import { App_payment_methodWhereUniqueInput } from "../inputs/App_payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_payment_methodUpsertWithWhereUniqueWithoutAppInput", {})
export class App_payment_methodUpsertWithWhereUniqueWithoutAppInput {
  @TypeGraphQL.Field(_type => App_payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: App_payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_payment_methodUpdateWithoutAppInput, {
    nullable: false
  })
  update!: App_payment_methodUpdateWithoutAppInput;

  @TypeGraphQL.Field(_type => App_payment_methodCreateWithoutAppInput, {
    nullable: false
  })
  create!: App_payment_methodCreateWithoutAppInput;
}
